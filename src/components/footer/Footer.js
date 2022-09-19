import React from "react"
import {Link} from "react-router-dom"
import "../form/formMovie.css"
const Footer = () => {
  return (
   <div className="footer">
     <div className="container mx-auto grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2">
         <Link className="text-white text-footer">
           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
           when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
           It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
         </Link>
         <Link className="text-white text-footer">
           It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
           The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', 
           making it look like readable English.
         </Link>
         <Link className="text-white text-footer">
           Contrary to popular belief, Lorem Ipsum is not simply random text. 
           It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. 
           Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, 
           from a Lorem Ipsum passage.
         </Link>
         <Link className="text-white text-footer">
           There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, 
           or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, 
           you need to be sure there isn't anything embarrassing hidden in the middle of text.
         </Link>
       </div>
     </div>
  )
}

export default Footer