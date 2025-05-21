import React from 'react'
import { socialImgs } from '../constants'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-container'>
                <div className='flex flex-col justify-center items-center'>
                    <a href="/">Visit My Blog</a>
                </div>
                <div className='socials'>
                    {socialImgs.map((img) => (
                        <a href={img.url} className='icon' target='_blank' key={img.url}>
                            <img src={img.imgPath} alt="" />
                        </a>
                    ))}
                </div>
                <div className='flex flex-col justify-center'>
                    <p className='text-center md:text-end'>
                        ©{new Date().getFullYear()} Raka Aditya. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
