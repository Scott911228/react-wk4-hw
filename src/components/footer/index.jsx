import { Row, Col } from 'antd'
import styles from './footer.module.css'
export default function footer() {
  return(
  <footer className="footer">
    <div className={`${styles.footer__above} py-5`}>
      <div className="container">
        <Row>
        <Col className={styles.footer__description} lg={{span:16}}>          {/* <h5 className={`${styles.footer__description} col-lg-8`}> */}
            臺北市和平東路二段134號，國立臺北教育大學 數位科技設計學系
          </Col>
          <Col className={styles.footer__list} lg={{span: 8}}>
            <li className={styles.footer__item}><a href="" className={styles.footer__link}><i className="fab fa-google-plus-g"></i></a></li>
            <li className={styles.footer__item}><a href="" className={styles.footer__link}><i className="fab fa-facebook-f"></i></a></li>
            <li className={styles.footer__item}><a href="" className={styles.footer__link}><i className="fab fa-linkedin-in"></i></a></li>
          </Col>
        </Row>
      </div>
    </div>

    <div className={styles.footer__below}>
      <div className="container">
        <h6>
          &copy; Copyright All rights reserved.
        </h6>
      </div>
    </div>
  </footer>
  )
}