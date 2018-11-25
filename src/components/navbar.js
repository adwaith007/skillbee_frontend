import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
// import M from 'materialize-css';

class MyNav extends React.Component{

    // componentDidMount(){
    //     const node=ReactDOM.findDOMNode(this);
    //     if(node instanceof HTMLElement){
    //         const child = node.querySelector('.sidenav');
    //         var elems = node.querySelectorAll('.sidenav');
    //         var instances = M.Sidenav.init(elems);
    //     }
    // }
    render(){
        return (
            <div>
                <nav className="blue darken-4">
                    <div className="nav-wrapper container">
                    <a href="#" className="brand-logo" onClick={() => this.props.changeTab(1)}>SkillBee</a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li className={this.props.tab===1?"active":" "}><a href="#" onClick={() => this.props.changeTab(1)}>Institute Find</a></li>
                        <li className={this.props.tab===2?"active":" "}><a href="#" onClick={() => this.props.changeTab(2)}>Search</a></li>
                        <li className={this.props.tab===3?"active":" "}><a href="#" onClick={() => this.props.changeTab(3)}>Add</a></li>
                    </ul>
                    </div>
                </nav>

                <ul className="sidenav" ref="" id="mobile-demo">
                    <li><a href="#" onClick={() => this.props.changeTab(1)}>Institute Find</a></li>
                    <li><a href="#" onClick={() => this.props.changeTab(2)}>Search</a></li>
                    <li><a href="#" onClick={() => this.props.changeTab(3)}>Add</a></li>
                </ul>
            </div>
            // <nav>
            //     <div className="nav-wrapper container">
            //     <a href="#" className="brand-logo">SkillBee</a>
            //         <ul id="nav-mobile" className="right hide-on-med-and-down">
            //             <li><a href="#" onClick={() => this.props.changeTab(1)}>Institute Find</a></li>
            //             <li><a href="#" onClick={() => this.props.changeTab(2)}>Search</a></li>
            //             <li><a href="#" onClick={() => this.props.changeTab(3)}>Add</a></li>
            //         </ul>
            //     </div>
            // </nav>
            // <Navbar brand='SkillBee' right>
            //     <NavItem onClick={() => this.props.changeTab(1)}>Institute Find</NavItem>
            //     <NavItem onClick={() => this.props.changeTab(2)}>Search</NavItem>
            //     <NavItem onClick={() => this.props.changeTab(3)}>Add</NavItem>
            // </Navbar>
        )
    }
}

export default MyNav;