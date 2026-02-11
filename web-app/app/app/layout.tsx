export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-zinc-800">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/app" className="font-bold">
            Pega Plantão
          </a>

          <nav className="text-sm text-gray-300 flex gap-4">
            <a href="/app/activation" className="hover:text-white">WhatsApp</a>
            <a href="/app/keywords" className="hover:text-white">Palavras</a>
            <a href="/app/responses" className="hover:text-white">Respostas</a>
            <a href="/app/groups" className="hover:text-white">Grupos</a>
            <a href="/app/activate" className="hover:text-white">Ativar</a>
          </nav>

          <a
            href="/"
            className="bg-zinc-800 hover:bg-zinc-700 text-white font-semibold px-4 py-2 rounded-lg transition"
          >
            Sair
          </a>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 py-10">
        {children}
      </div>
    </div>
  );
}
