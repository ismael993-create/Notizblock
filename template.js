
function getNoteTemplate(indexNote) {
  return `<div class="note_card">
    <p>- Titel: ${allNotes.notesTitles[indexNote]} <br>
     ->${allNotes.notes[indexNote]} <br>

    <button class="trash_btn" onclick="trashNote(${indexNote})">x</button></p>
  </div>`;
}


function getTrashNoteTemplate(indexTrashNote) {
  return `
    <div class="note_card trash_card">
      <p><strong>${allNotes.trashNoteTitles[indexTrashNote]}</strong></p>
      <p class="trash_txt">${allNotes.trashNotes[indexTrashNote]}</p>

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

  for (let i = 0; i < allNotes.archiveNotes.length; i++) {
    archivRef.innerHTML += `
      <div class="note_card">
        <p><strong>${allNotes.archiveTitles[i]}</strong></p>
        <p>${allNotes.archiveNotes[i]}</p>

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
