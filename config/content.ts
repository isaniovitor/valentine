import type { Question } from '../src/types/Question';

export const questions: Question[] = [
  {
    id: 'q1',
    type: 'multipleChoice',
    question: 'What makes your heart flutter when we\'re together?',
    designVariant: 'gradient-rose',
    videoSrc: 'videos/classic-1-cat-piano.webm',
    options: [
      {
        text: 'When you hold my hand',
        letterSegment: 'Every time your fingers intertwine with mine, the world feels complete.',
      },
      {
        text: 'Your laughter lighting up the room',
        letterSegment: 'Your laughter is the melody that makes every moment magical.',
      },
      {
        text: 'The way you look at me',
        letterSegment: 'In your eyes, I see forever — and I never want to look away.',
      },
      {
        text: 'The quiet moments we share',
        letterSegment: 'The silence between us speaks louder than any words ever could.',
      },
    ],
  },
  {
    id: 'q2',
    type: 'heartRating',
    question: 'How strong are the butterflies when you think of us?',
    designVariant: 'hearts-pattern',
    maxHearts: 5,
    options: [
      { hearts: 1, letterSegment: 'You make me smile in ways I never thought possible.' },
      { hearts: 2, letterSegment: 'Thinking of you brings warmth to my coldest days.' },
      { hearts: 3, letterSegment: 'You\'ve become the highlight of every single day.' },
      { hearts: 4, letterSegment: 'My heart races every time I know I\'ll see you soon.' },
      { hearts: 5, letterSegment: 'You are the love story I never dared to dream of.' },
    ],
  },
  {
    id: 'q3',
    type: 'yesNo',
    question: 'Do you feel like we\'re writing our own beautiful story?',
    designVariant: 'romantic-purple',
    videoSrc: 'videos/classic-2-cat-funny-clip.webm',
    options: [
      {
        value: 'yes',
        text: 'Absolutely, with every chapter',
        letterSegment: 'With you, I\'m writing the love story I\'ve always wanted to live.',
      },
      {
        value: 'no',
        text: 'It transcends any story',
        letterSegment: 'What we have transcends stories — it\'s pure magic, impossibly real.',
      },
    ],
  },
  {
    id: 'q4',
    type: 'emojiReaction',
    question: 'What do you feel when you picture our future?',
    designVariant: 'pastel-dream',
    options: [
      {
        emoji: '🥰',
        label: 'Filled with love',
        letterSegment: 'Our future is a canvas I want to paint with endless love.',
      },
      {
        emoji: '✨',
        label: 'Sparkling with excitement',
        letterSegment: 'Every tomorrow with you feels like opening a gift I\'ve always wanted.',
      },
      {
        emoji: '🌈',
        label: 'Bright and colorful',
        letterSegment: 'You bring color to every corner of my life and every dream I hold.',
      },
      {
        emoji: '💫',
        label: 'Starstruck and dreamy',
        letterSegment: 'Dreaming of forever with you feels like reaching for the stars and catching them.',
      },
    ],
  },
  {
    id: 'q5',
    type: 'multipleChoice',
    question: 'What do you cherish most about our connection?',
    designVariant: 'love-bubbles',
    videoSrc: 'videos/classic-3-cat-japanese.webm',
    options: [
      {
        text: 'Understanding each other without words',
        letterSegment: 'You know my heart in the quiet spaces where words aren\'t needed.',
      },
      {
        text: 'Making each other laugh endlessly',
        letterSegment: 'With you, laughter isn\'t just sound — it\'s the rhythm of our love.',
      },
      {
        text: 'Supporting each other\'s dreams',
        letterSegment: 'You believe in me so fiercely that I\'ve started believing in myself too.',
      },
      {
        text: 'Being perfectly imperfect together',
        letterSegment: 'Our flaws fit together like puzzle pieces made just for us.',
      },
    ],
  },
  {
    id: 'q6',
    type: 'heartRating',
    question: 'How much do you look forward to creating memories with me?',
    designVariant: 'soft-crimson',
    maxHearts: 5,
    options: [
      { hearts: 1, letterSegment: 'Every moment with you is a treasure.' },
      { hearts: 2, letterSegment: 'I look forward to every adventure, big or small, by your side.' },
      { hearts: 3, letterSegment: 'The thought of making memories with you fills me with joy.' },
      { hearts: 4, letterSegment: 'I can\'t wait to fill our story with moments we\'ll never forget.' },
      { hearts: 5, letterSegment: 'Creating memories with you is the greatest gift life could give me.' },
    ],
  },
  {
    id: 'q7',
    type: 'yesNo',
    question: 'Does being with me feel like coming home?',
    designVariant: 'golden-glow',
    videoSrc: 'videos/classic-4-tyn-tyn.webm',
    options: [
      {
        value: 'yes',
        text: 'Yes, my safe place',
        letterSegment: 'In your arms, I\'ve found the home I\'ve been searching for all along.',
      },
      {
        value: 'no',
        text: 'It feels like more than home',
        letterSegment: 'You\'re not just home — you\'re the entire universe where I belong.',
      },
    ],
  },
];
