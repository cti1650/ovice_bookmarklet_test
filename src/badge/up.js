if(typeof(ovice) != "undefined"){
  console.log(ovice)
  const prof = ovice.getProfile();
  const badgeList = [
    "https://assets.ovice.io/emoji/symbols/keycap-0.png",
    "https://assets.ovice.io/emoji/symbols/keycap-1.png",
    "https://assets.ovice.io/emoji/symbols/keycap-2.png",
    "https://assets.ovice.io/emoji/symbols/keycap-3.png",
    "https://assets.ovice.io/emoji/symbols/keycap-4.png",
    "https://assets.ovice.io/emoji/symbols/keycap-5.png",
    "https://assets.ovice.io/emoji/symbols/keycap-6.png",
    "https://assets.ovice.io/emoji/symbols/keycap-7.png",
    "https://assets.ovice.io/emoji/symbols/keycap-8.png",
    "https://assets.ovice.io/emoji/symbols/keycap-9.png",
    "https://assets.ovice.io/emoji/symbols/keycap-10.png"
  ];
  if(prof){
    console.log(prof.badge);
    const index = badgeList.indexOf(prof.badge);
    if(index >= 0){
      if(index != 10){
        ovice.setProfile({badge:badgeList[index + 1]});
      }
    }else{
      ovice.setProfile({badge:badgeList[0]});
    }
  }
}else{
  console.log('oVice内でのみ利用可能です。')
}