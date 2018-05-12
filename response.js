var Data;

function response(room, msg, sender, isGroupChat, replier, imageDB){
	var msg = msg.split(" ");
	
	if(msg[0] == "/배그"){
  if(msg[1] == null){
   replier.reply("사용법: /배그 <닉네임>");
  }
  else if(msg[1] != null){
   Data =  Utils.getWebText("https://dak.gg/search?name="+msg[1]);
   //replier.reply(Data);
   if(Data.indexOf("플레이어 정보 확인에 시간이 다소 소요 되고 있습니다...") != -1){
    replier.reply("정보를 찾을수 없습니다. 전적 갱신을 확인해주세요.");
   }
   else{
    Data = Utils.getWebText("https://dak.gg/profile/"+msg[1]+"?hl=ko-KR");
    replier.reply(checkRating());
   }
  }
 }
}

function checkRating(){
 var temp_sub = Data.substr(Data.indexOf("최근 업데이트"),50);
 var temp_sub1 = temp_sub.split("<span>");
 var temp_sub2 = temp_sub1[1].split("</span>");
 return temp_sub2[0];
}