// styleタグを作成
var styleTag = document.createElement('style');

// styleタグに記載するcssを記入
styleTag.src = '';

// 作成したstyleタグを挿入
document.getElementsByTagName('head')[0].insertAdjacentElement('beforeend', styleTag);
alert("test");
