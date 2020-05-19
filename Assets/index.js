// date and time
$("#currentDay").text(moment().format("MMMM Do YYYY"));

// var let & const info
var alltextarea = $("textarea");

for (var i = 0; i < alltextarea.length; i++) {
	var currentHour = parseInt(moment().format("HH"));
	// var currentHour = 09;
	var textAreaHour = alltextarea[i].getAttribute("data-value");
	if (textAreaHour < currentHour) {
		$(alltextarea[i]).addClass("past");
	} else if (textAreaHour > currentHour) {
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
			$(alltextarea[i]).attr("id"),
			// alltextarea[i].getAttribute("id"),
			$(alltextarea[i]).val()
			// alltextarea[i].value
		);
	}
}

renderTxtArea();

function renderTxtArea() {
	for (let i = 0; i < alltextarea.length; i++) {
		storedItem = localStorage.getItem($(alltextarea[i]).attr("id"));
		$(alltextarea[i]).val(storedItem);
	}
}
