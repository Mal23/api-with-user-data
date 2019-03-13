import makeHeader from '../src/make-header.js';
const test = QUnit.test;

QUnit.module('Create header test');

function makeProfile(user) {
    const html = /*html*/ `
    <div id="profile">
        <span>Name: Bob Burger</span>
        <img id="user-icon" src="./assets/unknown-user.png" alt="unknown user person outline">
        <button>Sign Out</button>
    </div>
    `;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

test('makes profile template', assert => {
    //arrange
    const user = {
        displayName: 'Bob Burger',
        photoUrl: './assets/unknown-user.png'
    };
    
    const expected = /*html*/ `
    <div id="profile">
        <span>Name: Bob Burger</span>
        <img id="user-icon" src="./assets/unknown-user.png" alt="unknown user person outline">
        <button>Sign Out</button>
    </div>
`;
    //act 
    const dom = makeProfile(user);   
    //assert
    assert.htmlEqual(dom, expected);
});

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