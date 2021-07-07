import React, { Component } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import logo from '../assets/logos.svg';
import { Input, Button } from 'reactstrap';
import '../assets/main.css';
import { connect } from "react-redux"
import { change_page_action } from "../redux/actions/syncActions/myActions"
import search_action from "../redux/actions/asyncActions/searchAction"
import Cafe from "../assets/cafe.png"
import Cocoa from "../assets/cocoa.png"
import Miel from "../assets/miel.png"
import Madera from "../assets/madera.png"

class Search extends Component {
    constructor(props) {
        super(props);
        this.state =
        {
            value: ""
        }

    }

    componentDidMount() {

    }


    componentWillUnmount() {

    }

    render() {
        return (
            <div style={{ paddingTop: "60px" }}>
                <img src={logo} className="App-logo" alt="logo" />
                <p style={{ WebkitTextStroke: "0.7px black", fontSize: "2.4rem" }}>
                    Pide productos 100% indigenas y artesanales <p></p> desde la comodidad de tu hogar
                </p>
                Categorias
                <div style={{ paddingLeft: "21vw" }}>
                    <div style={{ paddingRight: "20vw" }} class="box">
                        <div onClick={
                            () => {
                                this.props.search_action()
                                this.props.change_page_action(1)
                            }
                        } style={{ margin: "10px" }}>
                            <img style={{ borderRadius: "25px 25px 25px 25px" }} width="200px" src={Cafe}></img>
                            <div>
                                Cafe
                            </div>
                        </div>
                        <div>
                        </div>
                        <div onClick={
                            () => {
                                this.props.search_action()
                                this.props.change_page_action(1)
                            }
                        } style={{ margin: "10px" }}>
                            <img style={{ borderRadius: "25px 25px 25px 25px" }} width="200px" src={Miel}></img>
                            <div>
                                Miel
                            </div>
                        </div>
                        <div onClick={
                            () => {
                                this.props.search_action()
                                this.props.change_page_action(1)
                            }
                        } style={{ margin: "10px" }}>
                            <img style={{ borderRadius: "25px 25px 25px 25px" }} width="200px" src={Cocoa}></img>
                            <div>
                                Cacao
                            </div>
                        </div>
                        <div onClick={
                            () => {
                                this.props.search_action()
                                this.props.change_page_action(1)
                            }
                        } style={{ margin: "10px" }}>
                            <img style={{ borderRadius: "25px 25px 25px 25px" }} width="200px" src={Madera}></img>
                            <div>
                                Artesanias
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps =
{
    change_page_action,
    search_action
}

export default connect(null, mapDispatchToProps)(Search);