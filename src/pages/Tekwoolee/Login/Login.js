import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.scss";

function Login() {
  const [buttonStyle, setButton] = useState(styles.buttonOff);
  const [buttonOff, setBtnOn] = useState(true);
  const [pwType, setPwType] = useState("password");
  const [curID, setID] = useState("");
  const [curPW, setPW] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (curID.includes("@") && 8 <= curPW.length) {
      console.log("working? PW?");
      setBtnOn(false);
      setButton(styles.buttonOn);
    } else {
      setBtnOn(true);
      setButton(styles.buttonOff);
    }
  }, [curID, curPW]);

  return (
    <section>
      <main className={styles.LoginContainer}>
        <article>
          <div className={styles.sideImageHolder}>
            <div>
              <div>
                <img
                  src="url(/static/images/homepage/home-phones.png/43cc71bb1b43.png)"
                  alt="container"
                />
              </div>
              <div className={styles.imageInside}>
                <img
                  src="https://www.instagram.com/static/images/homepage/screenshot5.jpg/0a2d3016f375.jpg"
                  alt="1"
                />
                <img
                  src="https://www.instagram.com/static/images/homepage/screenshot4.jpg/842fe5699220.jpg"
                  alt="2"
                />
                <img
                  src="https://www.instagram.com/static/images/homepage/screenshot2.jpg/6f03eb85463c.jpg"
                  alt="3"
                />
                <img
                  src="https://www.instagram.com/static/images/homepage/screenshot3.jpg/f0c687aa6ec2.jpg"
                  alt="4"
                />
              </div>
            </div>
          </div>
          <div className={styles.loginSection}>
            <div className={styles.loginBox}>
              <h1>Enstagram</h1>
              <form className={styles.loginInput}>
                <div className={styles.idBox}>
                  <span className={styles.idPlacehd}>
                    ????????????, ????????? ?????? ?????? ?????????
                  </span>
                  <input
                    className={styles.inputId}
                    placeholder=""
                    label="id"
                    value={curID}
                    type="text"
                    onChange={(e) => setID(e.target.value)}
                  />
                </div>
                <div className={styles.pwBox}>
                  <span className={styles.pwPlacehd}>????????????</span>
                  <div className={styles.pwInnerBox}>
                    <input
                      className={styles.inputPW}
                      placeholder=""
                      label="pw"
                      type={pwType}
                      value={curPW}
                      onChange={(e) => setPW(e.target.value)}
                    />
                    <button
                      className={curPW ? styles.pwVisible : styles.pwInvisible}
                      onClick={(e) => {
                        e.preventDefault();
                        pwType === "password"
                          ? setPwType("text")
                          : setPwType("password");
                      }}
                    >
                      ??????????????????
                    </button>
                  </div>
                </div>
                <button
                  className={buttonStyle}
                  disabled={buttonOff}
                  onClick={() => navigate("/feed")}
                >
                  ?????????
                </button>
              </form>
              <div className={styles.splitLine}>
                <hr />
                <h3>??????</h3>
                <hr />
              </div>
              <div className={styles.lowerLink}>
                <div className={styles.snsLogin}>
                  <a href="https://thumbs.dreamstime.com/b/sneer-cat-kitty-168338874.jpg">
                    SNS ???????????? ?????????{" "}
                  </a>
                </div>
                <div className={styles.lostPw}>
                  <a
                    className={styles.lostPw}
                    href="https://slm-assets.secondlife.com/assets/15942901/lightbox/Woofer.jpg?1483240833"
                  >
                    ??????????????? ????????????????
                  </a>
                </div>
              </div>
              <div className={styles.signUp}>
                <p>
                  ????????? ????????????????
                  <a href="https://cdn.hswstatic.com/gif/laughing-bonobo-crop.jpg">
                    ????????????
                  </a>
                </p>
              </div>
            </div>
          </div>
        </article>
        <div></div>
      </main>
      <footer>
        <div className={styles.footerWrapper}>
          <div className={styles.footerUpper}>
            <div className={styles.upperFirstRow}>
              <div>Engta</div>
              <div>??????</div>
              <div>?????????</div>
              <div>?????? ??????</div>
              <div>?????????</div>
              <div>API</div>
              <div>??????????????????</div>
              <div>??????</div>
              <div>?????? ??????</div>
              <div>????????????</div>
              <div>??????</div>
              <div>Enstagram Lite</div>
            </div>
            <div className={styles.footerLower}>
              <div className={styles.lowerFirstRow}>
                <div>??????</div>
                <div>?????????</div>
                <div>??? ??? ??????</div>
                <div>??????</div>
                <div>?????? ??????</div>
              </div>
              <div className={styles.lowerSecondRow}>
                <select name={styles.language}>
                  <option value="?????????">?????????</option>
                  <option value="English">English</option>
                  <option value="Mang">Mang</option>
                </select>
                <div>?? 2022 Enstagram from Engta</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default Login;
