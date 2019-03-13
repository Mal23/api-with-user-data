const test = QUnit.test;

QUnit.module('Create header test');

function makeHeader() {
    const html = /*html*/ `
    <header>
        <div id="header-container">
            <img id="logo" src="./assets/weather-app-logo.png" alt="weather logo with sun, cloud, lightening, and rain drop">
            <h1>City Weather Search</h1>
        </div>
    </header>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

test('make header template', assert => {
    //arrange
    const expected = /*html*/ `
    <header>
        <div id="header-container">
            <img id="logo" src="./assets/weather-app-logo.png" alt="weather logo with sun, cloud, lightening, and rain drop">
            <h1>City Weather Search</h1>
        </div>
    </header>
    `;
    //act
    const result = makeHeader();
    //assert
    assert.htmlEqual(result, expected);
});