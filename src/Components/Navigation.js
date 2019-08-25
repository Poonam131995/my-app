import React from 'react';
import {Nav, NavItem,  Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import {Link} from 'react-router-dom';

class Navigations extends React.Component {
    constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        dropdownOpen: false
      };
    }
  
    toggle() {
      this.setState({
        dropdownOpen: !this.state.dropdownOpen
      });
    }
    render=()=>{
    return(
        <div className="product-nav">
        <Nav>
          <NavItem>
           <Link className="nav-link" to="/deals">Deals</Link>
          </NavItem>
          <NavItem>
           <Link  className="nav-link" to="/jobs">Jobs</Link>
          </NavItem>
          <NavItem>
          <Link  className="nav-link" to="/makers">Makers</Link>
          </NavItem>
          <NavItem>
            <Link  className="nav-link" to="/radio">Radio</Link>
          </NavItem>
          <NavItem>
            <Link  className="nav-link" to="/ship">Ship</Link>
          </NavItem>
          <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle nav>
              ...
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem disabled>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Nav>
        </div>
    )
    }
}

export default Navigations;