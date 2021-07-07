import React, { Component } from 'react';
import logo from '../assets/logos.svg';
import { Input, Modal, ModalHeader, Col, ModalBody, ModalFooter, Row, Button } from 'reactstrap';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import shop from "../assets/shop.png"
import reactAutobind from 'react-autobind';
import { connect } from "react-redux"
import { change_page_action, remove_to_cart_action } from "../redux/actions/syncActions/myActions"
const publicIp = require('public-ip');
const unirest = require('unirest');

class MainBar extends Component {
    constructor(props) {
        super(props);
        reactAutobind(this)
        this.state = {
            location: [],
            cartOpen: false
        }
    }

    async componentDidMount() {
        console.log(this.props.my_cart.cart)
        let publics = await publicIp.v4()
        let _this = this
        unirest('GET', `http://ipwhois.app/json/${publics}`)
            .end((res) => {
                if (res.error) throw new Error(res.error);
                console.log(JSON.parse(res.raw_body).latitude);
                console.log(JSON.parse(res.raw_body).longitude);
                _this.setState({
                    location: [JSON.parse(res.raw_body).latitude.substring(0, 7), JSON.parse(res.raw_body).longitude.substring(0, 8)]
                })
            });
    }

    componentWillUnmount() {

    }

    checkOut() {
        if (this.props.my_cart.price > 0) {
            unirest('GET', 'https://7757s3sljd.execute-api.us-east-1.amazonaws.com/create-checkout')
                .headers({
                    'amount': this.props.my_cart.price.toString()
                })
                .end((res) => {
                    if (res.error) throw new Error(res.error);
                    window.open(JSON.parse(res.raw_body).data.redirect_url)
                });
        }
    }

    render() {
        return (
            <div style={{ width: "94%", top: "10px", position: "absolute" }}>
                <Modal isOpen={this.state.cartOpen} backdrop="static">
                    <ModalHeader>Productos</ModalHeader>
                    <ModalBody>
                        <div style={{ overflow: "auto", height: "400px" }}>
                            {
                                this.props.my_cart.cart.map((element, index) => (
                                    <div style={{ width: "96%" }}>
                                        <Row md="3">
                                            <Col xs="5">
                                                <div>
                                                    <img
                                                        id={index}
                                                        width={100} height={130} src={element.imagen}></img>
                                                    <div style={{ fontSize: "2rem" }}>
                                                        ${element.precio}
                                                    </div>
                                                    <div style={{ width: "13vw", fontSize: "1rem" }}>
                                                        {element.nombre}
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xs="5">
                                            <div style={{fontSize:"1rem",paddingLeft:"30px", textAlign:"center"}}>
                                                Con esta compra estas ayudando directamente a productores de {element.procedencia}
                                            </div>
                                            </Col>
                                            <Col xs="2">
                                                <div style={{textAlign:"right"}}>
                                                    <Button onClick={() => this.props.remove_to_cart_action(element)} style={{ width: "100px", height: "60px" }}>Eliminar del carrito</Button>
                                                </div>
                                            </Col>
                                        </Row>
                                        <br/>
                                    </div>
                                ))
                            }
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <div style={{ paddingRight: "160px", fontSize: "2rem" }}>
                            ${
                                this.props.my_cart.price
                            }
                        </div>
                        <Button color="success" onClick={() => {
                            this.setState({
                                cartOpen: false
                            }, this.checkOut)
                        }}>Checkout</Button>{' '}
                        <Button color="secondary" onClick={() => {
                            this.setState({
                                cartOpen: false
                            })
                        }}>Cancel</Button>
                    </ModalFooter>
                </Modal>
                <Row md="3">
                    <Col style={{ paddingLeft: "40px", textAlign: "left" }} xs="4">
                        <div className="box">
                            <div>
                                <img onClick={() => this.props.change_page_action(0)} src={logo} width="80px" alt="logo" />
                            </div>
                            <>
                                &nbsp;
                                &nbsp;
                            </>
                            <div style={{ paddingTop: "26px" }}>
                                <Input style={{ width: '300px' }} onClick={
                                    (event) => {
                                        if (event.target.value === "Tienda en linea") {
                                            this.props.change_page_action(0)
                                        }
                                        else {
                                            this.props.change_page_action(2)
                                        }
                                    }
                                } type="select" name="search" id="search" placeholder="Busca cualquier producto">
                                    <option>Tienda en linea</option>
                                    <option>Escaner de Procedencia</option>
                                </Input>
                            </div>
                        </div>
                    </Col>
                    <Col style={{ padding: "20px", textAlign: "center" }} xs="4">
                        <>
                            {<LocationOnIcon />}{this.state.location[0]}{","}{this.state.location[1]}
                        </>
                    </Col>
                    <Col style={{ padding: "20px", textAlign: "right" }} xs="4">
                        <>
                            <img onClick={() => {
                                this.setState({
                                    cartOpen: !this.state.cartOpen
                                })
                            }} src={shop} width="80px" alt="logo" />
                        </>
                    </Col>
                </Row>
            </div>
        );
    }
}


const mapDispatchToProps =
{
    change_page_action,
    remove_to_cart_action
}

const mapStateToProps = (state) => {
    return {
        my_cart: state.my_cart
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainBar);