var siteName = document.getElementById('siteName');
var siteURL = document.getElementById('siteURL');

var bookmarkContainer;


if (localStorage.getItem("dataToday") != null) {
    bookmarkContainer = JSON.parse(localStorage.getItem("dataToday"));
    displayData(bookmarkContainer);
  } else {
    bookmarkContainer = [];
  }




function submitBookmark(){
  if(siteName!= null){
    bookMark = {
        siteName: siteName.value,
        siteURL: siteURL.value
    };
    
    bookmarkContainer.push(bookMark);
    displayData(bookmarkContainer);
    localStorage.setItem("dataToday", JSON.stringify(bookmarkContainer));
    clearForm();
  }
    else{
    alert('Enter a valid Name and URL');
    }
}



function clearForm(){
    siteName.value = "";
    siteURL.value = "";
}


function displayData(list){
 var temp =``;
 for(var i=0 ; i< list.length ; i++){
    temp += ` <tr>
    <td>${list[i].siteName}</td>
    <td> <a class="btn btnVisit" target="_blank" href="${list[i].siteURL}">visit</a></td>
    <td><button onclick="deleteBookmark(${i})" class=" btnDelete">Delete</button></td>
  </tr>`;
     
 }

 document.getElementById("myTable").innerHTML = temp;
}


function deleteBookmark(index){
    bookmarkContainer.splice(index,1);
    localStorage.setItem("dataToday", JSON.stringify(bookmarkContainer));
  displayData(bookmarkContainer);
}


// function validName() {
//   var regex = /^[A-Z][a-z]{1,8}$/;
//   if (regex.test(siteName.value) == true) {
//     console.log(true);
//     if (siteName.classList.contains("d-block")) {
//       siteName.classList.replace("d-block", "d-none");
//     }
//     return true;
//   } else {
//     console.log(false);
//     siteName.classList.replace("d-none", "d-block");
//     return false;
//   }
// }