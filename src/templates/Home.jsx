import React from 'react';

const Home = ({ }) => {
  return (
    <>
	  	<head>
	  		<script src="https://unpkg.com/htmx.org@2.0.2" integrity="sha384-Y7hw+L/jvKeWIRRkqWYfPcvVxHzVzn5REgzbawhxAuQGwX1XWe70vji+VSeHOThJ" crossorigin="anonymous"></script>
	  	</head>
		<form hx-post="/api/hello" hx-swap="afterend" method="POST">
  			<label for="Question">Enter a prompt: </label>
  			<input type="text" name="question" />
  			<button type="submit">Submit</button>
		</form>
    </>
  );
};

export default Home;