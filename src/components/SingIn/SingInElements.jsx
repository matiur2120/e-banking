import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-router-dom';
import styled, { createGlobalStyle } from "styled-components";

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, .3);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999999;
`;
export const Container = styled.div`
  position: relative;
  width: 350px;
  height: 400px;
  background: #fff;
  color: #000;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 14px 25px;
`;

export const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  
`
export const PasswordContainer = styled.div`
  position: relative;
  width: 100%;
`;
export const CheckLabel = styled.label`
  font-size: 12px;
  padding-left: 4px;
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 14px;
  position: relative;
`;
export const FormH2 = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 8px;
  text-align: center;
  padding: 10px 0;
`;
export const InputLabel = styled.label`
font-size: 14px;
font-color: #000;
font-weight: bold;
padding-bottom: 4px;
 
`;
export const SingInForm = styled.form``;
export const Input = styled.input`
  height: 38px;
  border: 1px solid gray;
  padding: 2px 10px;
  border-radius: 2px;
  padding-right: 30px;
  width: 100%;
`;
export const InputCheckBox = styled.input`

`;
export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
 
  
`;
export const Button = styled.button`
  cursor: pointer;
  outline: none;
  background: #0000ff;
  border:none;
  padding: 8px 16px;
  border-radius: 5px;
  margin-top: 14px;
  color: #fff;
  font-size: 14px;
  width: 100%;
  transition: all .3s ease-in;
  &:hover{
    background: #000080;
    color: #fff;
  }
  
`

export const ScrollDisabler = createGlobalStyle`
  body {
    overflow-y: hidden;
  }
`;

export const Visblity = styled.div`
  position: absolute;
  bottom: 4px;
  right: 8px;
  font-size: 20px;
  cursor: pointer;
`;

export const ForgotPassword = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-top: 12px;
`;
export const ForgotLink = styled(Link)`
  font-size: 13px;
  text-decoration: none;
`;

export const CloseIcon = styled(IoMdClose)`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  cursor: pointer;
  &:hover{
    color: gray;
  }
`;

export const ErrorMesg = styled.p`
  font-size: 12px;
  color: red;
  padding: 2px 0;
`

