import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const ReceiptForm = () => {
    const [items, setItems] = useState([])
    const handleAddItem = (event) =>{
        event.preventDefault();
        const date = event.target.date.value;
        const amount = event.target.amount.value;
        const payment = event.target.payment.value;
        const remark = event.target.remark.value;
        const allItems = [{date,amount, payment, remark}]
        setItems(...allItems, allItems)
        console.log(items);
    }
    return (
        <div className='container w-50 mt-5'>
            <Form onSubmit={handleAddItem}>
                <Form.Group className="mb-3 d-flex justify-content-between align-items-center" controlId="formBasicDate">
                    <Form.Label>Date</Form.Label>
                    <Form.Control className='w-75' name='date' type="date" placeholder="Enter date" />
                </Form.Group>
                <Form.Group className="mb-3 d-flex justify-content-between align-items-center" controlId="formBasicAmount">
                    <Form.Label>Amount</Form.Label>
                    <Form.Control className='w-75' name='amount' type="text" placeholder="Enter Amount (in INR)" />
                </Form.Group>
                <Form.Group className="mb-3 d-flex justify-content-between align-items-center" controlId="formBasicPayment">
                    <Form.Label>Payment Mode</Form.Label>
                    <select name='payment' class="w-75" id="inlineFormCustomSelect">
                        <option selected>Choose...</option>
                        <option value="cash">Cash</option>
                        <option value="cheque">Cheque</option>
                        
                    </select>
                </Form.Group>
                <Form.Group className="mb-3 d-flex justify-content-between align-items-center" controlId="formBasicRemark">
                    <Form.Label>Remark</Form.Label>
                    <Form.Control name='remark' className='w-75' type="taxt" placeholder="Enter Remark" />
                </Form.Group>

                
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

            
        </div>
    );
};

export default ReceiptForm;