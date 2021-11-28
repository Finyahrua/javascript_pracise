/* styling */
require("styles/main.scss");
/* js */
import $ from "jquery";
import { log, logBanner } from "logger";
/* your imports */
logBanner("Javascript Practice");
/* coding examples */

/*some random variabls practice */
var name = "Finyah";
var age = 20;
var isCool = true;
var undefined = undefined;

log(name + " has type of " + typeof name);
log(age + " has type of " + typeof age);
log(isCool + " has type of " + typeof isCool);
log(undefined + " has type of " + typeof undefined);
