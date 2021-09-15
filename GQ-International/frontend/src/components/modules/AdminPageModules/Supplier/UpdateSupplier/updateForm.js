import React, { useState, useEffect } from "react";
import axios from "axios";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';


export default function UpdateForm({ id }) {



    //alert(id);
    const [supplier, setSupplier] = useState({});

    //const link = ;


    useEffect(() => {
        function getSupplier() {
            axios
                .get(`http://localhost:8080/supplier/get/${id}`)
                .then(res => {
                    console.log(res);
                    setSupplier(res.data);

                }).catch(err => {
                    alert(err.message);
                })
        }
        getSupplier();

    }, [id])

    /*
    useEffect(() => {
        getSupplier();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])
      function getSupplier() {
        fetch(`http://localhost:8080/supplier/get/${id}`).then((result) => {
          result.json().then((resp) => {
            //console.warn(resp)
            setSuppliers(resp)
            alert(suppliers.name);
          })
        })
      } */



    //Validaton errors
    const [emailError, setEmailError] = useState(false);
    const [sidError, SetsidError] = useState(false);

    let [supplierId, setSupplierId] = useState('');
    let [name, setName] = useState('');
    let [address, setAddress] = useState('');
    let [country, setCountry] = useState('');
    let [postalCode, setPostalCode] = useState('');
    let [email, setEmail] = useState('');
    let [phone, setPhone] = useState('');



    //setSupplierId(supplier.supplierId);
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




    function updateData(e) {
        e.preventDefault();
        const isValid = formValidate()

        if (isValid) {

            const updateSupplier = {
                supplierId,
                name,
                address,
                country,
                postalCode,
                email,
                phone
            }

            axios
                .put(`http://localhost:8080/supplier/update/${id}`, updateSupplier)
                .then(() => {
                    alert("supplier updated")
                }).catch((err) => {
                    alert("Unable to update" + err);
                })
        }
    }


    return (
        <Form onSubmit={updateData}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Supplier ID</Form.Label>
                <Form.Control type="textarea" placeholder="Enter supplier id"
                    onChange={(e) => {
                        setSupplierId(e.target.value);
                    }}
                    defaultValue={supplier.supplierId}
                    required
                />

                <Toast show={sidError} animation={true}>
                    <Toast.Body> <span style={{ color: 'red', fontSize: 15 }}>Incorrect supplier ID format: SID000</span></Toast.Body>
                </Toast>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Name</Form.Label>
                <Form.Control type="textarea" defaultValue={supplier.name} placeholder="Enter name"
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Address</Form.Label>
                <Form.Control type="textarea" defaultValue={supplier.address} placeholder="Enter address"
                    onChange={(e) => {
                        setAddress(e.target.value);
                    }}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Country</Form.Label>
                <Form.Control type="textarea" defaultValue={supplier.country} placeholder="Enter country"
                    onChange={(e) => {
                        setCountry(e.target.value);
                    }}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Postal Code</Form.Label>
                <Form.Control type="textarea" defaultValue={supplier.postalCode} placeholder="Enter postal code"
                    onChange={(e) => {
                        setPostalCode(e.target.value);
                    }}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Email</Form.Label>
                <Form.Control type="textarea" defaultValue={supplier.email} placeholder="Enter email"
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />

                <Toast show={emailError} animation={true}>
                    <Toast.Body> <span style={{ color: 'red', fontSize: 15 }}>You have entered an invalid E-mail address.please try again!</span></Toast.Body>
                </Toast>


            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="textarea" defaultValue={supplier.phone} placeholder="Enter phone number"
                    onChange={(e) => {
                        setPhone(e.target.value);
                    }}
                />
            </Form.Group>
            <center>

                <Button variant="primary" type="submit" className='submitBtnForm'>
                    Update Supplier
                </Button>
            </center>
        </Form>
    )
}