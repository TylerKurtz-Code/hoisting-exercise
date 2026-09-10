let destination = "Ancient Egypt";
console.log(destination);
destination = "Medieval Europe";
console.log(destination);
const travelDate = "2024-03-15";

/*
 *Obervations:
 *I tried changing travelDate but the error read "Assignment to constant variable."
 *So for const you can not change the variable so from "2024-03-15" to "2025-08-15" wont work.
 */

console.log(timeMachineModel);
var timeMachineModel = "T-800";

/*Obervations:
*After getting rid of the travelDate the code ran great.
*I ran it through the terminal and it showed (Ancient Egypt,Medieval Europe,
undefined)
*I ran var becasue if I ran const or let it would have crashes and not shown the hositing process.
*This happened becasue "var" gets hosited to the top of the code, meaning Javascript knew the variable- 
*-existed but hasnt assigned the value yet when "console.log" ran.  
*/
