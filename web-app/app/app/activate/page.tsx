export default function ActivateBotPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold">Ativar Pega Plantão</h1>
        <p className="mt-2 text-gray-400">
          Quando o bot estiver ativo, ele responderá automaticamente às vagas compatíveis.
        </p>

        <div className="mt-8 grid gap-4">
          <div className="bg-zinc-900 rounded-xl p-6">
            <p className="text-sm text-gray-400">Limite de segurança</p>
            <p className="mt-1 font-semibold">3 respostas automáticas por dia</p>
            <p className="mt-2 text-sm text-gray-500">
              Ao atingir 3 respostas, o bot pausa automaticamente.
            </p>
          </div>

          <div className="bg-zinc-900 rounded-xl p-6">
            <p className="text-sm text-gray-400">Respostas hoje</p>
            <p className="mt-1 font-semibold">0 / 3</p>
          </div>

          <div className="bg-zinc-900 rounded-xl p-6 flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400">Status do bot</p>
              <p className="mt-1 font-semibold">Desativado</p>
            </div>

            <button className="bg-green-500 hover:bg-green-600 text-black font-semibold px-5 py-3 rounded-lg transition">
              Ativar
            </button>
          </div>
        </div>

        <div className="mt-8">
          <a
            href="/app"
            className="text-green-400 hover:underline"
          >
            Ir para o Dashboard →
          </a>
        </div>
      </div>
    </main>
  );
}
