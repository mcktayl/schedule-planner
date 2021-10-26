// declaring variables
const currentDayEl = $('#currentDay');
const scheduleContainerEl = $('#schedule-container')

// show current date and time
currentDayEl.text(moment().format('MMM Do YY'));

function createPlanner () {
    var morningHours = [
        '9',
        '10',
        '11',
    ]

    for (let i = 0; i < morningHours.length; i++) {
        var createRow = $('<div>');

        var createHour = $('<p>');
        var createText = $('<p>');
        var createSave = $('<button>');

        createHour.text(morningHours[i] + 'AM');
        createText.text('');

        createRow.append(createHour);
        createRow.append(createText);
        createRow.append(createSave);
        scheduleContainerEl.append(createRow);
    }

    var afternoonHours = [
        '12',
        '1',
        '2',
        '3',
        '4',
        '5',
    ]

    for (let i = 0; i < afternoonHours.length; i++) {
        var createRow = $('<div>');

        var createHour = $('<p>');
        var createText = $('<p>');
        var createSave = $('<button>');

        createHour.text(afternoonHours[i] + 'PM');
        createText.text('');

        createRow.append(createHour);
        createRow.append(createText);
        createRow.append(createSave);
        scheduleContainerEl.append(createRow);
    }
}
createPlanner();