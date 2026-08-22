import { describe, expect, it, vi } from "vitest";
import { searchBox } from "./searchBox";

describe("searchBox", () => {
    it("should create a search box component", () => {
        const component = searchBox(vi.fn());

        expect(component).toBeInstanceOf(HTMLDivElement);
    });

    it("should have search-box class", () => {
        const component = searchBox(vi.fn());

        expect(component.classList.contains("search-box")).toBe(true);
    });

    it("should render a form", () => {
        const component = searchBox(vi.fn());

        const form = component.querySelector("form");

        expect(form).not.toBeNull();
    });

    it("should render a text input", () => {
        const component = searchBox(vi.fn());

        const input = component.querySelector("input");

        expect(input).not.toBeNull();
        expect(input.type).toBe("text");
        expect(input.name).toBe("search-box");
    });

    it("should have the correct placeholder", () => {
        const component = searchBox(vi.fn());

        const input = component.querySelector("input");

        expect(input.placeholder).toBe("search in table");
    });

    it("should render a submit button", () => {
        const component = searchBox(vi.fn());

        const button = component.querySelector("button");

        expect(button).not.toBeNull();
        expect(button.type).toBe("submit");
    });

    it("should call onSearch with the input value", () => {
        const onSearch = vi.fn();

        const component = searchBox(onSearch);

        const input = component.querySelector("input");
        const form = component.querySelector("form");

        input.value = "mohammad";

        form.dispatchEvent(
            new Event("submit", {
                bubbles: true,
                cancelable: true
            })
        );

        expect(onSearch).toHaveBeenCalledWith("mohammad");
    });

    it("should prevent form submission", () => {
        const onSearch = vi.fn();
        const component = searchBox(onSearch);
        const form = component.querySelector("form");

        const event = new Event("submit", {
            bubbles: true,
            cancelable: true
        });

        form.dispatchEvent(event);
        expect(event.defaultPrevented).toBe(true);
    });
});