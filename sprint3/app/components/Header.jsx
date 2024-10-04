// Header.jsx (migrado)
import styles from "../modules/Header.module.css";
import Image from "next/image";
// import PropTypes from "prop-types";
import Boton from "./Reutilizables/Boton";
import Logo from "../assets/LogoItPowerBank.png"; // Coloca tu imagen en la carpeta 'public'

function Header({ handleLogout }) {
  return (
    <header className={styles.encabezado}>
      <div className={styles.logo}>
        <Image src={Logo} alt="Logo de la Empresa" />
      </div>
      <h2 className={styles.saludo}>¡Bienvenido!</h2>
      <Boton
        text="Cerrar sesión"
        onClick={handleLogout}
        className={styles.noFlex}
      />
    </header>
  );
}

// Header.propTypes = {
//   handleLogout: PropTypes.func.isRequired,
// };

export default Header;
