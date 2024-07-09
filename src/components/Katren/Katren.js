import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Katren.css";
import { faCalendar, faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faInstagram,
  faSquareBehance,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faBasketball } from "@fortawesome/free-solid-svg-icons";
import img1 from "../../assets/katren/img-1.jpeg";
import img2 from "../../assets/katren/img-2.jpeg";
import img3 from "../../assets/katren/img-3.jpeg";
import img4 from "../../assets/katren/img-4.jpeg";
import img5 from "../../assets/katren/img-5.jpeg";
import img6 from "../../assets/katren/img-6.jpeg";
import img7 from "../../assets/katren/img-7.jpeg";
import img8 from "../../assets/katren/img-8.jpeg";
import img9 from "../../assets/katren/img-9.jpeg";
import img10 from "../../assets/katren/img-10.jpeg";

function Katren() {
  return (
    <div className="body">
      <h2 id="title1"> Our Latest Blogs</h2>
      <div className="container">
        <div className="cards">
          <div className="card">
            <div className="card-img">
              <a href="https://www.google.com">
                <img src={img1} alt="" />
              </a>
            </div>
            <div className="card-title">
              <p>The Best CMS Solutions</p>
              <div className="card-title-admin">
                <span className="admin">
                  <FontAwesomeIcon icon={faUser} color="black" />
                  <span>&#160;By:Admin</span>
                </span>
                <span className="date">
                  <FontAwesomeIcon
                    style={{ color: "green" }}
                    icon={faCalendar}
                  />
                  <span></span>&#160;12 Febr/uary 2023
                </span>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-img">
              <a href="https://www.google.com">
                <img src={img2} alt="" />
              </a>
            </div>
            <div className="card-title">
              <p>The Best CMS Solutions</p>
              <div className="card-title-admin">
                <span className="admin">
                  <FontAwesomeIcon icon={faUser} color="black" />
                  <span>&#160;By:Admin</span>
                </span>
                <span className="date">
                  <FontAwesomeIcon
                    style={{ color: "green" }}
                    icon={faCalendar}
                  />
                  <span></span>&#160;12 Febr/uary 2023
                </span>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-img">
              <a href="https://www.google.com">
                <img src={img3} alt="" />
              </a>
            </div>
            <div className="card-title">
              <p>The Best CMS Solutions</p>
              <div className="card-title-admin">
                <span className="admin">
                  <FontAwesomeIcon icon={faUser} color="black" />
                  <span>&#160;By:Admin</span>
                </span>
                <span className="date">
                  <FontAwesomeIcon
                    style={{ color: "green" }}
                    icon={faCalendar}
                  />
                  <span></span>&#160;12 Febr/uary 2023
                </span>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-img">
              <a href="https://www.google.com">
                <img src={img4} alt="" />
              </a>
            </div>
            <div className="card-title">
              <p>The Best CMS Solutions</p>
              <div className="card-title-admin">
                <span className="admin">
                  <FontAwesomeIcon icon={faUser} color="black" />
                  <span>&#160;By:Admin</span>
                </span>
                <span className="date">
                  <FontAwesomeIcon
                    style={{ color: "green" }}
                    icon={faCalendar}
                  />
                  <span></span>&#160;12 Febr/uary 2023
                </span>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-img">
              <a href="https://www.google.com">
                <img src={img5} alt="" />
              </a>
            </div>
            <div className="card-title">
              <p>The Best CMS Solutions</p>
              <div className="card-title-admin">
                <span className="admin">
                  <FontAwesomeIcon icon={faUser} color="black" />
                  <span>&#160;By:Admin</span>
                </span>
                <span className="date">
                  <FontAwesomeIcon
                    style={{ color: "green" }}
                    icon={faCalendar}
                  />
                  <span></span>&#160;12 Febr/uary 2023
                </span>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-img">
              <a href="https://www.google.com">
                <img src={img6} alt="" />
              </a>
            </div>
            <div className="card-title">
              <p>The Best CMS Solutions </p>
              <div className="card-title-admin">
                <span className="admin">
                  <FontAwesomeIcon icon={faUser} color="black" />
                  <span>&#160;By:Admin</span>
                </span>
                <span className="date">
                  <FontAwesomeIcon
                    style={{ color: "green" }}
                    icon={faCalendar}
                  />
                  <span></span>&#160;15 Febr/uary 2023
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="alyt7t">
        <div className="title2">
          <span>
            <strong>Subscribe Now to Our Newsletter </strong> <br />
            Our Help To Make It Reality
            <input type="email" placeholder="Your email address" />
            <button className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
              >
                <path d="M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376V479.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z" />
              </svg>
            </button>
          </span>
          <button className="join">Join Us</button>
          <hr />
        </div>

        <div className="raghy">
          <p id="h1">CMS</p>
          <p id="h2">agency</p>
          <p id="h3">
            Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
            Industry.Lorem Ipsum Has Been The Industry's Standard{" "}
          </p>
          <FontAwesomeIcon icon={faTwitter} style={{ color: "red" }} />
          &emsp;&nbsp;
          <FontAwesomeIcon icon={faSquareBehance} style={{ color: "red" }} />
          &emsp;&nbsp;
          <FontAwesomeIcon icon={faBasketball} style={{ color: "red" }} />
          &emsp;&nbsp;
          <FontAwesomeIcon icon={faInstagram} style={{ color: "red" }} />
          <br />
          <div className="sor">
            <span>
              <img src={img7} alt="hi" />
            </span>
            <span>
              <img src={img8} alt="hi" />
            </span>
            <span>
              <img src={img9} alt="hi" />
            </span>
            <span>
              <img src={img10} alt="hi" />
            </span>
          </div>
        </div>

        <div className="list1">
          <ul>
            <li>HELP & INFORMATION</li>
            <li>About Us</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Products Return</li>
            <li>Wholesale Policy</li>
          </ul>
        </div>
        <div className="list2">
          <ul>
            <li>ABOUT US</li>
            <li>Pagination</li>
            <li>Terms & Conditions</li>
            <li>Contact</li>
            <li>Accessories</li>
            <li>Term Of Use</li>
          </ul>
        </div>

        <div className="list3">
          <li>CATEGORIES</li>
          <li>Help Center</li>
          <li>Address Store</li>
          <li>Privacy Policy</li>
          <li>Receivers & Amplifiers</li>
          <li>Clothing</li>
        </div>
      </div>
    </div>
  );
}

export default Katren;
