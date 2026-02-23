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
}


function getFromLocalStorage() {
   let savedNotes = JSON.parse(localStorage.getItem("notes"));
   let savedTitles = JSON.parse(localStorage.getItem("notesTitle"));
   let savedTrash = JSON.parse(localStorage.getItem("trashNotes"));
   let savedTrashTitles = JSON.parse(localStorage.getItem("trashNoteTitles"));
   let savedArchive = JSON.parse(localStorage.getItem("archiveNotes"));
   let savedArchiveTitles = JSON.parse(localStorage.getItem("archiveTitles"));

   if (savedNotes != null) notes = savedNotes;
   if (savedTitles != null) notesTitle = savedTitles;
   if (savedTrash != null) trashNotes = savedTrash;
   if (savedTrashTitles != null) trashNoteTitles = savedTrashTitles;
   if (savedArchive != null) archiveNotes = savedArchive;
   if (savedArchiveTitles != null) archiveTitles = savedArchiveTitles;
}

function saveToLocalStorage(){
    localStorage.setItem("notes", JSON.stringify(notes));
    localStorage.setItem("notesTitle", JSON.stringify(notesTitle));
    localStorage.setItem("trashNotes", JSON.stringify(trashNotes));
    localStorage.setItem("trashNoteTitles", JSON.stringify(trashNoteTitles));
    localStorage.setItem("archiveNotes", JSON.stringify(archiveNotes));
    localStorage.setItem("archiveTitles", JSON.stringify(archiveTitles));
}


