const navToggler = document.querySelector(".js-nav-toggler");
const nav = document.querySelector(".js-nav");

function navToggle(){
    nav.classList.toggle("active");
    navToggler.classList.toggle("active");
}

navToggler.addEventListener("click",navToggle);

function submitForm() {
    // Get form values
    var selectedEvent = document.getElementById('eventName').value;
    var selectedTime = document.getElementById('eventTime').value;
  
    // Display confirmation message
    document.getElementById('confirmedEvent').innerHTML = 'Event: ' + selectedEvent;
    document.getElementById('confirmedTime').innerHTML = 'Time: ' + selectedTime;
    document.getElementById('eventForm').style.display = 'none';
    document.getElementById('confirmationMessage').classList.remove('hidden');
  }
