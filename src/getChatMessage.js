(() => {
  arr = [];
  document.querySelectorAll('div#chat-scroll > div').forEach((el) => {
    const data = {
      name: el?.querySelector('.name')?.textContent || '',
      message: el?.querySelector('.break-space')?.textContent.trim() || '',
    };
    arr.push(data);
  });
  console.log(arr);
})();
