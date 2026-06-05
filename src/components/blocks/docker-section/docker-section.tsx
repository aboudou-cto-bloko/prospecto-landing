"use client";

import { useState } from "react";

function DockerSection() {
  const [osTab, setOsTab] = useState<"windows" | "mac" | "linux">("windows");
  const installCommand = "curl -fsSL https://aboudouzinsou.com/install.sh | bash";

  return (
    <section id="docker" className="max-w-5xl mx-auto px-6 py-24 scroll-mt-20">
      <div className="mb-12">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#455dd3] mb-5">
          Installation
        </p>
        <h2
          className="text-4xl font-bold mb-4"
          style={{ letterSpacing: "-0.03em" }}
        >
          3 étapes. C'est tout.
        </h2>
        <p className="text-[#615d59] text-sm leading-[1.7] max-w-sm">
          Docker gère tout. Tu copies une commande, tu attends deux minutes.
        </p>
      </div>

      {/* OS Tabs */}
      <div className="mb-8 flex gap-2 justify-center border-b border-white/8">
        {["windows", "mac", "linux"].map((os) => (
          <button
            key={os}
            onClick={() => setOsTab(os as typeof osTab)}
            className={`px-4 py-3 text-sm font-medium border-b-2 transition ${
              osTab === os ? "border-[#455dd3] text-white" : "border-transparent text-[#615d59] hover:text-white"
            }`}
          >
            {os === "windows" ? "Windows" : os === "mac" ? "macOS" : "Linux"}
          </button>
        ))}
      </div>

      {osTab === "windows" && <WindowsGuide installCommand={installCommand} />}
      {osTab === "mac" && <MacGuide installCommand={installCommand} />}
      {osTab === "linux" && <LinuxGuide installCommand={installCommand} />}

      {/* Final CTA */}
      <div className="text-center mt-12">
        <p className="text-[#615d59] mb-6 text-sm">Moins de 5 minutes. Plus d'excuses.</p>
        <a
          href="#acheter"
          className="inline-block px-6 py-3 bg-[#455dd3] hover:bg-[#3a4fb8] rounded-lg font-medium transition text-white"
        >
          Acheter une license
        </a>
      </div>
    </section>
  );
}

function WindowsGuide({ installCommand }: { installCommand: string }) {
  return (
    <div className="space-y-8 mb-12">
      {[1, 2, 3].map((step) => (
        <div key={step} className="rounded-lg border border-white/8 bg-[#191918] p-6">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-lg bg-[#455dd3]/10 border border-[#455dd3]/20 flex items-center justify-center text-sm font-bold text-[#455dd3]">
              {step}
            </div>
            <div className="flex-1">
              {step === 1 && (
                <>
                  <h3 className="font-semibold mb-2">Installer Docker Desktop</h3>
                  <ol className="space-y-2 text-sm text-[#615d59] mb-4">
                    <li>• Va sur <a href="https://docker.com/products/docker-desktop" target="_blank" rel="noopener noreferrer" className="text-[#455dd3] hover:underline">docker.com/products/docker-desktop</a></li>
                    <li>• Clique sur "Download for Windows"</li>
                    <li>• Lance l'installateur et suit les étapes</li>
                    <li>• Redémarre ton PC</li>
                  </ol>
                  <p className="text-xs text-[#615d59] bg-[#0a0a09] p-3 rounded border border-white/8">
                    💡 Docker demande d'activer WSL2. Si tu le vois, clique "Install".
                  </p>
                </>
              )}
              {step === 2 && (
                <>
                  <h3 className="font-semibold mb-2">Vérifier que Docker marche</h3>
                  <p className="text-sm text-[#615d59] mb-3">Ouvre PowerShell (Windows + R, tape "powershell")</p>
                  <div className="bg-[#0a0a09] border border-white/8 rounded-lg p-4 mb-3 font-mono text-xs">
                    <span className="text-[#615d59]">&gt; </span>
                    <span className="text-white">docker --version</span>
                  </div>
                  <p className="text-xs text-[#615d59]">Tu devrais voir: "Docker version 27.x.x"</p>
                </>
              )}
              {step === 3 && (
                <>
                  <h3 className="font-semibold mb-2">Lancer Prospecto</h3>
                  <p className="text-sm text-[#615d59] mb-3">Copie dans PowerShell:</p>
                  <div className="bg-[#0a0a09] border border-white/8 rounded-lg p-4 mb-3 font-mono text-xs overflow-x-auto">
                    <span className="text-[#615d59]">&gt; </span>
                    <span className="text-white">{installCommand}</span>
                  </div>
                  <p className="text-xs text-[#615d59]">Attends ~2 minutes.</p>
                  <p className="text-xs text-[#4ade80] mt-3">
                    ✓ Ouvre <a href="http://localhost:3000" target="_blank" rel="noopener noreferrer" className="underline">localhost:3000</a>
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      ))}
      <div className="rounded-lg border border-yellow-500/20 bg-yellow-500/5 p-4">
        <h4 className="font-semibold text-sm mb-3">❓ Erreurs courantes</h4>
        <ul className="space-y-2 text-xs text-[#615d59]">
          <li><strong className="text-white">"permission denied"</strong> — PowerShell en administrateur</li>
          <li><strong className="text-white">"Port utilisé"</strong> — <code className="bg-[#0a0a09] px-2 py-1 rounded text-[#455dd3]">PORT=3001</code></li>
        </ul>
      </div>
    </div>
  );
}

function MacGuide({ installCommand }: { installCommand: string }) {
  return (
    <div className="space-y-8 mb-12">
      {[1, 2, 3].map((step) => (
        <div key={step} className="rounded-lg border border-white/8 bg-[#191918] p-6">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-lg bg-[#455dd3]/10 border border-[#455dd3]/20 flex items-center justify-center text-sm font-bold text-[#455dd3]">
              {step}
            </div>
            <div className="flex-1">
              {step === 1 && (
                <>
                  <h3 className="font-semibold mb-2">Installer Docker Desktop</h3>
                  <ol className="space-y-2 text-sm text-[#615d59]">
                    <li>• <a href="https://docker.com/products/docker-desktop" target="_blank" rel="noopener noreferrer" className="text-[#455dd3] hover:underline">docker.com/products/docker-desktop</a> → Download for Mac</li>
                    <li>• Choisis: Intel ou Apple Silicon M1/M2/M3</li>
                    <li>• Glisse Docker dans Applications</li>
                    <li>• Lance Docker</li>
                  </ol>
                </>
              )}
              {step === 2 && (
                <>
                  <h3 className="font-semibold mb-2">Vérifier</h3>
                  <p className="text-sm text-[#615d59] mb-2">Terminal (Cmd + Espace, "terminal")</p>
                  <div className="bg-[#0a0a09] border border-white/8 rounded-lg p-3 font-mono text-xs">
                    <span className="text-[#615d59]">$ </span>
                    <span className="text-white">docker --version</span>
                  </div>
                </>
              )}
              {step === 3 && (
                <>
                  <h3 className="font-semibold mb-2">Lancer</h3>
                  <div className="bg-[#0a0a09] border border-white/8 rounded-lg p-3 font-mono text-xs overflow-x-auto mb-3">
                    <span className="text-[#615d59]">$ </span>
                    <span className="text-white">{installCommand}</span>
                  </div>
                  <p className="text-xs text-[#4ade80]">✓ Ouvre <a href="http://localhost:3000" target="_blank" rel="noopener noreferrer" className="underline">localhost:3000</a></p>
                </>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function LinuxGuide({ installCommand }: { installCommand: string }) {
  return (
    <div className="space-y-8 mb-12">
      {[1, 2, 3].map((step) => (
        <div key={step} className="rounded-lg border border-white/8 bg-[#191918] p-6">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-lg bg-[#455dd3]/10 border border-[#455dd3]/20 flex items-center justify-center text-sm font-bold text-[#455dd3]">
              {step}
            </div>
            <div className="flex-1">
              {step === 1 && (
                <>
                  <h3 className="font-semibold mb-2">Installer Docker</h3>
                  <div className="bg-[#0a0a09] border border-white/8 rounded-lg p-3 font-mono text-xs overflow-x-auto mb-2">
                    <span className="text-[#615d59]">$ </span>
                    <span className="text-white">curl -fsSL https://get.docker.com -o get-docker.sh && sudo sh get-docker.sh</span>
                  </div>
                  <div className="bg-[#0a0a09] border border-white/8 rounded-lg p-3 font-mono text-xs">
                    <span className="text-[#615d59]">$ </span>
                    <span className="text-white">sudo usermod -aG docker $USER</span>
                  </div>
                </>
              )}
              {step === 2 && (
                <>
                  <h3 className="font-semibold mb-2">Redémarre ta session</h3>
                  <p className="text-sm text-[#615d59]">Ferme Terminal et rouvre.</p>
                </>
              )}
              {step === 3 && (
                <>
                  <h3 className="font-semibold mb-2">Lancer</h3>
                  <div className="bg-[#0a0a09] border border-white/8 rounded-lg p-3 font-mono text-xs overflow-x-auto mb-3">
                    <span className="text-[#615d59]">$ </span>
                    <span className="text-white">{installCommand}</span>
                  </div>
                  <p className="text-xs text-[#4ade80]">✓ <a href="http://localhost:3000" target="_blank" rel="noopener noreferrer" className="underline">localhost:3000</a></p>
                </>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DockerSection;
