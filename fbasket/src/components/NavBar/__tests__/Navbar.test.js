import React from "react";

import renderer from "react-test-renderer";

// import { render } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import NavBar from "../NavBar";

import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import toJSON from "enzyme-to-json";
Enzyme.configure({ adapter: new Adapter() });
const { mount } = Enzyme;

describe("<Header />", () => {
  it("render correctly (snapshot)", () => {
    const tab = "products";
    const tree = renderer.create(<NavBar tab={tab} />);
    expect(toJSON(tree)).toMatchSnapshot();
  });

  it("render correctly using Enzyme (snapshot)", () => {
    const tab = "orders";
    const tree = mount(<NavBar tab={tab} />);
    expect(toJSON(tree)).toMatchSnapshot();
  });
});
