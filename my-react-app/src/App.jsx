//Components
import NavBar from "./components/NavBarComponent/NavBarComponent";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

//Styles
import styles from "./App.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className={styles.appContainer}>
      <nav className={styles.navContainer}>
        <NavBar />
      </nav>
      <main className={styles.mainContainer}>
        <ItemListContainer greeting="Aqui se verá mi tienda." />
      </main>
      <footer className={styles.footerContainer}>Footer</footer>
    </div>
  );
};

export default App;
