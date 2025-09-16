import { useState }  from "react";
import {Link} from "react-router-dom";
export default function Contact(){
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[message,setMessage]=useState("");
    function submit(e){
        e.preventDefaults();
       console.log(name,email,message);
    }
    return(
 <> 
          
            <h1>ContactPage</h1>
<h2>it is a contact page</h2> 
<p>you can ask your doubts here</p>
      <form action="" onSubmit={submit}>
    <label htmlFor="name">Name</label>
    <input
        type='text'
        onChange={(e)=>setName(e.target.value)}
        value={name}
    />
    <br />
    <label htmlFor="email">Email</label>
    <input
        type='email'
        onChange={(e)=>setEmail(e.target.value)}
        value={email}
    />
    <br />
    <label htmlFor="message">Message</label>
    <textarea
        onChange={(e)=>setMessage(e.target.value)}
        value={message}
    ></textarea>
    <br />
    <button type="submit">Submit</button>
      </form>
           </>
       
    )
}