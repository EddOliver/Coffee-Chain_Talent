import React, { Component } from 'react';
import { Card, Row, Col, Button, Modal, ModalBody, ModalFooter } from "reactstrap"
import { CardBody, Input, CardHeader } from 'reactstrap';
import { Spinner } from 'reactstrap';
import { connect } from "react-redux"
import '../assets/main.css';
import ModalHeader from 'react-bootstrap/esm/ModalHeader';
import reactAutobind from 'react-autobind';
import { add_to_cart_action } from "../redux/actions/syncActions/myActions"
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

class Products extends Component {
    constructor(props) {
        super(props);
        reactAutobind(this)
        this.state = {
            brands: [],
            products: [],
            modalState: false,
            quantityValue: 1,
            buttonLabel: "Agregar al Carrito",
            stateButton: false,
            modalProduct: {
                "categoria": "SeedValue",
                "codigo": "SeedValue",
                "descripcion": "SeedValue",
                "extra": "SeedValue",
                "gramaje": "250.0",
                "imagen": "https://i.ibb.co/9cLw0y6/image.png",
                "marca": "SeedValue",
                "nombre": "SeedValue",
                "precio": "135.0",
                "procedencia": "SeedValue",
                "solana-account": "SeedValue",
                "solana-sign": "SeedValue",
                "stock": "350.0"
            }
        }
        this.reduxChanges=""
    }

    componentDidMount() {
        this.reduxChanges = setInterval(() => {
            if(this.props.search.result !== ''){
                let temp = []
                temp.push(this.props.search.result[0].marca)
                for (let i = 0; i < this.props.search.result.length; i++) {
                    temp.push(this.props.search.result[i].marca)
                }
                let uniqueChars = [...new Set(temp)];
                this.setState({
                    brands: uniqueChars
                })
                clearInterval(this.reduxChanges)
            }
          }, 500);
    }

    componentWillUnmount() {

    }

    setupModal(event) {
        this.setState({
            modalState: true,
            modalProduct: this.props.search.result[parseInt(event.target.id)]
        })
    }

    valueAddReduce(event) {
        if (event === "add") {
            this.setState({
                quantityValue: this.state.quantityValue + 1
            })
        }
        else if (event === "reduce") {
            if (this.state.quantityValue > 1) {
                this.setState({
                    quantityValue: this.state.quantityValue - 1
                })
            }
        }
    }

    cartAddRemove() {
        this.props.add_to_cart_action(this.state.modalProduct)
        this.setState({
            buttonLabel: "Agregado",
            stateButton: true
        })
    }

    closeModal() {
        this.setState({
            modalState: false,
            buttonLabel: "Agregar al Carrito",
            stateButton: false
        })
    }

    addCart(event){
        this.props.add_to_cart_action(this.props.search.result[parseInt(event)])
    }

    render() {
        return (
            <>
                {
                    !this.props.search.loading ?
                        <div style={{ paddingTop: "16vh", width: "96%" }}>
                            <Modal isOpen={this.state.modalState}>
                                <ModalHeader style={{fontSize:"2rem"}}>{this.state.modalProduct.categoria}</ModalHeader>
                                <ModalBody>
                                    <Row>
                                        <Col>
                                            <img style={{ margin: "20px" }} width={200} height={260} src={this.state.modalProduct.imagen}></img>
                                            <div>
                                                {this.state.modalProduct.nombre}{" "}{parseInt(this.state.modalProduct.gramaje)}g
                                            </div>
                                            <div>
                                                {this.state.modalProduct.marca}
                                            </div>
                                            <br />
                                            <div>
                                                <div className="box">
                                                    <div style={{ paddingTop: "4px" }}>
                                                        <AddIcon id="add" onClick={() => this.valueAddReduce("add")} />
                                                    </div>
                                                    <div>
                                                        <Input style={{ textAlign: "center", width: "90px" }} value={this.state.quantityValue} type="number" defaultValue={1} />
                                                    </div>
                                                    <div id="reduce" onClick={() => this.valueAddReduce("reduce")} style={{ paddingTop: "4px" }}>
                                                        <RemoveIcon />
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col>
                                            <div>
                                                {this.state.modalProduct.descripcion}
                                                <ul style={{ fontSize: "0.8rem" }}>
                                                    {
                                                        this.state.modalProduct.extra.split(";").map((element, index) => (
                                                            <li key={index}>{element}</li>
                                                        ))
                                                    }
                                                </ul>
                                            </div>
                                            <div style={{ fontSize: "2rem", fontWeight: "bolder" }}>
                                                ${this.state.modalProduct.precio}
                                            </div>
                                            <div>
                                                Origen: {this.state.modalProduct.procedencia}
                                            </div>
                                        </Col>
                                    </Row>
                                    <br />
                                </ModalBody>
                                <ModalFooter>
                                    <Button disabled={this.state.stateButton} color="success" onClick={this.cartAddRemove}>{this.state.buttonLabel}</Button>{' '}
                                    <Button color="secondary" onClick={this.closeModal}>Cerrar</Button>
                                </ModalFooter>
                            </Modal>
                            <Row md="8" style={{ paddingBottom: "38vh" }}>
                                <Col xs="2">
                                    <div>Filtrar por</div>
                                    <Input type="select" name="select" id="exampleSelect">
                                        {
                                            this.state.brands.map((element, index) => (
                                                <option key={index}>{element}</option>
                                            ))
                                        }
                                    </Input>
                                    <br />
                                    <br />
                                    <br />
                                    <div>Ordenar por</div>
                                    <Input type="select" name="select" id="exampleSelect">
                                        <option>Mayor Precio</option>
                                        <option>Menor Precio</option>
                                    </Input>
                                </Col>
                                <Col xs="10">
                                    <div style={{ paddingRight: "66vw" }}>
                                        Resultados de {this.state.busqueda}
                                    </div>
                                    <div>
                                        <Card>
                                            <CardHeader style={{ color: "black" }}>
                                                <div className="box" style={{ overflowX: "auto" }}>
                                                    {
                                                        this.state.brands.map((element, index) => (
                                                            <div className="brands" style={{ margin: "10px", borderColor: "black", borderWidth: "2px", borderStyle: "solid", borderRadius: "25px" }} key={index}>
                                                                <div style={{margin:"10px", top: "50%"}}>
                                                                    {element}
                                                                </div>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </CardHeader>
                                            <CardBody style={{ color: "black" }}>
                                                <div className="box" style={{ overflowX: "auto" }}>
                                                    {
                                                        this.props.search.result.map((element, index) => (
                                                            <div key={index}>
                                                                <img
                                                                    id={index}
                                                                    onClick={this.setupModal} width={100} height={130} src={element.imagen}></img>
                                                                <div>
                                                                    ${element.precio}
                                                                </div>
                                                                <div style={{ width: "13vw", fontSize: "1rem" }}>
                                                                    {element.nombre}
                                                                </div>
                                                                <div>
                                                                    <Button color="success" onClick={()=>this.addCart(index)} style={{ borderRadius: "30px" }}>Agregar al Carrito</Button>
                                                                </div>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        :
                        <Spinner color="primary" />
                }
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        search: state.search
    }
}

const mapDispatchToProps =
{
    add_to_cart_action
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);