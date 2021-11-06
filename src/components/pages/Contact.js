import React from 'react';

export default function Contact() {
  return (
   <form>
     <label for="firstname">First name:</label>
     <input type="text" id="firstname" name="firstname"></input>
     <label for="lastname">Last name:</label>
     <input type="text" id="lastname" name="lastname"></input>
     <label for="email">email:</label>
     <input type="email" id="email" name="email"></input>


     <label for="subject">Subject</label>
  

    
     </form>
  );
}
