import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import RubberBand from 'react-reveal/RubberBand';
function ContactCard() {
    return (
        <>
            <div class="hidden flex justify-evenly lg:flex ">
                <RubberBand>
                    <a href="https://www.linkedin.com/in/ashiq-khan-412709222/" target="_blank" className="213313 cursor-pointer ">  <LinkedInIcon style={{ fontSize: 80, color: "#0077b5" }} /> </a>
                </RubberBand>
                <RubberBand>
                    <a href="mailto:khanashiq4494@gmail.com?subject=Hello!&body=Hi%20..." target="_blank" className="1323213 cursor-pointer"> <EmailIcon style={{ fontSize: 80, color: "pink" }} /> </a>
                </RubberBand>
                <RubberBand>
                    <a href="https://www.instagram.com/_aashiq_khan_3" target="_blank" className="fdsds cursor-pointer"> <InstagramIcon style={{ fontSize: 80, color: "#E1306C" }} /> </a>
                </RubberBand>
                <RubberBand>
                    <a href="https://github.com/ashiq352" target="_blank" className="zczxcz cursor-pointer"> <GitHubIcon style={{ fontSize: 70, color: "white" }} /> </a>
                </RubberBand>
                <RubberBand>
                    <a href="https://api.whatsapp.com/send?phone=917855814343&text=Hi!" target="_blank" className="dasdas cursor-pointer"> <WhatsAppIcon style={{ fontSize: 80, color: "#128c7e" }} /> </a>
                </RubberBand>



            </div>
            <div class=" flex flex-row sm:ml-10 sm:flex-col justify-evenly lg:hidden md:flex ">
                <RubberBand>
                    <a href="https://www.linkedin.com/in/ashiq-khan-412709222/" target="_blank" className=" linkedin cursor-pointer ">  <LinkedInIcon style={{ fontSize: 50, color: "#0077b5" }} /> </a>
                </RubberBand>
                <RubberBand>
                    <a href="mailto:khanashiq4494@gmail.com?subject=Hello!&body=Hi%20..." target="_blank" className="gmail cursor-pointer"> <EmailIcon style={{ fontSize: 50, color: "pink" }} /> </a>
                </RubberBand>
                <RubberBand>
                    <a href="https://www.instagram.com/_aashiq_khan_3" target="_blank" className="insta cursor-pointer"> <InstagramIcon style={{ fontSize: 50, color: "#E1306C" }} /> </a>
                </RubberBand>
                <RubberBand>
                    <a href="https://github.com/ashiq352" target="_blank" className="zfdz cursor-pointer"> <GitHubIcon style={{ fontSize: 45, color: "white" }} /> </a>
                </RubberBand>
                <RubberBand>
                    <a href="https://api.whatsapp.com/send?phone=917855814343&text=Hi!" target="_blank" className="asdasd cursor-pointer"> <WhatsAppIcon style={{ fontSize: 50, color: "#128c7e" }} /> </a>
                </RubberBand>



            </div>
        </>
    )
}

export default ContactCard
