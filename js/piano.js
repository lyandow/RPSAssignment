var audioCtx = new(AudioContext || webkitAudioContext)();

function Sound(frequency, type) {
  this.osc = audioCtx.createOscillator(); // Create oscillator node
  this.playing = false; // flag to indicate if sound is playing

  /* Set default configuration for sound */
  if (typeof frequency !== 'undefined') {
    /* Set frequency. If it's not set, the default is used (440Hz) */
    this.osc.frequency.value = frequency;
  }

  /* Set waveform type. Default is actually 'sine' but triangle sounds better :) */
  this.osc.type = type || 'sawtooth';

  /* Start playing the sound. You won't hear it yet as the oscillator node needs to be
  piped to output (AKA your speakers). */
  this.osc.start(0);
};

Sound.prototype.play = function() {
  if (!this.playing) {
    this.playing = true;
    this.osc.connect(audioCtx.destination);
  }
};

Sound.prototype.stop = function() {
  this.playing = false;
  this.osc.disconnect();
};

var piano = {
  notes: {
    c: new Sound(261.6),
    'c-sharp': new Sound(277.18),
    d: new Sound(293.7),
    'd-sharp': new Sound(311.13),
    e: new Sound(329.6),
    f: new Sound(349.2),
    'f-sharp': new Sound(369.99),
    g: new Sound(392),
    'g-sharp': new Sound(415.30),
    a: new Sound(440),
    'a-sharp': new Sound(466.16),
    b: new Sound(493.9)
  },
  noteTimeouts: {
    c: null,
    d: null,
    e: null,
    f: null,
    g: null,
    a: null,
    b: null
  },
  play: function(note) {
    var self = this;
    if (self.notes[note]) {
      if (self.notes[note].playing && self.noteTimeouts[note]) {
        clearTimeout(self.noteTimeouts[note]);
        self.notes[note].stop();
      }
      self.notes[note].play();

      self.noteTimeouts[note] = setTimeout(function() {
        self.notes[note].stop();
      }, 500);
    }
  }
};
