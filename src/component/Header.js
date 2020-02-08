/**
 *   @Author Daniel (yu hong) Kim
 **/
import React from 'react';
import styled from "styled-components";
import LogoIcon from "./styled/icon/LogoIcon";
import logoImg from '../images/instagram_logo_transparent.png'
import {Input} from "antd";
import IconButton from "./styled/IconButton";
import ExploreIcon from "./styled/icon/ExploreIcon";
import LikeIcon from "./styled/icon/LikeIcon";
import ProfileIcon from "./styled/icon/ProfileIcon";
import {withRouter} from "react-router";

const Wrapper = styled.nav`
  height: 77px;
  background-color: rgba(var(--cdc,255,255,255),1);
  position: fixed;
  display: flex;
  top: 0;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-bottom: 1px solid rgba(var(--b6a,219,219,219),1);
  z-index: 999;
`;
const InnerWrapper = styled.div`
  display: flex;
  max-width: 975px;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const VerticalDivider = styled.div`
  background-color: rgba(var(--i1d,38,38,38),1);
  height: 28px;
  margin: 0 16px;
  -webkit-transition: opacity .1s ease-out;
  transition: opacity .1s ease-out;
  width: 1px;
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const SearchSection = styled.div`
  display: flex;
  flex: 0 1 auto;
  min-width: 125px;
  width: 250px;
  align-items: stretch;
`;
const NavSection = styled.div`
  display: flex;
  width: 156px;
  padding-left: 24px;
  justify-content: space-between;
  
`;

const NavBtn = styled(IconButton)`
  
`;

const handleLogoClick = (history) => {
  history.push('/timeline')
};

const handleProfileClick = (history) => {
  history.push('/randprofile')
};

const Header = ({history}) => {
  return (
    <Wrapper>
      <InnerWrapper>
        <LogoSection onClick={() => handleLogoClick(history)}>
          <LogoIcon/>
          <VerticalDivider/>
          <img src={logoImg} height={29} style={{marginTop: 8}}/>
        </LogoSection>
        <SearchSection>
          <Input placeholder="Search"/>
        </SearchSection>
        <NavSection>
          <NavBtn><ExploreIcon/></NavBtn>
          <NavBtn><LikeIcon/></NavBtn>
          <NavBtn onClick={() => handleProfileClick(history)}><ProfileIcon/></NavBtn>
        </NavSection>
      </InnerWrapper>
    </Wrapper>
  );
};

export default withRouter(Header);