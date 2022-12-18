import styles from "styles/postBody.module.css";

const PostBody = ({ children }) => {
  return <div className={styles.stack}>{children}</div>;
};

export default PostBody;
