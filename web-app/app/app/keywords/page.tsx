export default function KeywordsPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold">Palavras-chave</h1>
        <p className="mt-2 text-gray-400">
          Configure as regras que determinam quando o bot deve responder.
        </p>

        <div className="mt-8 space-y-5">
          <div className="bg-zinc-900 rounded-xl p-6">
            <h2 className="text-lg font-semibold">Obrigatórias</h2>
            <p className="text-sm text-gray-400 mt-1">
              A mensagem precisa conter pelo menos uma dessas palavras.
            </p>
            <input
              className="mt-4 w-full px-4 py-3 rounded bg-zinc-800 text-white focus:outline-none"
              placeholder="Ex: plantão, clínica, escala"
            />
          </div>

          <div className="bg-zinc-900 rounded-xl p-6">
            <h2 className="text-lg font-semibold">Interesse</h2>
            <p className="text-sm text-gray-400 mt-1">
              Existindo uma obrigatória, o bot procura por uma dessas para responder.
            </p>
            <input
              className="mt-4 w-full px-4 py-3 rounded bg-zinc-800 text-white focus:outline-none"
              placeholder="Ex: porta verde, ambulatorial, 12h"
            />
          </div>

          <div className="bg-zinc-900 rounded-xl p-6">
            <h2 className="text-lg font-semibold">Bloqueio</h2>
            <p className="text-sm text-gray-400 mt-1">
              Se contiver qualquer uma dessas palavras, o bot não responderá.
            </p>
            <input
              className="mt-4 w-full px-4 py-3 rounded bg-zinc-800 text-white focus:outline-none"
              placeholder="Ex: porta vermelha, emergência, UTI"
            />
          </div>
        </div>

        <div className="mt-8 flex gap-3">
          <a
            href="/app/responses"
            className="bg-green-500 hover:bg-green-600 text-black font-semibold px-5 py-3 rounded-lg transition"
          >
            Salvar e continuar
          </a>
          <a
            href="/app/activation"
            className="bg-zinc-800 hover:bg-zinc-700 text-white font-semibold px-5 py-3 rounded-lg transition"
          >
            Voltar
          </a>
        </div>
      </div>
    </main>
  );
}
