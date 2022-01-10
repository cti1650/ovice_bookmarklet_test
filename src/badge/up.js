if(typeof(ovice) != "undefined"){
  console.log(ovice)
  const prof = ovice.getProfile();
  if(prof){
    console.log(prof.badge);
  }
}else{
  console.log('oVice内でのみ利用可能です。')
}