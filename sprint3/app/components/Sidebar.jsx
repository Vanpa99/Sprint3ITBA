// Sidebar.jsx (migrado)
import Link from "next/link";
import styles from "../modules/Sidebar.module.css";

function Sidebar() {
  return (
    <aside className={styles.contNav}>
      <nav>
        <ul>
          <li>
            <Link href="/">Inicio</Link>
          </li>
          <li>
            <Link href="/cuentas">Cuentas</Link>
          </li>
          <li>
            <Link href="/pagar">Pagar</Link>
          </li>
          <li>
            <Link href="/prestamos">Préstamos</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
