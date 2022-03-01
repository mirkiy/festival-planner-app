import React, { useState } from 'react'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText, ClickOutside } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

const NavBarContainer = () => {

    const [expanded, setExpanded] = useState(true);

  return (
    <ClickOutside
    onClickOutside={() => {
        setExpanded(false);
    }}
>
    <SideNav
        expanded={this.state.expanded}
        onToggle={(expanded) => {
            setExpanded(true)}}
            >
    
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">
            <NavItem eventKey="home">
                <NavIcon>
                    <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                </NavIcon>
                <NavText>
                    Home
                </NavText>
            </NavItem>
        </SideNav.Nav>
    </SideNav>
</ClickOutside>
  )
}

export default NavBarContainer