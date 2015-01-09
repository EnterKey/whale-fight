_totalAmount = "0";

sumAmount = function(amount) {

	_totalAmount = enComma(Number(unComma(_totalAmount)) + Number(amount * 10000));
};

Template.input.rendered = function(){

	$("#total_money").html(_totalAmount);
};

Template.input.events({
	'click .moneyBtn': function(e) {

		if($(e.target).attr('name') != "0"){

			sumAmount(Number($(e.target).attr('name')));
			
		} else {
			_totalAmount = "0";

		}

		$("#total_money").html(_totalAmount);
	}
});

function a(text){

	alert(text);
}

// simple-todos.js
if (Meteor.isClient) {

	$("body").ready(function(){
		$("#money_btn-1").click(function(){

		})
	})

	function click_money(){
	}

	function changedInputBox() {
		$("#mf_checkbox").change(function() {
		    if(this.checked) {
       			mf_function(1);
		    }else{
       			mf_function(0);
		    }
		});
	}

	function mf_function(checked){
		//checked==1 엄마
		//checked==0 아빠

	}
	//만약 3개의 필드 모두 채워져있으면

	// This code only runs on the client
	Template.body.helpers({
		tasks: [
		]
	});	
}