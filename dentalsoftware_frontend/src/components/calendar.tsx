import { Text, View, Button, ScrollArea } from "@nodegui/react-nodegui";
import React from "react";
import { getWeekdayStart } from "./helpers/calendarHelper";
import { getMonthDayCount } from "./helpers/calendarMonthDayCount";
import { getWeekdaySelected } from "./helpers/calendarDisplaySelectedDate";

export class Calendar extends React.Component<any, any> {

  constructor(props: any) {
    var date = new Date();
    super(props);
    this.state = {
        month: [],
        day: [],
        year: date.getFullYear(),
        daySelected: 0,
        weekDaySelected: getWeekdayStart(date.getMonth(), date.getFullYear()),
        monthSelected: date.getMonth(),
        monthDayCount: getMonthDayCount(date.getMonth(), date.getFullYear()),

        currentDaySelected: 0,
        currentMonthSelected: 0,
        currentYearSelected: 0,
        currentWeekdaySelected: 0,

        rightHandMessage: true,
        rightHandDateInfo: false
    }
  }

    render() {

      //Sets the day values in a state based array
      this.state.day[0] = "Monday";
      this.state.day[1] = "Tuesday";
      this.state.day[2] = "Wednesday";
      this.state.day[3] = "Thursday";
      this.state.day[4] = "Friday";
      this.state.day[5] = "Saturday";
      this.state.day[6] = "Sunday";
      
      //Sets the months in a state based array
      this.state.month[0] = "January";
      this.state.month[1] = "February";
      this.state.month[2] = "March";
      this.state.month[3] = "April";
      this.state.month[4] = "May";
      this.state.month[5] = "June";
      this.state.month[6] = "July";
      this.state.month[7] = "August";
      this.state.month[8] = "September";
      this.state.month[9] = "October";
      this.state.month[10] = "November";
      this.state.month[11] = "December";

      //NOTE: THE VALUES ABOVE ARE 1 BEHIND THE ACTUAL ASSOCIATION DUE TO IT BEING AN ARRAY HELPER
      //i.e. JANUARY = 0 rather than 1

        //Will hold the calendar days to be printed out later
        var calendar1:any = [];
        var calendar2:any = [];
        var calendar3:any = [];
        var calendar4:any = [];
        var calendar5:any = [];
        var calendar6:any = [];

        //Button handler for when increasing the month or year
        const buttonHandlerIncreaseMonth = {
          clicked: () => {
              if (this.state.monthSelected == 11)
              {
                  this.setState({year: this.state.year + 1})
                  this.setState({monthSelected: 0})
              }
              else
              {
                  this.setState({monthSelected: this.state.monthSelected + 1})
              }

              //Sets the weekday start for each month using a function from another file (calendayHelper.tsx)
              this.setState({weekDaySelected: getWeekdayStart(this.state.monthSelected, this.state.year)});
              this.setState({monthDayCount: getMonthDayCount(this.state.monthSelected, this.state.year)}); 
          }
        }
        
        //Button handler for when decreasing the month or year
        const buttonHandlerDecreaseMonth = {
          clicked: () => {
              if (this.state.monthSelected == 0)
              {
                  this.setState({year: this.state.year - 1})
                  this.setState({monthSelected: 11})
              }
              else
              {
                  this.setState({monthSelected: this.state.monthSelected - 1})
              }

              //Sets the weekday start for each month using a function from another file (calendayHelper.tsx)
              this.setState({weekDaySelected: getWeekdayStart(this.state.monthSelected, this.state.year)});
              this.setState({monthDayCount: getMonthDayCount(this.state.monthSelected, this.state.year)});
          }
        }

        for (var i = 0; i < 7; i++) {

          if (i >= this.state.weekDaySelected)
          {
            let buttonName_0 = (i + (1 - this.state.weekDaySelected)).toString();
            calendar1.push( 
              <View style="border: 1px solid black; height: 100px; width: 100px;">
                <Button text={ buttonName_0 } style="height: 100px; width: 100px;" on={{clicked: () => this.setState(
                  {daySelected: buttonName_0,
                    rightHandDateInfo: true,
                    rightHandMessage: false,
                  
                    currentMonthSelected: this.state.monthSelected,
                    currentYearSelected: this.state.year,
                    currentWeekdaySelected: getWeekdaySelected(this.state.monthSelected, this.state.year, buttonName_0)}
                  )}} />
              </View>
              )
          }
          else
          {
            calendar1.push( 
              <View style="border: 1px solid black; height: 100px; width: 100px; background-color: 'grey';">
                <Text></Text>
              </View>
              )
          }
          
          let buttonName_1 = (i + (8 - this.state.weekDaySelected)).toString();
          calendar2.push( 
            <View style="border: 1px solid black; height: 100px; width: 100px;">
              <Button text={ buttonName_1 } style="height: 100px; width: 100px;" on={{clicked: () => this.setState(
                {daySelected: buttonName_1,
                  rightHandDateInfo: true,
                  rightHandMessage: false,
                
                  currentMonthSelected: this.state.monthSelected,
                  currentYearSelected: this.state.year,
                  currentWeekdaySelected: getWeekdaySelected(this.state.monthSelected, this.state.year, buttonName_1)}
                )}} />
            </View>
          )

          let buttonName_2 = (i + (15 - this.state.weekDaySelected)).toString();
          calendar3.push( 
            <View style="border: 1px solid black; height: 100px; width: 100px;">
              <Button text={ buttonName_2 } style="height: 100px; width: 100px;" on={{clicked: () => this.setState(
                {daySelected: buttonName_2,
                  rightHandDateInfo: true,
                  rightHandMessage: false,
                
                  currentMonthSelected: this.state.monthSelected,
                  currentYearSelected: this.state.year,
                  currentWeekdaySelected: getWeekdaySelected(this.state.monthSelected, this.state.year, buttonName_2)}
                )}} />
            </View>
          )

          if (i + (22 - this.state.weekDaySelected) <= this.state.monthDayCount){
            let buttonName_3 = (i + (22 - this.state.weekDaySelected)).toString();
            calendar4.push( 
              <View style="border: 1px solid black; height: 100px; width: 100px;">
                <Button text={ buttonName_3 } style="height: 100px; width: 100px;" on={{clicked: () => this.setState(
                  {daySelected: buttonName_3,
                    rightHandDateInfo: true,
                    rightHandMessage: false,
                  
                    currentMonthSelected: this.state.monthSelected,
                    currentYearSelected: this.state.year,
                    currentWeekdaySelected: getWeekdaySelected(this.state.monthSelected, this.state.year, buttonName_3)}
                  )}} />
              </View>
            )
          }

          if (i + (29 - this.state.weekDaySelected) <= this.state.monthDayCount){
            let buttonName_4 = (i + (29 - this.state.weekDaySelected)).toString();
            calendar5.push( 
              <View style="border: 1px solid black; height: 100px; width: 100px;">
                <Button text={ buttonName_4 } style="height: 100px; width: 100px;" on={{clicked: () => this.setState(
                  {daySelected: buttonName_4, 
                  rightHandDateInfo: true,
                  rightHandMessage: false,

                  currentMonthSelected: this.state.monthSelected,
                  currentYearSelected: this.state.year,
                  currentWeekdaySelected: getWeekdaySelected(this.state.monthSelected, this.state.year, buttonName_4)}
                  )}} />
              </View>
            )
          }
          else
          {
            calendar5.push( 
              <View style="border: 1px solid black; height: 100px; width: 100px; background-color: 'grey';">
                <Text></Text>
              </View>
              )
          }

          if (i + (36 - this.state.weekDaySelected) <= this.state.monthDayCount){
            let buttonName_5 = (i + (36 - this.state.weekDaySelected)).toString();
            calendar6.push( 
              <View style="border: 1px solid black; height: 100px; width: 100px;">
                <Button text={ buttonName_5 } style="height: 100px; width: 100px;" on={{clicked: () => this.setState(
                  {daySelected: buttonName_5,
                    rightHandDateInfo: true,
                    rightHandMessage: false,
                  
                    currentMonthSelected: this.state.monthSelected,
                    currentYearSelected: this.state.year,
                    currentWeekdaySelected: getWeekdaySelected(this.state.monthSelected, this.state.year, buttonName_5)}
                  )}} />
              </View>
            )
          }
          else
          {
            calendar6.push( 
              <View style="border: 1px solid black; height: 100px; width: 100px; background-color: 'grey';">
                <Text></Text>
              </View>
              )
          }
        }

        const containerStyle = `
            
            background: 'white';
        `;

        const containerStyle2 = `
            flex-grow: auto 0 0;
            background: 'white';
        `;

        // Must wrap main App component in a React.Fragment component
        // in order to allow for sub-windows to be created later on
        return (

          <View style="flex-direction: 'row';">
              <View style={containerStyle}>

                <View style="flex: 0; flex-direction: 'row';">
                    <Button style="width: 200px;" text={"<<"} on={buttonHandlerDecreaseMonth}/>
                        <Text style="border: 1px solid black; width: 300px;">{this.state.month[this.state.monthSelected] + ", " + this.state.year}</Text>
                    <Button style="width: 200px;" text={">>"} on={buttonHandlerIncreaseMonth}/>
                </View>

                <View style="flex: 0; flex-direction: 'row';">
                    <Text style="flex: 0; border: 1px solid black; width: 100px;">{this.state.day[0]}</Text>
                    <Text style="flex: 0; border: 1px solid black; width: 100px;">{this.state.day[1]}</Text>
                    <Text style="flex: 0; border: 1px solid black; width: 100px;">{this.state.day[2]}</Text>
                    <Text style="flex: 0; border: 1px solid black; width: 100px;">{this.state.day[3]}</Text>
                    <Text style="flex: 0; border: 1px solid black; width: 100px;">{this.state.day[4]}</Text>
                    <Text style="flex: 0; border: 1px solid black; width: 100px;">{this.state.day[5]}</Text>
                    <Text style="flex: 0; border: 1px solid black; width: 100px;">{this.state.day[6]}</Text>
                </View>

                <View style="flex: 0; flex-direction: 'row';">
                    {calendar1}
                </View>
                <View style="flex: 0; flex-direction: 'row';">
                    {calendar2}
                </View>
                <View style="flex: 0; flex-direction: 'row';">
                    {calendar3}
                </View>
                <View style="flex: 0; flex-direction: 'row';">
                    {calendar4}
                </View>
                <View style="flex: 0; flex-direction: 'row';">
                    {calendar5}
                </View>
                <View style="flex: 0; flex-direction: 'row';">
                    {calendar6}
                </View>

              </View>

              <View style={containerStyle2}>
                  <Button text={"+"} visible={this.state.rightHandDateInfo}></Button>
                  <Text style="border: 1px solid black; padding: 10px" visible={this.state.rightHandDateInfo}>{"Date selected: " + this.state.daySelected + "/" + 
                              (this.state.currentMonthSelected + 1) + "/" + this.state.currentYearSelected + " - " + this.state.day[this.state.currentWeekdaySelected]}</Text>
                              
                  <Text style="border: 0px solid black; padding: 10px" visible={this.state.rightHandDateInfo}>This is where the meeting information will go...</Text>





                  <Text style="border: 1px solid black; margin: auto;" visible={this.state.rightHandMessage}>Get started by selecting a date...</Text>

              </View>

            </View>
        );
    }
} 

export default Calendar;