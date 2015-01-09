Template.list.rendered = function(){
    $('#chart-container').highcharts({
        title: {
            text: '연도별 세뱃돈 총액',
            x: -20 //center
        },
        xAxis: {
            categories: ['2010', '2011', '2012', '2013', '2014', '2015']
        },
        yAxis: {
            title: {
                text: '세뱃돈(원)'
            },
            min: 0,
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
//                        valueSuffix: '°C'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: '친가',
            data: [60000, 70000, 80000, 10000, 180000],
            color: '#1CBABC'
        }, {
            name: '외가',
            data: [70000, 100000, 10000, 20000, 160000],
            color: '#CE5973'
        }]
    });
    $("#main-profit-view > h1").letterfx({"fx":"spin","backwards":false,"timing":200,"fx_duration":"1000ms","letter_end":"restore","element_end":"restore"});
    $("#father-profit-view > div:nth-child(1) > h3").letterfx({"fx":"spin","backwards":false,"timing":200,"fx_duration":"1000ms","letter_end":"restore","element_end":"restore"});
    $("#mother-profit-view > div:nth-child(1) > h3").letterfx({"fx":"spin","backwards":false,"timing":200,"fx_duration":"1000ms","letter_end":"restore","element_end":"restore"});
};

if(Meteor.isClient) {

}