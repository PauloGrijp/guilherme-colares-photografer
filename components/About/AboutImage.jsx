import { Image } from "react-bootstrap"

function AboutImage() {
  return (
    <div className="text-center mx-5 float-lg-end float-md-none mb-lg-1 mb-sm-3">
      <Image
        src="../image/IMG_9055.jpg"
        alt="My photo"
        className="shadow-lg w-100"
        style={{maxWidth:500}}
      />
      {/* <img src="" alt="" /> */}
    </div>
  
  )
}

export default AboutImage
