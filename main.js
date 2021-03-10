let heading = document.querySelector('h1');
let clickCount = 0;

d3.csv('/files/gtasc_testing.csv',
	function(row) {
		return {pos: +row.pos, Gamer: row.Gamer};
		},
		
		function(data) {
		var averagePos = data.reduce(function(prev,curr) {
			return prev + curr.pos;
		}, 0) / data.length;

		var ulSelection = d3.select('body').append('ul');
        var valuesSelection =
             ulSelection.selectAll('li').data(data).enter().append('li').text(
                 function(d) { return d.pos; });
        var totalSelection =
             ulSelection.append('li').text('Average: ' + averagePos);
	});

heading.onclick = function() {
	clickCount += 1;
	heading.textContent = 'Heading'+clickCount.toString();
}



