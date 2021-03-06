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
        unresolved_tickets.find('h5.card-title').html(unresolvedTickets.title);
        unresolved_tickets.find('h6.card-subtitle').html(unresolvedTickets.subtitle);
      
		var tickets = unresolved_tickets.find('ul.list-group');
		$.each( unresolvedTickets.items, function() {
		    var item = $(`
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    <span class="item-title">${this.title}</span>
                    <span class="item-nimber">${this.value}</span>
                </li>
		    `);
		    tickets.append(item);
		});

        let today_tasks = result.todayTasks;
		let tasks = $(".tasks");
        tasks.find('h5.card-title').html(today_tasks.title);
        tasks.find('h6.card-subtitle').html(today_tasks.subtitle);
      
		var tasks_list = tasks.find('ul.list-group');
		$.each( today_tasks.items, function() {
		    var item = $(`
                <li class="list-group-item d-flex justify-content-between align-items-center">
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="finishCheckChecked" ${this.checked}/>
                <label class="form-check-label" for="finishCheckChecked">
                ${this.title}
                </label>
                </div>
                <button type="button" class="btn btn-${this.bg_color} text-${this.color} fw-bold">
                ${this.value}
                </button>
            </li>
		    `);
		    tasks_list.append(item);
		});
	}
});
