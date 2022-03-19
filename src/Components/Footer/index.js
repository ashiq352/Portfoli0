import React from 'react'
import CopyrightIcon from '@material-ui/icons/Copyright';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import RubberBand from 'react-reveal/RubberBand';
function index() {
    return (
        <div className = "flex  flex-col font-mono text-center p-10 w-full lg:h-4xl bg-gray-100">
            <p className = "p-1text-size-xl">Made with ❤️  </p><p className = "pb-10"><CopyrightIcon style = {{ fontSize : 21}}/> Ashiq Khan 2022</p>
            <div class = " flex flex-row 10 justify-center gap-2 md:gap-10 ">
            <RubberBand>
            <a  href="https://www.linkedin.com/in/ashiq-khan-412709222/" target="_blank" className = " linkedin cursor-pointer ">  <LinkedInIcon style={{fontSize: 50 , color : "#0077b5"}} /> </a>
            </RubberBand>
            <RubberBand>
            <a href="mailto:khanashiq4494@gmail.com?subject=Hello!&body=Hi%20..." target="_blank" className = "gmail cursor-pointer"> <EmailIcon  style={{fontSize: 50 , color : "pink"}}/> </a>
            </RubberBand>
            <RubberBand>
            <a href="https://www.instagram.com/_aashiq_khan_3" target="_blank"  className = "insta cursor-pointer"> <InstagramIcon  style={{fontSize: 50 , color : "#E1306C"}}/> </a>
            </RubberBand>
            <RubberBand>
            <a href="https://github.com/ashiq352" target="_blank"  className = "zfdz cursor-pointer"> <GitHubIcon  style={{fontSize: 45 , color : "black"}}/> </a>
            </RubberBand>
            <RubberBand>
            <a href="https://api.whatsapp.com/send?phone=917855814343&text=Hi!" target="_blank" className = "asdasd cursor-pointer"> <WhatsAppIcon  style={{fontSize: 50 , color : "#128c7e"}}/> </a>
            </RubberBand>
        </div>
        </div>
    )
}

export default index
