// declaring variables
const currentDayEl = $('#current-day');
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
        createHour.addClass('col-2 hour').attr('data-hour', businessHours[i]);
        createText.addClass('col-8 text-area');
        createSave.addClass('col-2 save-button');

        // set the content of each element
        createHour.text(moment(businessHours[i], ['HH']).format('h a'));
        createText.text('');
        createSave.text('Save');

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

    // variables for saving to local storage
    var hourOfPlans;
    var newPlans;
    var savedPlans = localStorage.getItem('saved-plans');

    // event listener for save button
    $('.save-button').on('click', function () {
        newPlans = $(this).closest('.time-block').find('.text-area').val();
        hourOfPlans = $(this).closest('.time-block').find('.hour').attr('data-hour');

        localStorage.setItem(`saved-plans-${hourOfPlans}`, newPlans);
    });
}

// create the day planner
createPlanner();