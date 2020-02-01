import React from 'react'
import styled from "styled-components";

const ButtonView = styled.div`
  position: relative;
  background: #fff;
  border-radius: 28%;
  box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 0.1);
  width: 30%;
  margin: 0 1.5% 0 1.5%;
  
  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
  
  &.active {
    background-color: #65AAF1;
    box-shadow: 0 5px 15px -5px rgba(0, 0, 0, .8);
    
    .icon {
      color: #fff;
    }
  }
  
  .icon {
    width: 50%;
    height: 50%;
    color: #4A5057;
  }
`

const ButtonContent = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Button = ({ children, className }) => <ButtonView className={className}>
  <ButtonContent>
    {children}
  </ButtonContent>
</ButtonView>
