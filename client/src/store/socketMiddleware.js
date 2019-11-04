import {
  USER_LOGGED_IN_LOADING
} from './actions/types';

import {
  SOCKET_CONNECTED,
  SOCKET_USER_LOGIN
} from './socketEvents';

export default function socketMiddleware(socket) {
  return ((storeApi) => {

    socket.on(SOCKET_CONNECTED, (status) => {
      storeApi.dispatch({
        type: SOCKET_CONNECTED,
        payload: status
      })
    })

    return next => action => {
      const { type, payload } = action;

      switch (type) {
        
        case SOCKET_USER_LOGIN:
          socket.emit(type, payload);
          storeApi.dispatch({
            type: USER_LOGGED_IN_LOADING
          });
          return;
        
        default:
          console.log('Not Recognized\nTYPE:', type);
          return;
      }

      return next(action);
    }

  })
}