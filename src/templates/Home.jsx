import React from 'react';


const Home = ({ }) => {
  return (
    <>
	  	<head>
	  		<script src="https://unpkg.com/htmx.org@2.0.2" integrity="sha384-Y7hw+L/jvKeWIRRkqWYfPcvVxHzVzn5REgzbawhxAuQGwX1XWe70vji+VSeHOThJ" crossorigin="anonymous"></script>
	  	</head>
		<body style={{backgroundColor: "black", fontSize: "16px", color: "white", textAlign: "center", paddingTop: "100px" }}>
			<form hx-post="/api/hello" hx-swap="afterend" method="POST">
  				<label style={{color: "rebeccapurple", fontSize: "22px"}} for="Question">Enter a prompt: </label>
				<br/>
  				<textarea style={{padding: "5px 10px", marginTop: "10px", border: "2px solid rebeccapurple", borderRadius: "5px"}} type="text" name="question" rows='5' cols='50'/>
				<br/>
  				<button style={{padding: "5px 10px", marginTop: "10px", backgroundColor: "black", border: "2px solid rebeccapurple", borderRadius: "5px", color:"white"}}type="submit">Submit</button>
			</form>
		</body>
    </>
  );
};

export default Home;