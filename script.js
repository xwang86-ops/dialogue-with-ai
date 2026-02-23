(function(){
  const answerKeywords = ["pork","lotus","soup","rib","lotus root","pork rib","bone"];
  const guessInput = document.getElementById('guess');
  const checkBtn = document.getElementById('check');
  const revealBtn = document.getElementById('reveal');
  const result = document.getElementById('result');
  
  const successMessages = [
    '✓ Plausible — you caught the savory essence.',
    '✓ Yes! You recognized the warm, nourishing soul.',
    '✓ Excellent — bone, root, and comfort shine through.'
  ];
  
  const failMessages = [
    '✗ Not quite — try savory, earthy words.',
    '✗ Different profile — think warmth and rootedness.',
    '✗ Keep trying — consider meaty, vegetable notes.'
  ];

  checkBtn.addEventListener('click', () => {
    const guess = (guessInput.value || '').toLowerCase();
    if(!guess.trim()) {
      result.textContent = 'Please enter a guess.';
      return;
    }
    const matched = answerKeywords.some(k => guess.includes(k));
    const messages = matched ? successMessages : failMessages;
    result.textContent = messages[Math.floor(Math.random() * messages.length)];
  });

  revealBtn.addEventListener('click', () => {
    result.textContent = 'Answer: pork rib and lotus root soup';
  });
  
  guessInput.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') checkBtn.click();
  });
})();
