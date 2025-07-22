/*import React from "react";
function Contact(){
    return(
        <>
        <h3>contacts:</h3>
        <p>GMAIL:@preethimanda9</p>
        <p>NUMBER:7842415255</p>
        </>
    )
}
export default Contact*/

import React from 'react';

function Contact() {
  return (
    <section className="section">
      <h2>Contact Me</h2>
      <p>Email: <a href="mailto:preethimanda9@gmail.com">preethimanda9@gmail.com</a></p>
      <p>Phone: <a href="tel:7842415255">7842415255</a></p>
    </section>
  );
}

export default Contact;
