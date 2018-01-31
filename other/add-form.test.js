import React from 'react';
import {shallow, mount} from 'enzyme';

import AddForm from './add-form';

describe('<AddForm />', () => {
//smoke test
    it('Renders without crashing', () => {
        shallow(<AddForm />);
    });
//the first test shows how you can make assertions about DOM elements
//output by your component
//wrapper has a similar API to jQuery for traversing
//and manipulating the output
//use the hasClass method to check that the root element
//output by AddForm has the class add-button
    it('Renders the add button initially', () => {
        const wrapper = shallow(<AddForm />);
        expect(wrapper.hasClass('add-button')).toEqual(true);
    });
//The second test shows one of the ways to manipulate the
//component's output, using .instance, which allows us to access instance
//methods on the component. Calling .instance returns the instance of
//the React component. We use this to call the setEditing method, which
//updates the state of the component. When we call a method which
//updates the state, Enzyme won't automatically rerender the component.
//To make sure it rerenders we call the .update() method. Then we can
// make assertions about its modified output. Here, we ensure that
//the root element has changed from the <div> with class add-button
//to the <form> with class add-form.
    it('Should render the add form when editing', () => {
        const wrapper = shallow(<AddForm />);
        wrapper.instance().setEditing(true);
        wrapper.update();
        expect(wrapper.hasClass('add-form')).toEqual(true);
    });
//As well as directly manipulating elements, you can simulate DOM events using
//the simulate method to ensure that your component responds correctly to user
//interactions. Below, we simulate a click on the add button, and then
//use the state method to check that the editing property of the component's
//state has been set to true. Note that Enzyme automatically checks for updates
//after simulating an event, so we don't need to call .update() here.
    it('Should switch to editing when the add button is clicked', () => {
        const wrapper = shallow(<AddForm />);
        wrapper.simulate('click');
        expect(wrapper.state('editing')).toEqual(true);
    });
//full DOM rendering
// Both tests start by using the jest.fn method to make a spy. Spies are small
//functions that keep a record of each time they have been called. They are useful
//for testing callback functions. In this case, we use a spy to make sure that
//the component's onAdd callback is called correctly when the form is submitted.
    it('Should fire the onAdd callback when the form is submitted', () => {
        const callback = jest.fn(); //spy
        const wrapper = mount(<AddForm onAdd={callback} />); //render the component
        const value = 'Foobar';
        wrapper.instance().setEditing(true); //setEditing method is called so the form is rendered
        wrapper.update();
        wrapper.find('input[type="text"]').instance().value = value; //find the text input and set its value
        wrapper.simulate('submit'); //check whether the spy has been called, depending on if the text input was filled in
        expect(callback).toHaveBeenCalledWith(value);
    });
//full DOM rendering
//
    it('Should not fire onAdd if the input is empty', () => {
        const callback = jest.fn();
        const wrapper = mount(<AddForm onAdd={callback} />);
        wrapper.instance().setEditing(true);
        wrapper.simulate('submit');
        expect(callback).not.toHaveBeenCalled();
    });
});
