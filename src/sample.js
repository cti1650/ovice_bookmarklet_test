var prevPanel = document.querySelectorAll('.test_panel, .test_panel_tw');
if(prevPanel) {
  prevPanel.forEach(ele=>{ele.remove()})
}

var styleTag = document.createElement('script');
styleTag.classList.add('test_panel_tw');
styleTag.src='https://unpkg.com/tailwindcss-jit-cdn';
document.getElementsByTagName('head')[0].insertAdjacentElement('beforeend', styleTag);

var panel = document.createElement('div');
panel.classList.add('test_panel','fixed','top-0','left-0','m-8','p-4','bg-red-500');
panel.innerText = 'test';
document.body.appendChild(panel);
alert("test");
