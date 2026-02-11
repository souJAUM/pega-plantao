export default function SignupPage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-zinc-900 rounded-xl p-8">
        
        <h1 className="text-3xl font-bold text-center">
          Criar conta
        </h1>

        <p className="mt-2 text-gray-400 text-center">
          Teste o Pega Plantão grátis por 24 horas
        </p>

        <form className="mt-6 space-y-4">
          <input
            type="text"
            placeholder="Nome"
            className="w-full px-4 py-3 rounded bg-zinc-800 text-white focus:outline-none"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded bg-zinc-800 text-white focus:outline-none"
          />

          <input
            type="password"
            placeholder="Senha"
            className="w-full px-4 py-3 rounded bg-zinc-800 text-white focus:outline-none"
          />

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold py-3 rounded transition"
          >
            Criar conta
          </button>
        </form>

      </div>
    </main>
  );
}
