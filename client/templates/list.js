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
            data: [60000, 70000, 80000, 10000, 1000],
            color: '#1CBABC'
        }, {
            name: '외가',
            data: [70000, 100000, 10000, 20000, 3000],
            color: '#CE5973'
        }]
    });
};

if(Meteor.isClient) {
//    $(function () {
//        $('#chart-container').highcharts({
//            title: {
//                text: '연도별 세뱃돈 총액',
//                x: -20 //center
//            },
//            xAxis: {
//                categories: ['2010', '2011', '2012', '2013', '2014', '2015']
//            },
//            yAxis: {
//                title: {
//                    text: '세뱃돈(원)'
//                },
//                min: 0,
//                plotLines: [{
//                    value: 0,
//                    width: 1,
//                    color: '#808080'
//                }]
//            },
//            tooltip: {
////                        valueSuffix: '°C'
//            },
//            legend: {
//                layout: 'vertical',
//                align: 'right',
//                verticalAlign: 'middle',
//                borderWidth: 0
//            },
//            series: [{
//                name: '친가',
//                data: [60000, 70000, 80000, 10000, 1000],
//                color: '#1CBABC'
//            }, {
//                name: '외가',
//                data: [70000, 100000, 10000, 20000, 3000],
//                color: '#CE5973'
//            }]
//        });
//    });
}