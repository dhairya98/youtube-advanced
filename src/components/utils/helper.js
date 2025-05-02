const indianNameList = [
  "Yodha",
  "Daku",
  "Bhai",
  "Tiger",
  "Singham",
  "Raavan",
  "Shaktimaan",
  "Mahadev",
  "Naagin",
  "Veer",
  "DesiBoy",
  "SwagWaleBhai",
  "Pahadi",
  "GaramMasala",
  "LassiKing",
  "BulletRider",
  "Rajputana",
  "Khiladi",
  "Nawab",
  "Chatori",
  "GullyBoy",
  "Sanskari",
  "BollywoodFan",
  "MirchiQueen",
  "SitarMaster",
  "DholBeats",
  "MasalaMix",
  "Thakur",
  "BiryaniBhai",
  "KarmaKing",
  "KudiPataka",
  "MastMaula",
  "Hindustani",
  "KachaBadam",
  "BapuDaFan",
  "JattDaSwag",
  "SamosaLover",
  "ChaiPeeneWala",
  "KhaatiPeetiFamily",
  "DesiRider",
  "MumbaiKaDon",
  "Jugaadu",
  "Khatarnak",
  "Bindaas",
  "SundarSanskari",
  "RamBharose",
  "Shera",
  "MaaKaSher",
  "AlooParatha",
  "TandooriNights",
  "LadkiPataneWala",
];

const funMessages = [
  "🔥 Ready to rule the gully!",
  "😎 Swag level 9000!",
  "💥 Full desi power activated!",
  "🍗 Biryani before battle!",
  "🤘 Kahaan hai party tonight?",
  "🛵 Riding into the sunset, desi style!",
  "📿 Just took blessings from Mahadev!",
  "💃 Break dance wali entry!",
  "👊 Daku with a heart!",
  "🚀 Flying high on chai energy!",
  "🎤 Mic drop on arrival!",
  "🐯 Tiger is back baby!",
  "🍔 Burger? No bro... Samosa!",
  "💪 Gym gaya tha, ab naam banane chala hoon!",
  "🚨 Don’t mess, desi don is here!",
  "🎯 Seedha dil pe jaake laga!",
  "🛕 Mandir jaa raha hoon… style mein!",
  "💥 Attitude toh bachpan se hi royal hai!",
  "🍿 Popcorn ready, entry scene baaki hai!",
  "👑 Born to rule, not to explain!",
  "🥁 Entry pe dhol bajega!",
  "📱 Bio mein likhlo: Danger ahead!",
  "🚧 No U-Turn, swag is one-way!",
  "🏏 Life = Chakde Phatte + Swag Shots!",
  "🛡️ Dosti mein hero, dushmani mein villain!",
  "🎮 Khel toh ab shuru hua hai!",
  "💣 Level unlocked: Thoda zyada over smart!",
  "🌶️ Masaledaar swag served hot!",
  "🌪️ Tez hawa mein bhi khade rehte hain hum!",
  "🧨 Dialogue delivery se hi darr lagta hai sabko!",
  "🕺 Desi thumka > any dance step!",
  "📍 Location: Dil + Dimaag dono mein!",
  "🦸‍♂️ Common name, uncommon game!",
  "🎸 Mic check 1 2, swagger's coming through!",
  "⚔️ Bina script ke bhi blockbuster hu main!",
];

const texts = [
  "Loved the explanation — super clear and easy to follow!",
  "Could you share more resources on this topic?",
  "I tried this approach and it improved my app’s speed noticeably.",
  "Can someone explain the difference between useMemo and useCallback?",
  "Thanks! That really helped clarify things.",
  "Interesting take — I hadn't thought about it that way.",
  "Does this work with server-side rendering too?",
  "Any performance benchmarks to back this up?",
  "I implemented this and my app broke. 😅 Help?",
  "Great read. Looking forward to more posts like this!",
  "The example was spot-on. Helped me understand quickly.",
  "I think there’s a typo in the code snippet you shared.",
  "Would you consider covering this topic in a video too?",
  "How would this scale with multiple users or sessions?",
  "The analogy you used made it click instantly!",
  "You should write a book — your writing style is great.",
  "Can this be used in a production-grade app?",
  "Is there a way to make this work in older browsers?",
  "What would you recommend as next steps after this?",
  "Subscribed — please keep sharing these deep dives!",
  "I was stuck for hours and this finally unblocked me!",
  "Is this compatible with the latest React version?",
  "Thanks! I used this in a real-world project yesterday.",
  "I shared this with my team — very well done.",
  "How would this interact with Redux or Zustand?",
];

const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

export const generateComment = (depth = 0, maxDepth = 2) => {
  const comment = {
    name: getRandom(indianNameList),
    text: getRandom(texts),
    replies: [],
  };

  if (depth < maxDepth && Math.random() < 0.6) {
    const replyCount = Math.floor(Math.random() * 2) + 1;
    for (let i = 0; i < replyCount; i++) {
      comment.replies.push(generateComment(depth + 1, maxDepth));
    }
  }

  return comment;
};

export const generateComments = (count = 5) => {
  return Array.from({ length: count }, () => generateComment());
};

export function generateRandomMessage() {
  const name =
    indianNameList[Math.floor(Math.random() * indianNameList.length)];
  const message = funMessages[Math.floor(Math.random() * funMessages.length)];
  const object = { name, message };
  return object;
}
