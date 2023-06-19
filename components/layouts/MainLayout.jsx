import Head from "next/head";

import styles from "./styles/MainLayout.module.css";
import { Header } from "./Header ";
import { Footer } from "./Footer";

export const MainLayout = ({ children }) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>CLICASA</title>
                <meta name="description" content="Home Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <main className={styles.main}>{children}</main>

            <Footer />
        </div>
    );
};
