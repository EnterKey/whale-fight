_eachAmount = "0";
_totalAmount = 0;
_checked = 1;

sumAmount = function(amount) {

    _eachAmount = enComma(Number(unComma(_eachAmount)) + Number(amount * 10000));
};

Template.input.rendered = function() {
    switchBtnStyle();

    $("#each_money").html(_eachAmount);

    $("#dancing-gif").hide();
    $("#submit-money").on("click", function(e) {
        $("#dancing-gif").show(300);
        $("#dancing-gif > h1").letterfx({
            "fx": "smear",
            "backwards": false,
            "timing": 50,
            "fx_duration": "1000ms",
            "letter_end": "restore",
            "element_end": "restore"
        });
        setTimeout(function() {
            $("#dancing-gif").hide(300);
        }, 5000);
    });

    function switchBtnStyle() {
        $('.parent-btn').on('click', function(e) {
            e.preventDefault();
            if (this.id == 'father-btn') {
                $('#mother-btn').removeClass('mother-btn');
                $('#father-btn').addClass('father-btn');
            } else {
                $('#father-btn').removeClass('father-btn');
                $('#mother-btn').addClass('mother-btn');
            }
        })
    }
}

Template.input.events({
    'click .moneyBtn': function(e) {

        if ($(e.target).attr('name') != "0") {

            sumAmount(Number($(e.target).attr('name')));

        } else {
            _eachAmount = "0";

        }

        $("#each_money").html(_eachAmount);
    }
});


Template.input.events({
    'click #submit_btn': function(e) {
        var fm = "f";

        if ($("#given_name").val() == "") {
            alert("세배돈 주신 분 누군지 기억하셔야해요.")
            return;
        }

        //주신분 이름 : $("#given_name").val()
        //친가 외가: checked==1은 외가, checked==0은 친가
        //주신 액수: _eachAmount
        if (_checked == 1) {
            fm = "m";
        } else {
            fm = "f";
        }

        var param = {
            year: "2015", // year (e.g. 2015)
            fm: fm, // type of father/mother side (e.g. 'f')
            relName: $("#given_name").val(), // name of relation (e.g. '삼촌')
            amount: Number(unComma(_eachAmount)) // 금액 (e.g. 100000)
        }

        insertNewDatum(param);

        _totalAmount = _totalAmount + Number(unComma(_eachAmount));
        $("#total_money").html(enComma(_totalAmount));

        $("#given_name").val("");
        _eachAmount = 0;
    }
});

function a(text) {

    alert(text);
}

// simple-todos.js
if (Meteor.isClient) {

    $("document").ready(function() {
        _totalAmount = 0;
        changedInputBox();
    })

    function changedInputBox() {
        $("#mf_checkbox").change(function() {
            if (this.checked) {
                _checked = 1;
            } else {
                _checked = 0;
            }
        });
    }
}