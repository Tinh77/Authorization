// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


var listBtnDelete = document.getElementsByClassName('btn-delete');
for (var i = 0; i < listBtnDelete.length; i++) {
    listBtnDelete[i].onclick = function () {
        if (confirm("Are you sure ?")) {
            var currentDeleteButton = this;
            var deleteId = this.id;
            var xmlHttpRequest = new XMLHttpRequest();
            xmlHttpRequest.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200) {
                    alert("Delete success");
                    currentDeleteButton.parentElement.remove();
                    location.reload();
                }
            }
            xmlHttpRequest.open("DELETE", "/IdentityRole/Delete?id=" + deleteId, true);
            xmlHttpRequest.send();
        }
    };
}

var check_all = document.getElementById('check-all');
check_all.onclick = function () {
    check = document.querySelectorAll("input[type='checkbox']");
    var isCheked = this.checked;
    for (var i = 0; i < check.length; i++) {
        check[i].checked = isCheked ? true : false;
    }
}

var deleteAll = document.getElementById("delete-all");
deleteAll.onclick = function () {
    var checkedItems = document.querySelectorAll(".check-item:checked");
    var deleteIds = new Array();
    for (var i = 0; i < checkedItems.length; i++) {
        deleteIds.push(checkedItems[i].id.replace("check-id-", ""));
    }
    console.log(deleteIds);
    if (deleteIds.length === 0) {
        alert("Please choose at least 1 item.");
        return;
    }
    // call ajax.
    var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            alert("Delete success");
            location.reload();
        }
    }
    xmlHttpRequest.open("DELETE", "/IdentityRole/DeleteMany?ids=" + deleteIds, true);
    xmlHttpRequest.send();

}