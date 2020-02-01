import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import clsx from "clsx";
import { withRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faSmog, faCompass} from '@fortawesome/free-solid-svg-icons'

import { Api, ACTIONS } from "api/api";
import { Button } from "components/Button";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3%;
  height: 100%;
`

const screens = [
  {
    name: 'smog',
    url: '/smog',
    icon: faSmog
  },
  {
    name: 'clock',
    url: '/clock',
    icon: faClock
  },
  {
    name: 'compass',
    url: '/compass',
    icon: faCompass
  },
]


const HomeView = ({ history }) => {
  const [selectedScreen, setSelectedScreen] = useState(1)

  useEffect(() => {
    const moveRightAction = Api.subscribe(ACTIONS.MOVE_RIGHT, () => {
      selectedScreen === screens.length - 1 ? setSelectedScreen(0) : setSelectedScreen(selectedScreen + 1);
    })
    const moveLeftAction = Api.subscribe(ACTIONS.MOVE_LEFT, () => {
      selectedScreen === 0 ? setSelectedScreen(screens.length - 1) : setSelectedScreen(selectedScreen - 1);
    })

    const enterAction = Api.subscribe(ACTIONS.ENTER, () => {
      history.push(screens[selectedScreen].url)
    })

    return () => {
      Api.unsubscribe(moveRightAction)
      Api.unsubscribe(moveLeftAction)
      Api.unsubscribe(enterAction)
    }
  }, [selectedScreen, setSelectedScreen, history])

  return (<Wrapper>
    {screens.map((screen, index) => <Button className={clsx({active: selectedScreen === index})} key={index}>
        <FontAwesomeIcon className="icon" icon={screen.icon} />
      </Button>
    )}
  </Wrapper> )
}

export const Home = withRouter(HomeView)

