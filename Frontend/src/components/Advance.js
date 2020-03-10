import React, { Component } from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  Button,
  Linking,
  KeyboardAvoidingView,
  TouchableHighlight
} from "react-native";
import moment from "moment";
var t = require("tcomb-form-native");
const Form = t.form.Form;

const Name = t.refinement(t.String, Name => {
  const regex = /^[a-zA-Z].*[\s\.]*$/g;
  return regex.test(Name);
});

var Gender = t.enums({
  M: "Male",
  F: "Female"
});

var Status = t.enums({
  Permanent: "Permanent",
  Temporary: "Temporary"
});

const AdvanceForm = t.struct({
  ...Form.User,
  Date: t.Date,
  Name: Name,
  Gender: Gender,
  Position: t.maybe(t.String),
  Status: Status,
  AdvancedAmount: t.Number,
  Decription: t.maybe(t.String)
});

const formStyles = {
  ...Form.stylesheet,
  //   formGroup: {
  //     normal: {
  //       marginBottom: 5
  //     }
  //   },
  controlLabel: {
    normal: {
      color: "#650205",
      fontSize: 20
    },

    error: {
      color: "red",
      fontSize: 18,
      marginBottom: 7,
      fontWeight: "600"
    }
  }
};

const options = {
  ...Form.options,
  fields: {
    Date: {
      label: "Date",
      mode: "date",
      error: "Please enter a correct date",
      returnKeyType: "next",
      config: {
        defaultValueText: "Select",
        format: date => moment(date).format("DD-MM-YYYY")
      }
    },
    Name: {
      autoFocus: true,
      label: "Name",
      error: "Please enter a correct Name",
      returnKeyType: "next"
    },
    Gender: {
      label: "Gender",
      error: "You must select gender",
      returnKeyType: "next",
      config: {
        defaultValueText: "Select"
      }
    },
    Position: {
      label: "Position",
      error: "Please enter the employee's position",
      returnKeyType: "next"
    },
    Status: {
      label: "Status",
      error: "Please enter the status of the employee",
      returnKeyType: "next"
    },
    AdvancedAmount: {
      label: "Amount",
      error: "Please enter a correct advance Amount",
      returnKeyType: "next"
    },
    Description: {
      label: "Description",
      error: "Put a description",
      config: {
        multiline: true
      }
    }
  },
  stylesheet: formStyles
};

export default class Advance extends Component {
  constructor() {
    super();
    this.state = {};
  }
  InsertDataToServer = () => {
    fetch("http://0391f5f2.ngrok.io/advances", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        date: this.Date,
        name: this.Name,
        gender: this.Gender,
        position: this.Position,
        status: this.Status,
        advanceamnt: this.AdvancedAmount,
        description: this.Description
      })
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log("Advance captured", responseJson);
        alert("Success!");
        // this.props.navigation.navigate("Login");
      })
      .catch(error => {
        console.error(error);
      });
  };

  handleSubmit = () => {
    const value = this._form.getValue();
    console.log(value);
    if (value != null) {
      (this.Date = value.Date),
        (this.Name = value.Name),
        (this.Gender = value.Gender),
        (this.Position = value.Position),
        (this.Status = value.Status),
        (this.AdvancedAmount = value.AdvancedAmount),
        (this.Description = value.Description),
        this.InsertDataToServer();
    }
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <ScrollView>
          <View>
            <Text style={styles.title}>Advance Form</Text>
            <Form
              ref={c => (this._form = c)}
              type={AdvanceForm}
              options={options}
            />
            <TouchableHighlight>
              <View style={styles.button}>
                <Button
                  color="#0A802B"
                  title="SAVE"
                  onPress={this.handleSubmit}
                />
              </View>
            </TouchableHighlight>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginTop: 15,
    padding: 20
  },
  title: {
    fontSize: 35,
    marginTop: 5,
    color: "#650205",
    textAlign: "center",
    marginBottom: 25
  },
  button: {
    marginBottom: 15
  }
});
