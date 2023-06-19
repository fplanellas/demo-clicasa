import { MainLayout } from "../components/layouts/MainLayout";
import { Landing } from "../components/landing/Landing";
import { ClicasaVentajas } from "../components/clicasa-ventajas/ClicasaVentajas";
import { VenderFacil } from "../components/vender-facil/VenderFacil";
import { LasMejoresCondiciones } from "../components/las-mejores-condiciones/LasMejoresCondiciones";
import { MejoresEmpresas } from "../components/mejores-empresas/MejoresEmpresas";
import breakingBadQuotes from "../api/breakingBadQuotes";

export default function HomePage(props) {
    return (
        <MainLayout>
            <Landing />
            <ClicasaVentajas {...props} />
            <VenderFacil {...props} />
            <LasMejoresCondiciones />
            <MejoresEmpresas />
        </MainLayout>
    );
}

export async function getStaticProps(context) {
    const { data } = await breakingBadQuotes.get("/quotes/5");

    return {
        props: {
            props: {
                quotes: data,
            },
        }, // devolver los props que necesitas
    };
}
