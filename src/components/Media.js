import React from 'react'
import "./Media.css"

export default function Media() {
  return (
    <div className="media content">
      <h3 className="section-title">MEDIA</h3>

      <iframe
        title="Arte Minima"
        width="490"
        height="280"
        src="https://www.youtube.com/embed/1PwczYFpS_4"
        style={{marginBottom: "2rem"}}>
      </iframe>

      <iframe
        title="Arte Minima"
        width="490" 
        height="280"
        src="https://www.youtube.com/embed/1uJ-d-oFK6Y"
        style={{marginBottom: "2rem"}}>
      </iframe>

      <iframe
        title="Arte Minima"
        width="490" 
        height="280"
        src="https://www.youtube.com/embed/TN7Zqll-Jx4">
      </iframe>

    </div>
  )
}
