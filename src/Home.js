import { useState } from "react";
const Home = () => {
    //give name a default value by passing it to useState as a param
    let [name, setName] = useState("mario");
    let [age, setAge] = useState(25);
    const title = "Home Page"
    const handleClick = (e) => {
        setName('luigi');
        setAge(30);
    }
    return (  
        <div className="home">
            <h2>{title}</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click me</button>
            
        </div>
        
    );
}
 
export default Home;