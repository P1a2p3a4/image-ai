import React from 'react'
//import { download } from "../assets"
import { downloadImage } from "../utils/index"

const Card = ({_id, name, prompt, photo}) => {
  return (
    <div>
      <img src={photo} alt={prompt} />
      <div>
        <p>{prompt}</p>
        <div>
          <div>
            <div>
              {name[0]}
            </div>
            <p>{name}</p>
          </div>
          <button type='button' onClick={()=>downloadImage
            (_id,photo)}>
              <img src={download} alt="download" />
            </button>
        </div>
      </div>      
    </div>
  )
}

export default Card
