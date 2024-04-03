import { useRouter } from "next/router";
import { Head } from "./components/Head";
import { Logo } from "./components/Logo";

export default {
  logo: <Logo />,
  logoLink: "https://hivello.com",
  project: {
    link: "",
  },
  faviconGlyph: "✒️",
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "Hivello - %s",
      };
    }
  },
  head: Head,
  i18n: [],
  footer: {
    text: "Built by Hivello Team.",
  },
  editLink: {
    text: null,
  },
  feedback: {
    content: () => <>Question? Give me feedback →</>,
    labels: "feedback",
    useLink: () => "",
  },
};
