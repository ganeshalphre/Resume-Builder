import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import banner from '../Assets/banner.jfif'

const SectionFour = () => {
    const testimonials = [
        {
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
        },
        {
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
        },
        {
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
        },
    ]
    return ( 
        <div className="SectionFour">
           <div className="testimonial">
           <h3>Testimonials</h3>
            <Carousel>
                {testimonials.map((testimonial, index) => {
                    return (
                        <div className="carousel-content" key={index}>
                            {testimonial.content}
                        </div>
                    )
                })}
            </Carousel> 
           </div>
        </div>
     );
}
 
export default SectionFour;