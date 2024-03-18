
import io from 'socket.io-client';

let socket = null;

export const establishSocketConnection = (userDetails) => {
    const accessToken = userDetails.accessToken;
    socket = io('http://localhost:8080', {
        auth: {
            token : accessToken
        }
    })

    socket.on('connect', ()=>{
        console.log('successfully connected to socket server')
        console.log(socket.id);
    })
}