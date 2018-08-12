$(document).ready(function(){
	var ctx = $("#mycanvas").get(0).getContext("2d");

	var data = [
		{
			value: 125,
			color: "cornflowerblue",
			highlight: "lightskyblue",
			label: "Promoters"
		},
		{
			value: 144 ,
			color: "#bcc1c5",
			highlight: "yellowgreen",
			label: "Passives"
		},
		{
			value:72 ,
			color: "#f2635c",
			highlight: "darkorange",
			label: "Detractors"
		}
	];

	var chart = new Chart(ctx).Doughnut(data);
});