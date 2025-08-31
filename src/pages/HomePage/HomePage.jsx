import HeroSection from "../../components/HeroSection/HeroSection";
import HomeAboutSection from "../../components/HomeAboutSection/HomeAboutSection";
import Sponsors from "../../components/Sponsors/Sponsors";
import styles from './HomePage.module.css';

export default function HomePage() {
  return (
    <section className={styles.home_body}>
      <HeroSection />
      <HomeAboutSection />
      <Sponsors />
    </section>
  );
}
