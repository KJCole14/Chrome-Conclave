import React from 'react';
//imprts SM logos from "assets folder"
import Facebook from '../assets/Facebooklogo.png'
import Instagram from '../assets/Instagramlogo.png'
import TikTok from '../assets/TikToklogo.png'
import Twitter from '../assets/Twitterlogo.png'


export default function Footer() {
  return (
    <footer>
      <a href="https://www.facebook.com/"
      ><img
          // calls the imported pictures and puts them where they need to go.
          src={Facebook}
          className="footerlogo"
          alt="facebook logo"
      /></a>

      <a href="https://twitter.com/"
        ><img
          src={Twitter}
          className="footerlogo"
          alt="Twitter logo"
      /></a>

      <a href="https://www.instagram.com/"
        ><img
          src={Instagram}
          className="footerlogo"
          alt="Instagram icon"
      /></a>

      <a href="https://www.tiktok.com/en/"
        ><img src={TikTok} className="footerlogo" alt="TikTok logo"
      /></a>
    </footer>
  )
}
