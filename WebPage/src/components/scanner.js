import React, { Component } from 'react';
import QrReader from 'react-qr-reader'
import { Input, Row, Col, Button, Card, CardBody, CardImg, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import { isMobile } from "react-device-detect"
import reactAutobind from 'react-autobind';
import MyMap from "../components/maps"
import styles from "../assets/style-module"
const unirest = require('unirest');

class Scanner extends Component {
    constructor(props) {
        super(props);
        reactAutobind(this)
        this.state = {
            cameraId: "environment",
            spaceQR: "ok",
            devices: ["back", "frontal"],
            delay: 200,
            productData: [],
            mapPos: "",
            mapPinsArray: [],
            mapColor: [],
            mapKind: [],
            zoomState: 14,
            solAddress: ""
        }
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    checkDisplay(addr) {
        let _this = this
        unirest('GET', 'https://7757s3sljd.execute-api.us-east-1.amazonaws.com/solana-data')
            .headers({
                'hash': addr
            })
            .end((res) => {
                if (res.error) throw new Error(res.error);
                let temp2 = JSON.parse(res.raw_body)
                let prodTemp = []
                let pinsArray = []
                let colorPin = []
                let mkind = []
                for (let i = 0; i < temp2.length; i++) {
                    let temp = temp2
                    temp = JSON.parse(temp[i].substring(temp[i].indexOf(":") + 3, temp[i].length - 1))
                    temp.loc = temp.loc.split(",")
                    temp.loc = [parseFloat(temp.loc[1]), parseFloat(temp.loc[0])]
                    prodTemp.push(temp)
                    pinsArray.push(temp.loc)
                    colorPin.push(styles.Solana)
                    mkind.push(0)
                }
                _this.setState({
                    productData: prodTemp,
                    mapPos: prodTemp[0].loc,
                    mapPinsArray: pinsArray,
                    mapColorPin: colorPin,
                    mapKind: mkind,
                    solAddress: addr
                })
            });
    }

    handleScan(data) {
        if (data !== null && data !== undefined && this.state.spaceQR !== "none") {
            this.setState({
                spaceQR: "none"
            })
            this.checkDisplay(data)
        }
    }

    handleError(err) {
        // Nothing
    }

    camSelect(event) {
        let temp = "environment"
        if (event.target.value === "frontal") {
            temp = "user"
        }
        this.setState({
            cameraId: temp
        })
    }

    mapPosition(event) {
        let temp = event.target.id.toString()
        this.setState({
            mapPos: this.state.productData[temp].loc,
            zoomState: 14
        })
    }


    render() {
        let previewStyle = {
            width: "94%"
        }
        if (isMobile) {
            previewStyle = {
                height: "100%",
                width: "100%"
            }
        }
        return (
            <div style={{ paddingTop:"50px", width: "80%" }}>
                <Row md="3">
                    <Col>
                        <Input style={{ width: "24vw" }} onChange={this.camSelect} type="select" name="select" id="cameraSelect">
                            {
                                this.state.devices.map((number, index) => <option key={index}>{number}</option>)
                            }
                        </Input>
                        <QrReader
                            delay={this.state.delay}
                            style={previewStyle}
                            onError={this.handleError}
                            onScan={this.handleScan}
                            facingMode={this.state.cameraId}
                        />
                        <div style={{ paddingRight: "10px" }}>
                            <Button style={{ fontSize: "1.5rem" }} onClick={() => {
                                this.setState({
                                    spaceQR: "ok",
                                    productData: []
                                })
                            }}>
                                Escanear Otro Producto
                            </Button>
                        </div>
                    </Col>
                    <Col>
                        {
                            this.state.productData.length > 0 ?
                                <div>
                                        <div style={{textAlign:"center"}}>
                                        <img width="50%" src={this.state.productData[0].imagen}></img>
                                        </div>
                                        <CardBody>
                                            <CardTitle tag="h5" style={{ color: "white" }}>{this.state.productData[0].nombre}</CardTitle>
                                            <CardSubtitle tag="h5" className="mb-2 text-muted" style={{ color: "white" }}>{this.state.productData[0].marca}</CardSubtitle>
                                            <CardText style={{ color: "white" }}>{this.state.productData[0].procedencia}</CardText>
                                            <CardText style={{ color: "white" }}> {this.state.productData[0].categoria}</CardText>
                                        </CardBody>
                                </div>
                                :
                                <>
                                </>
                        }
                    </Col>
                    <Col>
                        {
                            this.state.productData.length > 0 ?
                                <>
                                    <div>Solana Explorer:</div>
                                    <a style={{fontSize:"1.2rem"}} href={`https://explorer.solana.com/address/${this.state.solAddress}?cluster=devnet`} target={"_blank"} >{ }{this.state.solAddress}</a>
                                    <MyMap
                                        coord={this.state.mapPos}
                                        coords={this.state.mapPinsArray}
                                        colors={this.state.mapColor}
                                        kind={[0, 0]}
                                        zoom={this.state.zoomState}
                                    />
                                    {
                                        this.state.productData.map((element, index) => (
                                            <div key={index} id={index} onClick={(event) => {
                                                this.mapPosition(event)
                                            }}>
                                                {
                                                    element.loc[0] + "," + element.loc[1]
                                                }
                                            </div>
                                        ))
                                    }
                                </>
                                :
                                <>
                                </>
                        }
                    </Col>
                </Row>


            </div>
        );
    }
}

export default Scanner;