import styles from "./ItemListContainer.module.css";

// eslint-disable-next-line react/prop-types
const ItemListContainer = ({ greeting }) => {
    return <div className={styles.greetingStyles}>{greeting}</div>;
};

export default ItemListContainer;