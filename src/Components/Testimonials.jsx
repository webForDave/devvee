import testimonialImage from '../assets/Images/testimonial.jpg';

const Testimonials = () => {
    return (
        <section className="w-full h-[500px]" style={{background: `url(${testimonialImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="w-full h-[500px] bg-black bg-opacity-50 flex justify-center items-center">
                <div className="w-[90%] lg:w-[50%] h-auto">
                    <h2 className='text-white text-[32px] font-semibold lg:text-[50px] text-center font-[georgia] py-5'>They Tested Our Passion</h2>
                    <p className="text-center text-white text-[18px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic nemo sint harum laboriosam vitae quas sit modi dignissimos quos, in repellendus consectetur.</p>
                    <p className="text-center text-white py-[20px] lg:py-[10px] font-bold font-[cursive] text-[20px] lg:text-[30px]">DAVID AKINOLA</p>
                </div>
            </div>
        </section>
    );
}
 
export default Testimonials;