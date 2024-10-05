var text = [
    [
      "Don't worry about me.",
      "Everything's fine.",
      "Everything's okay.",
      "I'm good.",
      "I'm great.",
      "It's okay."
    ],
    [
      "Everything is awful.",
      "Every day is harder than the last.",
      "Every morning, I feel neutral. Not happy, not sad, just neutral.",
      "Everyone cares about each other, but not about me.",
      "Everyone is friendly with each other, but not with me.",
      "Everything feels hollow and pointless and empty.",
      "Everything is so pointless.",
      "I am nothing.",
      "I am so alone.",
      "I can't do this any longer.",
      "I can't remember when this started.",
      "I can't stand feeling like this.",
      "I can't talk with anybody about this.",
      "I don't have any energy left.",
      "I don't want anyone to see me this way.",
      "I feel like giving up.",
      "I feel like I'm drowning.",
      "I feel like I've failed in life.",
      "I feel so alone.",
      "I get bullied.",
      "I hate me.",
      "I hate my life.",
      "I hate myself.",
      "I have no one.",
      "I have nobody to share my problems with.",
      "I have nobody to talk to.",
      "I have to get up each morning and put on a show.",
      "I know nobody will ever understand me.",
      "I mean nothing to them.",
      "I need help.",
      "I need to vent.",
      "I only have friends when they need something from me.",
      "I smile, but behind the façade, I'm a wreck.",
      "I want to die.",
      "I'm a disgrace.",
      "I'm a failure.",
      "I'm a loser.",
      "I'm boring.",
      "I'm digging myself into a hole of depression.",
      "I'm in pain.",
      "I'm losing hope each day.",
      "I'm miserable.",
      "I'm not fine.",
      "I'm so confused.",
      "I'm so depressed.",
      "I'm so scared.",
      "I'm suffering.",
      "I'm tearing up inside.",
      "I'm tired of feeling this way.",
      "I'm ugly.",
      "I'm unfriendly, and nobody likes me.",
      "I'm weak.",
      "It feels like nothing matters anymore.",
      "It hurts to feel this way.",
      "It's just terrible.",
      "It's just horrible.",
      "It's so hard.",
      "My grades are terrible.",
      "My life is meaningless.",
      'My so-called "friends" only talk to me when they need something.',
      "My family probably hates me.",
      "Nobody understands.",
      "Nobody understands me.",
      "Nobody understands how I feel.",
      "Nobody would believe that I feel this way.",
      "Nothing fills the void.",
      "Pretending to be happy is killing me inside.",
      "There is so much heartache.",
      "When did everything go wrong?",
      "Why me?",
      "Will it ever get better?"
    ]
  ];
  
  var message = function() {
    var span = document.createElement("span"),
      speed = Math.ceil(Math.random() * 4);
  
    // Good text.
    if (Math.random() < 0.01) {
      span.appendChild(document.createTextNode(text[0][Math.floor(Math.random() * text[0].length)]));
      span.className = "fake";
    }
  
    // Bad text.
    else
      span.appendChild(document.createTextNode(text[1][Math.floor(Math.random() * text[1].length)]));
    document.body.appendChild(span);
  
    span.style.left = document.body.clientWidth + "px"; // otherwise span.style.left is blank during calculations later
    span.style.top = Math.floor(Math.random() * (document.body.clientHeight - span.clientHeight)) + "px";
    spans[speed].push(span);
  
    setTimeout(
      function() {
        requestAnimationFrame(message);
      },
  
      // Taller browsers = more messages added per second
      Math.random() * span.clientHeight / document.body.clientHeight * 50000
    );
  },
  scroll = function() {
    requestAnimationFrame(scroll);
  
    for (var speed = 1; speed < spans.length; speed++) {
      // For each span in this speed,
      for (var x = 0; x < spans[speed].length; x++) {
        // Move it 1px to the left.
        var left = parseInt(spans[speed][x].style.left, 10) - speed;
        spans[speed][x].style.left = left + "px";
  
        // If it's completely offscreen,
        if (left == -1 * spans[speed][x].clientWidth) {
          // Remove it from the DOM.
          document.body.removeChild(spans[speed][x]);
  
          // Remove it from the array.
          for (y = x; y < spans[speed].length - 1; y++) spans[speed][y] = spans[speed][y + 1];
          spans[speed].pop();
  
          // Reiterate this index (which now contains the next element).
          if (x < spans[speed].length - 1) x--;
        }
      }
    }
  },
  spans = [null, [], [], [], []];
  
  message();
  scroll();
  