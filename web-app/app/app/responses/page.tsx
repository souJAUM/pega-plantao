export default function ResponsesPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold">Respostas</h1>
        <p className="mt-2 text-gray-400">
          Defina o que o bot deve responder quando encontrar uma vaga compatível.
        </p>

        <div className="mt-8 bg-zinc-900 rounded-xl p-6">
          <label className="text-sm text-gray-400">Mensagem</label>
          <input
            className="mt-2 w-full px-4 py-3 rounded bg-zinc-800 text-white focus:outline-none"
            placeholder='Ex: "Eu pego."'
          />

          <div className="mt-6">
            <p className="text-sm text-gray-400">Destino</p>
            <div className="mt-3 flex flex-col gap-2">
              <label className="flex items-center gap-2">
                <input type="radio" name="dest" defaultChecked />
                Responder no grupo (reply)
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="dest" />
                Responder no privado de quem enviou
              </label>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-sm text-gray-400">Avisos</p>
            <div className="mt-3 flex flex-col gap-2">
              <label className="flex items-center gap-2">
                <input type="checkbox" defaultChecked />
                Avisar quando o bot responder
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Avisar se receber resposta depois (futuro)
              </label>
            </div>
          </div>
        </div>

        <div className="mt-8 flex gap-3">
          <a
            href="/app/groups"
            className="bg-green-500 hover:bg-green-600 text-black font-semibold px-5 py-3 rounded-lg transition"
          >
            Salvar e continuar
          </a>
          <a
            href="/app/keywords"
            className="bg-zinc-800 hover:bg-zinc-700 text-white font-semibold px-5 py-3 rounded-lg transition"
          >
            Voltar
          </a>
        </div>
      </div>
    </main>
  );
}
