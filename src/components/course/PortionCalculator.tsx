import { useState } from "react";
import {
  X,
  HelpCircle,
  Hand,
  Carrot,
  Wheat,
  Droplet,
  ThumbsUp,
  Zap,
  RotateCcw,
  ArrowRight,
  PieChart,
} from "lucide-react";

const profiles: Record<
  string,
  { label: string; desc: string; ratio: { green: number; yellow: number; red: number }; multiplier: number }
> = {
  health: { label: "Salute Base & Benessere", desc: "Principiante o esercizio moderato. Vuoi sentirti meglio e migliorare la salute.", ratio: { green: 45, yellow: 30, red: 25 }, multiplier: 1 },
  moderate: { label: "Fitness Moderato", desc: "Allenamento regolare, eventi amatoriali. Vuoi un fisico sopra la media.", ratio: { green: 60, yellow: 25, red: 15 }, multiplier: 1.1 },
  athlete: { label: "Alta Performance", desc: "Atleta serio, maratone, recupero rapido. Composizione corporea avanzata.", ratio: { green: 75, yellow: 15, red: 10 }, multiplier: 1.2 },
  elite: { label: "Élite & Bodybuilding", desc: "Competizione professionale. Il tuo fisico è il tuo lavoro.", ratio: { green: 85, yellow: 10, red: 5 }, multiplier: 1.3 },
};

interface PortionCalculatorProps {
  onClose: () => void;
}

const PortionCalculator = ({ onClose }: PortionCalculatorProps) => {
  const [gender, setGender] = useState<"male" | "female">("male");
  const [meals, setMeals] = useState(3);
  const [goalProfile, setGoalProfile] = useState("health");
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<{
    protein: number; veg: number; carb: number; fat: number;
    ratio: { green: number; yellow: number; red: number };
  } | null>(null);
  const [showUnitGuide, setShowUnitGuide] = useState(false);
  const [isWorkoutDay, setIsWorkoutDay] = useState(false);

  const roundToHalf = (num: number) => Math.round(num * 2) / 2;

  const calculatePortions = () => {
    const baseMultiplier = gender === "male" ? 2 : 1;
    const proteinPerMeal = baseMultiplier;
    const vegPerMeal = baseMultiplier;
    const carbPerMeal = roundToHalf(
      baseMultiplier * (goalProfile === "health" ? 0.5 : goalProfile === "moderate" ? 1.0 : 1.5)
    );
    const fatPerMeal = roundToHalf(baseMultiplier * (goalProfile === "elite" ? 0.5 : 1.0));
    setResult({
      protein: proteinPerMeal,
      veg: vegPerMeal,
      carb: carbPerMeal,
      fat: fatPerMeal,
      ratio: profiles[goalProfile].ratio,
    });
    setShowResult(true);
  };

  const reset = () => {
    setShowResult(false);
    setResult(null);
    setShowUnitGuide(false);
    setIsWorkoutDay(false);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="bg-card w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[95vh] border border-border/50"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-emerald-800 p-5 flex justify-between items-center flex-shrink-0">
          <div className="flex items-center">
            <PieChart className="w-5 h-5 mr-2 text-emerald-300" />
            <h3 className="text-white font-bold text-lg">
              {showResult ? "Il Tuo Piano Nutrizionale" : "Calcola Porzioni"}
            </h3>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setShowUnitGuide(!showUnitGuide)}
              className="text-white/80 hover:text-white transition-colors"
              title="Guida alle Unità"
            >
              <HelpCircle className="w-5 h-5" />
            </button>
            <button onClick={onClose} className="text-white/70 hover:text-white">
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto flex-1 relative">
          {/* Unit Guide Overlay */}
          {showUnitGuide && (
            <div className="absolute inset-0 bg-card/95 z-20 p-6 overflow-y-auto">
              <div className="flex justify-between items-center mb-6 border-b border-border/50 pb-2">
                <h4 className="text-lg font-bold text-foreground">Guida alle Unità di Misura</h4>
                <button onClick={() => setShowUnitGuide(false)} className="text-muted-foreground hover:text-foreground">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <Hand className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h5 className="font-bold text-foreground mb-1">Proteine = Il Palmo</h5>
                    <p className="text-sm text-foreground/80">
                      La porzione corrisponde al <strong>diametro e allo spessore</strong> del tuo palmo, escluse le dita.
                      <br /><span className="text-xs italic opacity-75">Es. Carne, Pesce, Tofu, Uova (2 uova = 1 palmo).</span>
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <Carrot className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h5 className="font-bold text-foreground mb-1">Verdure = Il Pugno</h5>
                    <p className="text-sm text-foreground/80">
                      La porzione corrisponde al volume del tuo <strong>pugno chiuso</strong>.
                      <br /><span className="text-xs italic opacity-75">Es. Spinaci, Broccoli, Carote, Insalata.</span>
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <Wheat className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <h5 className="font-bold text-foreground mb-1">Carboidrati = La Coppa</h5>
                    <p className="text-sm text-foreground/80">
                      La porzione corrisponde a quanto cibo sta nella tua <strong>mano messa a coppa</strong> (come per raccogliere acqua).
                      <br /><span className="text-xs italic opacity-75">Es. Pasta cotta, Riso, Patate, Frutta, Legumi.</span>
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-sky-500/10 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <ThumbsUp className="w-6 h-6 text-sky-400" />
                  </div>
                  <div>
                    <h5 className="font-bold text-foreground mb-1">Grassi = Il Pollice</h5>
                    <p className="text-sm text-foreground/80">
                      La porzione corrisponde alla lunghezza e larghezza del tuo <strong>pollice intero</strong>.
                      <br /><span className="text-xs italic opacity-75">Es. Olio, Burro, Noci, Avocado.</span>
                    </p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setShowUnitGuide(false)}
                className="w-full mt-8 py-3 bg-secondary text-foreground font-bold rounded-lg hover:bg-accent transition-colors"
              >
                Ho Capito, Torna al Calcolo
              </button>
            </div>
          )}

          {!showResult ? (
            <div className="space-y-6">
              <p className="text-sm text-muted-foreground">
                Scopri le giuste quantità (Mani) e, soprattutto, le giuste proporzioni di qualità (Colori) per il tuo obiettivo.
              </p>

              {/* Gender */}
              <div>
                <label className="block text-xs font-bold text-foreground mb-2 uppercase">Sesso</label>
                <div className="grid grid-cols-2 gap-3">
                  {(["male", "female"] as const).map((g) => (
                    <button
                      key={g}
                      onClick={() => setGender(g)}
                      className={`p-3 rounded-lg border font-bold text-sm transition-all ${
                        gender === g
                          ? "bg-emerald-500 text-white border-emerald-500"
                          : "bg-card text-foreground border-border hover:border-emerald-500/50"
                      }`}
                    >
                      {g === "male" ? "Uomo" : "Donna"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Goal */}
              <div>
                <label className="block text-xs font-bold text-foreground mb-2 uppercase">Il Tuo Obiettivo Attuale</label>
                <div className="space-y-2">
                  {Object.entries(profiles).map(([key, prof]) => (
                    <button
                      key={key}
                      onClick={() => setGoalProfile(key)}
                      className={`w-full text-left p-3 rounded-lg border transition-all ${
                        goalProfile === key
                          ? "bg-emerald-500/10 border-emerald-500 ring-1 ring-emerald-500"
                          : "bg-card border-border hover:border-emerald-500/50"
                      }`}
                    >
                      <div className="font-bold text-foreground text-sm">{prof.label}</div>
                      <div className="text-xs text-muted-foreground mt-1">{prof.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Meals slider */}
              <div>
                <label className="block text-xs font-bold text-foreground mb-2 uppercase">Pasti al Giorno</label>
                <div className="flex items-center space-x-4">
                  <input
                    type="range"
                    min="2"
                    max="6"
                    step="1"
                    value={meals}
                    onChange={(e) => setMeals(parseInt(e.target.value))}
                    className="w-full h-2 bg-emerald-500/20 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                  />
                  <span className="text-xl font-bold text-emerald-400 w-8 text-center">{meals}</span>
                </div>
              </div>

              {/* Calculate */}
              <button
                onClick={calculatePortions}
                className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl shadow-lg shadow-emerald-500/30 transition-all flex items-center justify-center"
              >
                Calcola il Mio Piano <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Quality ratios */}
              <div className="text-center mb-4">
                <h4 className="text-lg font-bold text-foreground">1. La Qualità (Cosa mangiare)</h4>
                <p className="text-xs text-muted-foreground">Proporzioni del tuo profilo</p>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between p-2 bg-emerald-500/10 rounded border border-emerald-500/20">
                  <div className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-emerald-400 mr-2" />
                    <span className="font-bold text-emerald-400">Mangiane di più</span>
                  </div>
                  <span className="font-bold text-emerald-400">{result?.ratio.green}%</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-yellow-500/10 rounded border border-yellow-500/20">
                  <div className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-yellow-400 mr-2" />
                    <span className="font-bold text-yellow-400">Mangiane un po'</span>
                  </div>
                  <span className="font-bold text-yellow-400">{result?.ratio.yellow}%</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-red-500/10 rounded border border-red-500/20">
                  <div className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-red-400 mr-2" />
                    <span className="font-bold text-red-400">Mangiane meno</span>
                  </div>
                  <span className="font-bold text-red-400">{result?.ratio.red}%</span>
                </div>
              </div>

              <hr className="border-border/30" />

              {/* Portions */}
              <div>
                <div className="text-center mb-4">
                  <h4 className="text-lg font-bold text-foreground">2. La Quantità (Quanto mangiare)</h4>
                  <p className="text-xs text-muted-foreground">
                    Per ognuno dei <strong>{meals} pasti</strong>:
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-emerald-500/5 p-3 rounded-xl border border-emerald-500/20 text-center">
                    <div className="flex justify-center mb-1"><Hand className="w-6 h-6 text-emerald-400" /></div>
                    <p className="text-2xl font-bold text-foreground">{result?.protein}</p>
                    <p className="text-[10px] font-bold uppercase text-muted-foreground">Palmi Proteine</p>
                  </div>
                  <div className="bg-orange-500/5 p-3 rounded-xl border border-orange-500/20 text-center">
                    <div className="flex justify-center mb-1"><Carrot className="w-6 h-6 text-orange-400" /></div>
                    <p className="text-2xl font-bold text-foreground">{result?.veg}</p>
                    <p className="text-[10px] font-bold uppercase text-muted-foreground">Pugni Verdure</p>
                  </div>
                  <div className="bg-yellow-500/5 p-3 rounded-xl border border-yellow-500/20 text-center">
                    <div className="flex justify-center mb-1"><Wheat className="w-6 h-6 text-yellow-400" /></div>
                    <p className="text-2xl font-bold text-foreground">{result?.carb}</p>
                    <p className="text-[10px] font-bold uppercase text-muted-foreground">Coppe Carbo</p>
                  </div>
                  <div className="bg-sky-500/5 p-3 rounded-xl border border-sky-500/20 text-center">
                    <div className="flex justify-center mb-1"><Droplet className="w-6 h-6 text-sky-400" /></div>
                    <p className="text-2xl font-bold text-foreground">{result?.fat}</p>
                    <p className="text-[10px] font-bold uppercase text-muted-foreground">Pollici Grassi</p>
                  </div>
                </div>

                {/* Timing section */}
                <div className="mt-6 bg-sky-500/5 p-4 rounded-xl border border-sky-500/20">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-bold text-sky-400 flex items-center text-sm">
                      <Zap className="w-4 h-4 mr-2" /> Strategia Timing
                    </h5>
                    <label className="flex items-center cursor-pointer select-none">
                      <div className="relative">
                        <input
                          type="checkbox"
                          checked={isWorkoutDay}
                          onChange={(e) => setIsWorkoutDay(e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-9 h-5 bg-secondary peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-sky-500/30 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-600 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-sky-500" />
                      </div>
                      <span className="ml-2 text-xs font-bold text-sky-400">Ti alleni oggi?</span>
                    </label>
                  </div>
                  {isWorkoutDay ? (
                    <div className="text-xs text-foreground/80 space-y-2">
                      <div className="flex items-start">
                        <span className="text-sky-400 mr-2">•</span>
                        <span><strong>Pre-Workout:</strong> Fai un pasto leggero (1/2 carboidrati e proteine) circa 90 min prima. Evita grassi e fibre.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-sky-400 mr-2">•</span>
                        <span><strong>Post-Workout:</strong> È il momento migliore! Mangia la tua porzione più grande di Carboidrati (Coppe) qui.</span>
                      </div>
                    </div>
                  ) : (
                    <div className="text-xs text-foreground/80">
                      <div className="flex items-start">
                        <span className="text-sky-400 mr-2">•</span>
                        <span><strong>Giorno di Riposo:</strong> Distribuisci i carboidrati equamente durante il giorno. Mantieni alte le proteine per il recupero.</span>
                      </div>
                    </div>
                  )}
                </div>

                <button
                  onClick={() => setShowUnitGuide(true)}
                  className="w-full mt-4 text-xs font-bold text-emerald-400 hover:underline flex items-center justify-center"
                >
                  <HelpCircle className="w-3 h-3 mr-1" />Dubbi sulle unità? Apri Guida
                </button>
              </div>

              <button
                onClick={reset}
                className="w-full py-3 bg-emerald-500 text-white font-bold text-sm hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <RotateCcw className="w-4 h-4 mr-2" />Ricalcola
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortionCalculator;
