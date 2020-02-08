/**
 *   @Author Daniel (yu hong) Kim
 **/
import React, {PureComponent} from 'react';
import styled from 'styled-components';
import DefaultFullPage from "../component/styled/DefaultFullPage";
import WhitePaper from "../component/styled/WhitePaper";
import logo from "../images/instagram_logo_white_bg.PNG";
import {Button, Form, Input} from "antd";
import {withRouter} from "react-router";

const Logo = styled.img`
  margin: 22px 75px;
`;

const InnerWrapper = styled.div`
  max-width: 350px;
`;

const StyledForm = styled(Form)`
  margin: 10px 40px 6px;
`;
const StyledInput = styled(Input)`
  margin-bottom: 6px;
  height: 36px;
`;
const StyledPasswordInput = styled(Input.Password)`
  margin-bottom: 6px;
  height: 36px;
`;
const LoginButton = styled(Button)`
  margin-top: 8px;
`;

const ForgotPasswordWrapper = styled.p`
  text-align: center;
  font-size: 12px;
  margin-top: 30px;
  
  & a {
    color: #003569;
    
    &:active, &:hover {
      color: #003569;
    }
  }
`;

const SignupSuggestion = styled.p`
  color: #262626;
  font-size: 14px;
  margin: 15px;
  text-align: center;
`;

class LoginPage extends PureComponent {
  constructor(props) {
    super(props);
  }

  handleLogin = () => {
    const {history} = this.props;
    history.push("/timeline")
  };


  render() {
    return (
      <DefaultFullPage>
        <InnerWrapper>
          <WhitePaper>
            <Logo src={logo}/>
            <StyledForm>
              <StyledInput placeholder="username or email"/>
              <StyledPasswordInput placeholder="Password"/>
              <LoginButton type="primary" block={true} onClick={this.handleLogin}><strong>Log In</strong></LoginButton>
              <ForgotPasswordWrapper><a>Forgot password?</a></ForgotPasswordWrapper>
            </StyledForm>
          </WhitePaper>
          <WhitePaper>
            <SignupSuggestion>
              Don't have an account? <a>Sign up</a>
            </SignupSuggestion>
          </WhitePaper>
        </InnerWrapper>
      </DefaultFullPage>
    );
  }
}

LoginPage.propTypes = {};

export default withRouter(LoginPage);