import React from 'react';
import test from 'tape';
import dom from 'cheerio';
import reactDom from 'react-dom/server';

const render = reactDom.renderToStaticMarkup;

import readImage from '../../../source/components/read-image';

test('ReadImage', nest => {

	nest.test('...read-image renders', assert => {

		const msg = 'ReadImage should render a "file" type input';
		const ReadImage = readImage(React);

		const $ = dom.load(render(<ReadImage />));

		const output = $('#image-upload-wrap').find('input[type="file"]').length;

		const actual = output > 0;
		const expected = true;

		assert.equal(actual, expected, msg);
		assert.end();

	});

	// nest.test('...read-image handles handles onChange', assert => {
	//
	// 	const msg = 'ReadImage should render a "file" type input';
	// 	const ReadImage = readImage(React);
	// 	const props = {
	// 		onChange: function(){}
	// 	};
	//
	// 	const $ = dom.load(render(<ReadImage { ...props } />));
	//
	// 	const output = $('#image-upload-wrap').find('input[type="file"]').length;
	//
	// 	const actual = output > 0;
	// 	const expected = true;
	//
	// 	assert.equal(actual, expected, msg);
	// 	assert.end();
	//
	// });

});
