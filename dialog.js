
// 4. Dialog anzeigen

function showDialog() {
  let dialog = document.getElementById("archiv_dialog");
  dialog.showModal();
}

function closeDialog() {
  let dialog = document.getElementById("archiv_dialog");
  dialog.close();
}


function confirmRestore() {
  closeDialog();
}