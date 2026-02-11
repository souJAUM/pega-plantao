export default function OnboardingPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold">Onboarding</h1>

        <p className="mt-2 text-gray-400">
          Em poucos passos você vai conectar seu WhatsApp e configurar o Pega Plantão.
        </p>

        <ol className="mt-6 space-y-3 text-gray-200">
          <li>✅ Conectar WhatsApp</li>
          <li>✅ Escolher palavras-chave</li>
          <li>✅ Criar resposta automática</li>
          <li>✅ Selecionar grupos</li>
          <li>✅ Ativar o bot</li>
        </ol>

        <div className="mt-8">
          <a
            href="/app/activation"
            className="bg-green-500 hover:bg-green-600 text-black font-semibold px-5 py-3 rounded-lg transition inline-block"
          >
            Conectar WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}
