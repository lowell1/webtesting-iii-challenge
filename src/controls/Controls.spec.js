import React from "react";
import Controls from "./Controls";
import {render, fireEvent, act} from "@testing-library/react";

describe("Controls", () => {
    it("defaults to unlocked and open", () => {
        const {getByText} = render(<Controls/>);
        getByText(/Lock Gate/i);
        getByText(/Close Gate/i);
    })
});