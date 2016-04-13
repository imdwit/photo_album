import React from 'react';
import {render} from 'react-dom';
import readImage from './components/read-image';

const readFile = file => {
	const reader = new FileReader();

	reader.onloadend = () => {
		var img = new Image();
		img.onload = function() {
			EXIF.getData(img, function() {
				console.log(EXIF.pretty(this));
			 });
		};
		img.src=reader.result;
		document.body.appendChild(img);

	};

	reader.onerror = (e) => {
		console.log(e);
	};
	console.log('file', file);
	reader.readAsDataURL(file);
};


const onChange = (e) => {
	const files = Array.from(e.target.files);
	files.forEach(readFile);
};



const props = {
	onChange
};
const ReadImg = readImage(React);

render(
	<ReadImg {...props}/>,
	document.getElementById('app')
);
