import React from "react";
import { useTranslation } from "react-i18next";
import "./Banner.scss";

const Banner = ({ ScrollToInfo }) => {
  const { t } = useTranslation();
  return (
    <div className="banner">
      <h1>{t("title1")}</h1>
      <h1>{t("title2")}</h1>
      <button onClick={() => ScrollToInfo()}>{t("buttons.more")}</button>
    </div>
  );
};

export default Banner;
