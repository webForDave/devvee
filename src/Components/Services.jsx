import { useState } from "react";
import card1 from '../assets/Images/card1.jpg';
import card2 from '../assets/Images/card2.jpg';
import card3 from '../assets/Images/card3.jpg';
import card4 from '../assets/Images/card4.jpg';

const Services = () => {


    const [coffees, setCoffees] = useState([
        {image: card1, name: 'Arabica With Irish Cream', price: '$179', id: 1},
        {image: card2, name: 'Robusta With Chocolate', price: '$149', id: 2},
        {image: card3, name: 'Robusta With Vanilla', price: '$368', id: 3},
        {image: card4, name: 'Arabica with Irish Cream', price: '$50', id: 4},
        {image: card2, name: 'Robusta with chocolate', price: '$89', id: 5},
        {image: card4, name: 'Liberica with caramel', price: '$20', id: 6},
        {image: card1, name: 'Liberica with chin', price: '$100', id: 7},
        {image: card3, name: 'Araica With sweden pop', price: '$250', id: 8},
        {image: card4, name: 'Liberica With tomato', price: '$250', id: 9},
        {image: card1, name: 'Robusta With Caramel', price: '$250', id: 10}
    ])

    return (
        <section className="w-full h-auto bg-white text-black py-[30px]">
            <h3 className=" text-center py-[10px] lg:text-left font-[georgia] text-[32px] lg:text-[40px] font-bold lg:py-[20px] lg:pl-[60px]">We Offer You The Best We Have</h3>
            <p className="text-center text-[16px] lg:text-left lg:w-[55%] font-medium lg:text-[20px] font-[cambria] lg:pl-[60px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam ipsum dicta pariatur expedita, nobis maxime rem aut laudantium accusamus at.</p>

            <div className=" w-full h-auto py-[20px] my-[20px] mx-auto">
                <div className=" w-[80%] h-auto block md:grid grid-cols-3 lg:grid lg:grid-cols-4 gap-10 mx-auto lg:px-[20px]">
                    {coffees.map(coffee =>(
                        <div key={coffee.id} className="my-[20px] mx-auto">
                            <img src={coffee.image} alt="coffee image" className="rounded-[5px] w-[200px] lg:w-[300px] mx-auto" />
                            <h2 className="text-[22px] text-center lg:text-left lg:text-[25px] lg:py-[15px] font-[georgia] font-bold">{coffee.name}</h2>
                            <h3 className="lg:text-[20px] text-green-800 font-bold text-center lg:text-left">{coffee.price}</h3>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}
 
export default Services;