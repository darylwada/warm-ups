import React, { Fragment } from 'react'
import { Form as FinalForm, Field } from 'react-final-form'
import {
  Form,
  Input,
  Button,
  FormGroup,
  InputGroup,
  InputGroupAddon
} from 'reactstrap'

export default function TodoForm(props) {
  return (
    <FinalForm {...props} render={({ handleSubmit }) =>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <InputGroup>
            <Field name="text" render={({ input }) =>
              <Fragment>
                <Input {...input} required autoFocus placeholder="Add something..."/>
                <InputGroupAddon addonType="append">
                  <Button type="submit" color="primary" children="Add"/>
                </InputGroupAddon>
              </Fragment>
            }/>
          </InputGroup>
        </FormGroup>
      </Form>
    }/>
  )
}
