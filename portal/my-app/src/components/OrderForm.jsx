import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Form, Field } from 'react-final-form';
import { TextField, Checkbox, Radio, Select } from 'final-form-material-ui';
import {
  Typography,
  Paper,
  Link,
  Grid,
  Button,
  CssBaseline,
  RadioGroup,
  FormLabel,
  MenuItem,
  FormGroup,
  FormControl,
  FormControlLabel,
} from '@material-ui/core';
import {
  MuiPickersUtilsProvider,
  TimePicker,
  DatePicker,
} from '@material-ui/pickers';

const onSubmit = async values => {
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};

const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  }
  if (!values.contact) {
    errors.contact = 'Required';
  }
  if (!values.address) {
    errors.address = 'Required';
  }
  return errors;
};

let dateToday = () => {
  let date = new Date().toJSON();
  return date.slice(0, 16);
}

function OrderForm() {
  let [order, setOrder] = useState({ name: '', contact: '', address: '', email: '', bookingDate: dateToday(), deliveryDate: dateToday(), comments: '' });

  // let onReset = () => {
  //   setOrder({ name: '', contact: '', address: '', email: '', bookingDate: dateToday(), deliveryDate: dateToday(), comments: '' })
  // };

  return (
    <div style={{ padding: 16, margin: 'auto', maxWidth: 800 }}>
      <CssBaseline />
      <Form
        onSubmit={onSubmit}
        initialValues={order}
        validate={validate}
        render={({ handleSubmit, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit} noValidate>
            <Paper style={{ padding: 16 }}>
              <Grid container alignItems="flex-start" spacing={2}>
                <Grid item xs={6}>
                  <Field
                    fullWidth
                    required
                    name="name"
                    component={TextField}
                    type="text"
                    label="Full Name"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    fullWidth
                    required
                    name="contact"
                    component={TextField}
                    type="number"
                    label="Phone Number"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    name="address"
                    fullWidth
                    required
                    component={TextField}
                    type="text"
                    label="Address"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    name="email"
                    fullWidth
                    component={TextField}
                    type="email"
                    label="Email"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    name="bookingDate"
                    fullWidth
                    required
                    component={TextField}
                    type="datetime-local"
                    label="Booking Date"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    name="deliveryDate"
                    fullWidth
                    required
                    component={TextField}
                    type="datetime-local"
                    label="Delivery Date"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    fullWidth
                    name="comments"
                    component={TextField}
                    multiline
                    label="Additional Comments"
                  />
                </Grid>
                {/* <Grid item xs={12}>
                  <Field
                    fullWidth
                    name="city"
                    component={Select}
                    label="Select a City"
                    formControlProps={{ fullWidth: true }}
                  >
                    <MenuItem value="London">London</MenuItem>
                    <MenuItem value="Paris">Paris</MenuItem>
                    <MenuItem value="Budapest">
                      A city with a very long Name
                    </MenuItem>
                  </Field>
                </Grid> */}
                {/* <Grid item style={{ marginTop: 16 }}>
                  <Button
                    type="button"
                    variant="contained"
                    disabled={submitting || pristine}
                    onClick={onReset}
                  >
                    Reset
                  </Button>
                </Grid> */}
                <Grid item style={{ marginTop: 16 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={submitting}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Paper>
            {/* <pre>{JSON.stringify(values, 0, 2)}</pre> */}
          </form>
        )}
      />
    </div>
  );
}

export default OrderForm;

{/* <Grid item xs={6}>
  <FormControlLabel
    label="Employed"
    control={
      <Field
        name="employed"
        component={Checkbox}
        type="checkbox"
      />
    }
  />
</Grid>
<Grid item>
  <FormControl component="fieldset">
    <FormLabel component="legend">Best Stooge</FormLabel>
    <RadioGroup row>
      <FormControlLabel
        label="Larry"
        control={
          <Field
            name="stooge"
            component={Radio}
            type="radio"
            value="larry"
          />
        }
      />
      <FormControlLabel
        label="Moe"
        control={
          <Field
            name="stooge"
            component={Radio}
            type="radio"
            value="moe"
          />
        }
      />
      <FormControlLabel
        label="Curly"
        control={
          <Field
            name="stooge"
            component={Radio}
            type="radio"
            value="curly"
          />
        }
      />
    </RadioGroup>
  </FormControl>
</Grid>
<Grid item>
  <FormControl component="fieldset">
    <FormLabel component="legend">Sauces</FormLabel>
    <FormGroup row>
      <FormControlLabel
        label="Ketchup"
        control={
          <Field
            name="sauces"
            component={Checkbox}
            type="checkbox"
            value="ketchup"
          />
        }
      />
      <FormControlLabel
        label="Mustard"
        control={
          <Field
            name="sauces"
            component={Checkbox}
            type="checkbox"
            value="mustard"
          />
        }
      />
      <FormControlLabel
        label="Salsa"
        control={
          <Field
            name="sauces"
            component={Checkbox}
            type="checkbox"
            value="salsa"
          />
        }
      />
      <FormControlLabel
        label="Guacamole 🥑"
        control={
          <Field
            name="sauces"
            component={Checkbox}
            type="checkbox"
            value="guacamole"
          />
        }
      />
    </FormGroup>
  </FormControl>
</Grid> */}