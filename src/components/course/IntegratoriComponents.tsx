import React, { useState } from "react";
import {
  AlertTriangle,
  CheckCircle,
  Info,
  Pill,
  ShoppingCart,
  ExternalLink,
  Layers,
  ArrowRight,
  Dumbbell,
  Flame,
  Moon,
  Heart,
} from "lucide-react";

/* ── InfoBox ── */
export const InfoBox = ({
  title,
  content,
  type = "info",
}: {
  title: string;
  content: string;
  type?: "info" | "warn" | "success";
}) => {
  const styles = {
    info: "bg-blue-950/30 border-blue-500 text-blue-300",
    warn: "bg-red-950/30 border-red-500 text-red-300",
    success: "bg-emerald-950/30 border-emerald-500 text-emerald-300",
  };
  const icons = { info: Info, warn: AlertTriangle, success: CheckCircle };
  const Icon = icons[type];

  return (
    <div className={`my-6 border-l-4 p-5 rounded-r-lg ${styles[type]}`}>
      <h4 className="flex items-center font-bold mb-2 uppercase tracking-wider text-xs">
        <Icon className="w-4 h-4 mr-2" /> {title}
      </h4>
      <div className="text-sm leading-relaxed opacity-90">{content}</div>
    </div>
  );
};

/* ── SupplementCard ── */
type SupplementType = "Core" | "Primary" | "Secondary" | "Promising" | "Unproven";

export const SupplementCard = ({
  name,
  type,
  dose,
  notes,
  mechanism,
}: {
  name: string;
  type: SupplementType;
  dose: string;
  notes?: string;
  mechanism?: string;
}) => {
  const typeColors: Record<SupplementType, string> = {
    Core: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    Primary: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    Secondary: "bg-orange-500/20 text-orange-400 border-orange-500/30",
    Promising: "bg-violet-500/20 text-violet-400 border-violet-500/30",
    Unproven: "bg-gray-500/20 text-gray-400 border-gray-500/30",
  };
  const typeLabel: Record<SupplementType, string> = {
    Core: "Fondamentale",
    Primary: "Primario",
    Secondary: "Secondario",
    Promising: "Promettente",
    Unproven: "Non Provato",
  };

  return (
    <div className="bg-card p-5 rounded-xl border border-border/50 shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col group">
      <div className="flex justify-between items-start mb-4">
        <h4 className="font-bold text-foreground text-lg leading-tight group-hover:text-violet-400 transition-colors">
          {name}
        </h4>
        <span
          className={`text-[10px] uppercase font-bold px-3 py-1 rounded-full border whitespace-nowrap ml-2 ${typeColors[type]}`}
        >
          {typeLabel[type]}
        </span>
      </div>
      <div className="space-y-3 text-sm flex-grow">
        <div className="flex items-start gap-3 bg-violet-500/5 p-3 rounded-lg">
          <div className="bg-violet-500/20 p-1.5 rounded-full text-violet-400 mt-0.5">
            <Pill className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-bold text-muted-foreground uppercase block mb-0.5">
              Dosaggio Consigliato
            </span>
            <span className="font-bold text-foreground text-base">{dose}</span>
          </div>
        </div>

        {mechanism && (
          <div className="text-muted-foreground text-sm">
            <strong className="text-foreground block mb-1 text-xs uppercase tracking-wide">
              La mia analisi scientifica:
            </strong>
            {mechanism}
          </div>
        )}

        {notes && (
          <div className="text-muted-foreground pt-3 border-t border-border/30 mt-auto text-sm">
            <strong className="text-foreground block mb-1 text-xs uppercase tracking-wide">
              Il mio consiglio:
            </strong>
            <span className="italic">{notes}</span>
          </div>
        )}
      </div>
    </div>
  );
};

/* ── ProzisProductCard ── */
const ProzisProductCard = ({
  name,
  url,
  description,
}: {
  name: string;
  url: string;
  description: string;
}) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center p-4 bg-card border border-border/50 rounded-xl shadow-sm hover:shadow-md hover:border-red-500/50 transition-all group"
  >
    <div className="bg-red-500/10 p-3 rounded-lg text-red-400 group-hover:bg-red-500 group-hover:text-white transition-colors mr-4 flex-shrink-0">
      <ShoppingCart className="w-5 h-5" />
    </div>
    <div>
      <h5 className="font-bold text-foreground group-hover:text-red-400 transition-colors text-sm">
        {name}
      </h5>
      <p className="text-xs text-muted-foreground mt-1">{description}</p>
    </div>
    <ExternalLink className="w-4 h-4 ml-auto text-muted-foreground group-hover:text-red-400 flex-shrink-0" />
  </a>
);

/* ── ProzisSection ── */
export const ProzisSection = ({
  products,
}: {
  products: { name: string; url: string; description: string }[];
}) => {
  if (!products || products.length === 0) return null;
  return (
    <div className="mt-10 bg-card/50 p-6 rounded-2xl border border-border/50">
      <h3 className="flex items-center text-lg font-bold text-foreground mb-6">
        <div className="bg-red-500 p-1.5 rounded text-white mr-3 shadow-sm">
          <ShoppingCart className="w-5 h-5" />
        </div>
        Lista della spesa
      </h3>
      <div className="grid md:grid-cols-2 gap-4">
        {products.map((prod, i) => (
          <ProzisProductCard key={i} {...prod} />
        ))}
      </div>
      <p className="text-[10px] text-muted-foreground mt-4 text-center italic">
        Prodotti selezionati da me per purezza e corrispondenza ai dosaggi scientifici.
      </p>
    </div>
  );
};

/* ── StackBuilder ── */
interface StackItem {
  name: string;
  dose: string;
  mechanism: string;
  notes: string;
}

interface Stack {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  colorText: string;
  core: StackItem[];
  primary: StackItem[];
  secondary: StackItem[];
  prozisProducts: { name: string; description: string; url: string }[];
}

const stacks: Record<string, Stack> = {
  hypertrophy: {
    title: "Ipertrofia & Performance",
    description:
      "Il mio protocollo per massimizzare la sintesi proteica e la capacità di lavoro muscolare.",
    icon: <Dumbbell className="w-8 h-8" />,
    color: "bg-amber-500",
    colorText: "text-amber-500",
    core: [
      {
        name: "Creatina Monoidrato",
        dose: "5g/die (tutti i giorni)",
        mechanism:
          "Non serve solo a 'trattenere acqua'. Satura le riserve di fosfocreatina muscolare, permettendo la rigenerazione ultra-rapida dell'ATP tra le serie intense.",
        notes:
          "L'integratore n.1 per efficacia e sicurezza. Assumila sempre, anche nei giorni di riposo, per mantenere la saturazione.",
      },
      {
        name: "Proteine Whey/Isolate",
        dose: "25-40g Attorno al workout",
        mechanism:
          "Forniscono un picco rapido di aminoacidi essenziali (EAA), in particolare leucina, necessaria per attivare il pathway mTOR e avviare la sintesi proteica (MPS).",
        notes:
          "Fondamentali se non riesci a fare un pasto solido proteico entro 1-2 ore dall'allenamento.",
      },
    ],
    primary: [
      {
        name: "Caffeina",
        dose: "3-6 mg/kg (Prima dell'allenamento)",
        mechanism:
          "Antagonizza i recettori dell'adenosina nel cervello, riducendo la percezione della fatica (RPE) e aumentando il reclutamento delle unità motorie.",
        notes:
          "Usala solo pre-workout per non sviluppare tolleranza. Evitala la sera per non disturbare il sonno profondo.",
      },
      {
        name: "Citrullina Malato",
        dose: "6-8g (Prima dell'allenamento)",
        mechanism:
          "Precursore dell'arginina che aumenta l'Ossido Nitrico (vasodilatazione) e aiuta il ciclo dell'urea a smaltire l'ammoniaca prodotta dallo sforzo intenso.",
        notes:
          "Migliora il 'pump' e riduce il bruciore muscolare nelle serie ad alte ripetizioni.",
      },
    ],
    secondary: [
      {
        name: "Beta-Alanina",
        dose: "3-4g/die",
        mechanism:
          "Aumenta le riserve di carnosina intramuscolare, che agisce come tampone per gli ioni H+ (acidità) durante sforzi glicolitici (1-4 minuti).",
        notes:
          "Utile solo se fai CrossFit, circuiti o set molto lunghi. Causa formicolio (parestesia) innocuo.",
      },
    ],
    prozisProducts: [
      { name: "Creatina Creapure®", description: "La creatina più pura al mondo.", url: "https://www.prozis.com/it/it/search?text=creapure" },
      { name: "100% Real Whey Isolate", description: "Proteine isolate pure per il post-workout.", url: "https://www.prozis.com/it/it/search?text=real+whey+isolate" },
      { name: "Caffeina 200mg", description: "Energia pura pre-allenamento.", url: "https://www.prozis.com/it/it/search?text=caffeine" },
      { name: "Citrullina Malato", description: "Per pump e resistenza.", url: "https://www.prozis.com/it/it/search?text=citrulline+malate" },
    ],
  },
  weight_loss: {
    title: "Perdita di Peso & Ricomposizione",
    description:
      "La mia strategia per proteggere i tuoi muscoli e gestire la fame mentre bruci grasso.",
    icon: <Flame className="w-8 h-8" />,
    color: "bg-emerald-500",
    colorText: "text-emerald-500",
    core: [
      {
        name: "Proteine (Totali)",
        dose: "2.0-2.4g/kg/die",
        mechanism:
          "Hanno il più alto effetto termico (TEF) e stimolano potentemente la sazietà tramite gli ormoni GLP-1 e PYY. Fondamentali per prevenire il catabolismo in deficit calorico.",
        notes:
          "In definizione, devi aumentare le proteine, non diminuirle. Sono la tua assicurazione sul muscolo.",
      },
      {
        name: "Fibre (Psillio/Glucomannano)",
        dose: "10-15g Pre-pasto",
        mechanism:
          "Formano un gel viscoso nello stomaco che induce distensione meccanica (segnale di pienezza) e rallenta l'assorbimento dei carboidrati.",
        notes:
          "Il mio strumento preferito per combattere la fame nervosa senza aggiungere calorie.",
      },
    ],
    primary: [
      {
        name: "Caffeina + EGCG",
        dose: "200mg + 400mg EGCG",
        mechanism:
          "Questa combinazione lavora in sinergia per aumentare leggermente la termogenesi e l'ossidazione dei lipidi (grassi) durante l'attività fisica.",
        notes:
          "Utile per mantenere alti i livelli di energia (NEAT, attività non sportiva) quando sei stanco per la dieta.",
      },
      {
        name: "Berberina",
        dose: "500mg ai pasti principali",
        mechanism:
          "Attiva l'enzima AMPK (lo stesso attivato dal digiuno) e migliora la sensibilità all'insulina, aiutando a gestire i picchi glicemici post-prandiali.",
        notes:
          "Considerala se la tua dieta prevede molti carboidrati o se hai resistenza insulinica.",
      },
    ],
    secondary: [
      {
        name: "Multivitaminico",
        dose: "1 serving/die",
        mechanism:
          "In deficit calorico mangi meno cibo, quindi introduci meno micronutrienti essenziali. Questo previene carenze che potrebbero rallentare il metabolismo.",
        notes:
          "Una polizza assicurativa a basso costo per la tua salute generale.",
      },
    ],
    prozisProducts: [
      { name: "Psyllium Husk", description: "Fibre per il controllo della fame.", url: "https://www.prozis.com/it/it/search?text=psyllium+husk" },
      { name: "Real Whey Isolate", description: "Proteine pure senza grassi/zuccheri.", url: "https://www.prozis.com/it/it/search?text=real+whey+isolate" },
      { name: "Termogenico XCESS", description: "Formula completa per il metabolismo.", url: "https://www.prozis.com/it/it/search?text=fat+burner" },
      { name: "Berberina", description: "Per la gestione degli zuccheri.", url: "https://www.prozis.com/it/it/search?text=berberina" },
    ],
  },
  sleep_stress: {
    title: "Sonno & Gestione Stress",
    description:
      "Come riparo il tuo sistema nervoso e ottimizzo il recupero notturno.",
    icon: <Moon className="w-8 h-8" />,
    color: "bg-indigo-500",
    colorText: "text-indigo-500",
    core: [
      {
        name: "Magnesio Bisglicinato",
        dose: "300-400mg (Sera)",
        mechanism:
          "Agisce come inibitore naturale dell'eccitazione neuronale (antagonista dei recettori NMDA) e rilassante muscolare. La forma bisglicinato è molto biodisponibile.",
        notes:
          "Lo ritengo essenziale per 'spegnere' un cervello iperattivo prima di dormire.",
      },
      {
        name: "Melatonina",
        dose: "0.3-1mg (30 min pre-nanna)",
        mechanism:
          "Non è un sedativo, ma un 'cronobiotico'. Segnala al corpo che è buio. Dosi basse (dose fisiologica) sono spesso più efficaci di quelle alte.",
        notes:
          "Less is more. Inizia con il dosaggio minimo efficace per non desensibilizzare i recettori.",
      },
    ],
    primary: [
      {
        name: "Ashwagandha (KSM-66)",
        dose: "300-600mg",
        mechanism:
          "Adattogeno che modula l'asse Ipotalamo-Ipofisi-Surrene (HPA), riducendo misurabilmente i livelli di cortisolo sierico e la percezione dello stress.",
        notes:
          "Ottimo nei periodi di forte stress psicofisico. Consiglio di usarla a cicli (es. 2 mesi sì, 1 mese no) e ciclizzarla.",
      },
      {
        name: "L-Teanina",
        dose: "100-200mg",
        mechanism:
          "Aminoacido che promuove le onde cerebrali Alfa, associate a uno stato di 'rilassamento vigile' senza sedazione.",
        notes:
          "Ti calma senza darti sonnolenza. Perfetta per staccare la spina mentalmente la sera.",
      },
    ],
    secondary: [
      {
        name: "Glicina",
        dose: "3g pre-nanna",
        mechanism:
          "Abbassa la temperatura corporea centrale, un segnale fisiologico necessario per entrare nel sonno profondo.",
        notes:
          "Economica e sicura, migliora la qualità soggettiva del riposo.",
      },
      {
        name: "Lavanda (Silexan)",
        dose: "80mg",
        mechanism:
          "Modula i canali del calcio voltaggio-dipendenti nei neuroni, riducendo il rilascio di neurotrasmettitori eccitatori.",
        notes:
          "Efficace se l'ansia o i pensieri ricorrenti ti impediscono di prendere sonno.",
      },
    ],
    prozisProducts: [
      { name: "Magnesio Bisglicinato", description: "La forma migliore per il relax.", url: "https://www.prozis.com/it/it/search?text=magnesium+bisglycinate" },
      { name: "Melatonina", description: "Per addormentarsi subito.", url: "https://www.prozis.com/it/it/search?text=melatonin" },
      { name: "Ashwagandha KSM-66", description: "Contro lo stress cronico.", url: "https://www.prozis.com/it/it/search?text=ashwagandha+ksm66" },
      { name: "GABA + Teanina", description: "Mix rilassante.", url: "https://www.prozis.com/it/it/search?text=gaba+theanine" },
    ],
  },
  hormonal: {
    title: "Salute Ormonale (M & F)",
    description:
      "Il supporto alle fondamenta biochimiche per la fertilità, la libido e l'equilibrio endocrino.",
    icon: <Heart className="w-8 h-8" />,
    color: "bg-rose-500",
    colorText: "text-rose-500",
    core: [
      {
        name: "Vit D3 + K2",
        dose: "2000-4000 UI",
        mechanism:
          "La Vitamina D agisce come modulatore genico nella sintesi degli ormoni steroidei. La K2 assicura che il calcio vada nelle ossa, non nelle arterie.",
        notes:
          "La carenza è diffusissima e correla con bassi livelli di testosterone. Correggila prima di pensare ad altro.",
      },
      {
        name: "Zinco + Magnesio",
        dose: "15-30mg Zn / 400mg Mg",
        mechanism:
          "Cofattori enzimatici indispensabili per la steroidogenesi e la salute follicolare. La carenza di Zinco blocca la produzione di testosterone a monte.",
        notes:
          "Non sono booster magici, ma se sei carente (e molti atleti lo sono), riportano i tuoi livelli alla normalità fisiologica.",
      },
    ],
    primary: [
      {
        name: "Omega-3 (EPA/DHA)",
        dose: "2-3g",
        mechanism:
          "Garantiscono la fluidità delle membrane cellulari (dove risiedono i recettori ormonali) e abbassano l'infiammazione sistemica che sopprime l'asse ormonale.",
        notes:
          "Fondamentali per la salute a lungo termine e la sensibilità dei recettori.",
      },
      {
        name: "Inositolo (Myo)",
        dose: "2-4g",
        mechanism:
          "Agisce come secondo messaggero per l'ormone FSH e migliora drasticamente la sensibilità all'insulina ovarica.",
        notes:
          "Il gold standard assoluto per la salute ormonale femminile (specie in PCOS), ma utile anche per la fertilità maschile.",
      },
    ],
    secondary: [
      {
        name: "Maca / Tongkat Ali",
        dose: "Variabile",
        mechanism:
          "La Maca agisce sui neurotrasmettitori del desiderio (libido) senza toccare gli ormoni. Il Tongkat Ali può liberare una frazione di testosterone dalla SHBG.",
        notes:
          "Usa la Maca se cerchi 'voglia', il Tongkat se cerchi un piccolo boost di vitalità maschile.",
      },
    ],
    prozisProducts: [
      { name: "ZMB6 (Zinco/Magnesio)", description: "Supporto ormonale notturno.", url: "https://www.prozis.com/it/it/search?text=zmb6" },
      { name: "Vitamina D3", description: "Essenziale per gli ormoni.", url: "https://www.prozis.com/it/it/search?text=vitamin+d3" },
      { name: "Omega 3 Ultra", description: "Per la salute cellulare.", url: "https://www.prozis.com/it/it/search?text=omega+3" },
      { name: "Maca Peruviana", description: "Per la libido e l'energia.", url: "https://www.prozis.com/it/it/search?text=maca" },
    ],
  },
};

export const StackBuilder = () => {
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);

  return (
    <div className="space-y-8">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center justify-center p-4 bg-violet-500/10 rounded-full mb-6">
          <Layers className="w-10 h-10 text-violet-400" />
        </div>
        <h2 className="text-3xl font-bold text-foreground mb-4 tracking-tight">
          Scegli il tuo Stack
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          Seleziona il tuo obiettivo primario: genererò per te un protocollo basato sulle evidenze
          scientifiche.
        </p>

        <div className="bg-red-950/30 border border-red-500/30 p-4 rounded-lg text-sm text-red-300 text-left mx-auto max-w-2xl">
          <div className="flex items-center font-bold mb-2">
            <AlertTriangle className="w-5 h-5 mr-2" /> DISCLAIMER IMPORTANTE
          </div>
          <p className="leading-relaxed">
            Le informazioni che ti fornisco qui sono a scopo puramente educativo.{" "}
            <strong>Non sono un medico.</strong> Queste indicazioni non sostituiscono il parere di un
            professionista sanitario. Ti raccomando di consultare il tuo medico prima di iniziare,
            specialmente se hai patologie o assumi farmaci.
          </p>
        </div>
      </div>

      {!selectedGoal ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {Object.entries(stacks).map(([key, data]) => (
            <button
              key={key}
              onClick={() => setSelectedGoal(key)}
              className="flex flex-col items-center p-8 rounded-2xl border border-border/50 hover:border-violet-500/50 hover:shadow-xl transition-all duration-300 group bg-card relative overflow-hidden h-full text-left"
            >
              <div className={`absolute top-0 left-0 w-full h-1.5 ${data.color}`} />
              <div
                className={`w-16 h-16 rounded-full ${data.color}/10 flex items-center justify-center mb-5 ${data.colorText}`}
              >
                {data.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-violet-400 text-center">
                {data.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm text-center">
                {data.description}
              </p>
            </button>
          ))}
        </div>
      ) : (
        <div className="max-w-5xl mx-auto">
          <button
            onClick={() => setSelectedGoal(null)}
            className="mb-8 flex items-center text-muted-foreground hover:text-violet-400 transition-colors font-medium group"
          >
            <div className="w-8 h-8 rounded-full bg-card flex items-center justify-center mr-2 group-hover:bg-violet-500/10">
              <ArrowRight className="w-4 h-4 rotate-180" />
            </div>
            Torna alla selezione
          </button>

          <div className="bg-card rounded-2xl shadow-xl border border-border/50 overflow-hidden">
            <div className={`${stacks[selectedGoal].color} p-8 text-white`}>
              <div className="flex items-center gap-5 mb-2">
                <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm">
                  {stacks[selectedGoal].icon}
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold">
                    {stacks[selectedGoal].title}
                  </h2>
                  <p className="text-white/90 text-base mt-1 max-w-2xl">
                    {stacks[selectedGoal].description}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8 space-y-10">
              {/* Core */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 border-b border-border/30 pb-2">
                  <div className="w-2 h-8 bg-emerald-500 rounded-full" />
                  <h3 className="text-base font-bold uppercase tracking-wider text-emerald-400">
                    Core (La Base)
                  </h3>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  {stacks[selectedGoal].core.map((item, i) => (
                    <SupplementCard key={i} {...item} type="Core" />
                  ))}
                </div>
              </div>

              {/* Primary */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 border-b border-border/30 pb-2">
                  <div className="w-2 h-8 bg-blue-500 rounded-full" />
                  <h3 className="text-base font-bold uppercase tracking-wider text-blue-400">
                    Primary (Potenziamento)
                  </h3>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  {stacks[selectedGoal].primary.map((item, i) => (
                    <SupplementCard key={i} {...item} type="Primary" />
                  ))}
                </div>
              </div>

              {/* Secondary */}
              {stacks[selectedGoal].secondary.length > 0 && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 border-b border-border/30 pb-2">
                    <div className="w-2 h-8 bg-orange-500 rounded-full" />
                    <h3 className="text-base font-bold uppercase tracking-wider text-orange-400">
                      Secondary (Ottimizzazione)
                    </h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-5">
                    {stacks[selectedGoal].secondary.map((item, i) => (
                      <SupplementCard key={i} {...item} type="Secondary" />
                    ))}
                  </div>
                </div>
              )}

              <ProzisSection products={stacks[selectedGoal].prozisProducts} />
            </div>

            <div className="bg-card/50 p-5 border-t border-border/30 text-center text-muted-foreground text-sm">
              Nota: Ti consiglio di introdurre un nuovo integratore alla volta (ogni 3-5 giorni) per
              monitorare come reagisce il tuo corpo.
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
