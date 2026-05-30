"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getSubscribers } from "@/app/actions/newsletter";

interface Subscriber {
  email: string;
  subscribedAt: string;
}

export default function SubscribersAdmin() {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSubscribers = async () => {
      const data = await getSubscribers();
      setSubscribers(data);
      setLoading(false);
    };
    fetchSubscribers();
  }, []);

  const formatDate = (isoString: string) => {
    const date = new Date(isoString);
    return date.toLocaleDateString("de-DE", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <Link href="/" className="text-mint-400 hover:text-pink-300 mb-8 inline-block">
          ← Zurück zur Website
        </Link>

        <div className="mb-8">
          <h1 className="text-5xl font-bold text-white mb-2">Newsletter Subscribers</h1>
          <p className="text-gray-300">
            Insgesamt: <span className="text-mint-400 font-bold">{subscribers.length}</span> Anmeldungen
          </p>
        </div>

        {loading ? (
          <p className="text-gray-400">Lädt...</p>
        ) : subscribers.length === 0 ? (
          <div className="bg-pink-400/10 border border-pink-400/30 rounded-lg p-8 text-center">
            <p className="text-gray-300">Noch keine Anmeldungen.</p>
          </div>
        ) : (
          <div className="overflow-x-auto bg-white/5 rounded-lg border border-white/10">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="px-6 py-4 text-left text-white font-bold">E-Mail</th>
                  <th className="px-6 py-4 text-left text-white font-bold">Anmeldedatum</th>
                </tr>
              </thead>
              <tbody>
                {subscribers.map((sub, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-white/5 hover:bg-white/5 transition-colors"
                  >
                    <td className="px-6 py-4 text-gray-300">{sub.email}</td>
                    <td className="px-6 py-4 text-gray-400 text-sm">{formatDate(sub.subscribedAt)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="mt-12 p-6 bg-mint-400/10 border border-mint-400/30 rounded-lg">
          <h2 className="text-white font-bold mb-2">💡 Hinweis</h2>
          <p className="text-gray-300 text-sm">
            Die E-Mails werden lokal in <code className="bg-black/50 px-2 py-1 rounded text-mint-400">data/subscribers.json</code> gespeichert. Du kannst diese Datei jederzeit exportieren oder mit E-Mail-Tools verbinden.
          </p>
        </div>
      </div>
    </div>
  );
}
