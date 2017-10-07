import ChoiceBox from "../components/ChoiceBox";
import React from "react";
import { mount } from "enzyme";

test("Choice box calls prop method when box is clicked", () => {
  //given
  const choiceSelectedSpyFn = jest.fn();
  const wrapper = mount(
    <ChoiceBox onChoiceClicked={choiceSelectedSpyFn} word="Test Choice" />
  );
  //when
  const choiceBoxElement = wrapper.find(".ChoiceBox");
  choiceBoxElement.simulate("click");

  //then
  expect(choiceSelectedSpyFn).toBeCalled();
});
