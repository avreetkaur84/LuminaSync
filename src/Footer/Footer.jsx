import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-700 py-4">
      <div className="container mx-auto flex flex-col justify-between items-center">
        <div className="flex items-center m-3">
          <FaFacebook className="text-white mr-4" />
          <FaInstagram className="text-white mr-4" />
          <FaLinkedin className="text-white mr-4" />
        </div>
        <div className="text-white m-1">&copy; LuminaSync Private Limited</div>
        <div className="text-white m-2">
          <a href="/privacy" className="mr-4">Privacy</a>
          <a href="/terms">Terms</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;