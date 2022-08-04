function getURL(url) {
	let http = new XMLHttpRequest();
	http.open('GET', url, false)
	http.send(null);

	return http.responseText;				
}
function codework(){
	let code = document.getElementById('code');
	let grade = document.getElementById('grade');
	let room = document.getElementById('room');
	let name = document.getElementById('name');
	let no = document.getElementById('no');
	let card = document.getElementById('card');
	if(code.value.length >4){
       let get = JSON.parse(getURL('http://su-angular.ddns.net/api/su-angular?topic=student&func=get_by_code&code='+code.value))
	 grade.value = get.GradeName;
	 room.value =get.RoomName;
    no.value =get.No;
	card.value = get.IdCard;
	if(get.Title == 1){
		name.value ="เด็กชาย "+get.FirstName+" "+get.LastName;
	}
	else if(get.Title == 2){
		name.value ="เด็กหญิง "+get.FirstName+" "+get.LastName;
	}
	else if(get.Title == 3){
		name.value ="นาย "+get.FirstName+" "+get.LastName;
	}
	else if(get.Title == 4){
		name.value ="นางสาว "+get.FirstName+" "+get.LastName;
	}
	 //console.log(get.RoomName);
	}
}
