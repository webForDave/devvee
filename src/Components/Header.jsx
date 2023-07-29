import heroImage from "../assets/Images/header.jpeg";
import heroLogo from '../assets/Images/heroLogo.png'; 

const Header = () => {
    return (
        <main className="w-full h-[500px] lg:h-[700px]" style={{backgroundImage: `url(${heroImage})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: 'center'}}>

            <div className="w-full h-[500px] lg:h-[700px] bg-black bg-opacity-25 flex justify-center items-center">

                <div className="w-[80%] h-auto py-[10px] md:w-[50%] lg:w-[25%]">
                    <img src={heroLogo} alt="illustration Logo" className="w-[400px] mb-[10px]" />
                    <p className="text-[19px] text-center text-white lg:text-[22px] font-[cambria]">Davvee brings a wide variety of coffee to your disposal, we make your work simpler and easier with each sip.</p>
                </div>

            </div>
        

        </main>
    );
}
 
export default Header;