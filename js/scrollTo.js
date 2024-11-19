const toRegistrations = document.querySelectorAll('.to-registration');

toRegistrations.forEach(
  (toRegistration, i) => {
    toRegistration.addEventListener("click", () => document.getElementById('registration').scrollIntoView({ behavior: 'smooth' }))
  });

const toContacts = document.querySelectorAll('.to-contacts');

toContacts.forEach(
  (toRegistration, i) => {
    toRegistration.addEventListener("click", () => document.getElementById('footer').scrollIntoView({ behavior: 'smooth' }))
  });
