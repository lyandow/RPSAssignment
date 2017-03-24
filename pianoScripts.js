const keys = document.getElementsByClassName("key");
const curNote = document.getElementById("current-note");
const notesPlayed = document.getElementById('notesPlayed');
var note;

for(var i = 0; i < keys.length; i++) {
  keys.item(i).addEventListener('mousedown', function() {
    var listEl = document.createElement('li');
    console.log(this.id);
    if (this.className === 'key')
    {
      this.className = 'key pressed';
      note = this.id;
      curNote.id = note;
      piano.play(curNote.id);
      listEl.innerHTML = note;
      notesPlayed.appendChild(listEl);
    }
    else if (this.className === 'key sharp')
    {
      this.className = 'key sharp pressed';
      note = this.id;
      curNote.id = note;
      listEl.innerHTML = note;
      notesPlayed.appendChild(listEl);
      piano.play(curNote.id);
    }
  })

  keys.item(i).addEventListener('mouseup', function() {
    console.log(this.id);
    if (this.className === 'key pressed')
    {
      this.className = 'key';
      note = this.id;
      curNote.id = '';
    }
    else if (this.className === 'key sharp pressed')
    {
      this.className = 'key sharp';
      note = this.id;
      curNote.id = '';
    }
  })
}
