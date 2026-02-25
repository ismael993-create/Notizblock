// 1. Notizen hinzufügen

// eingabe von user definieren
function addNote() {
  // eingabe auslesen
  let noteInputRef = document.getElementById("note_Input");
  let noteInput = noteInputRef.value;
  // eingabe validieren wenn nichts eingegeben wurde, soll eine alert box erscheinen, die den user auffordert etwas einzugeben
  if (noteInput.trim() === "") {
    alert("Bitte etwas eingeben!");
   
    return;
  }

    let titleInputRef = document.getElementById("title_input");
  let titleinput = titleInputRef.value;

   if (titleinput.trim() === "") {
    alert("Bitte einen Titel eingeben!");
  
    return;
    
  }

  // eingabe den notizen hinzufügen
  notes.push(noteInput);
  notesTitle.push(titleinput);

  // eingabe anzeigen lassen im content container
  renderNotes();
saveToLocalStorage();

  // eingabe leeren lassen im input feld
  noteInputRef.value = "";
  titleInputRef.value = "";
}

// 2. Notizen löschen

// welche notiz muss gelöscht werden? beim betätigen des buttons
// wann muss die notiz gelöscht werden?

function trashNote(indexNote) {
  tempDeletedIndex = indexNote;
  tempDeletedNote = notes[indexNote];
  tempDeletedTitle = notesTitle[indexNote];

  renderArchivePreview();
  showDialog();
}
// Trash Notizen

function renderTrashNotes() {
  let trashContentRef = document.getElementById("content_trash");
  trashContentRef.innerHTML = "";

  for (
    let indexTrashNote = 0;
    indexTrashNote < trashNotes.length;
    indexTrashNote++
  ) {
    trashContentRef.innerHTML += getTrashNoteTemplate(indexTrashNote);
  }
 
}


// Trash Notizen löschen

function deleteTrashNote(indexTrashNote) {
  trashNotes.splice(indexTrashNote, 1);
  trashNoteTitles.splice(indexTrashNote, 1);
   renderNotes();
  renderTrashNotes();
    saveToLocalStorage();
}



// 3. Notizen archievieren
// wann soll die archivierte notiz angezeigt werden? beim betätigen des buttons
// welche notiz soll archiviert werden? diejenige, bei der der button betätigt wurde

function restoreFromTrash(indexTrashNote) {
  let restoredNote = trashNotes.splice(indexTrashNote, 1)[0];
  let restoredTitle = trashNoteTitles.splice(indexTrashNote, 1)[0];

  notes.push(restoredNote);
  notesTitle.push(restoredTitle);

  renderNotes();
  renderTrashNotes();
  saveToLocalStorage();
}

function moveToTrash(index) {
  let deletedNote = archiveNotes.splice(index, 1)[0];
  let deletedTitle = archiveTitles.splice(index, 1)[0];

  trashNotes.push(deletedNote);
  trashNoteTitles.push(deletedTitle);

  renderTrashNotes();
  renderArchive();
  closeDialog();
  saveToLocalStorage();
}


  // Jetzt erst löschen
function confirmTrash() {

  notes.splice(tempDeletedIndex, 1);
  notesTitle.splice(tempDeletedIndex, 1);

  trashNotes.push(tempDeletedNote);
  trashNoteTitles.push(tempDeletedTitle);
//erst hier unten können notizen angezeigt werden und trash etc.
  renderNotes();
  renderTrashNotes();
  saveToLocalStorage();
  closeDialog();
}