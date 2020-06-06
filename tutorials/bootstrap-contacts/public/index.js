'use strict';

$(function () {
  $('.needs-validation').on('submit', function (event) {
    event.preventDefault();
    event.stopPropagation();
    const htmlForm = $(this).get()[0];
    htmlForm.classList.remove('was-validated');

    if (htmlForm.checkValidity() === false) {
      htmlForm.classList.add('was-validated');
    } else {
      $.ajax({
        type: 'POST',
        url: 'http://localhost:9000/contacts',
        data: $(this).serialize(),
        success: function () {
          $('input[name = contact]').val('');
          renderContacts();
        },
        error: function (xhr) {
          console.log('Error:' + xhr.responseText);
        },
      });
    }
  });
  renderContacts();
});

function renderContacts() {
  fetchContacts((data) => {
    const contacts = $('#contacts').empty();
    data.forEach((contact) => {
      contacts.append(`<li class="list-group-item py-2" id="${contact.id}">${contact.name}</li>`);
    });
  });
}

function fetchContacts(renderFunction) {
  $.get('http://localhost:9000/contacts', renderFunction);
}
