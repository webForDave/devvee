import { useState } from 'react';
import owlImage from '../assets/Images/why.png';
import { BiCoffee } from 'react-icons/bi';


const Why = () => {

    let [reaseons, setReasons] = useState([
        {title: 'Supreme Beans', body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptates sed quasi', id: 1},
        {title: 'High Quality', body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptates sed quasi', id: 2},
        {title: 'Extraordinary Taste', body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptates sed quasi', id: 3},
        {title: 'Without Impurities', body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptates sed quasi', id: 1},
        {title: 'Professional Roasting', body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptates sed quasi', id: 4},
        {title: 'Nice Pricing', body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptates sed quasi', id: 5}
    ]);

    return (
        <section className="w-full h-auto py-[10px] lg:py-[40px]">

            <div className="w-[90%] h-auto -700 mx-auto lg:flex justify-between items-center">
                <div className="w-auto h-auto ">
                    <img src={owlImage} alt="image of owl made with code seeds" className=" w-auto" />
                </div>

                <div>
                    <h1 className="font-[cursive] text-[25px] lg:text-[45px]">Why Choose Our Coffee</h1>
                    <p className="lg:w-[50%] lg:text-[18px] font-[cambria] pb-[20px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptates sed quasi laborum tempore impedit saepe dolor qui velit repudiandae!</p>

                    <div className="w-[100%] h-auto lg:grid grid-cols-2 gap-10">
                        {reaseons.map(reason => (
                            <div key={reason.id} className='flex justify-between items-center'>
                                <BiCoffee size={60} color='green' />
                                <div className="my-[10px] lg:my-0 mx-[10px]">
                                    <h1 className="text-[20px] font-bold font-[cambria]">{reason.title}</h1>
                                    <p className="w-[90%]">{reason.body}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

        </section>
    );
}
 
export default Why;