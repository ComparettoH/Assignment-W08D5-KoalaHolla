console.log( 'js' );

$( document ).ready( function(){
  console.log( 'JQ' );
  // Establish Click Listeners
  // load existing koalas on page load
  getKoalas();
  $( '#addButton' ).on( 'click', addKoala)
    

}); // end doc ready

//----------------------------------------------------------------------
// This is our POST request for adding a bear
function addKoala() {
    console.log( 'in addButton on click' );
    // get user input and put in an object
    // NOT WORKING YET :(
    // using a test object
    let koalaToSend = {
      name: 'testName',
      age: 'testName',
      gender: 'testName',
      readyForTransfer: 'testName',
      notes: 'testName',
    };
       
    saveKoala( koalaToSend );
    render()
  }; 


//-----------------------------------------------------------------------

  // This is our PUT
// call saveKoala with the new obejct
function saveKoala( newKoala ){
  console.log( 'in saveKoala', newKoala );
 
  // ajax call to server to get koalas
 
}
//-----------------------------------------------------------------------

// This is our GET
function getKoalas(){
  console.log( 'in getKoalas' );
  // ajax call to server to get koalas
  
} // end getKoalas



//-----------------------------------------------------------------------
// This is our Render

function render() {
  $('#viewKoalas').append(`
  <tr>
        <td>NAME</td>
        <td>AGE</td>
        <td>SEX</td>
        <td>TRANSFER</td>
        <td>Notes</td>
        <td>
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

}