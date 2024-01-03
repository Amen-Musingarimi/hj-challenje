document.addEventListener('DOMContentLoaded', function() {
  const textInput = document.getElementById('textInput');
  const popup = document.getElementById('popup');
  const heading1Btn = document.getElementById('heading1Btn');
  const expandableHeading1Btn = document.getElementById(
    'expandableHeading1Btn'
  );
  const typedText = document.getElementById('typedText');

  let isPopupVisible = false;

  // Handling the Popup Window
  textInput.addEventListener('input', function(event) {
    const inputValue = event.target.value;

    if (inputValue.startsWith('/1')) {
      showPopup();
    } else {
      hidePopup();
    }
  });

  // Handling text enterd by the user
  textInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
      const inputValue = textInput.value.trim();

      if (inputValue !== '' && inputValue !== '/1') {
        appendTypedText(inputValue);
        textInput.placeholder = 'Type / for blocks, @ to link docs or people';
      }
    }
  });

  // Handling the Popup Window options
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

  //--------- Handling the shortcuts----------------//
  document.addEventListener('keydown', function(event) {
    let inputValue = textInput.value.trim();

    if (inputValue === '#' && event.code === 'Space') {
      clearInput();
      textInput.placeholder = 'Heading 1';
    } else if (inputValue === '>>#' && event.code === 'Space') {
      clearInput();
      textInput.placeholder = 'Expandable Heading 1';
    }
  });

  // Function to show the popup
  function showPopup() {
    if (!isPopupVisible) {
      popup.classList.remove('hide');
      isPopupVisible = true;
    }
  }

  // Function to hide the popup
  function hidePopup() {
    if (isPopupVisible) {
      popup.classList.add('hide');
      isPopupVisible = false;
    }
  }

  // Function to clear the input field
  function clearInput() {
    textInput.value = '';
  }

  // Function to display typed text to the the DOM
  function appendTypedText(text) {
    const newHeading = document.createElement('h1');
    newHeading.innerText = text;
    typedText.appendChild(newHeading);
  }
});
