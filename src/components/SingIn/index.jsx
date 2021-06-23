import React, { useCallback, useEffect, useRef, useState } from 'react';
import ReactDOM from "react-dom";
import { useForm } from 'react-hook-form';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { Background, Button, ButtonContainer, CheckBoxContainer, CheckLabel, CloseIcon, Container, ErrorMesg, ForgotLink, ForgotPassword, FormH2, Input, InputCheckBox, InputContainer, InputLabel, PasswordContainer, SingInForm, Visblity } from './SingInElements';
const portalRoot = document.getElementById("modal-root");
const SingIn = ({setShowModal, showModal}) => {
  const {register, handleSubmit, watch, formState: { errors }} = useForm();

  const modalRef = useRef()
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
 

  const closeModal = (event) =>{
    if(modalRef.current === event.target){
      setShowModal(false);
    }

  }
  const handleForm = (data) =>{
    console.log(data);
  }
  const keyPress = useCallback((e) =>{
    if(e.key === 'Escape' && showModal)
      setShowModal(false);
  }, [showModal, setShowModal]);

  useEffect(() => {
    window.addEventListener('keydown', keyPress)
    return () => {
      window.removeEventListener('keydown', keyPress)
    }
  }, [keyPress])
  
  useEffect(() => {
    document.body.style.overflowY = 'hidden';
    return ()=>{
      document.body.style.overflowY = 'scroll';
    }
  }, [showModal])
 
  

  console.log(errors);
 
  return ReactDOM.createPortal(
    <>
      <Background ref={modalRef} onClick={closeModal}>
        <Container>
        <CloseIcon onClick={()=>setShowModal(prev=> !prev)} />
        <FormH2>Sign In</FormH2>
        <SingInForm onSubmit={handleSubmit(handleForm)}>
          <InputContainer>
            <InputLabel for='email'>Email</InputLabel>
            <Input type='email' placeholder='Enter email' id="email" {...register('email', {required: 'Email is required'})} value={email} onChange={(e)=>setEmail(e.target.value)} />
            {errors?.email?.message && <ErrorMesg>{errors.email.message}</ErrorMesg>}
          </InputContainer>
          <InputContainer>
            <InputLabel for='password'>Password</InputLabel>
            <PasswordContainer>
            <Input type={showPassword ? 'text' : 'password'} placeholder='Password'  id="password" {...register('password',{ required: 'Password is required', minLength: {value: 8, message: 'Password is too short'}})} value={password} onChange={(e)=>setPassword(e.target.value)} />
            <Visblity onClick={()=>setShowPassword(prev=> !prev)}>{showPassword ? <MdVisibility /> : <MdVisibilityOff /> }</Visblity>
            </PasswordContainer>
            
            {errors?.password?.message && <ErrorMesg>{errors.password.message}</ErrorMesg>}
          </InputContainer>
          <CheckBoxContainer>
            <InputCheckBox type='checkbox' id="remember" checked={remember} onChange={(e)=>setRemember(e.target.checked)} />
            <CheckLabel for='remember'>Remember me</CheckLabel>
          </CheckBoxContainer>
          <ButtonContainer>
          <Button type='submit'>Sing In</Button>
          </ButtonContainer>
          
        </SingInForm>
          <ForgotPassword>
            <ForgotLink to='/'>
                Forgot password?
            </ForgotLink>
          </ForgotPassword>
        </Container>
        
      </Background>
     
     
    </>,
    portalRoot
  );
}

export default SingIn
