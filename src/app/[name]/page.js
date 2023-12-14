import classNames from "classnames/bind";
import styles from "./page.module.scss";

import Invitation from "~/app/components/invitation";

const cx = classNames.bind(styles);
export async function generateMetadata({ params, searchParams }) {
  const name = decodeURIComponent(params.name) || "You";
  return {
    title: `Thiệp cưới của Linh và Đức | Mời ${name}`,
    openGraph: {
      images: [
        "https://hi.possiblewedding.com/wp-content/uploads/2022/05/cody-black-VDb0wxbfG6k-unsplash_compressed-1.jpg",
      ],
    },
  };
}
function Main({ params }) {
  const name = decodeURIComponent(params.name) || "You";

  return (
    <div className={cx("wrapper")}>
      <Invitation name={name} />
    </div>
  );
}

export default Main;
