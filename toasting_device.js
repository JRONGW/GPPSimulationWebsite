const cups = [false, false, false];

function toggleCup(i) {
  cups[i] = !cups[i];
  render();
}

function render() {
  const count = cups.filter(Boolean).length;

  for (let i = 0; i < 3; i++) {
    const cup = document.getElementById(`cup-${i}`);
    const hint = document.getElementById(`pad-hint-${i}`);
    const pad = document.getElementById(`pad-${i}`);

    cup.classList.toggle('visible', cups[i]);
    hint.style.opacity = cups[i] ? '0' : '1';
    pad.classList.toggle('pressed', cups[i]);

    const others = [0, 1, 2].filter(j => j !== i);

    for (let k = 0; k < 2; k++) {
      const light = document.getElementById(`light-${i}-${k}`);
      light.classList.toggle('on', cups[others[k]]);
    }
  }

  const allOn = count === 3;

  document.getElementById('kettle-band').style.fill = allOn
    ? 'rgba(255,255,255,0.55)'
    : 'rgba(255,255,255,0.15)';

  ['kp-body', 'kp-handle', 'kp-rim', 'kp-spout'].forEach(id => {
    document.getElementById(id).style.stroke = allOn
      ? '#fff'
      : 'rgba(255,255,255,0.88)';
  });

  document.getElementById('kp-lid').style.fill = allOn
    ? '#fff'
    : 'rgba(255,255,255,0.88)';

  ['steam-a', 'steam-b', 'steam-c'].forEach(id => {
    document.getElementById(id).classList.toggle('on', allOn);
  });

  document.getElementById('glow-ring').classList.toggle('on', allOn);
  document.getElementById('toast-text').classList.toggle('visible', allOn);
}

render();