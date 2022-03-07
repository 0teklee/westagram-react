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
                    전화번호, 사용자 이름 또는 이메일
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
                  <span className={styles.pwPlacehd}>비밀번호</span>
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
                      비밀번호보기
                    </button>
                  </div>
                </div>
                <button
                  className={buttonStyle}
                  disabled={buttonOff}
                  onClick={() => navigate("/feed")}
                >
                  로그인
                </button>
              </form>
              <div className={styles.splitLine}>
                <hr />
                <h3>또는</h3>
                <hr />
              </div>
              <div className={styles.lowerLink}>
                <div className={styles.snsLogin}>
                  <a href="https://thumbs.dreamstime.com/b/sneer-cat-kitty-168338874.jpg">
                    SNS 계정으로 로그인{" "}
                  </a>
                </div>
                <div className={styles.lostPw}>
                  <a
                    className={styles.lostPw}
                    href="https://slm-assets.secondlife.com/assets/15942901/lightbox/Woofer.jpg?1483240833"
                  >
                    비밀번호를 잊으셨나요?
                  </a>
                </div>
              </div>
              <div className={styles.signUp}>
                <p>
                  계정이 없으신가요?
                  <a href="https://cdn.hswstatic.com/gif/laughing-bonobo-crop.jpg">
                    가입하기
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
              <div>소개</div>
              <div>블로그</div>
              <div>채용 정보</div>
              <div>도움말</div>
              <div>API</div>
              <div>개인정보방침</div>
              <div>약관</div>
              <div>인기 계정</div>
              <div>해시태그</div>
              <div>위치</div>
              <div>Enstagram Lite</div>
            </div>
            <div className={styles.footerLower}>
              <div className={styles.lowerFirstRow}>
                <div>댄스</div>
                <div>식음료</div>
                <div>집 및 정원</div>
                <div>음악</div>
                <div>시각 예술</div>
              </div>
              <div className={styles.lowerSecondRow}>
                <select name={styles.language}>
                  <option value="한국어">한국어</option>
                  <option value="English">English</option>
                  <option value="Mang">Mang</option>
                </select>
                <div>© 2022 Enstagram from Engta</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default Login;
