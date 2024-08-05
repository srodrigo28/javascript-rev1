function validateForm(){
    var name = document.getElementById("name").value
    var age = document.getElementById("age").value
    var address = document.getElementById("address").value
    var email = document.getElementById("email").value

    if(!name){ alert("Name is requred"); return false }
    if(!age){ alert("Age is requred"); return false }
    if(age < 0){ alert("Age must not be zero or less than"); return false }
    if(!address){ alert("Address is requred"); return false }
    if(!email){ alert("E-mail is requred"); return false }
    if(!email.includes("@")){ alert("E-mail is not valid"); return false }

    return true;
}

function showData(){
    var peopleList;
    if(localStorage.getItem("peopleList") == null){
        peopleList = []
    }else{
        peopleList = JSON.parse(localStorage.getItem("peopleList"))
    }

    var html = "";

    peopleList.forEach(function (element, index){
        html += "<tr>";       
        html += "<td>" + element.name   + "</td>";       
        html += "<td>" + element.age    + "</td>";       
        html += "<td>" + element.address + "</td>";       
        html += "<td>" + element.email  + "</td>";
        html += '<td><button onclick="deleteData(' +
        index + 
        ')" class="btn btn-danger">Delete</button><button onclick="updateData(' +
        index + 
        ')" class="btn btn-warning m-2">Edit</button></td>';
        html +="</tr>";
        document.querySelector("#crudTable tbody").innerHtml = html;
    });
}