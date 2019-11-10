// add pagination

const questionSubjects = [
	'aardvarks',
	'pizza',
	'handlebars',
	'data',
	'folk music',
	'pyramids',
	'sushi',
	'Noah King',
	'cats',
	'hamburgers'
];

for (let i = 0; i < questionSubjects.length; i++) {
	var questionStatement = `How do you feel about ${questionSubjects[i]}?`;

	var questionForm = $('#questionaire').append(`
    <div>${questionStatement}</div>
    <br>
	<div class="form-group">
        <label class="radio-inline">
            <input type="radio" name="optradio" checked />bleh
					</label>
        <label class="radio-inline">
            <input type="radio" name="optradio" />meh
					</label>
        <label class="radio-inline">
            <input type="radio" name="optradio" />they're okay, I guess
					</label>
        <label class="radio-inline">
            <input type="radio" name="optradio" />sure, I like 'em
					</label>
        <label class="radio-inline">
            <input type="radio" name="optradio" />Love 'em!
					</label>
    </div>
    <button></button>
`);
}
