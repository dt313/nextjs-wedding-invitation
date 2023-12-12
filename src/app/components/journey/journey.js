import classNames from "classnames/bind";
import styles from "./journey.module.scss";
import Image from "./image";
import Story from "./story";
import Preview from "../preview/preview";
const cx = classNames.bind(styles);

const album = [
  {
    imgs: [
      "https://hi.possiblewedding.com/wp-content/uploads/2022/05/vitor-pinto-iqA2-nRO0bQ-unsplash_compressed.jpg",
      "https://hi.possiblewedding.com/wp-content/uploads/2022/05/alvin-mahmudov-VUMdDPNxTsg-unsplash-2.jpg",
    ],
  },
  {
    imgs: [
      "https://hi.possiblewedding.com/wp-content/uploads/2022/05/pablo-heimplatz-OSboZGvoEz4-unsplash-2_compressed.jpg",
      "https://hi.possiblewedding.com/wp-content/uploads/2022/05/khamkeo-vilaysing-OcxlTBbb6SY-unsplash_compressed-1.jpg",
      "https://hi.possiblewedding.com/wp-content/uploads/2022/05/khamkeo-vilaysing-OcxlTBbb6SY-unsplash_compressed-1.jpg",
    ],
  },
  {
    imgs: [
      "https://hi.possiblewedding.com/wp-content/uploads/2022/05/nathan-dumlao-9UDwXxaPxZc-unsplash_compressed-2.jpg",
      "https://hi.possiblewedding.com/wp-content/uploads/2022/10/bride-and-groom-on-in-the-woods-2021-12-14-01-11-54-utc.jpg",
    ],
  },
  {
    imgs: [
      "https://hi.possiblewedding.com/wp-content/uploads/2022/05/marcus-lewis-87DgFV9SOc4-unsplash_compressed.jpg",
      "https://hi.possiblewedding.com/wp-content/uploads/2022/05/chuttersnap-NYqEk7a42yc-unsplash_compressed-1.jpg",
    ],
  },
];

const story = [
  {
    date: "20 Maret 2020",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
  {
    date: "31 Agustus 2020",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
  {
    date: "8 November 2021",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
];

function Journey() {
  return (
    <div className={cx("wrapper")}>
      <h3 className={cx("title")}>Hành trình của chúng tôi</h3>

      <div className={cx("video-block")}>
        <iframe
          className={cx("video")}
          width="1120"
          height="630"
          src="https://www.youtube.com/embed/XHOmBV4js_E"
          title="Video Placeholder"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      {/* <Preview data={album} /> */}

      <div className={cx("album")}>
        {album.map((imgs, index) => {
          return (
            <div className={cx("column")} key={index}>
              {imgs.imgs.map((img, index) => {
                return (
                  <div className={cx("img-block")}>
                    <Image key={index} img={img} />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      <div className={cx("story")}>
        {story.map((sto, index) => {
          return <Story story={sto} key={index} />;
        })}
      </div>
    </div>
  );
}

export default Journey;
