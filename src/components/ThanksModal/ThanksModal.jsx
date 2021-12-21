import React from "react";
import { useTranslation } from "react-i18next";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { useStore } from "../../store/storeHOC";
import "./ThanksModal.scss";

const ThanksModal = ({ open, setOpen }) => {
  const { mainStore } = useStore();
  const { t } = useTranslation();

  const onSubmit = () => {
    setOpen(false);
    mainStore.isSavedClose();
  };

  return (
    <Modal open={open} onClose={() => setOpen(false)} center>
      <div className="modal-thanks-bask">
        <h2>{t("thanks.title")}</h2>
        <p>{t("thanks.description")}</p>
        <button onClick={onSubmit}>{t("buttons.close")}</button>
      </div>
    </Modal>
  );
};

export default ThanksModal;
