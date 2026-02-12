/**
 * Valentine Quiz -- White-Label Configuration
 * =============================================
 *
 * Edit this file to customise every piece of user-facing text in the quiz.
 * No other source files need to be changed.
 *
 * Sections:
 *   names        - Recipient and sender names used across all screens
 *   pageTitle    - The browser tab / window title
 *   intro        - Welcome screen text and button labels
 *   scoreReveal  - The "100 % match" results screen
 *   loveLetter   - The personalised love letter screen
 *   valentine    - The "Will you be my Valentine?" prompt screen
 *   footer       - Small text at the bottom of every page
 *
 * Theme colours are controlled by Tailwind classes in the components and
 * by src/styles/questionVariants.ts -- edit those if you want different
 * colour palettes.
 */
export const config = {
  // ─── Names ──────────────────────────────────────────────────────────
  /** The recipient's name (the person taking the quiz) */
  recipientName: "Amanda",

  /** The sender's name (the person who created the quiz) */
  senderName: "Isa",

  // ─── Page title ─────────────────────────────────────────────────────
  /** Shown in the browser tab */
  pageTitle: "Quiz de Dia dos Namorados 💘",

  // ─── Intro screen ──────────────────────────────────────────────────
  intro: {
    /** Greeting line above the recipient's name */
    greeting: "Happy valentine's day, meu amorzinho!",
    /** Main message paragraph */
    message:
      "Fiz esse momentinho pra gente. Um quizinho pra celebrar o que vivemos. Espero que você se sinta especial e feliz 💖",
    /** Instruction text below the message */
    instruction: "",
    /** Text on the start button (emoji is appended automatically) */
    startButton: "Bora Começar",
    /** Small note below the button */
    timeEstimate: "Prometo que leva só uns 2 minutinhos",
  },

  // ─── Score reveal screen ───────────────────────────────────────────
  scoreReveal: {
    /** Heading after the animated percentage */
    title: "100% Compatíveis! 💞",
    /** Body text explaining the score */
    message:
      "Eu já sabia que a gente combinava perfeitamente… mas ver suas respostas só confirmaram que meu coração nunca erra 😌💘",
    /** Label on the continue button (emoji appended automatically) */
    continueButton: "Ver Minha Cartinha",
  },

  // ─── Love letter screen ────────────────────────────────────────────
  loveLetter: {
    /** Section heading */
    heading: "Uma Cartinha Pra Você 💌",
    /** Closing line before signature */
    closing: "Com todo meu carinho,",
    /** Signature prefix -- the senderName is appended automatically */
    signaturePrefix: "Com amor,",
    /** Label on the continue button (emoji appended automatically) */
    continueButton: "Calma… Tem Mais 👀",
  },

  // ─── Valentine prompt screen ───────────────────────────────────────
  valentine: {
    /** The big question */
    question: "Você aceita ser meu amorzinho nesse Valentine's Day? 💖",
    /** Subtitle under the question */
    subtitle: "Pensa com carinho… (mas a resposta certa você já sabe)",
    /** Label on the Yes button (emoji appended automatically) */
    yesButton: "SIIIIM 💘",
    /** Label on the No button */
    noButton: "Não 😶",
    /** Hint text at the bottom */
    hintText: '(Vai lá… tenta apertar "Não" se tiver coragem 😈)',
    /** Witty messages shown when the No button is clicked */
    noClickMessages: [
      "HAHA, botão errado 😌",
      "Tem certeza mesmo? 🤨",
      "Hmm… acho que seu dedo escorregou 👀",
      "Esse botão é decorativo 😌",
      "A única resposta possível é SIM 💘",
    ],
  },

  // ─── Footer ────────────────────────────────────────────────────────
  footer: {
    /** Footer text template. {sender} and {recipient} are replaced automatically. */
    text: "Feito com muito amor por {sender} especialmente para {recipient} 💖",
  },
};
