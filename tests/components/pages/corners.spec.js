import React from 'react';
import test from 'tape';
import dom from 'cheerio';
import reactDom from 'react-dom/server';

const render = reactDom.renderToStaticMarkup;

import cornersPage from '../../../source/components/pages/corners';

test('cornersPage', nest => {

	nest.test('...corners-page renders', assert => {

		const msg = 'cornersPage should render a div with class "corners"';
		const CornersPage = cornersPage(React);

		const $ = dom.load(render(<CornersPage />));

		const output = $.root().html().indexOf('corners') > -1;
		const actual = output ;
		const expected = true;

		assert.equal(actual, expected, msg);
		assert.end();

	});

	nest.test('...corners-page renders images', assert => {

		const msg = 'cornersPage should render a list of images';
		const CornersPage = cornersPage(React);

		const props = {
			imgs: [
				{
					id: '1',
					imgSrc: 'http://placehold.it/350x150',
					imgCaption: 'optional caption'
				},
				{
					id: '2',
					imgSrc: 'http://placehold.it/350x150',
					imgCaption: 'optional caption'
				},
				{
					id: '3',
					imgSrc: 'http://placehold.it/350x150',
					imgCaption: 'optional caption'
				},
			]
		};

		const $ = dom.load(render(<CornersPage {...props} />));

		const output = $.root().find('.img-wrap').length;

		const actual = output > 2;
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
