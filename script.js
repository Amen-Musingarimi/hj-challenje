document.addEventListener('DOMContentLoaded', function() {
  const textInput = document.getElementById('textInput');
  const popup = document.getElementById('popup');
  const heading1Btn = document.getElementById('heading1Btn');
  const expandableHeading1Btn = document.getElementById(
    'expandableHeading1Btn'
  );
  const typedText = document.getElementById('typedText');

  let isPopupVisible = false;

  textInput.addEventListener('input', function(event) {
    const inputValue = event.target.value;

    if (inputValue.startsWith('/1')) {
      showPopup();
    } else {
      hidePopup();
    }
  });

  textInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
      const inputValue = textInput.value.trim();

      if (inputValue !== '' && inputValue !== '/1') {
        appendTypedText(inputValue);
        textInput.value = '';
        textInput.placeholder = 'Type / for blocks, @ to link docs or people';
      }
    }
  });

  heading1Btn.addEventListener('click', function() {
    hidePopup();
    clearInput();
    textInput.placeholder = 'Heading 1';
  });

  expandableHeading1Btn.addEventListener('click', function() {
    hidePopup();
    clearInput();
    textInput.placeholder = 'Expandable Heading 1';
  });

  function showPopup() {
    if (!isPopupVisible) {
      popup.classList.remove('hide');
      isPopupVisible = true;
    }
  }

  function hidePopup() {
    if (isPopupVisible) {
      popup.classList.add('hide');
      isPopupVisible = false;
    }
  }

  function clearInput() {
    textInput.value = '';
  }

  function appendTypedText(text) {
    const newHeading = document.createElement('h1');
    newHeading.innerText = text;
    typedText.appendChild(newHeading);
  }
});
