let quote = document.getElementById('quote');

let nextQuote = document.getElementById('nextQuote');

    let quotesCollection = [
      "“You are pregnant and powerful. You are bold and you are beautiful. Go forward in your boldness, in your beauty and in your contentedness. Trust your body to birth and know that the collective power if women worldwide will be with you.”",
      "“Whether your pregnancy was meticulously planned, medically coaxed, or happened by surprise, one thing is certain – your life will never be the same.”",
      "“Being pregnant changes you as a person. Each day is part of this amazing journey that completely shifts the focus of life and reevaluates personal and professional goals.”",
      "“Sometimes when you pick up your child, you can feel the map of your own bones under your hands, or smell the scent of your skin in the nape of his neck. This is the most extraordinary thing about motherhood – finding a piece of yourself separate and apart that all the same you could not live without.”",
      " “If I had my life to live over, instead of wishing away nine months of pregnancy, I’d have cherished ever moment and realized that the wonderment growing inside me was the only chance in life to assist God in a miracle.”",
      " “A woman has two smiles that an angel might envy, the smile that accepts a lover before words are uttered, and the smile that lights on the first born babe, and assures it of a mother’s love”",
      "“A mother’s joy begins when new life is stirring inside… when a tiny heartbeat is heard for the very first time, and a playful kick reminds her that she is never alone.”",
      " “Sometimes when you pick up your child you can feel the map of your own bones beneath your hands, or smell the scent of your skin in the nape of his neck. This is the most extraordinary thing about motherhood – finding a piece of yourself separate and apart that all the same you could not live without.”",
      " “In pregnancy, there are two bodies, one inside the other. Two people live under one skin. When so much of life is dedicated to maintaining our integrity as distinct beings, this bodily tandem is an uncanny fact.”",
      " “You are pregnant and you are powerful. You are bold and you are beautiful. Go forward in your boldness, in your beauty and in your contentedness. Trust your body to birth and know that the collective power of women worldwide will be with you.”",
      " “Birthing is the most profound initiation to spirituality a woman can have.”",
      " “In giving birth to our babies, we may find that we give birth to new possibilities within ourselves.”",
      " “Before you were conceived I wanted you. Before you were born I loved you. Before you were here an hour I would die for you. This is the miracle of Mother’s Love.”",
      " “To be pregnant is to be vitally alive, thoroughly woman, and distressingly inhabited. Soul and spirit are stretched – along with body – making pregnancy a time of transition, growth, and profound beginnings.”",
      "“A baby fills a place in your heart that you never knew was empty.”",
      "“Making the decision to have a baby is momentous. It is to decide forever to have your heart go walking around outside your body.”",
      " “A baby will make love stronger, days shorter, nights longer, bankroll smaller, home happier, clothes shabbier, the past forgotten and the future worth living for.”",
      " “A mother does not become pregnant in order to provide employment to medical people. Giving birth is an ecstatic jubilant adventure not available to males. It is a woman’s crowning creative experience of a lifetime.”",
      "Mama was my greatest teacher, a teacher of compassion, love and fearlessness.If love is sweet as a flower,then my mother is that sweet flower of love.",
      "The heart of a mother is a deep abyss at the bottom of which you will always find forgiveness",
      "The most important thing a father can do for his children is to love their mother.",
      "Peace is the beauty of life. It is sunshine. It is the smile of a child, the love of a mother, the joy of a father, the togetherness of a family. It is the advancement of man, the victory of a just cause, the triumph of truth.",
      "“Giving birth and being born brings us into the essence of creation, where the human spirit is courageous and bold and the body, a miracle of wisdom.”",
      " “The moment a child is born, the mother is also born. She never existed before. The woman existed, but the mother, never. A mother is something absolutely new.” and so in you the child your mother lives on and through your family continues to live… so at this time look after yourself and your family as you would your mother for through you all she will truly never die.”",
    ]

    let selectQuote = function(){
      return quotesCollection[Math.floor(Math.random() * quotesCollection.length)];
    }

    setInterval(function(){
      quote.innerText = selectQuote();
    },20000);

    nextQuote.addEventListener('click',function(){

     quote.innerHTML = selectQuote();
   })



