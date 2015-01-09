moneyData = new Mongo.Collection('moneyData');


/*
 *	param = {
 *		year	// year (e.g. 2015)
 *		fm	// type of father/mother side (e.g. 'f')
 *		relName // name of relation (e.g. '삼촌')
 *		amount	// 금액 (e.g. 100000)
 *	}
 */
insertNewDatum = function(param) {


	// validation
	cehck(param, {

		year: String, // 걍 String으로 하자..
		fm: String,
		relName: String,
		amount: String // 여기도 걍 String..
	});

	moneyData.insert(param);

};

// 검색 조건이나 정렬 옵션이 없는 경우에는 null을 넣어주세요.
getData = function(condition, sortOption) {


	if (!!condition == false) {

		condition = {};
	}

	if (!!sortOption == false){

		sortOption = {};
	}

	return moneyData.find(condition, sortOption);

};