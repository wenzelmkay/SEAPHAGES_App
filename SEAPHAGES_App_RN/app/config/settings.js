//Created by wenzelmk on 5/18/17.

/*let METEOR_URL = 'ws://phamerator.org:3000/websocket';
//let METEOR_URL = 'ws://localhost:3000/websocket';
if (process.env.NODE_ENV === 'production') {
    METEOR_URL = 'ws://phamerator.org:3000/websocket'; // your production server url
}*/


let METEOR_URL = 'ws://100.64.2.43:3000/websocket';
if (process.env.NODE_ENV === 'production') {
    METEOR_URL = 'ws://phamerator.org:3000/websocket'; // your production server url
}

export const settings = {
    env: process.env.NODE_ENV,
    METEOR_URL,
};

export default settings;
