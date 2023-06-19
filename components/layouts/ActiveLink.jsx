import { useRouter } from "next/router";

import Link from "next/link";

const style = {
    borderBottom: "3px solid #008bcf",
};

export const ActiveLink = ({ text, href }) => {
    const { asPath } = useRouter();

    return (
        <Link href={href} passHref legacyBehavior>
            <a style={asPath === href ? style : null}>{text}</a>
        </Link>
    );
};
