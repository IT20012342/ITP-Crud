import React, { useState } from "react";
import axios from "axios";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';


export default function AddForm() {


    //Validaton errors
    const [emailError, setEmailError] = useState(false);
    const [sidError, SetsidError] = useState(false);





    const [supplierId, setSupplierId] = useState('');
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [country, setCountry] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    //const [emailError, setEmailError] = useState('');



    function formValidate() {
        if (!email.match(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/)) {
            //setEmailError('Incorrect email pattern')
            setEmailError(true);
            return false;
        }
        if (!supplierId.match(/^[S][I][D][0-9]{3}$/)) {
            SetsidError(true)
            return false;
        }
        setEmailError(false);
        SetsidError(false)
        return true;
    }

    function sendData(e) {
        e.preventDefault();
        const isValid = formValidate()

        if (isValid) {
            const newSupplier = {
                supplierId,
                name,
                address,
                country,
                postalCode,
                email,
                phone
            }

            axios.post("http://localhost:8080/supplier/add", newSupplier).then(() => {
                alert("supplier added")
            }).catch((err) => {
                alert("Unable to add" + err);
            })

        }


    }


    return (
        <Form onSubmit={sendData}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Supplier ID</Form.Label>
                <Form.Control type="textarea" placeholder="Enter supplier id"
                    onChange={(e) => {
                        setSupplierId(e.target.value);
                    }}
                    required
                />

                <Toast show={sidError} animation={true}>
                    <Toast.Body> <span style={{ color: 'red', fontSize: 15 }}>Incorrect supplier ID format: SID000</span></Toast.Body>
                </Toast>


                
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Name</Form.Label>
                <Form.Control type="textarea" placeholder="Enter name"
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                    required
                />
            </Form.Group>


            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Address</Form.Label>
                <Form.Control type="textarea" placeholder="Enter address"
                    onChange={(e) => {
                        setAddress(e.target.value);
                    }}
                    required
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Country</Form.Label>
                <Form.Control type="textarea" placeholder="Enter country"
                    onChange={(e) => {
                        setCountry(e.target.value);
                    }}
                    required
                />
            </Form.Group>


            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Postal Code</Form.Label>
                <Form.Control type="textarea" placeholder="Enter postal code"
                    onChange={(e) => {
                        setPostalCode(e.target.value);
                    }}
                    required
                />
            </Form.Group>


            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Email</Form.Label>
                <Form.Control type="textarea" placeholder="Enter email"
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                    required
                />

                <Toast show={emailError} animation={true}>
                    <Toast.Body> <span style={{ color: 'red', fontSize: 15 }}>You have entered an invalid E-mail address.please try again!</span></Toast.Body>
                </Toast>




            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="textarea" placeholder="Enter phone number"
                    onChange={(e) => {
                        setPhone(e.target.value);
                    }}
                    required
                />
            </Form.Group>
            <center>

                <Button variant="primary" type="submit" className='submitBtnForm'>
                    Add Supplier
                </Button>
            </center>
        </Form>
    )
}