import Header from '../components/header'
import Footer from '../components/footer'
import ImageList from '../components/ImageList'
import Description from '../components/Descriptions'

export default function Home() {
  return (
    <div className="mainLayout">
      <Header className="layoutHeader" />
      <ImageList className="layoutImages" />
      <Description className="layoutDescription" />
      <Footer className="layoutFooter" />
    </div>
  )
}

