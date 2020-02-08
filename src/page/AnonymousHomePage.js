/**
 *   @Author Daniel (yu hong) Kim
 **/
import React, {PureComponent} from 'react';
import styled from "styled-components";
import previewImg from '../images/instagram_preview.png';
import logo from '../images/instagram_logo_white_bg.PNG';
import {Button, Form, Input} from 'antd';
import DefaultFullPage from "../component/styled/DefaultFullPage";
import {Link} from "react-router-dom";


const InnerWrapper = styled.div`
  display: flex;
`;

const PreviewSection = styled.div`
  
`;

const Logo = styled.img`
  margin: 22px 75px;
`;

const Paper = styled.div`
    background-color: #fff;
    border: 1px solid #e6e6e6;
    border-radius: 1px;
    margin: 0 0 10px;
    padding: 10px 0;
`;

const SignupText = styled.h2`
    font-weight: 600;
    line-height: 20px;
    font-size: 17px;
    margin: 0 40px 10px;
    color: #999;
    text-align: center;
`;

const AuthSection = styled.div`
    max-width: 350px;
    margin-left: 20px;
`;

const SignupSubSection = styled(Paper)`

`;

const StyledForm = styled(Form)`
  margin: 30px 40px 6px;
`;

const StyledInput = styled(Input)`
  margin-bottom: 6px;
  height: 36px;
`;
const StyledPasswordInput = styled(Input.Password)`
  margin-bottom: 6px;
  height: 36px;
`;

const PrivacyDisclaimer = styled.p`
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    color: #999;
    margin: 20px 60px 30px 60px;
`;

const LoginSubSection = styled(Paper)`

`;

const LoginSuggestion = styled.p`
  color: #262626;
  font-size: 14px;
  margin: 15px;
  text-align: center;
`;

class AnonymousHomePage extends PureComponent {
  render() {
    return (
      <DefaultFullPage>
        <InnerWrapper>
          <PreviewSection>
            <img src={previewImg}/>
          </PreviewSection>
          <AuthSection>
            <SignupSubSection>
              <Logo src={logo}/>
              <SignupText>Sign up to see photos and videos from your friends.</SignupText>
              <StyledForm>
                <StyledInput placeholder="Email"/>
                <StyledInput placeholder="Full Name"/>
                <StyledInput placeholder="Username"/>
                <StyledPasswordInput placeholder="Password"/>
                <Button type="primary" block={true}>Sign up</Button>
              </StyledForm>
              <PrivacyDisclaimer>
                By signing up, you agree to our <strong>Terms</strong> , <strong>Data Policy</strong> and <strong>Cookies
                Policy</strong> .
              </PrivacyDisclaimer>
            </SignupSubSection>
            <LoginSubSection>
              <LoginSuggestion>
                Have an account? <Link to="/accounts/login">Log in</Link>
              </LoginSuggestion>
            </LoginSubSection>
          </AuthSection>
        </InnerWrapper>
      </DefaultFullPage>
    );
  }
}

AnonymousHomePage.propTypes = {};

export default AnonymousHomePage;