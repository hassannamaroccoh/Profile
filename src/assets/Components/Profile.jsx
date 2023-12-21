import "../Styles/Profile.css"
import {FiUser} from "react-icons/fi";
const Profile = () => {
    return ( 
        <>
        <aside>
            <div className="flex">
        <h2>Create profile</h2>
        <div className="icon"> 
            <FiUser size={40}/>
        </div>
        </div>

        <div className="input">
            <div className="first">
       
        <label for="last name"></label>
        <input type="text"  id="name" placeholder="Name"></input>
       


        <label for="last name"></label>
        <input type="text"  id="name" placeholder="Last name"/>
        </div>
        <div className="second">

      

        <label for="last name"></label>
        <input type="text"  id="name" placeholder="Gendeer"/>
    


        <label for="last name"></label>
        <input type="text"  id="name" placeholder="Date of Birth"/>
        </div>
        <div className="third">
        

        <label for="last name"></label>
        <input type="text"  id="name" placeholder="Marital Status"/>
        </div>

        
    
        
    
        
      
        </div>
         <div className="one">
         <p>Already have an account ? login</p><button className="btn">Next</button>
         </div>
        
    
    
    
       
          
        </aside>
       
    
    
    
       

        
          
        
        </>
     );
}
 
export default Profile;