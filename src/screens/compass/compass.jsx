import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'

import {ACTIONS, Api} from "api/api";

const CompassView = ({ history }) => {
  useEffect(() => {
    const exitAction = Api.subscribe(ACTIONS.BACK, () => {
      history.push('/')
    })

    return () => {
      Api.unsubscribe(exitAction)
    }
  }, [])

  return <div>Compass</div>
}

export const Compass = withRouter(CompassView)

