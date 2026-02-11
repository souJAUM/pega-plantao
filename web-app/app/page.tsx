export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      
      <h1 className="text-4xl md:text-6xl font-bold text-center max-w-3xl">
        Seja o primeiro a responder o plantão.
      </h1>

      <p className="mt-6 text-lg md:text-xl text-gray-300 text-center max-w-2xl">
        O <strong>Pega Plantão</strong> monitora seus grupos de WhatsApp e responde
        automaticamente às vagas que você quer — antes de todo mundo.
      </p>

      <a
        href="/signup"
        className="mt-10 inline-block bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-4 rounded-lg transition"
      >
        Testar grátis por 24h
      </a>

      <p className="mt-4 text-sm text-gray-400">
        Sem cartão • Ativação rápida
      </p>

    </main>
  );
}
