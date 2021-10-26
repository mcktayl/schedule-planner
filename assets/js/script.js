// declaring variables
const currentDayEl = $('#currentDay');
const scheduleContainerEl = $('#schedule-container');
const now = moment().format('H');

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

        var generatedHour = moment(businessHours[i], ['HH']).format('h a');
        console.log(generatedHour);

        // add bootstrap styling classes
        createRow.addClass('row hour-block');
        createHour.addClass('col hour-col');
        createText.addClass('col text-col');
        createSave.addClass('col save-col');

        // set the content of each element
        createHour.text(generatedHour);
        createText.text('');

        // append it to the container
        createRow.append(createHour);
        createRow.append(createText);
        createRow.append(createSave);
        scheduleContainerEl.append(createRow);
    }
}
createPlanner();