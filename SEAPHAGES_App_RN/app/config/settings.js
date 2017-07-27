//Created by wenzelmk on 5/18/17.

let METEOR_URL = 'ws://172.16.101.236:3000/websocket';
if (process.env.NODE_ENV === 'production') {
    METEOR_URL = ''; // your production server url
}

export const settings = {
    env: process.env.NODE_ENV,
    METEOR_URL,
};

export default settings;

