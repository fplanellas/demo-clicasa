import { render } from "@testing-library/react";
import { ClicasaVentajas } from "../components/clicasa-ventajas/ClicasaVentajas";

describe("ClicasaVentajas component", () => {
    it("should render without crashing", () => {
        const quotes = [{ quote: "Test quote", author: "Test author" }];
        render(<ClicasaVentajas props={{ quotes }} />);
    });

    it("should render quotes correctly", () => {
        const quotes = [{ quote: "Test quote", author: "Test author" }];
        const { getAllByText, getAllByTestId } = render(
            <ClicasaVentajas props={{ quotes }} />
        );

        expect(getAllByTestId(/quote-/i)).not.toHaveLength(0);
        expect(getAllByText(/Test author/i)).not.toHaveLength(0);
    });

    it("should render the correct number of quotes", () => {
        const quotes = [
            { quote: "Test quote 1", author: "Test author 1" },
            { quote: "Test quote 2", author: "Test author 2" },
        ];
        const { getAllByText, getAllByTestId } = render(
            <ClicasaVentajas props={{ quotes }} />
        );

        expect(getAllByTestId(/quote-/i)).not.toHaveLength(0);
        expect(getAllByText(/Test quote/i)).not.toHaveLength(0);
        expect(getAllByText(/Test author/i)).not.toHaveLength(0);
    });
});
