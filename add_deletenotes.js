// 1. Notizen hinzufügen
// object for all notes, trash and archive
let allNotes = {
  'notesTitles': [],
  'notes': [],
  'trashNoteTitles': [],
  'trashNotes': [],
  'archiveTitles': [],
  'archiveNotes': [],
};

//Notiz anzeigen lassen 
function renderNotes() {
  // ich muss defineren, wo sie angezeigt werden sollen
  let contentRef = document.getElementById("content");
  contentRef.innerHTML = "";
  for (let indexNote = 0; indexNote < allNotes.notes.length; indexNote++) {
    contentRef.innerHTML += getNoteTemplate(indexNote);
  
  } 
}

// eine funktion die alle Notes verschiebt

function moveNote(indexNote, notesKey, titlesKey, destNotesKey, destTitlesKey) {
    let note  = allNotes[notesKey].splice(indexNote, 1)[0];
    let title = allNotes[titlesKey].splice(indexNote, 1)[0];

    allNotes[destNotesKey].push(note);
    allNotes[destTitlesKey].push(title);
    
renderAllfunction()
    
}


function renderAllfunction() {
  renderNotes();
    renderTrashNotes();
    renderArchive();
    saveToLocalStorage();
  
}



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
 allNotes.notes.push(noteInput);
allNotes.notesTitles.push(titleinput);

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
tempDeletedNote  = allNotes.notes[indexNote];     
tempDeletedTitle = allNotes.notesTitles[indexNote];
tempDeletedIndex = indexNote;


  renderArchivePreview();
  showDialog();
}
// Trash Notizen

function renderTrashNotes() {
  let trashContentRef = document.getElementById("content_trash");
  trashContentRef.innerHTML = "";

  for (
    let indexTrashNote = 0;
    indexTrashNote < allNotes.trashNotes.length;
    indexTrashNote++
  ) {
    trashContentRef.innerHTML += getTrashNoteTemplate(indexTrashNote);
  }
 
}


// Trash Notizen löschen

function deleteTrashNote(indexTrashNote) {
 allNotes.trashNotes.splice(indexTrashNote, 1);       
  allNotes.trashNoteTitles.splice(indexTrashNote, 1);
  renderAllfunction()
}


// 3. Notizen archievieren
// wann soll die archivierte notiz angezeigt werden? beim betätigen des buttons
// welche notiz soll archiviert werden? diejenige, bei der der button betätigt wurde

function confirmTrash() {
    moveNote(tempDeletedIndex, 'notes', 'notesTitles', 'trashNotes', 'trashNoteTitles');
    closeDialog();
}

function restoreFromTrash(indexTrashNote) {
    moveNote(indexTrashNote, 'trashNotes', 'trashNoteTitles', 'notes', 'notesTitles');
}

function moveToTrash(index) {
    moveNote(index, 'archiveNotes', 'archiveTitles', 'trashNotes', 'trashNoteTitles');
    closeDialog();
}