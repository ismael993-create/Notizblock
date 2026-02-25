let notesTitle = [];
let notes = [];
// Papierkorb anzeige
let trashNoteTitles = [];
let trashNotes = [];

let archiveTitles = [];
let archiveNotes = [];


// 1. Notizen hinzufügen
function renderNotes() {
  // ich muss defineren, wo sie angezeigt werden sollen
  let contentRef = document.getElementById("content");
  contentRef.innerHTML = "";
  for (let indexNote = 0; indexNote < notes.length; indexNote++) {
    contentRef.innerHTML += getNoteTemplate(indexNote);
  
  }
}
function getNoteTemplate(indexNote) {
  return `<div class="note_card">
    <p>- Titel: ${notesTitle[indexNote]} <br>
     ->${notes[indexNote]} <br>

    <button class="trash_btn" onclick="trashNote(${indexNote})">x</button></p>
  </div>`;
}


function getTrashNoteTemplate(indexTrashNote) {
  return `
    <div class="note_card trash_card">
      <p><strong>${trashNoteTitles[indexTrashNote]}</strong></p>
      <p class="trash_txt">${trashNotes[indexTrashNote]}</p>

      <button onclick="restoreFromTrash(${indexTrashNote})">
        Wiederherstellen
      </button>

      <button class="trash_btn2" onclick="deleteTrashNote(${indexTrashNote})">
        Endgültig löschen
      </button>
    </div>
  `;}

  // 3. Notizen archievieren
//local storage und die anderen funktionen sind für das archieveren zuständig

function renderArchivePreview() {
  let archivRef = document.getElementById("archiv_content");
  archivRef.innerHTML = `
    <div class="note_card">
      <p><strong>${tempDeletedTitle}</strong></p>
      <p>${tempDeletedNote}</p>

      <button onclick="confirmRestore()">Beibehalten</button>
      <button class="trash_btn2" onclick="confirmTrash()">In Trash verschieben</button>
    </div>
  `;
}



function renderArchive() {
  let archivRef = document.getElementById("archiv_content");
  archivRef.innerHTML = "";

  for (let i = 0; i < archiveNotes.length; i++) {
    archivRef.innerHTML += `
      <div class="note_card">
        <p><strong>${archiveTitles[i]}</strong></p>
        <p>${archiveNotes[i]}</p>

        <button onclick="closeDialog()">
          Wiederherstellen
        </button>

        <button class="trash_btn2" onclick="moveToTrash(${i})">
          Endgültig löschen
        </button>
      </div>
    `;
  }
}
