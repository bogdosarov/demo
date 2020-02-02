import PubSub from 'pubsub-js'
import io from 'socket.io-client'

export const ACTIONS = {
  MOVE_LEFT: 'MOVE_LEFT',
  MOVE_RIGHT: 'MOVE_RIGHT',
  ENTER: 'ENTER',
  BACK: 'BACK',
}

const socket = io('http://localhost:3000')

socket.on('connect', function(){ console.log('connected') });
socket.on(ACTIONS.MOVE_LEFT, () => Api.publish(ACTIONS.MOVE_LEFT));
socket.on(ACTIONS.MOVE_RIGHT, () => Api.publish(ACTIONS.MOVE_RIGHT));
socket.on(ACTIONS.ENTER, () => Api.publish(ACTIONS.ENTER));
socket.on(ACTIONS.BACK, () => Api.publish(ACTIONS.BACK));
socket.on('disconnect', function(){ console.log('disconnected')});

export const Api = PubSub

// For navigation without server
document.addEventListener('keydown', ({ keyCode }) => {
  console.log(keyCode)

  switch (keyCode) {
    case 37: // arrowLeft
      console.log('Trigger action: ', ACTIONS.MOVE_LEFT)
      Api.publish(ACTIONS.MOVE_LEFT)
      break
    case 39: // arrowRight
      console.log('Trigger action: ', ACTIONS.MOVE_RIGHT)
      Api.publish(ACTIONS.MOVE_RIGHT)
      break
    case 13: // Enter
      console.log('Trigger action: ', ACTIONS.ENTER)
      Api.publish(ACTIONS.ENTER)
      break
    case 27: // Escape
      console.log('Trigger action: ', ACTIONS.BACK)
      Api.publish(ACTIONS.BACK)
      break
  }
})

