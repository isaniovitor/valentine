import type { Question } from "../src/types/Question";

export const questions: Question[] = [
  {
    id: "q1",
    type: "multipleChoice",
    question: "O que lhe chamou a atenção em nós até agora?",
    designVariant: "gradient-rose",
    videoSrc: "videos/1-a-ha-take-on-me.mp4",
    options: [
      {
        text: "A forma como nossas conversas fluem naturalmente.",
        letterSegment:
          "Talking with you feels so natural \u2014 like we've known each other forever.",
      },
      {
        text: "O quanto seu sorriso ilumina meu dia.",
        letterSegment: "Your smile is honestly the highlight of my day.",
      },
      {
        text: "A vibe leve e divertida que a gente tem juntos.",
        letterSegment: "Being around you already feels so easy and right.",
      },
      {
        text: "As pequenas surpresas ao longo do caminho (tipo essa hehe).",
        letterSegment:
          "Every time we hang out, you surprise me in the best way.",
      },
      {
        text: "Outra coisa? me mande uma mensagem contando",
        letterSegment: "",
      },
    ],
  },
  {
    id: "q2",
    type: "heartRating",
    question: "O quanto você gostou do nosso tempo juntos? (espero ter mais)",
    designVariant: "hearts-pattern",
    maxHearts: 5,
    options: [
      { hearts: 1, letterSegment: "You're pretty good company, I'll admit." },
      { hearts: 2, letterSegment: "I genuinely look forward to seeing you." },
      {
        hearts: 3,
        letterSegment:
          "You've quickly become my favorite person to spend time with.",
      },
      {
        hearts: 4,
        letterSegment: "I catch myself smiling just thinking about our plans.",
      },
      {
        hearts: 5,
        letterSegment:
          "Honestly? I can't stop thinking about when we'll hang out next.",
      },
    ],
  },
  {
    id: "q3",
    type: "yesNo",
    question: "Você acha que temos algo especial começando aqui? 😏",
    designVariant: "romantic-purple",
    videoSrc: "videos/2-George-Michael-Careless-Whisper.mp4",
    options: [
      {
        value: "yes",
        text: "Com certeza, gosto para onde isso está indo.",
        letterSegment:
          "I feel like we've got something really good starting, and I can't wait to see where it goes.",
      },
      {
        value: "no",
        text: "Sera? Estou gostando do que vejo.",
        letterSegment:
          "What's happening between us is already better than anything I could have imagined.",
      },
    ],
  },
  {
    id: "q4",
    type: "emojiReaction",
    question: "O que você acha de me conhecer melhor?",
    designVariant: "pastel-dream",
    options: [
      {
        emoji: "\uD83E\uDD70",
        label: "Animado e curioso",
        letterSegment: "Getting to know you has been the best part of my week.",
      },
      {
        emoji: "\u2728",
        label: "Não consigo esperar para saber mais",
        letterSegment:
          "Every conversation leaves me wanting to know more about you.",
      },
      {
        emoji: "\uD83C\uDF08",
        label: "Vai ser muito divertido descobrir mais um sobre o outro",
        letterSegment:
          "You make everything more fun \u2014 I didn't think that was possible.",
      },
      {
        emoji: "\uD83D\uDCAB",
        label: "Outra coisa? me mande uma mensagem contando",
        letterSegment:
          "You've surprised me in the best way, and I'm here for it.",
      },
    ],
  },
  {
    id: "q5",
    type: "multipleChoice",
    question: "O que você mais gosta na nossa sintonia?",
    designVariant: "love-bubbles",
    videoSrc: "videos/3-Earth-Wind-Fire-September.mp4",
    options: [
      {
        text: "Nossas conversas que fluem tão facilmente",
        letterSegment:
          "Our conversations could go on forever, and I'd never get bored.",
      },
      {
        text: "Temos o mesmo senso de humor",
        letterSegment:
          "The fact that we crack each other up is honestly the best.",
      },
      {
        text: "Somos ambos genuinamente curiosos um pelo outro",
        letterSegment:
          "I love how we're both actually interested in each other's worlds.",
      },
      {
        text: "Outra coisa? me mande uma mensagem contando",
        letterSegment:
          "Everything with you feels effortless, and that's pretty rare.",
      },
    ],
  },
  {
    id: "q6",
    type: "heartRating",
    question: "Quão animada você está para o nosso próximo encontro? 👀",
    designVariant: "soft-crimson",
    videoSrc: "videos/vergos.mp4",
    maxHearts: 5,
    options: [
      { hearts: 1, letterSegment: "I'm looking forward to it, for sure." },
      { hearts: 2, letterSegment: "Already thinking about what we could do." },
      { hearts: 3, letterSegment: "Counting down the days, not gonna lie." },
      {
        hearts: 4,
        letterSegment: "I may have already started planning outfit options.",
      },
      {
        hearts: 5,
        letterSegment: "Let's just say my calendar is cleared and ready.",
      },
    ],
  },
  {
    id: "q7",
    type: "yesNo",
    question: "Você diria que me conhecer foi uma feliz coincidência?",
    designVariant: "golden-glow",
    videoSrc: "videos/4-tyn-tyn.mp4",
    options: [
      {
        value: "yes",
        text: "Melhor acidente de todos",
        letterSegment:
          "Meeting you was the kind of happy accident that makes everything feel like it's falling into place.",
      },
      {
        value: "no",
        text: "Eu acho que foi destino",
        letterSegment:
          "I don't believe in accidents \u2014 I think we were supposed to meet.",
      },
    ],
  },
];
