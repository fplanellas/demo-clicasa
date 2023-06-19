import { render, screen } from "@testing-library/react";
import { Landing } from "../components/landing/Landing";
import "@testing-library/jest-dom";

test("Renderiza el componente Landing correctamente", () => {
    render(<Landing />);

    // Comprueba que el título se renderiza
    const title = screen.getByText(/Vende tu casa/i);
    expect(title).toBeInTheDocument();

    // Comprueba que el botón de "Vender mi inmueble" se renderiza
    const button = screen.getByRole("button", { name: /Vender mi inmueble/i });
    expect(button).toBeInTheDocument();

    // Comprueba que el texto de "Compramos tu casa directamente" se renderiza
    const text = screen.getByText(/Compramos tu casa directamente/i);
    expect(text).toBeInTheDocument();

    // Comprueba que el texto de "Ver vídeo" se renderiza
    const videoText = screen.getByText(/Ver vídeo/i);
    expect(videoText).toBeInTheDocument();

    // Comprueba que el input se renderiza
    const input = screen.getByPlaceholderText(
        /Introduce la dirección de tu casa o piso/i
    );
    expect(input).toBeInTheDocument();
});
