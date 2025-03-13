import React from 'react';

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
      {/* <a 
        href="https://cal.com/karen-learning/1h" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{ color: 'blue', textDecoration: 'underline' }}
      >
        Book a Session
      </a> */}
      <div className="flex justify-center items-center min-h-screen">
      <iframe
        src="https://cal.com/karen-learning/1h"
        width="60%"
        height="700px"
        style={{ border: "none" }}
        title="Book a Call"
      ></iframe>
    </div>
    </div>
  );
};

export default BookTutor;