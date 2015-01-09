Template.input.rendered = function() {
	switchBtnStyle();

    $("#dancing-gif").hide();
    $("#submit-money").on("click", function(e) {
        $("#dancing-gif").show(300);
        $("#dancing-gif > h1").letterfx({"fx":"smear","backwards":false,"timing":50,"fx_duration":"1000ms","letter_end":"restore","element_end":"restore"});
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