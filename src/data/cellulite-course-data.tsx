import React from "react";
import CourseImage from "@/components/course/CourseImage";
import { CelluliteInfoBox, BiotypeTable, TreatmentTable } from "@/components/course/CelluliteComponents";
import { Droplet, Layers, Activity, Zap, Utensils } from "lucide-react";
import type { Lesson } from "@/components/CourseViewerLayout";

export interface LessonContent {
  subtitle: string;
  content: React.ReactNode;
  insights: { text: string; url: string }[];
}

export const celluliteLessons: Lesson[] = [
  { id: "l1", title: "Introduzione", duration: "8 min", completed: false },
  { id: "l2", title: "Fisiologia e Ormoni", duration: "10 min", completed: false },
  { id: "l3", title: "Cellulite: Anatomia", duration: "9 min", completed: false },
  { id: "l4", title: "Rimedi e Trattamenti", duration: "10 min", completed: false },
  { id: "l5", title: "Allenamento", duration: "11 min", completed: false },
  { id: "l6", title: "Protocolli: PHA e AAS", duration: "9 min", completed: false },
  { id: "l7", title: "Alimentazione & Integrazione", duration: "10 min", completed: false },
];

export const celluliteLessonContent: Record<string, LessonContent> = {
  l1: {
    subtitle: "Ritenzione e Cellulite: Oltre l'estetica",
    content: (
      <div className="space-y-6 text-foreground/80 leading-relaxed">
        <p className="text-xl font-light text-rose-400 border-l-4 border-rose-500 pl-4 italic">
          "Quasi tutte le donne soffrono di ritenzione idrica nel corso della giornata. Si tratta di un fenomeno normale e fisiologico del corpo femminile."
        </p>
        <p>
          Se hai cercato su Google "ritenzione idrica" o "cellulite", sai che il bombardamento mediatico è enorme. Spesso questi fenomeni vengono demonizzati, creando un impatto psicologico non indifferente: insicurezza, rifiuto di indossare certi vestiti, disagio in costume. In questo mini corso userò la scienza per spiegarti cosa sono davvero, distinguendo tra patologia e fisiologia.
        </p>
        <p>
          <strong className="text-foreground">Non è solo una questione estetica:</strong> la salute del microcircolo e del tessuto connettivo è fondamentale per il benessere generale delle tue gambe e del sistema linfatico.
        </p>

        <CourseImage src="Pic 1.png" alt="Tessuto Sano vs PEFS" caption="Confronto visivo: Tessuto adiposo sano con circolazione fluida (sinistra) vs stati infiammatori della cellulite con setti fibrosi (destra)." />

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-card p-5 rounded-xl shadow-sm border-t-4 border-blue-400 border-x border-b border-border/50">
            <h3 className="font-bold text-blue-400 text-lg mb-2 flex items-center"><Droplet className="w-5 h-5 mr-2" /> Ritenzione Idrica (Edema)</h3>
            <p className="text-sm text-foreground/70 mb-2">Accumulo di liquidi negli spazi interstiziali. Tipologie:</p>
            <ul className="text-xs text-muted-foreground list-disc pl-4 space-y-1">
              <li><strong>Iatrogena:</strong> Da farmaci (contraccettivi, cortisonici).</li>
              <li><strong>Primaria:</strong> Circolatoria/Linfatica.</li>
              <li><strong>Secondaria:</strong> Patologica (cuore, reni, fegato).</li>
              <li><strong>Stile di vita:</strong> Sedentarietà, dieta scorretta.</li>
              <li><strong>Ormonale:</strong> Ciclo, gravidanza, menopausa.</li>
            </ul>
          </div>
          <div className="bg-card p-5 rounded-xl shadow-sm border-t-4 border-rose-400 border-x border-b border-border/50">
            <h3 className="font-bold text-rose-400 text-lg mb-2 flex items-center"><Layers className="w-5 h-5 mr-2" /> Cellulite (PEFS)</h3>
            <p className="text-sm text-foreground/70 mb-2">Pannicolopatia Edemato Fibro Sclerotica. È un processo degenerativo del tessuto adiposo sottocutaneo.</p>
            <ul className="text-xs text-muted-foreground list-disc pl-4 space-y-1">
              <li>Interessa l'80-90% delle donne post-puberali (carattere sessuale secondario).</li>
              <li>Coinvolge: Adipociti ipertrofici, alterazione del microcircolo e fibrosi dei setti.</li>
              <li>Non "sparisce" con la dieta drastica.</li>
            </ul>
          </div>
        </div>

        <CelluliteInfoBox title="Test della Fovea" content="Premi con un dito sulla zona gonfia (es. caviglia) per 5 secondi. Se togliendo il dito rimane un'impronta bianca (fovea) che tarda a sparire, c'è edema. Fai anche il test della bilancia: variazioni di peso > 1-1.5kg tra mattina e sera indicano ritenzione, non grasso." type="info" />
      </div>
    ),
    insights: [
      { text: "Differenza tra Edema e Ritenzione (Humanitas)", url: "https://www.humanitas.it/sintomi/ritenzione-idrica/" },
      { text: "Fisiopatologia dell'edema (Manuale MSD)", url: "https://www.msdmanuals.com/it-it/professionale/disturbi-del-metabolismo/disturbi-dell-equilibrio-idroelettrolitico/edema" },
    ],
  },

  l2: {
    subtitle: "Il meccanismo del gonfiore",
    content: (
      <div className="space-y-6 text-foreground/80 leading-relaxed">
        <p>
          La distribuzione dell'acqua nel corpo è regolata da ormoni complessi. Le donne sono biologicamente predisposte alla ritenzione per via del loro assetto ormonale, progettato per trattenere liquidi (ed espandere la volemia) in vista di una possibile gravidanza.
        </p>

        <h3 className="text-lg font-bold text-rose-400 mt-6 mb-3">Il sistema RAAS e gli Ormoni</h3>
        <div className="space-y-4">
          <div className="bg-card p-4 rounded-lg border border-border/50 shadow-sm">
            <strong className="text-foreground block mb-1 text-base">Aldosterone e Sistema RAAS</strong>
            <p className="text-sm text-foreground/70">
              Il sistema Renina-Angiotensina-Aldosterone regola la pressione. Quando il rene sente "poco liquido" o "poco sale", produce Renina → Angiotensina II (vasocostrittore) → Aldosterone. L'Aldosterone trattiene Sodio e Acqua.
              <br /><strong className="text-foreground">Il paradosso:</strong> Se riduci drasticamente il sale, il corpo attiva questo sistema di emergenza e trattiene ancora più liquidi per preservare l'equilibrio elettrolitico!
            </p>
          </div>
          <div className="bg-card p-4 rounded-lg border border-border/50 shadow-sm">
            <strong className="text-foreground block mb-1 text-base">Estrogeni & Progesterone</strong>
            <p className="text-sm text-foreground/70">
              Gli <strong>Estrogeni</strong> stimolano la produzione di grasso (lipogenesi) e la ritenzione idrica. Il <strong>Progesterone</strong> ha un'affinità con i recettori dell'aldosterone. Nella fase luteinica (pre-ciclo), il suo calo drastico provoca il picco di ritenzione.
            </p>
          </div>
          <div className="bg-card p-4 rounded-lg border border-border/50 shadow-sm">
            <strong className="text-foreground block mb-1 text-base">ADH & ANP (Antidiuretico & Peptide Natriuretico)</strong>
            <p className="text-sm text-foreground/70">
              L'<strong>ADH (Vasopressina)</strong> riduce la diuresi quando beviamo poco o mangiamo troppo sale (il corpo trattiene acqua per diluire). L'<strong>ANP</strong> è l'antagonista: promuove la perdita di sodio e acqua.
            </p>
          </div>

          <CelluliteInfoBox title="Perché il grasso sulle gambe non va via?" content="Il tessuto adiposo non è tutto uguale. Nelle donne, il grasso su fianchi e cosce è ricco di recettori ALFA-adrenergici (che bloccano il dimagrimento) in un rapporto di 9:1 rispetto ai recettori BETA (che favoriscono lo scioglimento del grasso). Sull'addome invece prevalgono i Beta. Ecco perché perdi prima pancia e seno rispetto alle gambe." type="science" />

          <div className="bg-card p-4 rounded-lg border border-border/50 shadow-sm">
            <strong className="text-foreground block mb-1 text-base">Insulina e Cortisolo</strong>
            <p className="text-sm text-foreground/70">
              L'<strong>Insulina</strong> alta (diete ricche di zuccheri) dice al rene di trattenere sodio. L'insulino-resistenza è una delle cause primarie di infiammazione e ritenzione. Il <strong>Cortisolo</strong> (stress cronico) si lega ai recettori dell'aldosterone ("effetto mineralcorticoide"): lo stress ti fa gonfiare fisicamente.
            </p>
          </div>
        </div>

        <CourseImage src="Pic 2.png" alt="Schema Ormonale" caption="L'equilibrio delicato: come Insulina e Aldosterone cooperano a livello renale per il riassorbimento del sodio." />
      </div>
    ),
    insights: [
      { text: "Il sistema Renina-Angiotensina-Aldosterone (Wikipedia)", url: "https://it.wikipedia.org/wiki/Sistema_renina-angiotensina-aldosterone" },
      { text: "Estrogeni e regolazione dei fluidi (PubMed)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=estrogens+fluid+regulation+review" },
    ],
  },

  l3: {
    subtitle: "Gradi di gravità e formazione",
    content: (
      <div className="space-y-6 text-foreground/80 leading-relaxed">
        <p>
          La cellulite non è solo "grasso". È una patologia del tessuto connettivo e adiposo. Gli estrogeni attivano tre catene negative: 1) Ipertrofia degli adipociti (il grasso si gonfia), 2) Alterazione dei fibroblasti (il connettivo si indurisce), 3) Danno al microcircolo (edema).
        </p>

        <div className="grid md:grid-cols-2 gap-4 my-6">
          <div className="bg-rose-500/5 p-5 rounded-xl border border-rose-500/20 shadow-sm flex flex-col h-full">
            <h4 className="font-bold text-rose-400 flex items-center mb-3 pb-2 border-b border-rose-500/20">
              <span className="w-8 h-8 rounded-full bg-card text-rose-400 flex items-center justify-center mr-3 text-xs font-black shadow-sm border border-rose-500/20">F</span>
              Struttura Donna
            </h4>
            <p className="text-sm text-foreground/70 leading-relaxed flex-grow">
              I setti fibrosi sono <strong className="text-rose-400">perpendicolari</strong> alla pelle (verticali). Quando le cellule di grasso si ingrandiscono, spingono verso l'alto senza trovare resistenza, creando la "montagnetta", mentre il setto tira giù creando il "buco".
            </p>
          </div>
          <div className="bg-card/50 p-5 rounded-xl border border-border/50 shadow-sm flex flex-col h-full">
            <h4 className="font-bold text-foreground flex items-center mb-3 pb-2 border-b border-border/30">
              <span className="w-8 h-8 rounded-full bg-card text-muted-foreground flex items-center justify-center mr-3 text-xs font-black shadow-sm border border-border/50">M</span>
              Struttura Uomo
            </h4>
            <p className="text-sm text-foreground/70 leading-relaxed flex-grow">
              I setti sono disposti a <strong className="text-foreground">"X" (incrociati)</strong> a 45 gradi. Questa rete contiene il grasso in profondità, impedendogli di deformare la superficie della pelle anche in caso di forte sovrappeso.
            </p>
          </div>
        </div>

        <CourseImage src="Pic 3.png" alt="Confronto Strutturale" caption="Differenza strutturale dei setti fibrosi tra uomo (incrociati) e donna (perpendicolari)." />

        <h3 className="text-lg font-bold text-rose-400 mt-6">Classificazione della Cellulite</h3>
        <p className="text-sm mb-4">La gravità viene valutata secondo la scala di Nürnberger e Müller e la CSS (Cellulite Severity Scale):</p>

        <div className="bg-card p-6 rounded-xl border border-border/50 shadow-sm space-y-4 text-sm">
          <div className="flex flex-col sm:flex-row sm:items-start gap-2 border-b border-border/30 last:border-0 pb-3 last:pb-0">
            <strong className="text-rose-400 bg-rose-500/10 px-2 py-1 rounded text-xs whitespace-nowrap self-start">Stadio 0</strong>
            <span className="text-sm text-foreground/70">Nessuna alterazione visibile, nemmeno pizzicando.</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-start gap-2 border-b border-border/30 last:border-0 pb-3 last:pb-0">
            <strong className="text-rose-400 bg-rose-500/10 px-2 py-1 rounded text-xs whitespace-nowrap self-start">Stadio 1</strong>
            <span className="text-sm text-foreground/70">Pelle liscia in piedi/sdraiata. La buccia d'arancia appare solo pizzicando la pelle o contraendo il muscolo.</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-start gap-2 border-b border-border/30 last:border-0 pb-3 last:pb-0">
            <strong className="text-rose-400 bg-rose-500/10 px-2 py-1 rounded text-xs whitespace-nowrap self-start">Stadio 2</strong>
            <span className="text-sm text-foreground/70">Buccia d'arancia visibile spontaneamente stando in piedi (senza pizzicare).</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-start gap-2">
            <strong className="text-rose-400 bg-rose-500/10 px-2 py-1 rounded text-xs whitespace-nowrap self-start">Stadio 3</strong>
            <span className="text-sm text-foreground/70">Noduli evidenti, buccia d'arancia visibile in ogni posizione, possibile dolore al tatto (Stadio sclerotico).</span>
          </div>
        </div>

        <CourseImage src="Pic 4.png" alt="Stadi della Cellulite" caption="Evoluzione clinica: da Edema (stadio 1) a Sclerosi (stadio 3/4). Intervenire ai primi stadi è cruciale." />
      </div>
    ),
    insights: [
      { text: "Fisiopatologia della Cellulite (JJEADV - PubMed)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=cellulite+pathophysiology+review" },
      { text: "Differenze strutturali uomo-donna (Focus.it)", url: "https://www.focus.it/scienza/salute/perche-le-donne-hanno-la-cellulite-e-gli-uomini-no" },
    ],
  },

  l4: {
    subtitle: "Analisi critica delle terapie",
    content: (
      <div className="space-y-6 text-foreground/80 leading-relaxed">
        <p>
          La domanda da un milione di dollari: <em>Si può eliminare?</em>
          <br />
          <strong className="text-foreground">Risposta scientifica:</strong> La ritenzione idrica sì (è temporanea). La cellulite NO, non si può "cancellare" definitivamente perché legata alla genetica e alla struttura dei setti, ma si può migliorare notevolmente l'aspetto estetico e farla regredire di stadio.
        </p>

        <TreatmentTable />

        <h3 className="text-lg font-bold text-rose-400 mt-6">Focus: Terapie Mediche vs Estetiche</h3>
        <div className="space-y-4">
          <div className="bg-rose-500/5 p-4 rounded-lg border border-rose-500/20">
            <h4 className="font-bold text-rose-400 mb-1">AWT (Onde d'Urto)</h4>
            <p className="text-sm text-foreground/70">Efficaci per stimolare il metabolismo locale e la microcircolazione. Richiedono cicli costanti. Risultati significativi e mantenuti fino a 3 mesi.</p>
          </div>
          <div className="bg-rose-500/5 p-4 rounded-lg border border-rose-500/20">
            <h4 className="font-bold text-rose-400 mb-1">Radiofrequenza (RF)</h4>
            <p className="text-sm text-foreground/70">Sfrutta il calore per stimolare collagene e lipolisi. I risultati sono variabili e dipendono dal macchinario. Alcuni studi mostrano riduzione circonferenza coscia.</p>
          </div>
          <div className="bg-rose-500/5 p-4 rounded-lg border border-rose-500/20">
            <h4 className="font-bold text-rose-400 mb-1">Pressoterapia & Linfodrenaggio</h4>
            <p className="text-sm text-foreground/70">Non curano la cellulite strutturale, ma svuotano l'acqua. Fondamentali per gestire il sintomo (gonfiore) e preparare il tessuto ad altre terapie.</p>
          </div>
        </div>

        <CelluliteInfoBox title="Auto-Trattamenti: Cosa funziona?" content="Creme e scrub hanno efficacia limitata e superficiale. Funzionano meglio: 1) Gambe in alto (20 min/giorno) per gravità. 2) Docciature fredde (vasocostrizione) alternate a calde. 3) Calze compressive (utili per insufficienza venosa ma non curano la cellulite)." type="info" />
      </div>
    ),
    insights: [
      { text: "Efficacia della pressoterapia (Ricerca Scientifica - PubMed)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=pressotherapy" },
      { text: "Trattamenti estetici: Linee guida (MyPersonalTrainer)", url: "https://www.my-personaltrainer.it/estetica/trattamenti-anticellulite.html" },
    ],
  },

  l5: {
    subtitle: "Ginoide vs Androide: Strategie",
    content: (
      <div className="space-y-6 text-foreground/80 leading-relaxed">
        <p>
          L'allenamento è l'arma più potente, ma se sbagli approccio (soprattutto se sei Ginoide) peggiori l'infiammazione. Devi allenarti in base al tuo biotipo e alla tua capacità di gestire l'acido lattico.
        </p>

        <BiotypeTable />

        <div className="bg-card/50 p-4 rounded-lg border-l-4 border-muted-foreground/30 text-sm text-foreground/70 mb-6">
          <strong>⚠️ Nota Importante:</strong> Questa suddivisione è una <em>semplificazione didattica</em>. La scienza ci dice che non esistono compartimenti stagni: la distribuzione del tessuto adiposo è uno <strong>spettro continuo</strong> influenzato da genetica e ormoni. Molte donne presentano caratteristiche miste o intermedie. Non cercare di rientrare "a forza" in una categoria, ma usa questi profili per capire le <em>tendenze prevalenti</em> del tuo corpo.
        </div>

        <CourseImage src="Pic 5.png" alt="Biotipi Costituzionali" caption="Differenza di distribuzione adiposa tra biotipo Ginoide (sinistra) e Androide (destra)." />

        <div className="bg-card p-6 rounded-xl border-l-4 border-rose-500 shadow-sm my-6 border-y border-r border-border/50">
          <h3 className="text-lg font-bold text-rose-400 mb-2">Il Paradosso dei Recettori</h3>
          <p className="text-sm text-foreground/70">
            Perché le gambe non dimagriscono? Nel tessuto adiposo femorale delle donne c'è un rapporto <strong className="text-foreground">9:1 tra recettori Alfa-2 (anti-lipolitici) e Beta (lipolitici)</strong>.
            <br />Tradotto: i recettori "Alfa" dicono alla cellula di grasso di NON svuotarsi. Fare ore di cardio o esercizi infiniti non cambia questa biochimica, anzi, aumentando il cortisolo potresti bloccare ancora di più il dimagrimento.
          </p>
        </div>

        <h3 className="text-lg font-bold text-rose-400 mt-6 mb-2">Errori Comuni nel soggetto Ginoide</h3>
        <ul className="list-disc pl-5 space-y-2 text-sm text-foreground/70 mb-6">
          <li><strong className="text-foreground">Cardio ad alto impatto (Corsa):</strong> La corsa prolungata alza il cortisolo e l'impatto ripetuto col terreno (rimbalzo) crea micro-traumi al pannicolo adiposo già infiammato, peggiorando la situazione dei setti fibrosi.</li>
          <li><strong className="text-foreground">Troppo Acido Lattico:</strong> L'acidosi locale eccessiva richiama acqua per motivi osmotici (effetto pump). Se fai serie infinite da 50 ripetizioni, ti gonfi invece di definirti.</li>
          <li><strong className="text-foreground">Solo Gambe:</strong> Lavorare solo sui punti deboli (gambe) peggiora l'infiammazione. Bisogna allenare tutto il corpo (anche l'upper body) per richiamare sangue altrove.</li>
        </ul>

        <div className="bg-emerald-500/10 p-5 rounded-xl border border-emerald-500/20 mt-4 shadow-sm">
          <h4 className="font-bold text-emerald-400 mb-2">La Strategia Vincente (Buffer & Pesi):</h4>
          <ul className="list-disc pl-5 space-y-2 text-sm text-emerald-300">
            <li><strong>Buffer (Margine):</strong> Lavora al 70-80% del massimale ma fermati 2 ripetizioni prima del cedimento. Questo stimola il muscolo (Tensione Meccanica) senza creare eccessiva infiammazione.</li>
            <li><strong>Catena Posteriore:</strong> Focus su Glutei e Femorali (Hip Thrust, Stacchi Rumeni). Sono muscoli grandi che attivano il metabolismo e migliorano la postura.</li>
            <li><strong>Capillarizzazione:</strong> Usa circuiti (PHA) per "lavare" i muscoli col sangue, spostandolo dalla parte alta alla bassa.</li>
          </ul>
        </div>
      </div>
    ),
    insights: [
      { text: "L'importanza della pompa plantare (Lejars)", url: "https://it.wikipedia.org/wiki/Soletta_venosa_di_Lejars" },
      { text: "Camminare fa bene al cuore (Fondazione Veronesi)", url: "https://www.fondazioneveronesi.it/magazine/articoli/sport/piu-cammini-e-piu-a-lungo-vivi" },
    ],
  },

  l6: {
    subtitle: "Circuiti per la circolazione",
    content: (
      <div className="space-y-6 text-foreground/80 leading-relaxed">
        <p>
          Il problema principale della donna ginoide è il ristagno venoso. Il sangue scende ma fatica a risalire. I protocolli migliori sfruttano l'azione di "pompa" muscolare su tutto il corpo: <strong className="text-foreground">PHA</strong> (Peripheral Heart Action) e <strong className="text-foreground">AAS</strong> (Anaerobic Aerobic System).
        </p>

        <CourseImage src="Pic 6.png" alt="Circolazione Sanguigna" caption="Visualizzazione del sistema circolatorio e delle stazioni linfatiche principali." />

        <div className="my-8">
          <h3 className="flex items-center text-xl font-bold text-rose-400 mb-3">
            <Zap className="w-6 h-6 mr-2" /> PHA (Peripheral Heart Action)
          </h3>
          <p className="text-sm mb-4">
            L'obiettivo è muovere il sangue da un estremo all'altro. Alternando un esercizio UPPER body con uno LOWER body, costringi il cuore a pompare il sangue su e giù, impedendo il ristagno.
          </p>

          <CourseImage src="Pic 7.png" alt="Schema Circuito PHA" caption="Diagramma di flusso del sangue durante un circuito PHA: dal distretto superiore a quello inferiore e viceversa." />

          <div className="bg-card border border-border/50 rounded-xl p-5 shadow-sm">
            <h4 className="font-bold text-foreground border-b border-border/30 pb-2 mb-3 text-sm uppercase tracking-wide">Scheda Pratica PHA (Esempio)</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between items-center"><span>1. Stacco Sumo (Gambe/Glutei)</span> <span className="font-bold text-[10px] bg-rose-500/10 text-rose-400 px-2 py-1 rounded-full uppercase">8 Reps</span></li>
              <li className="flex justify-between items-center"><span>2. Lento Avanti Manubri (Spalle)</span> <span className="font-bold text-[10px] bg-blue-500/10 text-blue-400 px-2 py-1 rounded-full uppercase">10 Reps</span></li>
              <li className="flex justify-between items-center"><span>3. Affondi indietro (Gambe)</span> <span className="font-bold text-[10px] bg-rose-500/10 text-rose-400 px-2 py-1 rounded-full uppercase">20 Reps</span></li>
              <li className="flex justify-between items-center"><span>4. Rematore Bilanciere (Dorso)</span> <span className="font-bold text-[10px] bg-blue-500/10 text-blue-400 px-2 py-1 rounded-full uppercase">10 Reps</span></li>
              <li className="flex justify-between items-center"><span>5. Frog Pump (Glutei Pump)</span> <span className="font-bold text-[10px] bg-rose-500/10 text-rose-400 px-2 py-1 rounded-full uppercase">20 Reps</span></li>
              <li className="mt-2 pt-2 border-t border-border/30 text-xs text-muted-foreground italic">Esegui di fila senza pausa. Riposa 90" alla fine del circuito. Ripeti 3-5 volte.</li>
            </ul>
          </div>
        </div>

        <div className="my-8">
          <h3 className="flex items-center text-xl font-bold text-rose-400 mb-3">
            <Activity className="w-6 h-6 mr-2" /> AAS (Anaerobic Aerobic System)
          </h3>
          <p className="text-sm mb-4">
            Combina uno sforzo anaerobico (pesi pesanti) con un recupero attivo aerobico per "lavare via" l'acido lattico subito dopo la serie. Ideale se tendi a gonfiare subito.
          </p>

          <div className="bg-card border border-border/50 rounded-xl p-5 shadow-sm">
            <h4 className="font-bold text-foreground border-b border-border/30 pb-2 mb-3 text-sm uppercase tracking-wide">Esempio Blocco AAS</h4>
            <ul className="space-y-3 text-sm">
              <li><strong>1. Esercizio Target:</strong> Squat o Hip Thrust (8-10 reps pesanti, buffer 2)</li>
              <li><strong>2. Esercizio Core:</strong> Plank (40 sec) - Stabilizza senza produrre lattato nelle gambe</li>
              <li className="bg-rose-500/10 p-3 rounded-lg border border-rose-500/20 font-bold text-rose-400 flex items-center">
                <Activity className="w-4 h-4 mr-2" />
                <span>3. Recupero Attivo: 3-5 min Camminata Veloce (Tapis roulant)</span>
              </li>
            </ul>
          </div>
        </div>

        <CelluliteInfoBox title="Gonfiore Post-Workout" content="È normale sentirsi 'gonfie' subito dopo l'allenamento (iperemia attiva). Se l'allenamento è ben dosato, il gonfiore sparisce in 24h. Se dura giorni, il carico infiammatorio era eccessivo: riduci il volume o aumenta il recupero." type="info" />
      </div>
    ),
    insights: [
      { text: "Benefici del Circuit Training (PubMed)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=circuit+training+health+benefits" },
      { text: "ACE Fitness: Protocolli di allenamento", url: "https://www.acefitness.org/resources/pros/expert-articles/" },
    ],
  },

  l7: {
    subtitle: "Fibre, AGEs e Verità sugli Integratori",
    content: (
      <div className="space-y-6 text-foreground/80 leading-relaxed">
        <p>
          Non esiste la "Dieta Anticellulite" magica, ma un'alimentazione bilanciata è fondamentale per gestire l'infiammazione e la ritenzione. La ricerca scientifica suggerisce di seguire il modello della dieta mediterranea (o simili bilanciate), ricca di cibi vegetali.
        </p>

        <CourseImage src="Pic 8.png" alt="Piramide Alimentare e Cibi Antinfiammatori" caption="I pilastri dell'alimentazione antinfiammatoria: vegetali, fibre e idratazione corretta." />

        <h3 className="text-lg font-bold text-rose-400 mt-6">Cottura e AGEs (Advanced Glycation End Products)</h3>
        <p className="text-sm">
          Gli AGEs sono composti tossici che si formano quando zuccheri e proteine vengono cotti ad alte temperature. Peggiorano l'invecchiamento della pelle e l'infiammazione.
        </p>
        <div className="grid grid-cols-2 gap-4 my-4 text-sm">
          <div className="bg-red-500/10 p-3 rounded border border-red-500/20">
            <strong className="text-red-400 block mb-1">Da Limitare:</strong>
            <span className="text-foreground/70">Fritture, griglia ad alte temperature, cibi industriali molto lavorati.</span>
          </div>
          <div className="bg-emerald-500/10 p-3 rounded border border-emerald-500/20">
            <strong className="text-emerald-400 block mb-1">Da Preferire:</strong>
            <span className="text-foreground/70">Cottura al vapore, bollitura, umido, marinatura.</span>
          </div>
        </div>

        <div className="bg-violet-500/10 p-5 rounded-xl border border-violet-500/20 mt-6 shadow-sm">
          <h4 className="font-bold text-violet-400 mb-2 flex items-center"><Utensils className="w-4 h-4 mr-2" /> Il Ruolo Chiave delle Fibre</h4>
          <p className="text-sm text-foreground/70 mb-2">
            La stipsi peggiora la cellulite perché riduce l'eliminazione delle tossine e comprime le vene iliache. Un apporto corretto di fibre (25-30g/giorno) è cruciale.
          </p>
          <ul className="text-xs list-disc pl-4 space-y-1 text-violet-300">
            <li><strong>Legumi:</strong> Ricchi di fibra solubile e proteine. Aiutano a controllare la glicemia e riducono l'infiammazione.</li>
            <li><strong>Cereali Integrali:</strong> Contengono fibra insolubile che accelera il transito intestinale.</li>
            <li><strong>Frutta e Verdura:</strong> Fonte di antiossidanti e acqua.</li>
          </ul>
        </div>

        <h3 className="text-lg font-bold text-rose-400 mt-6">Il Sale: Amico o Nemico?</h3>
        <p>
          Eliminare il sale è un errore grave. Se togli il sodio, attivi l'aldosterone che trattiene liquidi.
          <strong className="text-foreground"> La strategia:</strong> Usa il sale il giusto (OMS raccomanda &lt; 2g sodio/die, circa 5g di sale) ma elimina quello "nascosto" (cibi in scatola, affettati, cracker salati). Bevi molta acqua (&gt;2L) per favorire l'eliminazione renale del sodio in eccesso.
        </p>

        <h3 className="text-lg font-bold text-rose-400 mt-6">Integratori: Analisi Scientifica</h3>
        <p className="text-sm mb-4">Molti integratori promettono miracoli, ma la ricerca scientifica è spesso scarsa o debole nel dimostrare la loro efficacia risolutiva per la cellulite. Possono però dare benefici indiretti:</p>
        <div className="space-y-3">
          <div className="flex items-start">
            <span className="bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded text-xs font-bold mr-2 mt-0.5 shrink-0">Bromelina</span>
            <p className="text-sm text-foreground/70">Utilizzata per le proprietà antinfiammatorie e antiedemigene, ma le evidenze scientifiche sulla risoluzione diretta della PEFS sono limitate.</p>
          </div>
          <div className="flex items-start">
            <span className="bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded text-xs font-bold mr-2 mt-0.5 shrink-0">Centella Asiatica</span>
            <p className="text-sm text-foreground/70">Migliora il microcircolo e l'insufficienza venosa, ma le evidenze sull'efficacia diretta per eliminare la cellulite sono deboli.</p>
          </div>
          <div className="flex items-start">
            <span className="bg-violet-500/20 text-violet-400 px-2 py-1 rounded text-xs font-bold mr-2 mt-0.5 shrink-0">Vitis Vinifera & Ippocastano</span>
            <p className="text-sm text-foreground/70">Utili per proteggere i vasi e migliorare il microcircolo, ma senza prove forti di riduzione della cellulite.</p>
          </div>
          <div className="flex items-start">
            <span className="bg-amber-500/20 text-amber-400 px-2 py-1 rounded text-xs font-bold mr-2 mt-0.5 shrink-0">Creme Topiche</span>
            <p className="text-sm text-foreground/70">Efficacia limitata. La pelle è una barriera: difficile che una crema penetri fino all'ipoderma per sciogliere il grasso.</p>
          </div>
        </div>
      </div>
    ),
    insights: [
      { text: "Linee guida per una sana alimentazione (CREA)", url: "https://www.crea.gov.it/web/alimenti-e-nutrizione/linee-guida-per-una-sana-alimentazione-2018" },
      { text: "Advanced Glycation End Products (AGEs) in Foods (PubMed)", url: "https://pubmed.ncbi.nlm.nih.gov/20497781/" },
    ],
  },
};
