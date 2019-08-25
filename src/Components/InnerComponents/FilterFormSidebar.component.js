import React from 'react';
import {  Form, FormGroup, Label, Input } from 'reactstrap';

export default class FilterForm extends React.Component {
  render() {
    return (
      <Form className="form-filter">
         <FormGroup>
          <Label for="categoryselect">Category</Label>
          <Input type="select" name="categoryselect" id="categoryselect">
            <option>Analytic</option>
            <option>CRM</option>
            <option>Contract</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="locations">Location</Label>
          <Input type="select" name="locations" id="locations">
            <option>Americas</option>
            <option>Barcelona</option>
            <option>Remote</option>
          </Input>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" /> Remote jobs only
          </Label>
        </FormGroup>
      </Form>
    );
  }
}