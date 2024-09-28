import styles from "./Heading.module.css";

const Heading = () => {
  return (
    <div className={`${styles.calculator} ${styles.heading}`}>Calculator</div>
  );
};

export default Heading;
