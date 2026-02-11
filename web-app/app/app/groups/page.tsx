const groups = [
  { id: "1", name: "Plantões Clínica – Franca" },
  { id: "2", name: "Escala Médica Interior" },
  { id: "3", name: "UPA Região (Geral)" },
  { id: "4", name: "Emergência Noturno" },
];

export default function GroupsPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold">Grupos</h1>
        <p className="mt-2 text-gray-400">
          Selecione em quais grupos o Pega Plantão deve monitorar mensagens.
        </p>

        <div className="mt-4 text-sm text-gray-400">
          Plano Padrão: <span className="text-white font-semibold">até 3 grupos</span>
        </div>

        <div className="mt-8 bg-zinc-900 rounded-xl p-6 space-y-3">
          {groups.map((g) => (
            <label key={g.id} className="flex items-center gap-3">
              <input type="checkbox" />
              <span>{g.name}</span>
            </label>
          ))}
        </div>

        <div className="mt-8 flex gap-3">
          <a
            href="/app/activate"
            className="bg-green-500 hover:bg-green-600 text-black font-semibold px-5 py-3 rounded-lg transition"
          >
            Salvar e continuar
          </a>
          <a
            href="/app/responses"
            className="bg-zinc-800 hover:bg-zinc-700 text-white font-semibold px-5 py-3 rounded-lg transition"
          >
            Voltar
          </a>
        </div>
      </div>
    </main>
  );
}
