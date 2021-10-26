// declaring variables
const currentDayEl = $('#currentDay');
const scheduleContainerEl = $('#schedule-container');

const currentHour = moment().format('HH');

// show current date and time
currentDayEl.text(moment().format('MMM Do YY'));

function createPlanner () {
    // create morning hour blocks
    var businessHours = [
        '09',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
    ]

    for (let i = 0; i < businessHours.length; i++) {
        // create each element of the hour block
        var createRow = $('<div>');
        var createHour = $('<p>');
        var createText = $('<input>');
        var createSave = $('<button>');

        // add classes
        createRow.addClass('row time-block');
        createHour.addClass('col-2 hour');
        createText.addClass('col-8 text-col');
        createSave.addClass('col-2 save-col saveBtn');

        // set the content of each element
        createHour.text(moment(businessHours[i], ['HH']).format('h a'));
        createText.text('');

        // color code text area according to current hour
        var generatedHour = moment(businessHours[i], ['HH']).format('HH');

        if (currentHour == generatedHour) {
            createText.addClass('present')
        } else if (currentHour < generatedHour) {
            createText.addClass('future');
        } else {
            createText.addClass('past');
        }

        // append it to the container
        createRow.append(createHour);
        createRow.append(createText);
        createRow.append(createSave);
        scheduleContainerEl.append(createRow);
    }
}

// declaring variables for saving schedule
const saveButtonEl = $('.saveBtn');
var savedPlans = localStorage.getItem('saved-plans');

// function to save plans to local storage
function savePlans() {

}

// event listener for save button
saveButtonEl.on('click', savePlans())

// create the day planner
createPlanner();