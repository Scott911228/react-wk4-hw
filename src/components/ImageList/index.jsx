import { Row, Col } from 'antd'
import styles from './imagelist.module.css'
import images from '../../json/Images.json'

export default function ImageList() {
  return (
    <article className={styles.image__layout}>
      <div className="container">
        <h1>IMAGES</h1>
        <hr className="divider--dark" />
        <Row gutter={[24, 24]}>
          {images.map(data => (
            <Col key={data.id} className={styles.image} sm={{ span: 12 }} lg={{ span: 6 }}>
              <a href="" className={styles.image__link}>
                <img src={data.imagesrc} alt="" className={styles.image__style} />
              </a>
              <p className={styles.image_title}>{data.imageTitle}</p>
            </Col>
          ))}
        </Row>
      </div>
    </article>
  )
}