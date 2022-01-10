if(typeof(ovice) != "undefined"){
  const prof = ovice.getProfile();
  if(prof){
    console.log(prof.badge);
  }
}else{
  alert('oVice内でのみ利用可能です。')
}