import { GithubLogo, LinkedinLogo, Smiley, WhatsappLogo } from "phosphor-react";

import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <footer>
      <h5>
        Feito por{" "}
        <a
          className={styles.Nome}
          target="_blank"
          href="https://www.linkedin.com/in/jean-cavalcante-296245149/"
        >
          Jeancavalcante
        </a>{" "}
      </h5>
      <div className={styles.Icons}>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/jean-cavalcante-296245149/"
        >
          <LinkedinLogo size={50} />
        </a>
        <a target="_blank" href="https://github.com/Jeann-Cavalcante">
          <GithubLogo size={50} />
        </a>
        <a
          target="_blank"
          href=" https://api.whatsapp.com/send?phone=5511995985952&amp;text=Olá!"
        >
          <WhatsappLogo size={52} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
