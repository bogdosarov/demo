import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'

import {ACTIONS, Api} from "api/api";

const SmogView = ({ history }) => {
  useEffect(() => {
    const exitAction = Api.subscribe(ACTIONS.EXIT, () => {
      history.push('/')
    })

    return () => {
      Api.unsubscribe(exitAction)
    }
  }, [])

  return <div>Smog</div>
}

export const Smog = withRouter(SmogView)

