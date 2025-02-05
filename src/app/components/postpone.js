import styles from "../styles/PostPone.module.css";
import Image from "next/image";

const PostponeCard = () => {
  return (
    <div className={styles.card}>
      <div className="w-[50%] flex flex-col gap-6">
        <button className={styles.postpone}>Postpone</button>
        <div className="ml-5">
          <p className={styles.task}>
            Pre exam task: <strong>41</strong> / 94
          </p>

          <div className={styles.progressBar}>
            <div className={styles.progress} style={{ width: "43%" }}></div>
          </div>
        </div>
      </div>
      <div className="w-[50%] flex flex-col  justify-center items-center gap-4">
        <button className={`${styles.export} `}>↪ Export Data</button>
        {/* <div className={styles.footer}> */}
        <div className={`${styles.icons} `}>
          <span>💬</span>
          <span>👥</span>
          <Image
            src="https://picsum.photos/200/100"
            alt="user"
            width={50}
            height={50}
            className={styles.img}
          />
          <Image
            src="https://picsum.photos/200/100"
            alt="user"
            width={50}
            height={50}
            className={styles.img}
          />
          <span className={styles.more}>+35</span>
          <span className={styles.clock}>⏳</span>
        </div>

        {/* </div> */}
      </div>
    </div>
  );
};

export default PostponeCard;
