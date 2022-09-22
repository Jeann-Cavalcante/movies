import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

const NotFound = () => {
  return (
    <div className={styles.Container}>
      <h3>Pagina não encontrada :(</h3>
      <h1>404</h1>

      <Link to="/">Voltar para o inicio</Link>
    </div>
  );
};

export default NotFound;
