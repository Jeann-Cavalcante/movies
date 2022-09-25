import { GithubLogo, LinkedinLogo } from "phosphor-react";
import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <footer>
      <h5>
        Feito por <span>Jeancavalcante</span> com muito ♥
      </h5>
      <div className={styles.Icons}>
        <LinkedinLogo size={30} />
        <GithubLogo size={30} />
      </div>
    </footer>
  );
};

export default Footer;
