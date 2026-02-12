import { config } from "../../config/config";

interface LoveLetterProps {
  letterSegments: string[];
  onContinue: () => void;
}

export function LoveLetter({ letterSegments, onContinue }: LoveLetterProps) {
  const validSegments = letterSegments.filter(Boolean);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-100 via-pink-50 to-rose-200 dark:from-slate-950 dark:via-gray-900 dark:to-slate-950 px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative overflow-hidden transition-colors duration-500">
      {/* Floating background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[5%] text-rose-300 opacity-20 dark:opacity-10 text-6xl animate-[float-1_8s_ease-in-out_infinite]">
          💕
        </div>
        <div
          className="absolute top-[20%] right-[10%] text-pink-300 opacity-20 dark:opacity-10 text-5xl animate-[float-2_10s_ease-in-out_infinite]"
          style={{ animationDelay: "1s" }}
        >
          ✨
        </div>
        <div
          className="absolute bottom-[15%] left-[15%] text-rose-300 opacity-20 dark:opacity-10 text-5xl animate-[float-3_9s_ease-in-out_infinite]"
          style={{ animationDelay: "2s" }}
        >
          💖
        </div>
        <div
          className="absolute bottom-[25%] right-[8%] text-pink-300 opacity-20 dark:opacity-10 text-6xl animate-[float-1_11s_ease-in-out_infinite]"
          style={{ animationDelay: "1.5s" }}
        >
          💝
        </div>
      </div>

      <div className="max-w-3xl w-full relative z-10">
        {/* Liquid glass card */}
        <div className="bg-white/40 dark:bg-white/[0.07] backdrop-blur-xl rounded-3xl shadow-2xl shadow-rose-200/50 dark:shadow-black/30 p-8 sm:p-12 border border-white/60 dark:border-white/[0.12] relative overflow-hidden transition-colors duration-500">
          {/* Glass reflection effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/30 dark:from-white/[0.08] via-transparent to-transparent pointer-events-none" />

          <div className="relative">
            <div className="text-center mb-8">
              <div className="text-4xl sm:text-5xl mb-4">💌</div>
              <h1 className="text-3xl sm:text-4xl font-bold text-rose-900 dark:text-rose-100 mb-4">
                {config.loveLetter.heading}
              </h1>
              {/* Divider with liquid effect */}
              <div className="relative h-px w-24 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-rose-400 dark:via-rose-500/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-300 to-transparent blur-sm" />
              </div>
            </div>

            <div className="bg-white/20 dark:bg-white/[0.06] backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/40 dark:border-white/[0.08] shadow-inner">
              <div className="prose prose-lg max-w-none leading-relaxed space-y-6">
                <p
                  className="text-xl font-serif text-rose-900 dark:text-rose-200 mb-6 font-medium animate-[fadeIn_0.6s_ease-out]"
                  style={{ animationDelay: "0.2s", animationFillMode: "both" }}
                >
                  Querida {config.recipientName},
                </p>

                <p
                  className="font-serif text-rose-800 dark:text-rose-300 text-lg leading-relaxed animate-[fadeIn_0.6s_ease-out]"
                  style={{
                    animationDelay: `${(1 + 1) * 0.4}s`,
                    animationFillMode: "both",
                  }}
                >
                  Oi vida, não me ache emocionando viu hihihi
                </p>

                <p
                  className="font-serif text-rose-800 dark:text-rose-300 text-lg leading-relaxed animate-[fadeIn_0.6s_ease-out]"
                  style={{
                    animationDelay: `${(2 + 1) * 0.4}s`,
                    animationFillMode: "both",
                  }}
                >
                  Mas como não me emocionar com você, uma pessoa incrivel que me
                  deixa vascinado a cada dia que passa?
                </p>

                <p
                  className="font-serif text-rose-800 dark:text-rose-300 text-lg leading-relaxed animate-[fadeIn_0.6s_ease-out]"
                  style={{
                    animationDelay: `${(3 + 1) * 0.4}s`,
                    animationFillMode: "both",
                  }}
                >
                  Voce fez eu lembrar de coisas que eu nem lembrava mais. Me fez
                  sentir coisas que eu nem sabia que sentia.
                </p>

                <p
                  className="font-serif text-rose-800 dark:text-rose-300 text-lg leading-relaxed animate-[fadeIn_0.6s_ease-out]"
                  style={{
                    animationDelay: `${(4 + 1) * 0.4}s`,
                    animationFillMode: "both",
                  }}
                >
                  E quero saber mais de você, quero viver mais coisas com você,
                  quero te conhecer mais.
                </p>

                <p
                  className="font-serif text-rose-800 dark:text-rose-300 text-lg leading-relaxed animate-[fadeIn_0.6s_ease-out]"
                  style={{
                    animationDelay: `${(5 + 1) * 0.4}s`,
                    animationFillMode: "both",
                  }}
                >
                  Adoro falar com você, adoro te ouvir, sentir seu cheiro, te
                  ver sorrir, te ver feliz.
                </p>

                <p
                  className="font-serif text-rose-800 dark:text-rose-300 text-lg leading-relaxed animate-[fadeIn_0.6s_ease-out]"
                  style={{
                    animationDelay: `${(6 + 1) * 0.4}s`,
                    animationFillMode: "both",
                  }}
                >
                  O que te faz chorar? O que te deixa com medo? O que te deixa
                  feliz? Quero saber tudo a que posso ter direito.
                </p>

                <p
                  className="font-serif text-rose-800 dark:text-rose-300 text-lg leading-relaxed animate-[fadeIn_0.6s_ease-out]"
                  style={{
                    animationDelay: `${(7 + 1) * 0.4}s`,
                    animationFillMode: "both",
                  }}
                >
                  O que te faz chorar? O que te deixa com medo? O que te deixa
                  feliz? Quero saber tudo a que posso ter direito.
                </p>

                <p
                  className="font-serif text-rose-800 dark:text-rose-300 text-lg leading-relaxed animate-[fadeIn_0.6s_ease-out]"
                  style={{
                    animationDelay: `${(8 + 1) * 0.4}s`,
                    animationFillMode: "both",
                  }}
                >
                  Não costumo seguir muito meu coração, mas como me disseram uma
                  vez em uma noite chuvosa, "é melhor se arrepender das coisas
                  que a gente fez do que das coisas que a gente não fez".
                </p>

                <p
                  className="font-serif text-rose-800 dark:text-rose-300 text-lg leading-relaxed animate-[fadeIn_0.6s_ease-out]"
                  style={{
                    animationDelay: `${(9 + 1) * 0.4}s`,
                    animationFillMode: "both",
                  }}
                >
                  E com você, eu não me arrependo de nada, só quero viver mais e
                  mais coisas com você.
                </p>

                <p
                  className="font-serif text-rose-800 dark:text-rose-300 text-lg leading-relaxed animate-[fadeIn_0.6s_ease-out]"
                  style={{
                    animationDelay: `${(10 + 1) * 0.4}s`,
                    animationFillMode: "both",
                  }}
                >
                  Se o futuro nos resservar algo, que seja glorioso.
                </p>

                <div
                  className="mt-8 pt-6 border-t border-rose-300/50 dark:border-rose-500/30 animate-[fadeIn_0.6s_ease-out]"
                  style={{
                    animationDelay: `${(validSegments.length + 1) * 0.4}s`,
                    animationFillMode: "both",
                  }}
                >
                  <p className="font-serif text-lg text-rose-900 dark:text-rose-200 font-medium">
                    {config.loveLetter.closing}
                  </p>
                  <p className="font-serif text-xl text-rose-900 dark:text-rose-200 mt-2 italic font-semibold">
                    {config.loveLetter.signaturePrefix} {config.senderName} ❤️
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-8 sm:mt-10">
              <button
                type="button"
                onClick={onContinue}
                className="group relative px-8 sm:px-10 py-4 bg-gradient-to-r from-rose-500 via-pink-500 to-rose-500 hover:from-rose-600 hover:via-pink-600 hover:to-rose-600 text-white text-lg font-bold rounded-full shadow-lg shadow-rose-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-rose-500/60 active:scale-95 overflow-hidden"
              >
                {/* Glass shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative">
                  {config.loveLetter.continueButton} 💌
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
