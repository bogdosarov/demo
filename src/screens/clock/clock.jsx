import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'

import {ACTIONS, Api} from "api/api";

const ClockWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`

const ClockView = ({ history }) => {
  const scale = (window.screen.availHeight / 200) * 0.9 // 200 default clock width
  useEffect(() => {
    const exitAction = Api.subscribe(ACTIONS.BACK, () => {
      history.push('/')
    })

    return () => {
      Api.unsubscribe(exitAction)
    }
  }, [])

  useEffect(() => {
    const hands = [];
    hands.push(document.querySelector('#secondhand > *'));
    hands.push(document.querySelector('#minutehand > *'));
    hands.push(document.querySelector('#hourhand > *'));

    let cx = 100;
    let cy = 100;

    function shifter(val) {
      return [val, cx, cy].join(' ');
    }

    let date = new Date();
    let hoursAngle = 360 * date.getHours() / 12 + date.getMinutes() / 2;
    let minuteAngle = 360 * date.getMinutes() / 60;
    let secAngle = 360 * date.getSeconds() / 60;

    hands[0].setAttribute('from', shifter(secAngle));
    hands[0].setAttribute('to', shifter(secAngle + 360));
    hands[1].setAttribute('from', shifter(minuteAngle));
    hands[1].setAttribute('to', shifter(minuteAngle + 360));
    hands[2].setAttribute('from', shifter(hoursAngle));
    hands[2].setAttribute('to', shifter(hoursAngle + 360));

    for(let i = 1; i <= 12; i++) {
      let el = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      el.setAttribute('x1', '100');
      el.setAttribute('y1', '30');
      el.setAttribute('x2', '100');
      el.setAttribute('y2', '40');
      el.setAttribute('transform', 'rotate(' + (i*360/12) + ' 100 100)');
      el.setAttribute('style', 'stroke: #ffffff;');
      document.querySelector('svg').appendChild(el);
    }
  }, [])

  return <ClockWrapper>
    <svg style={{ transform: `scale(${scale})` }} width="200" height="200" dangerouslySetInnerHTML={{__html: "<filter id=\"innerShadow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n" +
        "        <feGaussianBlur in=\"SourceGraphic\" stdDeviation=\"3\" result=\"blur\"/>\n" +
        "        <feOffset in=\"blur\" dx=\"2.5\" dy=\"2.5\"/>\n" +
        "      </filter>\n" +
        "\n" +
        "      <g>\n" +
        "        <circle id=\"shadow\" style=\"fill:rgba(0,0,0,0.1)\" cx=\"97\" cy=\"100\" r=\"87\" filter=\"url(#innerShadow)\"></circle>\n" +
        "        <circle id=\"circle\" style=\"stroke: #FFF; stroke-width: 12px; fill:#4A5057\" cx=\"100\" cy=\"100\" r=\"80\"></circle>\n" +
        "      </g>\n" +
        "      <g>\n" +
        "        <line x1=\"100\" y1=\"100\" x2=\"100\" y2=\"55\" transform=\"rotate(80 100 100)\"\n" +
        "              style=\"stroke-width: 3px; stroke: #fffbf9;\" id=\"hourhand\">\n" +
        "          <animatetransform attributeName=\"transform\"\n" +
        "                            attributeType=\"XML\"\n" +
        "                            type=\"rotate\"\n" +
        "                            dur=\"43200s\"\n" +
        "                            repeatCount=\"indefinite\"/>\n" +
        "        </line>\n" +
        "        <line x1=\"100\" y1=\"100\" x2=\"100\" y2=\"40\" style=\"stroke-width: 4px; stroke: #fdfdfd;\" id=\"minutehand\">\n" +
        "          <animatetransform attributeName=\"transform\"\n" +
        "                            attributeType=\"XML\"\n" +
        "                            type=\"rotate\"\n" +
        "                            dur=\"3600s\"\n" +
        "                            repeatCount=\"indefinite\"/>\n" +
        "        </line>\n" +
        "        <line x1=\"100\" y1=\"100\" x2=\"100\" y2=\"30\" style=\"stroke-width: 2px; stroke: #C1EFED;\" id=\"secondhand\">\n" +
        "          <animatetransform attributeName=\"transform\"\n" +
        "                            attributeType=\"XML\"\n" +
        "                            type=\"rotate\"\n" +
        "                            dur=\"60s\"\n" +
        "                            repeatCount=\"indefinite\"/>\n" +
        "        </line>\n" +
        "      </g>\n" +
        "      <circle id=\"center\" style=\"fill:#128A86; stroke: #C1EFED; stroke-width: 2px;\" cx=\"100\" cy=\"100\" r=\"3\"></circle>"}} />
  </ClockWrapper>
}

export const Clock = withRouter(ClockView)
