// Footer.jsx (migrado)
import Link from "next/link";
import styles from "../modules/Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© 2024 ITPowerBank. Todos los derechos reservados.</p>
      <nav>
        <ul>
          <li>
            <Link href="#">Política de Privacidad</Link>
          </li>
          <li>
            <Link href="#">Términos y Condiciones</Link>
          </li>
          <li>
            <Link href="#">Contacto</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
