import React from "react";
import { render } from "react-dom";
import Slider from "./Slider/Slider";

const IMAGE_DATA = [
	{
		src: require("./images/pic1.jpg"),
		alt: 'pic1.jpg',
	},
	{
		src: require("./images/pic2.jpg"),
		alt: 'pic2.jpg',
	},
	{
		src: require("./images/pic3.jpg"),
		alt: 'pic3.jpg',
	},
];

render(
	<Slider
		items = {IMAGE_DATA}
		speed = {1.2}
		delay = {2.2}
		pause = {true}
		autoplay = {true}
		dots = {true}
		arrows = {true}
	/>,
		document.getElementById("root")
	);