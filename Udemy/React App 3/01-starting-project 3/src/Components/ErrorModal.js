import styles from "./ErrorModule.module.css";

function ErrorModule(props) {


  function confirmButton() {
    props.onConfirm(false);
  };

  return (
    <div>
      <div className={styles.backdrop} />
      <div className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.newUser__action}>
          <button
            className={styles.confirmErrorButton}
            type="button"
            onClick={confirmButton}>
            Confirm
          </button>
        </footer>
      </div>
    </div>
  );
}

export default ErrorModule;
