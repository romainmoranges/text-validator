document.addEventListener("DOMContentLoaded", () => {
    // functions
    function getTemplateValue() {
        return document.getElementById('ta-template').value;
    }
    function getOriginValue() {
        return document.getElementById('ta-origin').value;
    }
    // code
    const button = document.getElementById('button');

    button.onclick = () => {
        console.log(getTemplateValue());
        console.log(getOriginValue());
    }
  });