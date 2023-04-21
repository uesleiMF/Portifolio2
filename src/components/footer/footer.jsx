import "./footer.css";
import { BsMouse } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { TiSocialGithub } from "react-icons/ti";

function Footer() {
  return (
    <div id="footer" className="container footer-container">
      <h1>
        That's all{" "}
        <a href="#home">
          <h2>
            <BsMouse /> - scroll up -
          </h2>
        </a>
      </h1>
     
        <a href="#">
          {" "}
          <FaFacebookF className="social" />
        </a>
        

        <a href="#">
          <TiSocialGithub className="social" />
        </a>
      </div>
    
  );
}
export default Footer;
