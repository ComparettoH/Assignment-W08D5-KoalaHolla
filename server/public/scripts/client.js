// const { response } = require("express");

console.log('js');

$(document).ready(function () {
  console.log('JQ');
  // Establish Click Listeners
  // load existing koalas on page load
  getKoalas();
  $('#addButton').on('click', addKoala)
  $('#viewKoalas').on('click', '.btn-ready', transferKoala)

}); // end doc ready
let koalas;
//----------------------------------------------------------------------
// This is our POST request for adding a bear
function addKoala() {
  console.log('in addButton on click');

  let koalaName = $('#nameIn').val();
  let koalaAge = $('#ageIn').val();
  let koalaGender = $('#genderIn').val();
  let koalaReadyForTransfer = $('#readyForTransferIn').val();
  let koalaNotesIn = $('#notesIn').val();


  let koalaToSend = {
    koalaName: `${koalaName}`,
    age: `${koalaAge}`,
    gender: `${koalaGender}`,
    readyForTransfer: `${koalaReadyForTransfer}`,
    notes: `${koalaNotesIn}`,
  };
  $.ajax({
    type: 'POST',
    url: '/koalas',
    data: koalaToSend,
  }).then(function (response) {
    console.log('Response from server.', response);
    getKoalas();
  }).catch(function (error) {
    console.log('Error in POST', error)
    alert('Unable to add book at this time. Please try again later.');
  });

  console.log('in addButton on click', koalaToSend);

  $("input").val('');
}

//-----------------------------------------------------------------------
// This is our PUT
// call saveKoala with the new obejct
function transferKoala() {
  console.log('in saveKoala');

  // ajax call to server to get koalas
  const koalaId = $(this).parent().parent().data('id')


  console.log("mark as read:", koalaId)



  $.ajax({
    method: 'PUT',
    url: `/koalas/${koalaId}`
  })
    .then((response) => {
      console.log("Success, for id: ", koalaId)
      getKoalas()

    })
    .catch((error) => {
      console.log(error)
    })

}
//-----------------------------------------------------------------------

// This is our GET
function getKoalas() {
  console.log('in getKoalas');
  // ajax call to server to get koalas

  $.ajax({
    type: 'GET',
    url: '/koalas'
  }).then(function (response) {
    console.log(response);
    koalas = response;
    //  console.log(koalas[0].ready_to_transfer)
    render(response);
  }).catch(function (error) {
    console.log('error in GET', error);
  });
} // end getKoalas



//-----------------------------------------------------------------------
// This is our Render

function render() {
  $('#viewKoalas').empty();


  for (let i = 0; i < koalas.length; i += 1) {

    let koala = koalas[i];

    let newRow = $(`
      <tr>
        <td>${koala.name}</td>
        <td>${koala.age}</td>
        <td>${koala.gender}</td>
        <td>${koala.ready_to_transfer}</td>
        <td>${koala.notes}</td>
        <td class="transferBtn">
          <button class="btn-ready">
           Mark For Ready
        </button>
        
        </td>
        <td>
          <button class="btn-Delete"> 
          Delete
          </button>
        </td>
      </tr>
      
      `)

    newRow.data('id', koala.id);
    // newRow.find will look for whatever class or id or element you pass as an argument. 
    // You can then add a .remove or whatever other method you think makes sense.
    // for us we want the .remove
    if (koala.ready_to_transfer === true) {
      // If true, remove the "Mark For Ready" button
      newRow.find('.btn-ready').remove(); 
    }

    $('#viewKoalas').append(newRow);
  }
}




