import React from 'react'
import "./Contact.css"

export default function Contact() {
  return (
    <div className="contact content">
      <h3 className="section-title">CONTACT</h3>
      <div className="contact__contacts">
        <p>musicusminusculus@gmail.com</p>
        <p>Pedro Sousa Silva +351 939 854 832</p>
        <p>Rita Tavares +351 912 963 642</p>
        < br/>
        < br/>
        <p style={{fontSize: "1rem"}}>for any issues related to this website, write to:</p>
        <p style={{fontSize: "1rem"}}>ricardoleitaopedro@gmail.com</p>
      </div>
    </div>
  )
}
