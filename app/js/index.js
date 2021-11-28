/* styling */
require("styles/main.scss");
/* js */
import $ from "jquery";
import { log, logBanner } from "logger";
/* your imports */
logBanner("Javascript Practice: Objects");
/* coding examples */

    var person = {
      firstName: "Finyah",
      lastName: "John",
      hasChildren: false,
      getFullName: function () {
        return this.firstName + " " + this.lastName;
      },
    };
log(JSON.stringify(person))
log(
  `upon accesing different values of the object  using these functions 
   log (person.getFullName());
   log (person.firstName);
   log (person.lastName);
   log (person.hasChildren); 
   we get`
);
log (person.getFullName());
log (person.firstName);
log (person.lastName);
log (person.hasChildren);