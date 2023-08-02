import v1 from '../assets/Videos/vid1.mp4';
import { GoDownload} from 'react-icons/go';
import { CgPhone} from 'react-icons/cg';

const About = () => {
    return (
        <section className="w-full h-auto py-[40px] lg:py-[60px] bg-[#100b08]">
            <div className="w-[95%] h-auto mx-auto lg:flex justify-center items-center">
                    
                        <video loop autoPlay src={v1} controls className="w-full lg:w-[50%] mx-auto lg:mx-0"></video>

                    <div className="w-[100%] lg:w-[40%] mx-auto text-white font-[cambria] h-auto lg:p-[10px] lg:ml-[20px]">
                        <h2 className="text-[27px] md:text-[40px] lg:text-[48px] font-bold font-[georgia]">Choose Fresh Beans -</h2>
                        <h2 className="text-[27px] md:text-[40px] lg:text-[48px] font-bold font-[Georgia]">Taste A Great Coffee</h2>
                        <p className=' w-full font-serif text-[18px] py-[15px] lg:pb-[5px] lg:pt-[20px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nulla cum, ducimus ipsum saepe incidunt dolorem rerum doloremque itaque quaerat perspiciatis minus? Debitis minima, numquam ut vitae eligendi exercitationem nisi</p>

                        <div className=" w-[100%] mx-auto my-[20px] md:w-[60%] lg:w-[100%] h-auto lg:py-[10px] lg:my-[30px] flex justify-between">

                            <div className="flex text-white">
                                <GoDownload size={40} color='lime' className="w-[30px] lg:w-[80px]" />
                                <h3 className=" text-[14px] font-light font-[georgia] px-[10px] lg:px-0">DOWNLOAD <span className="block font-bold text-[14px] lg:text-[20px]"><a href="card1.jpg" download>Pricelist</a></span> </h3>
                                
                            </div>

                            <div className="flex text-white">
                                <CgPhone size={40} color='lime' className='w-[30px] lg:w-[80px]' />
                                <h3 className=" text-[14px] font-light px-[10px] lg:px-0">CALL US <span className="block font-bold font-[cambria] text-[14px] lg:text-[20px]"><a href="tel:+2349077565788">+2349077565788</a></span> </h3>
                                
                            </div>

                        </div>

                        <button className="block px-[10px] rounded-[10px] py-[10px]  lg:px-6 lg:py-3 lg:rounded-[25px] bg-orange-500 mt-[25px] lg:mt-[50px] mx-auto lg:mx-0 font-[georgia]"> ORDER NOW</button>

                    </div>

                <div>

                </div>
            </div>
        </section>
    );
}
 
export default About;