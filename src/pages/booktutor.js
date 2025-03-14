import React from 'react';
import Cal from "@calcom/embed-react";

const BookTutor = () => {
  return (
    <div>
      <h1>Book a Session with Karen</h1>
      <p>
        Welcome to our tutoring service! We are excited to help you on your learning journey. 
        Our experienced tutors are here to provide personalized assistance and support.
      </p>
      <p>
        To book a session, please book a time convenient for you in the calendar below.
      </p>
      <Cal calLink="karen-learning/1h" config={{ theme: "light" }}></Cal>
    </div>
  );
};

export default BookTutor;