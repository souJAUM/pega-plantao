"use client";

import { useEffect, useState } from "react";

export default function KeywordsPage() {
  const [required, setRequired] = useState("");
  const [interest, setInterest] = useState("");
  const [blocked, setBlocked] = useState("");

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    (async () => {
      const res = await fetch("/api/config");
      const data = await res.json().catch(() => ({}));
      if (res.ok && data?.config) {
        setRequired(data.config.required ?? "");
        setInterest(data.config.interest ?? "");
        setBlocked(data.config.blocked ?? "");
      }
      setLoading(false);
    })();
  }, []);

  async function saveAndContinue() {
    setMsg("");
    setSaving(true);

    const res = await fetch("/api/config", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ required, interest, blocked }),
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      setMsg(data.error ?? "Erro ao salvar.");
      setSaving(false);
      return;
    }

    setMsg("Salvo ✅");
    setSaving(false);
    window.location.href = "/app/responses";
  }

  if (loading) {
    return <div className="text-gray-300">Carregando...</div>;
  }

  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold">Palavras-chave</h1>
        <p className="mt-2 text-gray-400">
          Configure as regras que determinam quando o bot deve responder.
        </p>

        {msg ? (
          <div className="mt-4 bg-zinc-900 border border-zinc-800 rounded p-3 text-sm">
            {msg}
          </div>
        ) : null}

        <div className="mt-8 space-y-5">
          <div className="bg-zinc-900 rounded-xl p-6">
            <h2 className="text-lg font-semibold">Obrigatórias</h2>
            <p className="text-sm text-gray-400 mt-1">
              A mensagem precisa conter pelo menos uma dessas palavras.
            </p>
            <input
              value={required}
              onChange={(e) => setRequired(e.target.value)}
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
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
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
              value={blocked}
              onChange={(e) => setBlocked(e.target.value)}
              className="mt-4 w-full px-4 py-3 rounded bg-zinc-800 text-white focus:outline-none"
              placeholder="Ex: porta vermelha, emergência, UTI"
            />
          </div>
        </div>

        <div className="mt-8 flex gap-3">
          <button
            disabled={saving}
            onClick={saveAndContinue}
            className="bg-green-500 hover:bg-green-600 disabled:opacity-60 text-black font-semibold px-5 py-3 rounded-lg transition"
          >
            {saving ? "Salvando..." : "Salvar e continuar"}
          </button>

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
