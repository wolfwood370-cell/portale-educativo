import React from "react";
import {
  Info,
  CheckCircle,
  Activity,
  AlertTriangle,
  ClipboardCheck,
  Utensils,
  GitMerge,
} from "lucide-react";

/* ── InfoBox ────────────────────────────────────────── */
interface InfoBoxProps {
  title: string;
  content: string;
  icon?: React.ElementType;
}

export const InfoBox = ({ title, content, icon: Icon = Info }: InfoBoxProps) => (
  <div className="my-6 bg-sky-950/40 border-l-4 border-sky-500 p-5 rounded-r-lg">
    <h4 className="flex items-center text-sky-300 font-bold mb-2 uppercase tracking-wider text-xs">
      <Icon className="w-4 h-4 mr-2" /> Approfondimento: {title}
    </h4>
    <p className="text-base text-foreground/80 leading-relaxed">{content}</p>
  </div>
);

/* ── FoodTable ──────────────────────────────────────── */
interface FoodTableProps {
  title: string;
  more: string[];
  some: string[];
  less: string[];
}

export const FoodTable = ({ title, more, some, less }: FoodTableProps) => (
  <div className="my-10 overflow-hidden border border-border/50 rounded-xl shadow-md bg-card">
    <div className="bg-emerald-800 text-white p-4 font-bold text-center uppercase tracking-widest text-sm flex items-center justify-center">
      <Utensils className="w-4 h-4 mr-2" /> {title} - Lo Spettro delle Scelte
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border/30 text-base">
      {/* More */}
      <div className="bg-emerald-500/5 p-6">
        <h5 className="font-bold text-emerald-400 mb-4 flex items-center uppercase tracking-wider text-xs bg-emerald-500/15 w-fit px-2 py-1 rounded">
          <CheckCircle className="w-4 h-4 mr-2" /> Mangiane di più
        </h5>
        <ul className="space-y-2">
          {more.map((item, i) => (
            <li key={i} className="flex items-start text-foreground/80 leading-tight">
              <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      {/* Some */}
      <div className="bg-yellow-500/5 p-6">
        <h5 className="font-bold text-yellow-400 mb-4 flex items-center uppercase tracking-wider text-xs bg-yellow-500/15 w-fit px-2 py-1 rounded">
          <Activity className="w-4 h-4 mr-2" /> Mangiane un po'
        </h5>
        <ul className="space-y-2">
          {some.map((item, i) => (
            <li key={i} className="flex items-start text-foreground/80 leading-tight">
              <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-yellow-500 rounded-full flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      {/* Less */}
      <div className="bg-red-500/5 p-6">
        <h5 className="font-bold text-red-400 mb-4 flex items-center uppercase tracking-wider text-xs bg-red-500/15 w-fit px-2 py-1 rounded">
          <AlertTriangle className="w-4 h-4 mr-2" /> Mangiane di meno
        </h5>
        <ul className="space-y-2">
          {less.map((item, i) => (
            <li key={i} className="flex items-start text-foreground/80 leading-tight">
              <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
    <div className="bg-secondary/50 p-3 text-xs text-center text-muted-foreground italic border-t border-border/30">
      *Non esistono cibi "proibiti", solo cibi da consumare con diversa frequenza.
    </div>
  </div>
);

/* ── DecisionProtocol ───────────────────────────────── */
interface Scenario {
  if: string;
  then: string;
  why?: string;
}

interface DecisionProtocolProps {
  title: string;
  scenarios: Scenario[];
}

export const DecisionProtocol = ({ title, scenarios }: DecisionProtocolProps) => (
  <div className="my-8 bg-card border-l-4 border-sky-500 rounded-r-xl shadow-sm p-6">
    <h4 className="flex items-center text-sky-300 font-bold mb-4 uppercase tracking-wider text-sm">
      <GitMerge className="w-5 h-5 mr-2" /> Protocollo Decisionale: {title}
    </h4>
    <div className="space-y-4">
      {scenarios.map((s, i) => (
        <div key={i} className="flex flex-col text-base border-b border-border/30 last:border-0 pb-3 last:pb-0">
          <div className="flex flex-col sm:flex-row sm:items-baseline mb-1">
            <div className="font-bold text-foreground sm:w-1/3 mb-1 sm:mb-0 bg-secondary/50 px-2 py-1 rounded">
              SE {s.if}
            </div>
            <div className="hidden sm:block text-sky-500/50 mx-2">→</div>
            <div className="text-emerald-400 font-bold sm:w-2/3">ALLORA {s.then}</div>
          </div>
          {s.why && (
            <div className="text-xs text-muted-foreground italic mt-1 ml-2 pl-2 border-l-2 border-border/30">
              Perché: {s.why}
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
);

/* ── QualityChecklist ───────────────────────────────── */
interface QualityChecklistProps {
  items: string[];
}

export const QualityChecklist = ({ items }: QualityChecklistProps) => (
  <div className="my-8 bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-6">
    <h4 className="flex items-center text-emerald-400 font-bold mb-4 uppercase tracking-wider text-sm">
      <ClipboardCheck className="w-5 h-5 mr-2" /> Checklist di Controllo
    </h4>
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start">
          <input
            type="checkbox"
            className="mt-1 mr-3 accent-emerald-500 w-4 h-4 cursor-pointer"
          />
          <span className="text-base text-foreground/80 leading-tight">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);
