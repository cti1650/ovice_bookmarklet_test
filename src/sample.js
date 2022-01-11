var styleTag = document.createElement('style');
styleTag.classList.add("test_panel_style");
styleTag.innerText = `

`;
document.getElementsByTagName('head')[0].insertAdjacentElement('beforeend', styleTag);

var prevPanel = document.querySelectorAll('.test_panel,.test_panel_style');
if(prevPanel) {
  prevPanel.forEach(ele=>{ele.remove()})
}

var panel = document.createElement('div');
panel.classList.add("test_panel");
document.body.appendChild(panel);
alert("test");
