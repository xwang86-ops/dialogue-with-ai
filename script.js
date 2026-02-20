(function(){
  const answerKeywords = ["pork","lotus","soup","rib","lotus root","pork rib"];
  const smellText = document.getElementById('smellText');
  const guessInput = document.getElementById('guess');
  const checkBtn = document.getElementById('check');
  const revealBtn = document.getElementById('reveal');
  const result = document.getElementById('result');

  checkBtn.addEventListener('click', ()=>{
    const guess = (guessInput.value || '').toLowerCase();
    if(!guess.trim()){ result.textContent = 'Please enter a guess.'; return; }
    const matched = answerKeywords.some(k=> guess.includes(k));
    result.textContent = matched ? 'Plausible — you captured key notes.' : 'Not quite — try other savory or root-note words.';
  });

  revealBtn.addEventListener('click', ()=>{
    result.textContent = 'Answer: pork rib and lotus root soup';
  });
})();