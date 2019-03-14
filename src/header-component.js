import { auth } from './firebase.js';

export function makeHeader() {
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

export function makeProfile(user) {
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

const headerContainer = document.getElementById('header-container');

export default function loadHeader(options) {
    const dom = makeHeader();
    const header = dom.querySelector('header');
    headerContainer.appendChild(dom);

    if(options && options.skipAuth) {
        return;
    }

    auth.onAuthStateChanged(user => {
        if(user) {
            const userDom = makeProfile(user);
            header.appendChild(userDom);
        }
        else {
            console.log('no user, redirect to auth.html')
        }
    });
}