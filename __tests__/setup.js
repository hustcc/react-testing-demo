// do some initial.
// such as browser env canvas / matchMedia.
// also you can do nothing.
import { JSDOM } from 'jsdom';

// Define some html to be our basic document
// JSDOM will consume this and act as if we were in a browser
const FAKE_DOM_HTML = `
<!doctype html>
<html>
	<body>
		<div id="root">Hello react-testing-demo.</div>
	</body>
</html>
`;

// Define some variables to make it look like we're a browser
// First, use JSDOM's fake DOM as the document
const jsdom = new JSDOM(FAKE_DOM_HTML);

const { window } = jsdom;
const { document } = window;

global.window = window;
global.document = document;

// mock the `querySelector` function
global.document.querySelector = (selector) => {
	return document.querySelector(selector);
}
