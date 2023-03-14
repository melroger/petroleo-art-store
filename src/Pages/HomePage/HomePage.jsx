import "./HomePage.css"
import HeroText from '../../Components/HeroText/HeroText'
import Video from '../../Components/Video'
import ItemListContainer from "../../Containers/ItemListContainer/ItemListContainer"
import img from '../../assets/img/bauhaus-chair.jpg'; 
import herologo from '../../assets/img/hero-logo.svg'; 
import FiltersBar from "../../Components/FiltersBar/FiltersBar";


const HomePage = () => {
  return (
    <>
      <section className='hero'>
        <div className='wrapper'>
          <div className='hero-text'>
            <img className='chair-hero'  src={img} />
            <HeroText greeting= {"Los colores son las connotaciones de nuestra subjetividad al apreciarlos."}/>
          </div>
          <img className='hero-logo' src={herologo} />
        </div>
        <Video />
      </section>

      <section className="home-section">
        <div className='wrapper'>
          <h2>Lorem ipsum dolor sit amet, consectetuer </h2>
        </div>
      </section>
      <FiltersBar />

      <ItemListContainer />

    </>

  )
}

export default HomePage