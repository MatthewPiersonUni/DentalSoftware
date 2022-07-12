import { Text, View, Button, CheckBox, LineEdit, BoxView } from "@nodegui/react-nodegui";
import React from "react";

export class Bookings extends React.Component {

    // Function that returns a component to be drawn, can have children components if the parent component supports it
    render() {
        return (
            <View style="flex: 1; background-color: 'grey';">
                
                <View style="flex-direction: row; justify-content: start; align-items: start;">
                    <LineEdit on={{ textChanged: handleTextChangedNHI }} id={"NHI"} />
                    
                    <Text wordWrap={true} style="color: 'black'; font-size: 15px;">
                        NHI Number
                    </Text>
                </View>

                <View style="flex-direction: row; justify-content: start; align-items: start;">
                    <LineEdit on={{ textChanged: handleTextChangedDate }} />
                    
                    <Text wordWrap={true} style="color: 'black'; font-size: 15px;">
                        Date and Time
                    </Text>

                </View>

                <View style="flex-direction: row; justify-content: start; align-items: start;">
                    <LineEdit on={{ textChanged: handleTextChangedName }} />
                    
                    <Text wordWrap={true} style="color: 'black'; font-size: 15px;">
                        Name
                    </Text>
                </View>

                <View style="flex-direction: row; justify-content: start; align-items: start;">
                    <LineEdit on={{ textChanged: handleTextChangedDentist }} />

                    <Text wordWrap={true} style="color: 'black'; font-size: 15px;">
                        Dentist
                    </Text>
                </View>

                <Button text = {"Complete Booking"} on = {buttonHandler} />

                <Text wordWrap={true} style="color: 'black'; font-size: 15px;">
                        Testing
                </Text>

            </View>
        );
    }
} 
const textStyle = 'color: black;';

var NHInumber:string = "";
var date:string = "";
var name:string = "";
var dentist:string = "";
var confirmText:string = "";

// This will be what happens when the button is clicked.
const buttonHandler = {
    clicked: () => {

        var confirm = 0;

        if (name == "")
        {
            console.log("ERROR: Name must be filled");
            confirm = confirm + 1;
        }

        if (NHInumber == "")
        {
            console.log("ERROR: NHI Number must be filled");
            confirm = confirm + 1;
        }

        if (date == "")
        {
            console.log("ERROR: Date must be filled");
            confirm = confirm + 1;
        }

        if (dentist == "")
        {
            console.log("ERROR: Dentist must be filled");
            confirm = confirm + 1;
        }

        if (confirm == 0)
        {
            console.log("Booking complete! Below are the details input...");
            console.log("Name: " + name);
            console.log("NHI: " + NHInumber);
            console.log("Date: " + date);
            console.log("Dentist: " + dentist);
        }
        else if (confirm == 1)
        {
            console.log("Please fix the issue above");
        }
        else
        {
            console.log("Please fix the " + confirm + " issues above");
        }
    }
};

    const handleTextChangedNHI = (textValue: string) => {
        NHInumber = textValue;
   };
   const handleTextChangedDate = (textValue: string) => {
    date = textValue;
   };
   const handleTextChangedName = (textValue: string) => {
    name = textValue;
   };
   const handleTextChangedDentist = (textValue: string) => {
    dentist = textValue;
   };
   const bookingConfirmText = (textValue: string) => {
    confirmText = "Hello";
   };

export default Bookings;
