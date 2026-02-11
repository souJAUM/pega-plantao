export default function AppHome() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold">Dashboard</h1>

        <div className="mt-6 grid gap-4">
          <div className="bg-zinc-900 rounded-xl p-5">
            <p className="text-gray-400 text-sm">Status WhatsApp</p>
            <p className="mt-1 font-semibold">Desconectado</p>
          </div>

          <div className="bg-zinc-900 rounded-xl p-5">
            <p className="text-gray-400 text-sm">Status do bot</p>
            <p className="mt-1 font-semibold">Desativado</p>
          </div>

          <div className="bg-zinc-900 rounded-xl p-5">
            <p className="text-gray-400 text-sm">Respostas hoje</p>
            <p className="mt-1 font-semibold">0 / 3</p>
          </div>
        </div>

        <div className="mt-8 flex gap-3">
          <a
            href="/app/onboarding"
            className="bg-green-500 hover:bg-green-600 text-black font-semibold px-5 py-3 rounded-lg transition"
          >
            Começar onboarding
          </a>

          <a
            href="/"
            className="bg-zinc-800 hover:bg-zinc-700 text-white font-semibold px-5 py-3 rounded-lg transition"
          >
            Voltar para a LP
          </a>
        </div>
      </div>
    </main>
  );
}
