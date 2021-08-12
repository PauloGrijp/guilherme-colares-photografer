import { Image } from "react-bootstrap"

function AboutImage() {
  return (
    <div className="my-3 text-center mx-auto">
      <Image
        src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="My photo"
        className="shadow w-100"
        style={{maxWidth:350}}
      />
    </div>  
  )
}

export default AboutImage
