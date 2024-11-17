// Import library
import {CountUp} from '/node_modules/countup.js/dist/countUp.min.js';

// Custom counters
const income = new CountUp("income-heading", 6, {
    enableScrollSpy: true,
    scrollSpyDelay: 500,
    duration: 5,
    suffix: "M"
});

const projects = new CountUp("projects-heading", 315, {
    enableScrollSpy: true,
    scrollSpyDelay: 500,
    duration: 2,
});

const employees = new CountUp("employees-heading", 120, {
    enableScrollSpy: true,
    scrollSpyDelay: 500,
    duration: 2.5,
    suffix: "K"
});

// Start counters on load
income.start();
projects.start();
employees.start();