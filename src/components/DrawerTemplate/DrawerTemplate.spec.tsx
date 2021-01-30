import { RenderResult } from "@testing-library/react";
import * as React from "react";

import DrawerTemplate from "@/components/DrawerTemplate/DrawerTemplate";

import { render } from "../../../test-utils";

let documentBody: RenderResult;

describe("<DrawerTemplate {...props}/>", () => {
    test("renders in open state", () => {
        const props = {
            header: "Cart Drawer",
            footer: "Cart Footer",
            isOpen: true,
            onClose: jest.fn(),
            overlay: true,
        };

        documentBody = render(
            <DrawerTemplate {...props}>
                <main>
                    child elements
                </main>
            </DrawerTemplate>
            , null);

        expect(documentBody.getByRole("dialog")).toBeInTheDocument();
        expect(documentBody.getByRole("banner")).toHaveTextContent(/cart drawer/i);
        expect(documentBody.getByRole("main")).toHaveTextContent(/child elements/i);
        expect(documentBody.getByRole("contentinfo")).toHaveTextContent(/cart footer/i);
    });

    test("not in the DOM initially with isOpen = false", () => {
        const props = {
            header: "Cart Drawer",
            footer: "Cart Footer",
            isOpen: false,
            onClose: jest.fn(),
            overlay: true,
        };

        documentBody = render(
            <DrawerTemplate {...props}>
                <main>
                    child elements
                </main>
            </DrawerTemplate>
            , null);
            
            expect(documentBody.queryByRole("dialog")).not.toBeInTheDocument();
            expect(documentBody.queryByRole("heading")).not.toBeInTheDocument();
            expect(documentBody.queryByRole("main")).not.toBeInTheDocument();
            expect(documentBody.queryByText(/cart footer/i)).not.toBeInTheDocument();
    });
});