import { Carousel, Image } from "react-bootstrap"


function index() {
  return (
    <Carousel>
      <Carousel.Item>
        <Image
          className="d-block w-100 vh-100"
          src="https://s1.1zoom.me/b5050/61/New_Zealand_Scenery_Sea_443740_2560x1440.jpg"
          alt="First Image"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100 vh-100"
          src="https://s1.1zoom.me/b5050/61/New_Zealand_Scenery_Sea_443740_2560x1440.jpg"
          alt="First Image"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100 vh-100"
          src="https://s1.1zoom.me/b5050/61/New_Zealand_Scenery_Sea_443740_2560x1440.jpg"
          alt="First Image"

        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100 vh-100"
          src="https://s1.1zoom.me/b5050/61/New_Zealand_Scenery_Sea_443740_2560x1440.jpg"
          alt="First Image"

        />
      </Carousel.Item>    
    </Carousel>    
  )
}

export default index
