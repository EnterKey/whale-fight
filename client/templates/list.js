Template.list.rendered = function() {
    var dataF = [6000, 7000, 1, 1];
    var sumF = 0;
    moneyData.find({'fm': 'f'}).forEach(function(data) {

        sumF += data.amount;
    });

    dataF.push(sumF)

    var dataM = [10000, 1000, 30000, 1000];
    var sumM = 0;

    moneyData.find({'fm': 'm'}).forEach(function(data) {

        sumM += data.amount;
    });

    dataM.push(sumM);

    console.log(dataF, dataM);

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
            data: dataF,
            color: '#1CBABC'
        }, {
            name: '외가',
            data: dataM,
            color: '#CE5973'
        }]
    });
    $("#main-profit-view > h1").letterfx({
        "fx": "spin",
        "backwards": false,
        "timing": 200,
        "fx_duration": "1000ms",
        "letter_end": "restore",
        "element_end": "restore"
    });
    $("#father-profit-view > div:nth-child(1) > h3").letterfx({
        "fx": "spin",
        "backwards": false,
        "timing": 200,
        "fx_duration": "1000ms",
        "letter_end": "restore",
        "element_end": "restore"
    });
    $("#mother-profit-view > div:nth-child(1) > h3").letterfx({
        "fx": "spin",
        "backwards": false,
        "timing": 200,
        "fx_duration": "1000ms",
        "letter_end": "restore",
        "element_end": "restore"
    });
};

Template.list.helpers({

    moneyData: function(type) {


        return moneyData.find({
            'fm': type
        }, {
            sort: {
                amount: -1
            }
        });
    },


    totalAmount: function(type) {

        var condition = {}

        if (!!type === true) {

            condition = {
                'fm': type
            };
        }

        var sum = 0;

        moneyData.find(condition).forEach(function(data) {

            sum += data.amount;
        });

        return enComma(sum);
    }

});

Template.moneyDataDetail.helpers({

    comma: function(data) {

        return enComma(data);
    }

})

if (Meteor.isClient) {

}