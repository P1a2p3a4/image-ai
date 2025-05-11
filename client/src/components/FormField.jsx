import React from 'react'
 
//import { preview } from "../assets/preview.png"
//import previewImage from "../assets/preview.png"

const FormField = ({LableName, type, name, placeholder, value,
  handleChange, isSurpriseMe, handleSurpriseMe, }) => {
  
       
  return (
    <div>
       <div>
        <label 
        htmlFor={name} className='block text-sm font-medium text-gray-900'>
          {LableName}
        </label>
        
        {isSurpriseMe && (
          <button
            type='button'
            onClick={handleSurpriseMe}
            className='font-semibold text-xs bg-[#ececf1] py-3 px-2 rounded-[5px] text-black'
          >
            

          </button>
        ) }
        </div>


        <div className='mt-2 flex gap-3'>
          <input
            type={type}
            id={name}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            required
            className='block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#4649ff] focus:ring-[#4649ff] bg-gray-50'
          />

          {isSurpriseMe && (
            <button
              type='button'
              
              onClick={handleSurpriseMe}
              className='font-semibold text-xs bg-[#ececf1] py-3 px-2 rounded-[5px] text-black'
            >
              Surprise Me
            </button>
          )}
        </div>

       </div>
    
  )
}

export default FormField

 