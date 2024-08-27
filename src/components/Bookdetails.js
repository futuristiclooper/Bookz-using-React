import { useParams } from "react-router-dom";
import { carddata } from "../config";



const Bookdetails = () => {
   
    const {id} = useParams();
    
    return (
        <div className="bookDetails">
        
      <img src={carddata[id-1].thumbnailUrl} />
      <h1>{carddata[id-1].title}</h1>
      
      <h2>{carddata[id-1].authors.join(", ")}</h2>
      <h2>{carddata[id-1].categories.join(", ")}</h2>
      <h3> {carddata[id-1].longDescription} Pages</h3>
      </div>
    )
   

};

export default Bookdetails;