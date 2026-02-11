export default function ActivationPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold">Conectar WhatsApp</h1>
        <p className="mt-2 text-gray-400">
          Escaneie o QR Code no seu WhatsApp para iniciar a sessão.
        </p>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="bg-zinc-900 rounded-xl p-6">
            <p className="text-sm text-gray-400">QR Code</p>
            <div className="mt-4 aspect-square bg-zinc-800 rounded-lg flex items-center justify-center text-gray-400">
              QR PLACEHOLDER
            </div>
            <p className="mt-4 text-sm text-gray-500">
              (No MVP, o worker vai gerar o QR real aqui)
            </p>
          </div>

          <div className="bg-zinc-900 rounded-xl p-6">
            <p className="text-sm text-gray-400">Status</p>
            <p className="mt-2 font-semibold">Desconectado</p>

            <div className="mt-6 space-y-3 text-sm text-gray-300">
              <p>✅ Você controla quando conectar/desconectar.</p>
              <p>✅ O bot só monitora os grupos selecionados.</p>
              <p>✅ Limites de segurança ajudam a evitar respostas repetidas.</p>
            </div>

            <div className="mt-8 flex gap-3">
              <a
                href="/app/keywords"
                className="bg-green-500 hover:bg-green-600 text-black font-semibold px-5 py-3 rounded-lg transition"
              >
                Já conectei
              </a>

              <a
                href="/app/onboarding"
                className="bg-zinc-800 hover:bg-zinc-700 text-white font-semibold px-5 py-3 rounded-lg transition"
              >
                Voltar
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
