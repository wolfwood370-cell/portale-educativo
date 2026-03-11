import { useState } from "react";
import { Calculator, X, Activity, ChevronDown, ArrowRight, RotateCcw } from "lucide-react";
import { useCourseTheme, themeClasses } from "@/lib/course-theme";
import { cn } from "@/lib/utils";

const rpeChart: Record<number, Record<number, number>> = {
  10:   { 1: 1.00, 2: 0.96, 3: 0.92, 4: 0.89, 5: 0.86, 6: 0.84, 7: 0.81, 8: 0.79, 9: 0.76, 10: 0.74, 11: 0.71, 12: 0.69, 15: 0.61, 20: 0.50 },
  9.5:  { 1: 0.98, 2: 0.94, 3: 0.91, 4: 0.88, 5: 0.85, 6: 0.82, 7: 0.80, 8: 0.77, 9: 0.75, 10: 0.72, 11: 0.70, 12: 0.67, 15: 0.58, 20: 0.48 },
  9:    { 1: 0.96, 2: 0.92, 3: 0.89, 4: 0.86, 5: 0.84, 6: 0.81, 7: 0.79, 8: 0.76, 9: 0.74, 10: 0.71, 11: 0.69, 12: 0.66, 15: 0.56, 20: 0.45 },
  8.5:  { 1: 0.94, 2: 0.91, 3: 0.88, 4: 0.85, 5: 0.82, 6: 0.80, 7: 0.77, 8: 0.75, 9: 0.72, 10: 0.70, 11: 0.67, 12: 0.65, 15: 0.54, 20: 0.43 },
  8:    { 1: 0.92, 2: 0.89, 3: 0.86, 4: 0.84, 5: 0.81, 6: 0.79, 7: 0.76, 8: 0.74, 9: 0.71, 10: 0.69, 11: 0.66, 12: 0.64, 15: 0.52, 20: 0.41 },
  7.5:  { 1: 0.91, 2: 0.88, 3: 0.85, 4: 0.82, 5: 0.80, 6: 0.77, 7: 0.75, 8: 0.72, 9: 0.70, 10: 0.67, 11: 0.65, 12: 0.63, 15: 0.50, 20: 0.39 },
  7:    { 1: 0.89, 2: 0.86, 3: 0.84, 4: 0.81, 5: 0.79, 6: 0.76, 7: 0.74, 8: 0.71, 9: 0.69, 10: 0.66, 11: 0.64, 12: 0.62, 15: 0.48, 20: 0.37 },
  6.5:  { 1: 0.88, 2: 0.85, 3: 0.82, 4: 0.80, 5: 0.77, 6: 0.75, 7: 0.72, 8: 0.70, 9: 0.67, 10: 0.65, 11: 0.63, 12: 0.61, 15: 0.46, 20: 0.35 },
  6:    { 1: 0.86, 2: 0.84, 3: 0.81, 4: 0.79, 5: 0.76, 6: 0.74, 7: 0.71, 8: 0.69, 9: 0.66, 10: 0.64, 11: 0.62, 12: 0.60, 15: 0.44, 20: 0.33 },
};

const QUESTIONS = [
  {
    id: 1,
    title: "1. Disagio Mentale/Fisico",
    desc: "Sensazione interna",
    weight: 1.0,
    options: [
      { val: 6, text: "Nessun disagio, riscaldamento" },
      { val: 7, text: "Leggero impegno, battito alzato" },
      { val: 8, text: "Impegnativo ma solido" },
      { val: 9, text: "Molto dura, ansia da prestazione" },
      { val: 10, text: "Panico, visione tunnel, sofferenza max" },
    ],
  },
  {
    id: 2,
    title: "2. Degradazione Tecnica",
    desc: "Segnale visivo",
    weight: 1.5,
    options: [
      { val: 6, text: "Tecnica perfetta, veloce" },
      { val: 7, text: "Piccole imperfezioni impercettibili" },
      { val: 8, text: "Compensi strategici ma sicuri" },
      { val: 9, text: "Tecnica sporca, evidente breakdown" },
      { val: 10, text: "Collasso tecnico, pericolo infortunio" },
    ],
  },
  {
    id: 3,
    title: "3. Perdita di Velocità",
    desc: "Segnale oggettivo",
    weight: 1.5,
    options: [
      { val: 6, text: "Esplosiva, nessun rallentamento" },
      { val: 7, text: "Fluida, ma non massima velocità" },
      { val: 8, text: "Rallentamento visibile ma continuo" },
      { val: 9, text: "Grind marcato (lento ma sale)" },
      { val: 10, text: "Grind quasi fermo (stop & go)" },
    ],
  },
  {
    id: 4,
    title: "4. Reps In Reserve (RIR)",
    desc: "Ripetizioni valide residue",
    weight: 2.0,
    options: [
      { val: 6, text: "Sicuramente 4 o più" },
      { val: 7, text: "Sicuramente 3" },
      { val: 8, text: "Sicuramente 2" },
      { val: 9, text: "Forse 1, ma dubbia" },
      { val: 10, text: "Zero (Cedimento Tecnico)" },
    ],
  },
];

interface RpeCalculatorProps {
  onClose: () => void;
}

const RpeCalculator = ({ onClose }: RpeCalculatorProps) => {
  const { themeColor } = useCourseTheme();
  const tc = themeClasses[themeColor];

  const [weight, setWeight] = useState("");
  const [reps, setReps] = useState("");
  const [answers, setAnswers] = useState<Record<number, string>>({
    1: "", 2: "", 3: "", 4: "",
  });
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<{ rpe: number; e1rm: number } | null>(null);

  const handleAnswerChange = (qId: number, value: string) => {
    setAnswers((prev) => ({ ...prev, [qId]: value }));
  };

  const calculateResult = () => {
    if (!weight || !reps) return;
    const allAnswered = Object.values(answers).every((a) => a !== "");
    if (!allAnswered) return;

    let totalScore = 0;
    let totalWeight = 0;

    QUESTIONS.forEach((q) => {
      const ansVal = parseInt(answers[q.id]);
      totalScore += ansVal * q.weight;
      totalWeight += q.weight;
    });

    const rawRpe = totalScore / totalWeight;
    const finalRpe = Math.round(rawRpe * 2) / 2;
    const clampedRpe = Math.max(6, Math.min(10, finalRpe));

    const r = parseInt(reps);
    const w = parseFloat(weight);
    const percentage = rpeChart[clampedRpe]?.[r];

    let e1rm = 0;
    if (percentage) {
      e1rm = w / percentage;
    }

    setResult({ rpe: clampedRpe, e1rm });
    setShowResult(true);
  };

  const reset = () => {
    setShowResult(false);
    setResult(null);
  };

  const fullReset = () => {
    setWeight("");
    setReps("");
    setAnswers({ 1: "", 2: "", 3: "", 4: "" });
    setShowResult(false);
    setResult(null);
  };

  const getProjection = (rm: number) => {
    if (!result || !result.e1rm) return 0;
    const pct = rpeChart[10][rm];
    return pct ? Math.round(result.e1rm * pct * 10) / 10 : 0;
  };

  const isFormValid =
    weight && reps && Object.values(answers).every((a) => a !== "");

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="bg-card w-full max-w-md rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] border border-border/50"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className={cn(tc.bgDark, "p-5 flex justify-between items-center flex-shrink-0")}>
          <h3 className="text-white font-bold text-lg flex items-center">
            <Calculator className={cn("w-5 h-5 mr-2", tc.textLight)} />
            {showResult ? "Risultato" : "Calcolatore RPE"}
          </h3>
          <button onClick={onClose} className="text-white/70 hover:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {!showResult ? (
            <div className="space-y-6">
              {/* Weight & Reps */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-foreground mb-1">
                    Carico (kg)
                  </label>
                  <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className={cn("w-full p-3 border border-border rounded-lg text-foreground bg-secondary font-bold outline-none text-center text-lg focus:ring-2", tc.focusRing)}
                    placeholder="es. 100"
                    autoFocus
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-foreground mb-1">
                    Ripetizioni
                  </label>
                  <input
                    type="number"
                    value={reps}
                    onChange={(e) => setReps(e.target.value)}
                    className={cn("w-full p-3 border border-border rounded-lg text-foreground bg-secondary font-bold outline-none text-center text-lg focus:ring-2", tc.focusRing)}
                    placeholder="es. 5"
                  />
                </div>
              </div>

              {/* Qualitative Analysis */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2 pb-2 border-b border-border/50">
                  <Activity className={cn("w-4 h-4", tc.text)} />
                  <span className={cn("text-xs font-bold uppercase tracking-wider", tc.text)}>
                    Analisi Qualitativa
                  </span>
                </div>

                {QUESTIONS.map((q) => (
                  <div
                    key={q.id}
                    className="bg-secondary/50 p-3 rounded-lg border border-border/50"
                  >
                    <div className="flex justify-between items-baseline mb-2">
                      <label className="text-sm font-bold text-foreground">
                        {q.title}
                      </label>
                      <span className="text-xs text-muted-foreground italic">
                        {q.desc}
                      </span>
                    </div>
                    <div className="relative">
                      <select
                        value={answers[q.id]}
                        onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                        className={cn("w-full p-3 pr-10 appearance-none bg-card border border-border rounded-lg text-sm text-foreground focus:outline-none focus:ring-2 transition-all cursor-pointer", tc.focusRing)}
                      >
                        <option value="" disabled>
                          Seleziona una risposta...
                        </option>
                        {q.options.map((opt) => (
                          <option key={opt.val} value={opt.val}>
                            {opt.text}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className={cn("absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none", tc.text)} />
                    </div>
                  </div>
                ))}
              </div>

              {/* Calculate Button */}
              <button
                onClick={calculateResult}
                disabled={!isFormValid}
                className={cn("w-full py-4 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-xl shadow-lg transition-all flex items-center justify-center mt-2", tc.bg, tc.bgHover, tc.shadow)}
              >
                Calcola RPE & Massimale{" "}
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {/* RPE Result */}
              <div className="text-center bg-secondary p-6 rounded-2xl border border-border/50">
                <p className="text-xs font-bold text-muted-foreground uppercase mb-1">
                  RPE Calcolato
                </p>
                <div className={cn("text-5xl font-extrabold mb-2", tc.text)}>
                  {result?.rpe}
                </div>
                <p className="text-xs text-muted-foreground">
                  Media Ponderata dei 4 Sistemi
                </p>
              </div>

              {/* e1RM */}
              <div className="text-center">
                <p className="text-xs font-bold text-muted-foreground uppercase mb-1">
                  Massimale Stimato (e1RM)
                </p>
                <div className="text-3xl font-bold text-foreground">
                  {Math.round((result?.e1rm || 0) * 10) / 10}{" "}
                  <span className="text-sm text-muted-foreground">kg</span>
                </div>
              </div>

              {/* Projections */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-foreground uppercase border-b border-border/50 pb-2">
                  Proiezioni di Carico (Target)
                </h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {[3, 5, 8, 10, 15, 20].map((rm) => (
                    <div
                      key={rm}
                      className="flex justify-between p-2 rounded bg-secondary border border-border/50"
                    >
                      <span className="text-muted-foreground font-medium">
                        e{rm}RM
                      </span>
                      <span className="text-foreground font-bold">
                        {getProjection(rm)} kg
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex space-x-3 pt-4">
                <button
                  onClick={reset}
                  className="flex-1 py-3 text-muted-foreground bg-secondary font-bold text-sm hover:bg-accent rounded-lg flex items-center justify-center transition-colors"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Modifica
                </button>
                <button
                  onClick={fullReset}
                  className={cn("flex-1 py-3 text-white font-bold text-sm rounded-lg flex items-center justify-center transition-colors", tc.bg, tc.bgHover)}
                >
                  Nuovo Calcolo
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RpeCalculator;
