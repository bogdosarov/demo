import PubSub from 'pubsub-js'

export const Api = PubSub

export const ACTIONS = {
  MOVE_LEFT: 'MOVE_LEFT',
  MOVE_RIGHT: 'MOVE_RIGHT',
  ENTER: 'ENTER',
  EXIT: 'EXIT',
}

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
      console.log('Trigger action: ', ACTIONS.EXIT)
      Api.publish(ACTIONS.EXIT)
      break
  }
})

