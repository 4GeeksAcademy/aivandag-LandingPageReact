import React from "react";
import Navbar from "../Navbar";
import Jumbotron from "../Jumbotron";
// import Cards from "../Cards";
import MultiCards from "../MultiCards";
import Footer from "../Footer";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="">

			<Navbar />
			<Jumbotron />
			{/* <Cards /> */}
			<MultiCards />
			<Footer />
		
		</div>
	);
};

export default Home;