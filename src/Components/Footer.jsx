import logo from '../assets/Images/heroLogo.png';
import { BiPhoneCall } from 'react-icons/bi';
import { FaLocationArrow } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="w-full h-auto py-[40px] bg-[#100b08]">
            <div className="w-[90%] h-auto mx-auto lg:flex justify-between items-center">

                <div className="lg:flex justify-between items-center">
                    <img src={logo} alt="logo" className="w-[250px]" />
                    <span className=" w-[80%]">
                        <h3 className="text-white font-[cambria] text-[30px] pb-[10px] lg:pb-0">About Us</h3>
                        <p className="w-auto text-white font-[cambria] text-[16px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non numquam quaerat provident exercitationem sed laboriosam voluptas reiciendis nam ad rerum.</p>
                    </span>
                </div>

                <div className="py-[30px] lg:py-0 lg:flex justify-between items-center lg: w-[80%]">


                    <div className="flex text-white py-[10px] lg:py-">
                        <FaLocationArrow size={40} color='lime' className="w-[30px] lg:w-[80px]" />
                            <h3 className=" text-[14px] font-light px-[3px]">ADDRESS <span className="block font-medium font-[cambria] text-[14px] lg:text-[20px]">BT5 Fudawa Etobaba Road <br /> Jos, Plateau State Nigeria</span> </h3>
                                    
                    </div>

                    <div className="flex text-white py-[10px] lg:py-0">
                        <BiPhoneCall size={40} color='lime' className="w-[30px] lg:w-[80px]" />
                            <h3 className=" text-[14px] font-light px-[3px]">CONTACT US <span className="block font-medium font-[cambria] text-[14px] lg:text-[20px]"><a href="tel:+2349077565788">+2349077565788</a> <br /> dakinola54@gmail.com</span> </h3>
                                    
                    </div>
                </div>

            </div>
        </footer>
    );
}
 
export default Footer;