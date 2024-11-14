function scrollTo(clicked, target) {
  document.getElementById(clicked).addEventListener('click', function() {
    document.getElementById(target).scrollIntoView({ behavior: 'smooth' });
  });
}

scrollTo('toRegistration1', 'registration');
scrollTo('toRegistration2', 'registration');
scrollTo('toRegistration3', 'registration');
scrollTo('toContacts1', 'footer');
scrollTo('toContacts2', 'footer');
