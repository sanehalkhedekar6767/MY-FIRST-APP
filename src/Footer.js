import "./Footer.css";
import { Component, React } from "react";

class footer extends Component {
  render() {
    return (
      <div class="footer">
        <b>Follow me on:</b>
  <a href="https://www.instagram.com/" target="_blank"><i class="fa fa-instagram footer_icon fa-lg"
      aria-hidden="true"></i></a>
  <a href="https://www.linkedin.com/in/sanehal-bharat-khedekar-252750256/" target="_blank"> <i
      class="fa fa-linkedin footer_icon fa-lg" aria-hidden="true"></i></a>
  <a href="https://www.facebook.com/" target="_blank"> <i class="fa fa-facebook-square footer_icon fa-lg"
      aria-hidden="true"></i></a>
      </div>
    );
  }
}
export default footer;
