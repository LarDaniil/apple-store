import React from "react";

import { Data } from "../../App";
import { StarRating } from "./StarRating";

import cross from "./images/cross.svg";
import flag from "./images/flag.svg";

import styles from "./reviewCreationPage.module.scss";

export function ReviewCreationPage() {
  const {
    leaveReview,
    setLeaveReview,
    setReviews,
    numberStars,
    setNumberStars,
  } = React.useContext(Data);
  const [counter, setCounter] = React.useState(0);
  const [valueTextarea, setValueTextarea] = React.useState("");
  const [checkbox, setCheckbox] = React.useState(false);
  const [clickBtn, setClickBtn] = React.useState(true);
  const [valueName, setValueName] = React.useState("");
  const [valueEmail, setValuemail] = React.useState("");

  const date = new Date();
  const month = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ];
  const dateReviewCreated =
    date.getDate() + " " + month[date.getMonth()] + " " + date.getFullYear();

  function onChangeTextarea(event) {
    setValueTextarea((value) => (value = event.target.value));
    setCounter((counter) => (counter = event.target.value.length));
  }

  function onClickInputName(event) {
    setValueName((value) => (value = event.target.value));
  }

  function onClickInputEmail(event) {
    setValuemail((value) => (value = event.target.value));
  }

  function onClickSend() {
    if (
      valueName.length === 0 ||
      valueEmail.length === 0 ||
      numberStars === 0
    ) {
      setClickBtn(false);
      return;
    }

    setLeaveReview(false);
    setClickBtn(true);
    setValueName("");
    setValuemail("");
    setValueTextarea("");
    setCheckbox(false);
    setReviews((reviews) => [
      ...reviews,
      {
        id: reviews.length + 1,
        name: valueName,
        text: valueTextarea,
        date: dateReviewCreated,
        star: numberStars,
      },
    ]);
    setNumberStars(0);
    setCounter(0);
  }

  function exit() {
    setLeaveReview(false);
    setCheckbox(false);
    setNumberStars(0);
    setClickBtn(true);
  }

  return (
    <div className={leaveReview ? styles.leaveReview : styles.hiddenPage}>
      <div className={styles.main} onClick={(el) => el.stopPropagation()}>
        <img
          className={styles.cross}
          src={cross}
          alt="cross"
          onClick={() => exit()}
        />
        <div className={styles.info}>
          <h3>Мой отзыв</h3>
          <div className={styles.infoRating}>
            {numberStars === 0 && !clickBtn ? (
              <p className={styles.infoRatingTextError}>Оцените товар: </p>
            ) : (
              <p className={styles.infoRatingText}>Оцените товар: </p>
            )}
            <StarRating />
          </div>
        </div>
        <div className={styles.inputs}>
          {valueName.length === 0 && !clickBtn ? (
            <div>
              <input
                style={{ border: "1px solid red" }}
                type="text"
                placeholder="Имя"
                value={valueName}
                onChange={(event) => onClickInputName(event)}
              />
              <p className={styles.error}>Вы забыли указать имя</p>
            </div>
          ) : (
            <div>
              <input
                type="text"
                placeholder="Имя"
                value={valueName}
                onChange={(event) => onClickInputName(event)}
              />
            </div>
          )}

          {valueEmail.length === 0 && !clickBtn ? (
            <div className={styles.inputsEmail}>
              <input
                style={{ border: "1px solid red" }}
                type="text"
                placeholder="Email"
                value={valueEmail}
                onChange={(event) => onClickInputEmail(event)}
              />
              <p className={styles.error}>Вы забыли указать эл. почту</p>
            </div>
          ) : (
            <div className={styles.inputsEmail}>
              <input
                type="text"
                placeholder="Email"
                value={valueEmail}
                onChange={(event) => onClickInputEmail(event)}
              />
            </div>
          )}
        </div>

        <div className={styles.review}>
          <div>
            <textarea
              placeholder="Пожалуйста, оставьте отзыв"
              maxLength="500"
              value={valueTextarea}
              onChange={(event) => onChangeTextarea(event)}
            ></textarea>
          </div>
          <p className={styles.counter}>
            {counter} <span>/</span>
            <span>500</span>
          </p>
        </div>
        <div className={styles.checkboxs}>
          <div
            className={checkbox ? styles.checkboxActive : styles.checkbox}
            onClick={() => setCheckbox((checkbox) => !checkbox)}
          >
            {checkbox ? <img src={flag} alt="flag" /> : ""}
          </div>
          <p>Я соглашаюсь с условиями обработки персональных данных</p>
        </div>
        <div className={styles.buttons}>
          {checkbox ? (
            <button className={styles.buttonOn} onClick={() => onClickSend()}>
              Отправить
            </button>
          ) : (
            <button className={styles.buttonOff}>Отправить</button>
          )}
        </div>
      </div>
    </div>
  );
}
