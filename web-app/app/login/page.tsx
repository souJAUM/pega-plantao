"use client";

import { useState } from "react";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const form = new FormData(e.target as HTMLFormElement);
    const email = String(form.get("email") ?? "");
    const password = String(form.get("password") ?? "");

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      setError(data.error ?? "Erro ao entrar.");
      setLoading(false);
      return;
    }

    window.location.href = "/app";
  }

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-zinc-900 rounded-xl p-8">
        <h1 className="text-3xl font-bold text-center">Entrar</h1>

        <p className="mt-2 text-gray-400 text-center">Acesse sua conta para configurar o Pega Plantão</p>

        {error ? (
          <div className="mt-4 bg-red-950/40 border border-red-900 text-red-200 rounded p-3 text-sm">
            {error}
          </div>
        ) : null}

        <form className="mt-6 space-y-4" onSubmit={onSubmit}>
          <input name="email" type="email" placeholder="Email" className="w-full px-4 py-3 rounded bg-zinc-800 text-white focus:outline-none" />
          <input name="password" type="password" placeholder="Senha" className="w-full px-4 py-3 rounded bg-zinc-800 text-white focus:outline-none" />

          <button disabled={loading} type="submit" className="w-full bg-green-500 hover:bg-green-600 disabled:opacity-60 text-black font-semibold py-3 rounded transition">
            {loading ? "Entrando..." : "Entrar"}
          </button>
        </form>

        <p className="mt-6 text-sm text-gray-400 text-center">
          Ainda não tem conta?{" "}
          <a href="/signup" className="text-green-400 hover:underline">
            Criar conta
          </a>
        </p>
      </div>
    </main>
  );
}
