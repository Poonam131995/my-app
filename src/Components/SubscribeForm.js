import React from 'react';
import { Button, Form, FormGroup,  Input  } from 'reactstrap';

export default class SubscribeForm extends React.Component {
  render() {
    return (
      <Form className="form-filter">
          <h6>Don’t miss your dream job</h6>
          <p>Get email updates when new jobs are added.</p>
         <FormGroup>
              <Input type="email" name="subscribe-email" id="subscribe-email" placeholder="your@email.com" />
            </FormGroup>
            <Button color="danger" size="sm" block>Subscribe</Button>
      </Form>
    );
  }
}