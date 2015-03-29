var main = (function() {
	'use strict';
	var init = function(){
		//tooltip
		$('[data-toggle="tooltip"]').tooltip();
		//add chart home
		$('.chart-access-month').highcharts({
	        title: {
	            text: '',
	            x: -20 //center
	        },
	        xAxis: {
	            categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun',
	                'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
	        },
	        yAxis: {
	            title: {
	                text: 'Visitas(q)'
	            },
	            plotLines: [{
	                value: 0,
	                width: 1,
	                color: '#808080'
	            }]
	        },
	        tooltip: {
	            valueSuffix: ' visitas'
	        },
	        legend: {
	            layout: 'vertical',
	            align: 'right',
	            verticalAlign: 'middle',
	            borderWidth: 0
	        },
	        series: [{
	            name: 'Games',
	            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
	        }, {
	            name: 'Filmes',
	            data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
	        }, {
	            name: 'HQ',
	            data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
	        }, {
	            name: 'Comédia',
	            data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
	        }]
	    });

		/**
		*calendars
		**/

		//calendar-range
		$('.calendar-range').daterangepicker(
           {
               ranges: {
                   'Hoje': [moment(), moment()],
                   'Ontem': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                   'Últimos 7 dias': [moment().subtract(6, 'days'), moment()],
                   'Últimos 30 dias': [moment().subtract(29, 'days'), moment()],
                   'Nesse mês': [moment().startOf('month'), moment().endOf('month')],
                   'Mês anterior': [moment().subtract(1,'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
               },
               opens: 'right',
               startDate: moment().subtract(29, 'days'),
               endDate: moment(),
               format: 'DD/MM/YYYY',
               locale: {
                   applyLabel: 'Selecionar',
                   cancelLabel: 'Cancelar',
                   fromLabel: 'De',
                   toLabel: 'Até',
                   weekLabel: 'W',
                   customRangeLabel: 'Personalizado',
                   daysOfWeek: moment.weekdaysMin(),
                   monthNames: moment.monthsShort(),
                   firstDay: moment.localeData()._week.dow
               }
           },function(start, end) {
               $('#start').val(start.format('YYYY-MM-DD'));
               $('#end').val(end.format('YYYY-MM-DD'));
           }
       	);
	};

	//ico-calendar
	$('.calendar-ico').click(function(ev){
		ev.preventDefault();
		var _this = $(this);
			_this.prev().focus();
	});

	$('.select').click(function(ev){
		ev.preventDefault();
		var _this = $(this);
			_this.prev().focus();
	});
	var main = {
		init: init
	};

	return main;
}());

main.init();