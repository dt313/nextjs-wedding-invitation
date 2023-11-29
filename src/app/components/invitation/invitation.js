"use client";
import classNames from "classnames/bind";
import styles from "./invitation.module.scss";
import IntroPage from "~/app/components/intro";
import FirstPage from "~/app/components/firstpage";
import SecondPage from "~/app/components/secondpage";
import ThirstPage from "~/app/components/thirstpage";
import FouthPage from "~/app/components/fouthgage";
import Timer from "~/app/components/timer";
import Gift from "../gift/gift";
import Journey from "../journey";
import Final from "../final";
import Footer from "../footer";
import { ImMusic } from "react-icons/im";
import sound from "~/app/static/sound.mp3";
import { useEffect, useRef, useState } from "react";
import { animateScroll as scroll } from "react-scroll";
const cx = classNames.bind(styles);
function Invitation({ name }) {
  const [isOpenMusic, setIsOpenMusic] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef(null);

  const handleOpenAudio = () => {
    if (isOpenMusic === false) {
      setIsOpenMusic(true);
      ref.current.play();
    } else {
      setIsOpenMusic(false);
      ref.current.pause();
    }
  };

  const handleOpenInvitation = () => {
    setIsOpen(true);
    setIsOpenMusic(true);
    if (isOpen === false) {
      setIsOpen(true);
      ref.current.play();
    }
  };

  useEffect(() => {
    if (isOpen == true) {
      let pageHeight = window.innerHeight;
      console.log(pageHeight);
      scroll.scrollTo(pageHeight);
    }
  }, [isOpen]);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("music")} onClick={handleOpenAudio}>
        <ImMusic className={cx("icon", isOpenMusic && "rotate")} />
        <audio ref={ref} src={sound} hidden />
      </div>
      <IntroPage handleOpen={handleOpenInvitation} name={name} />
      {isOpen && (
        <>
          <FirstPage />
          <SecondPage />
          <div className={cx("img-box")}>
            <img
              className={cx("img")}
              src="https://hi.possiblewedding.com/wp-content/uploads/2022/05/joanna-nix-walkup-vgkjJlEj-VQ-unsplash_compressed-1.jpg"
            ></img>
          </div>
          <ThirstPage />
          <FouthPage />
          <Timer />
          <Gift />
          <Journey />
          <Final />
          <Footer />
        </>
      )}
    </div>
  );
}

export default Invitation;
