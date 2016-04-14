import React from 'react';
import test from 'tape';
import dom from 'cheerio';
import reactDom from 'react-dom/server';
import { mount } from 'enzyme';


const render = reactDom.renderToStaticMarkup;

import needsDates from '../../../source/components/pages/needs-dates';

test('needsDates', nest => {

	nest.test('...needs-dates renders', assert => {

		const msg = 'needsDates should render a div with class "needs-dates"';
		const NeedsDates = needsDates(React);

		const $ = dom.load(render(<NeedsDates />));

		const output = $.root().html().indexOf('needs-dates') > -1;
		const actual = output ;
		const expected = true;

		assert.equal(actual, expected, msg);
		assert.end();

	});

	nest.test('...needs-dates dismiss', assert => {

		const msg = 'clicking ".dismiss" calls the function to skip adding a date to the image';
		const NeedsDates = needsDates(React);

		const props = {
			dismiss: function() {
				assert.equal(true, true, msg);
				assert.end();
			},
			imgs : [
				{
					id: '1',
					imgSrc: 'http://placehold.it/350x150',
					imgCaption: 'optional caption'
				},
			]
		};

		const wrapper = mount(
      <NeedsDates {...props} />
    );
    wrapper.find('a.dismiss').simulate('click');

	});



});
