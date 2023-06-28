import React from 'react'
import css from './Footer.module.css'
import logo from "../../assets/logo.png"
import {InboxIcon , PhoneIcon , LocationMarkerIcon,LoginIcon,UsersIcon,LinkIcon} from "@heroicons/react/outline"

const Footer = () => {
  return (
    <div className={css.footer}>
        <div className={css.footerSection}>
            <div className={css.logo}>
                <img src={logo} alt="" />
                <span>evaly</span>
            </div>
            <div className={css.contact}>
                <h2>Contacts</h2>
                <div className={css.deatils}>
                    <LocationMarkerIcon className={css.icon} />
                    <span>11 Ranking Street, Wari ,Dhaka-1203</span>
                </div>

                <div className={css.deatils}>
                    <PhoneIcon className={css.icon} />
                    <span>(+880) 1881959920</span>
                </div>


                <div className={css.deatils}>
                    <InboxIcon className={css.icon} />
                    <span>muniraweb@gmail.com</span>
                </div>
            </div>

            <div className={css.contact}>
                <h2>Account</h2>
                <div className={css.deatils}>
                    <LoginIcon className={css.icon} />
                    <span>Sign-in</span>
                </div>
            </div>

            <div className={css.contact}>
                <h2>Comapny</h2>
                <div className={css.deatils}>
                    <UsersIcon className={css.icon} />
                    <span>About Us</span>
                </div>

                
            </div>

            <div className={css.contact}>
                <h2>Resources</h2>
                <div className={css.deatils}>
                    <LinkIcon className={css.icon} />
                    <span>Safety Privacy Policy</span>
                </div>

                
            </div>
           
        </div>

        <div className={css.copy}>All Rights Reserve to &copy; Evaly </div>

    </div>
  )
}

export default Footer