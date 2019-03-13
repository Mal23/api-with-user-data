const config = {
    apiKey: 'AIzaSyAJ2YPcrXFQ65wYbO8qe1ue1jgcJCGGG0s',
    authDomain: 'weatherwebapp-31e4d.firebaseapp.com'
};

firebase.initializeApp(config);

export const auth = firebase.auth();