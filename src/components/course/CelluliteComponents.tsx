import React, { useState } from "react";
import {
  Info,
  AlertTriangle,
  CheckCircle,
  Heart,
  Microscope,
  ShieldCheck,
  HelpCircle,
  XCircle,
  Sparkles,
  ClipboardCheck,
  X,
  RotateCcw,
  Droplet,
  Activity,
} from "lucide-react";

/* ── InfoBox ── */
export const CelluliteInfoBox = ({
  title,
  content,
  type = "info",
}: {
  title: string;
  content: string;
  type?: "info" | "warn" | "success" | "rose" | "science";
}) => {
  const styles: Record<string, { classes: string; icon: React.ElementType }> = {
    info: { classes: "bg-blue-950/30 border-blue-500 text-blue-300", icon: Info },
    warn: { classes: "bg-amber-950/30 border-amber-500 text-amber-300", icon: AlertTriangle },
    success: { classes: "bg-emerald-950/30 border-emerald-500 text-emerald-300", icon: CheckCircle },
    rose: { classes: "bg-rose-950/30 border-rose-500 text-rose-300", icon: Heart },
    science: { classes: "bg-violet-950/30 border-violet-500 text-violet-300", icon: Microscope },
  };
  const s = styles[type] || styles.info;
  const Icon = s.icon;

  return (
    <div className={`my-6 border-l-4 p-5 rounded-r-lg ${s.classes}`}>
      <h4 className="flex items-center font-bold mb-2 uppercase tracking-wider text-xs">
        <Icon className="w-4 h-4 mr-2" /> {title}
      </h4>
      <div className="text-sm leading-relaxed opacity-90">{content}</div>
    </div>
  );
};

/* ── BiotypeTable ── */
export const BiotypeTable = () => (
  <div className="overflow-hidden border border-border/50 rounded-xl shadow-sm my-8">
    <div className="grid grid-cols-1 sm:grid-cols-2">
      <div className="bg-rose-500/10 p-4 text-center font-bold text-rose-400 border-b border-rose-500/20 text-sm tracking-wide">
        GINOIDE (Pera)
      </div>
      <div className="bg-orange-500/10 p-4 text-center font-bold text-orange-400 border-b border-orange-500/20 text-sm tracking-wide hidden sm:block">
        ANDROIDE (Mela)
      </div>

      <div className="p-5 bg-rose-500/5 text-sm text-foreground/70 space-y-3 sm:border-r border-border/30">
        <p>• Accumulo prevalente su fianchi, cosce e glutei ("Culotte de cheval").</p>
        <p>• Punto vita stretto e ben definito rispetto ai fianchi.</p>
        <p>• <strong className="text-foreground">Alta predisposizione</strong> a cellulite e ritenzione idrica.</p>
        <p>• Metabolismo degli zuccheri spesso meno efficiente.</p>
      </div>

      <div className="bg-orange-500/10 p-4 text-center font-bold text-orange-400 border-b border-orange-500/20 text-sm tracking-wide sm:hidden">
        ANDROIDE (Mela)
      </div>

      <div className="p-5 bg-orange-500/5 text-sm text-foreground/70 space-y-3">
        <p>• Accumulo su addome, braccia, seno e parte alta del dorso.</p>
        <p>• Punto vita poco definito o largo.</p>
        <p>• <strong className="text-foreground">Bassa predisposizione</strong> a problemi circolatori periferici.</p>
        <p>• Maggiore rischio di grasso viscerale e insulino-resistenza.</p>
      </div>
    </div>
    <div className="bg-card/50 p-3 text-[10px] text-center text-muted-foreground italic border-t border-border/30">
      Rapporto Vita/Fianchi (WHR): &gt;0.85 = Androide, &lt;0.85 = Ginoide
    </div>
  </div>
);

/* ── TreatmentTable ── */
export const TreatmentTable = () => (
  <div className="my-8 space-y-4">
    <h4 className="font-bold text-foreground text-lg mb-4 flex items-center">
      <Sparkles className="w-5 h-5 mr-2 text-rose-400" /> Analisi Efficacia Trattamenti
    </h4>

    <div className="bg-card rounded-xl border border-border/50 shadow-sm overflow-hidden">
      <div className="p-3 bg-emerald-500/10 border-b border-emerald-500/20 flex items-center text-emerald-400 font-bold text-xs uppercase tracking-wide">
        <ShieldCheck className="w-4 h-4 mr-2" /> Studi confermano (Evidence Based)
      </div>
      <div className="p-4 text-sm text-foreground/70 space-y-2">
        <p>• <strong className="text-foreground">Linfodrenaggio Manuale & Pressoterapia:</strong> Eccellenti per spostare meccanicamente i liquidi. Risultato immediato sulla circonferenza, ma temporaneo se non si cura la causa a monte.</p>
        <p>• <strong className="text-foreground">AWT (Onde d'urto) & Subcision:</strong> Le onde d'urto stimolano la neo-angiogenesi e migliorano la struttura del collagene. La Subcision è efficace per recidere i setti fibrosi.</p>
        <p>• <strong className="text-foreground">Laser:</strong> I laser minimamente invasivi possono dare benefici che durano da uno a dodici mesi.</p>
        <p>• <strong className="text-foreground">Terapie Termali:</strong> Acque solfuree e salsobromoiodiche hanno azione antinfiammatoria documentata.</p>
      </div>
    </div>

    <div className="bg-card rounded-xl border border-border/50 shadow-sm overflow-hidden">
      <div className="p-3 bg-amber-500/10 border-b border-amber-500/20 flex items-center text-amber-400 font-bold text-xs uppercase tracking-wide">
        <HelpCircle className="w-4 h-4 mr-2" /> Risultati Variabili / Scarsi
      </div>
      <div className="p-4 text-sm text-foreground/70 space-y-2">
        <p>• <strong className="text-foreground">Radiofrequenza (RF):</strong> Riscalda il derma per stimolare collagene. Risultati variabili a seconda del macchinario e del protocollo.</p>
        <p>• <strong className="text-foreground">Mesoterapia:</strong> Iniezioni di farmaci lipolitici. Mancano protocolli standard e forti evidenze scientifiche.</p>
        <p>• <strong className="text-foreground">Endermologie:</strong> Massaggio meccanico. Riduce temporaneamente la circonferenza ma mancano validazioni a lungo termine.</p>
        <p>• <strong className="text-foreground">CCH (Collagenase):</strong> Enzima che smantella il collagene. Pochi studi ma promettenti per migliorare l'aspetto della cellulite.</p>
      </div>
    </div>

    <div className="bg-card rounded-xl border border-border/50 shadow-sm overflow-hidden">
      <div className="p-3 bg-red-500/10 border-b border-red-500/20 flex items-center text-red-400 font-bold text-xs uppercase tracking-wide">
        <XCircle className="w-4 h-4 mr-2" /> Sconsigliato / Mito
      </div>
      <div className="p-4 text-sm text-foreground/70 space-y-2">
        <p>• <strong className="text-foreground">Liposuzione classica:</strong> Rimuove il grasso profondo ma non cura la struttura della pelle. Spesso peggiora l'aspetto della cellulite.</p>
        <p>• <strong className="text-foreground">Creme "Miracolose":</strong> Non esistono evidenze scientifiche forti che le creme topiche penetrino abbastanza da sciogliere il grasso.</p>
      </div>
    </div>
  </div>
);

/* ── CelluliteStageQuiz ── */
export const CelluliteStageQuiz = ({ onClose }: { onClose: () => void }) => {
  const [step, setStep] = useState(0);
  const [result, setResult] = useState<{
    title: string;
    desc: string;
    advice: string;
    color: string;
    bg: string;
    icon: React.ElementType;
  } | null>(null);

  const handleAnswer = (answer: "yes" | "no") => {
    if (step === 0) {
      if (answer === "yes") setStep(1);
      else setStep(2);
    } else if (step === 1) {
      if (answer === "yes") finalizeResult(3);
      else finalizeResult(2);
    } else if (step === 2) {
      if (answer === "yes") finalizeResult(1);
      else finalizeResult(0);
    }
  };

  const finalizeResult = (stage: number) => {
    const results: Record<number, typeof result> = {
      0: {
        title: "STADIO 0: Assente",
        desc: "La tua pelle è liscia sia in piedi che pizzicandola. Ottimo!",
        advice: "Mantieni questo stato con alimentazione sana e idratazione. Non servono trattamenti urto.",
        color: "text-emerald-400",
        bg: "bg-emerald-500/10",
        icon: CheckCircle,
      },
      1: {
        title: "STADIO 1: Edematosa",
        desc: "La buccia d'arancia appare solo se pizzichi la pelle o contrai i muscoli.",
        advice: "Sei nella fase di ritenzione idrica. È il momento migliore per agire! Focus su: Microcircolo, meno sale, più acqua e circuiti PHA.",
        color: "text-blue-400",
        bg: "bg-blue-500/10",
        icon: Droplet,
      },
      2: {
        title: "STADIO 2: Fibrosa",
        desc: "La buccia d'arancia è visibile spontaneamente stando in piedi, senza toccare nulla.",
        advice: "I setti fibrosi si stanno indurendo. Serve un approccio combinato: Allenamento con pesi (tonificazione) + Alimentazione antinfiammatoria.",
        color: "text-orange-400",
        bg: "bg-orange-500/10",
        icon: AlertTriangle,
      },
      3: {
        title: "STADIO 3: Sclerotica",
        desc: "Noduli evidenti, depressioni marcate e possibile dolore al tatto o pelle fredda.",
        advice: "Il tessuto è sofferente. Evita impatti forti (corsa). Valuta trattamenti medici (es. carbossiterapia) abbinati a camminata e nuoto.",
        color: "text-rose-400",
        bg: "bg-rose-500/10",
        icon: Activity,
      },
    };
    setResult(results[stage]!);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="bg-card w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] border border-border/50"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-background p-5 flex justify-between items-center flex-shrink-0 border-b border-border/50">
          <div className="flex items-center">
            <ClipboardCheck className="w-5 h-5 mr-2 text-rose-400" />
            <h3 className="text-foreground font-bold text-lg">Test Autovalutazione</h3>
          </div>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto flex-1">
          {!result ? (
            <div className="space-y-6">
              <div className="w-full bg-secondary h-2 rounded-full mb-4">
                <div
                  className="bg-rose-500 h-full rounded-full transition-all duration-300"
                  style={{ width: step === 0 ? "33%" : "66%" }}
                />
              </div>

              <h4 className="text-xl font-bold text-foreground leading-tight">
                {step === 0 && "Guardando le tue gambe in piedi (allo specchio), vedi la 'buccia d'arancia' senza toccare nulla?"}
                {step === 1 && "Senti dolore al tatto, pelle fredda o noti dei 'buchi' profondi e noduli duri?"}
                {step === 2 && "Prova a pizzicare una plica di pelle o a contrarre i glutei. Compaiono dei buchetti?"}
              </h4>

              <div className="grid gap-3">
                <button
                  onClick={() => handleAnswer("yes")}
                  className="p-4 rounded-xl border-2 border-border/50 hover:border-rose-500 hover:bg-rose-500/5 transition-all text-left font-bold text-foreground flex items-center group"
                >
                  <div className="w-6 h-6 rounded-full border-2 border-muted-foreground/30 group-hover:border-rose-500 mr-3 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-rose-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  Sì
                </button>
                <button
                  onClick={() => handleAnswer("no")}
                  className="p-4 rounded-xl border-2 border-border/50 hover:border-muted-foreground hover:bg-accent/50 transition-all text-left font-bold text-foreground flex items-center group"
                >
                  <div className="w-6 h-6 rounded-full border-2 border-muted-foreground/30 group-hover:border-muted-foreground mr-3 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  No
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 ${result.bg}`}>
                <result.icon className={`w-8 h-8 ${result.color}`} />
              </div>
              <h2 className={`text-2xl font-black mb-2 ${result.color}`}>{result.title}</h2>
              <p className="text-muted-foreground mb-6 font-medium">{result.desc}</p>

              <div className="bg-card p-5 rounded-xl border border-border/50 text-left">
                <h5 className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2">
                  IL CONSIGLIO DELL'ESPERTO
                </h5>
                <p className="text-sm text-foreground leading-relaxed">{result.advice}</p>
              </div>

              <button
                onClick={() => { setResult(null); setStep(0); }}
                className="mt-6 text-sm text-muted-foreground hover:text-rose-400 font-bold flex items-center justify-center w-full"
              >
                <RotateCcw className="w-4 h-4 mr-2" /> Ripeti Test
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
