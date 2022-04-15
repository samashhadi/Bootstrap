$.ajax({
	url: "/assets/data/data.json",
	success: function (result) {
		console.log(result);
		
		$.each(result.topCards, function () {
			var card = $(`
            <div class="col-6 col-md-3">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">${this.title}</h5>
                    <p class="card-text fw-bold">${this.value}</p>
                  </div>
                </div>
            </div>
            `);
			card.appendTo(".article-row-card");
		});
		$.each(result.todayTrendsCards, function () {
			var card = $(`
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">${this.title}</h5>
                    <p class="card-text fw-bold">${this.value}</p>
                  </div>
                </div>
            `);
			card.appendTo(".article-chart-cards");
		});

		let unresolvedTickets = result.unresolvedTickets;
		let unresolved_tickets = $(".unresolved-tickets");
        unresolved_tickets.find('h6.card-subtitle span').html(unresolvedTickets.group);
      
		var tickets = unresolved_tickets.find('ul.list-group');
		$.each( unresolvedTickets.tickets, function() {
		    var item = $(`
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    <span class="item-title">${this.title}</span>
                    <span class="item-nimber">${this.value}</span>
                </li>
		    `);
		    tickets.append(item);
		});
	}
});
