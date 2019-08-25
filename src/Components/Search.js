import React from 'react';
import {  Form, FormGroup,  Input } from 'reactstrap';
const Search=()=>{
    return(
        <div className="serach-form">
            <Form className="serach-form-inline">
                <FormGroup>
                    <Input type="text"  name="search" id="serchelem" placeholder="Discover your next favorite thing…"></Input>
                </FormGroup>
            </Form>
        </div>
    );
}
export default Search;