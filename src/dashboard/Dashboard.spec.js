import React from "react";
import Dashboard from "./Dashboard";
import renderer from "react-test-renderer";

describe("Dashboard", () => {
    it("shows the controls and display", () => {
        const tree = renderer.create(<Dashboard/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});