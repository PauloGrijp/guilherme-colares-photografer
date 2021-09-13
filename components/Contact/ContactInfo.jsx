import { MdSmartphone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


function ContactInfo() {
  return (
    <div>
       <div className="flex flex-col space-y-6">
                   <div className="inline-flex space-x-2 items-center">
                     <MdSmartphone />
                     <span>+(34) 123 124578</span>
                   </div>
                   <div className="inline-flex space-x-2 items-center">
                     <MdEmail />
                    <span>teste@teste.com</span>
                  </div>
                  <div className="inline-flex space-x-2 items-center">
                    <MdLocationOn />
                    <span>145, Ávila Street, Spain</span>
                  </div>
                </div>
                <div className="fllex space-x-4 text-lg">
                  <a href="#"
                    ><FaFacebook />
                  </a>
                  <a href="#"
                    ><FaTwitter />
                  </a>
                  <a href="#"
                    ><FaLinkedin />
                  </a>
                  <a href="#"
                    ><FaInstagramSquare />
                  </a>

                </div>
    </div>
  )
}

export default ContactInfo;