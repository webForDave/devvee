import chanceImage from '../assets/Images/header.jpeg';

const Chance = () => {

    return (
        <section className="w-auto h-auto py-[50px] bg-[#100b08]">

            <div className="w-[90%] h-auto lg:flex justify-between items-center mx-auto">

                <div className="w-[100%] lg:w-[50%] h-auto">
                    <h3 className="tett-center md:text-left text-white text-[30px] lg:w-[55%] font-[cursive]">Get Your Chance To Have An Amazing Morning</h3>
                    <p className='text-white py-[20px] lg:w-[60%]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque ducimus illo corporis officia perferendis reprehenderit a optio illum sapiente incidunt!</p>

                    <form action="" className="w-[90%] lg:w-[80%] h-auto tect-black">
                        <input type="text" placeholder='Name*' className="w-[100%] lg:w-[40%] h-[40px] my-[10px] lg-my0 lg:h-[50px] mr-[50px] block lg:inline px-[20px] bg-white rounded-[10px]" />
                        <input type='text' placeholder='Phone*' className="w-[100%] lg:w-[40%] h-[40px] my-[10px] lg:my-0 lg:h-[50px] px-[20px] bg-white rounded-[10px]"/>
                        <textarea name="text" className="w-[100%] h-[200px] lg:h-[200px] my-[20px] bg-white px-[20px] pt-[10px] rounded-[5px]" placeholder='Comment*'></textarea>
                        <button className="block px-4 py-2 rounded-[25px] font-[cambria] text-white bg-orange-600">ORDER NOW</button>
                    </form>
                </div>

                <div className="w-[50%] hidden lg:block ">
                    <img src={chanceImage} alt="illustration" className="w-[500px]" />
                </div>
            </div>

        </section>
    );
}
 
export default Chance;