import About from "./About";
import Chance from "./Chance";
import Header from "./Header";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Why from "./Why";

const Main = () => {
    return (
        <section>
            <Header />
            <About />
            <Services />
            <Why />
            <Chance />
            <Testimonials />
        </section>
    );
}
 
export default Main;