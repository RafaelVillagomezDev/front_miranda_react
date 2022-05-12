import styled from 'styled-components'
import img from '../../assets/background_image.jpg'
export const Container = styled.div`
  background-image: url(${img});
  background-size: cover;
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FormLogin = styled.form`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 12px;
  height: 300px;
  width: 300px;

  border-radius: 32px;
`
export const FormLabel = styled.label`
  padding: 3px;
  font-size: 32px;
  font-weight: bold;
  letter-spacing: 2px;
  color: black;
`
export const FormButton = styled.button`
  padding: 10px;
  border-radius: 10px;
  color: whitesmoke;
  background-color: black;
`
export const FormInput = styled.input`
  outline: none;
  border: none;
  border-bottom: 1px solid red;
  font-size: 12px;
`
