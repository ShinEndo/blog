import Container from "./Container";
import Logo from "./Logo";
import Nav from "./Nav";
import styles from "styles/header.module.css";

const Header = () => {
  return (
    <header>
      <Container large>
        <div className={styles.flexContainer}>
          <Logo boxOn />
          <Nav />
        </div>
      </Container>
    </header>
  );
};

export default Header;
