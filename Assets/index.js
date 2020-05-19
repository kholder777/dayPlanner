// date and time
$("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

// var let & const info
var alltextarea = $("textarea");

for (var i = 0; i < alltextarea.length; i++) {
	var currentHour = parseInt(moment().format("HH"));
	// var currentHour = 09;
	var targetTextArea = alltextarea[i].getAttribute("data-value");
	if (targetTextArea < currentHour) {
		$(alltextarea[i]).addClass("past");
	} else if (targetTextArea > currentHour) {
		$(alltextarea[i]).addClass("future");
	} else {
		$(alltextarea[i]).addClass("present");
	}
}

// // save button to local storage
// $(document).ready(function () {
// 	$("button").click(function () {
// 		console.log(this, typeof);
// 	});
// });

$(document).ready(function () {
	$("button").click(function () {
		storeTxtArea();
	});
});

function storeTxtArea() {
	for (let i = 0; i < alltextarea.length; i++) {
		localStorage.setItem(
			alltextarea[i].getAttribute("id"),
			alltextarea[i].value
		);
		// const element = alltextarea[time];
	}
	alltextarea;
	// If storedevent + each text area
}
