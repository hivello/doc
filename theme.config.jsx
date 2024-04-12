import { useRouter } from "next/router";
import { Head } from "./components/Head";
import { Logo } from "./components/Logo";

export default {
  logo: <Logo />,
  logoLink: "https://docs.hivello.io",
  project: {
    link: "https://github.com/hivello/doc",
  },
  docsRepositoryBase: "https://github.com/hivello/doc",
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
    content: "Question? Give us feedback →",
    labels: "feedback",
  },
  toc: {
    backToTop: true,
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === "separator") {
        return <span className="cursor-default">{title}</span>;
      }
      return <>{title}</>;
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  primaryHue: 150,
};
