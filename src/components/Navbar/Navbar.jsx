import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  const [ showNavBar, setShowNavBar ] = useState([ true ]);
  const [ lastScrollY, setLastScrollY ] = useState(0);

  useEffect(() => {

    const handleScroll = () => {

      if( window.scrollY > lastScrollY ){

        setShowNavBar( false );

      }else{

        setShowNavBar( true );

      }

      setLastScrollY( window.scrollY );

    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

  }, [ lastScrollY ])

  return (
    <nav className={`${styles.navbar} ${!showNavBar ? styles.navbar_hidden : ""}`}>
      <img
        src="/Logo_SODAL-Photoroom.webp"
        alt="Logo SODAL"
        className={styles.nav_logo}
      />
      <div className={styles.nav_links}>
        <NavLink to="/" className={({ isActive }) => isActive ? styles.activeLink : '' } >INÍCIO</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? styles.activeLink : '' } >SOBRE</NavLink>
        <NavLink to="/donations" className={({ isActive }) => isActive ? styles.activeLink : '' } >DOAÇÕES</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? styles.activeLink : '' } >FALE CONOSCO</NavLink>
        <NavLink to="/ranking" className={({ isActive }) => isActive ? styles.activeLink : '' } >RANKING</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;