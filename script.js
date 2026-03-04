// wie gehe ich vor?

//  notizen anzeigen lassen
// ich brauche notizen

let currentArchiveIndex = null;
let tempDeletedNote = null;
let tempDeletedTitle = null;
let tempDeletedIndex = null;

// ich muss defineren, wann sie angezeigt werden sollen


//local storage speichern

function init() {
  getFromLocalStorage();
  renderNotes();
  renderTrashNotes();
  renderArchive();
}

function saveToLocalStorage() {
    localStorage.setItem("notes",           JSON.stringify(allNotes.notes));
    localStorage.setItem("notesTitles",     JSON.stringify(allNotes.notesTitles));
    localStorage.setItem("trashNotes",      JSON.stringify(allNotes.trashNotes));
    localStorage.setItem("trashNoteTitles", JSON.stringify(allNotes.trashNoteTitles));
  
}

function getFromLocalStorage() {
    let savedNotes        = JSON.parse(localStorage.getItem("notes"));
    let savedTitles       = JSON.parse(localStorage.getItem("notesTitles"));
    let savedTrash        = JSON.parse(localStorage.getItem("trashNotes"));
    let savedTrashTitles  = JSON.parse(localStorage.getItem("trashNoteTitles"));
   

    if (savedNotes         != null) allNotes.notes          = savedNotes;
    if (savedTitles        != null) allNotes.notesTitles     = savedTitles;
    if (savedTrash         != null) allNotes.trashNotes      = savedTrash;
    if (savedTrashTitles   != null) allNotes.trashNoteTitles = savedTrashTitles;
    
}