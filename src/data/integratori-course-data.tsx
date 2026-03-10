import React from "react";
import CourseImage from "@/components/course/CourseImage";
import { SupplementCard, InfoBox, ProzisSection, StackBuilder } from "@/components/course/IntegratoriComponents";
import { AlertTriangle } from "lucide-react";
import type { Lesson } from "@/components/CourseViewerLayout";

export interface LessonContent {
  subtitle: string;
  content: React.ReactNode;
  insights: { text: string; url: string }[];
}

export const integratoriLessons: Lesson[] = [
  { id: "l1", title: "Introduzione", duration: "6 min", completed: false },
  { id: "l2", title: "Allergie e Immunità", duration: "10 min", completed: false },
  { id: "l3", title: "Salute delle Ossa", duration: "9 min", completed: false },
  { id: "l4", title: "Salute Cardiovascolare", duration: "10 min", completed: false },
  { id: "l5", title: "Diabete e Glicemia", duration: "9 min", completed: false },
  { id: "l6", title: "Perdita di Grasso", duration: "8 min", completed: false },
  { id: "l7", title: "Invecchiamento Sano", duration: "10 min", completed: false },
  { id: "l8", title: "Salute delle Articolazioni", duration: "8 min", completed: false },
  { id: "l9", title: "Libido e Sessualità", duration: "7 min", completed: false },
  { id: "l10", title: "Salute del Fegato", duration: "8 min", completed: false },
  { id: "l11", title: "Memoria e Focus", duration: "7 min", completed: false },
  { id: "l12", title: "Umore e Salute Mentale", duration: "8 min", completed: false },
  { id: "l13", title: "Muscoli e Performance", duration: "9 min", completed: false },
  { id: "l14", title: "Pelle, Capelli e Unghie", duration: "6 min", completed: false },
  { id: "l15", title: "Sonno", duration: "7 min", completed: false },
  { id: "l16", title: "Stress e Ansia", duration: "7 min", completed: false },
  { id: "l17", title: "Testosterone", duration: "8 min", completed: false },
  { id: "l18", title: "Vegetariani e Vegani", duration: "8 min", completed: false },
  { id: "l19", title: "Scegli il tuo Stack", duration: "Strumento", completed: false },
];

export const integratoriLessonContent: Record<string, LessonContent> = {
  l1: {
    subtitle: "Le Basi dell'Integrazione Scientifica",
    content: (
      <div className="space-y-6 text-foreground/80 leading-relaxed">
        <p className="text-xl font-light text-violet-400 border-l-4 border-violet-500 pl-4">
          Benvenuto. Questo corso ha l'obiettivo di fare distinzione tra ciò che ti può servire davvero e ciò che è soltanto frutto del marketing. Ho raccolto per te tutti i principali integratori e le evidenze scientifiche per aiutarti a prendere decisioni informate e consapevoli.
        </p>
        <p>
          Il mio obiettivo è aiutarti a navigare nel confuso mondo degli integratori. Imparerai a distinguere il marketing dalla fisiologia reale.
        </p>

        <div className="bg-red-950/30 border border-red-500/30 p-4 rounded-lg text-sm text-red-300 my-6">
          <div className="flex items-center font-bold mb-2">
            <AlertTriangle className="w-5 h-5 mr-2" /> DISCLAIMER MEDICO
          </div>
          <p>
            Le informazioni contenute in questo corso sono puramente educative. Non sono un medico né un nutrizionista clinico. Consulta sempre il tuo medico prima di iniziare l'assunzione di integratori, specialmente se hai patologie o assumi farmaci.
          </p>
        </div>

        <CourseImage src="Pic 1.png" alt="Piramide delle Priorità" caption="Piramide delle Priorità: Prima Dieta e Sonno, poi Integratori." />
        <CourseImage src="Pic 2.png" alt="Analisi Scientifica" caption="Analisi chimica: capire cosa c'è davvero dentro." />

        <InfoBox title="Come leggere le classificazioni" content="Ho diviso gli integratori in categorie basate sulla forza delle prove scientifiche umane a supporto." type="info" />

        <div className="grid gap-4 mt-6">
          <div className="flex items-start p-4 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
            <div className="w-4 h-4 rounded-full bg-emerald-500 mr-4 mt-1 flex-shrink-0 shadow-sm" />
            <div>
              <strong className="text-emerald-400 block text-lg mb-1">Core / Primario</strong>
              <span className="text-foreground/70">Alta evidenza di efficacia e sicurezza. Questi integratori hanno un effetto misurabile e consistente nella maggior parte delle persone. Sono spesso nutrienti essenziali o composti con decenni di ricerca alle spalle.</span>
            </div>
          </div>
          <div className="flex items-start p-4 bg-orange-500/10 rounded-xl border border-orange-500/20">
            <div className="w-4 h-4 rounded-full bg-orange-500 mr-4 mt-1 flex-shrink-0 shadow-sm" />
            <div>
              <strong className="text-orange-400 block text-lg mb-1">Secondario</strong>
              <span className="text-foreground/70">Buona evidenza, ma l'effetto potrebbe essere minore, oppure l'integratore è utile solo in contesti specifici (es. solo se c'è una carenza accertata, o per una specifica condizione).</span>
            </div>
          </div>
          <div className="flex items-start p-4 bg-violet-500/10 rounded-xl border border-violet-500/20">
            <div className="w-4 h-4 rounded-full bg-violet-500 mr-4 mt-1 flex-shrink-0 shadow-sm" />
            <div>
              <strong className="text-violet-400 block text-lg mb-1">Promettente</strong>
              <span className="text-foreground/70">Risultati preliminari interessanti (spesso in studi animali o piccoli studi pilota umani), ma serve più ricerca per confermare dosaggi e sicurezza a lungo termine. Vale la pena tenerli d'occhio.</span>
            </div>
          </div>
          <div className="flex items-start p-4 bg-gray-500/10 rounded-xl border border-gray-500/20">
            <div className="w-4 h-4 rounded-full bg-gray-400 mr-4 mt-1 flex-shrink-0 shadow-sm" />
            <div>
              <strong className="text-gray-400 block text-lg mb-1">Non provato / Sconsigliato</strong>
              <span className="text-foreground/70">Non supportato dai dati attuali, inefficace, o potenzialmente dannoso/tossico. Spesso si tratta di prodotti molto pubblicizzati ma privi di sostanza scientifica.</span>
            </div>
          </div>
        </div>
      </div>
    ),
    insights: [],
  },

  l2: {
    subtitle: "Difendersi e Prevenire",
    content: (
      <div className="space-y-8 text-foreground/80 leading-relaxed">
        <p>Come accennato nella guida scientifica, spesso non ci accorgiamo nemmeno di avere un sistema immunitario finché non stiamo male. Un sistema immunitario forte non significa "sovraccarico" (che porterebbe ad allergie o autoimmunità), ma <strong>equilibrio e prontezza</strong>. Il vero obiettivo è l'<strong>immunomodulazione</strong>: supportare la capacità del corpo di rispondere rapidamente alle minacce esterne e di spegnere l'infiammazione quando non serve più.</p>

        <CourseImage src="Pic 3.png" alt="Scudo Immunitario" caption="Il sistema immunitario come scudo contro i patogeni." />

        <div className="grid gap-6 md:grid-cols-2">
          <SupplementCard name="Vitamina D" type="Primary" dose="400-1000 IU/die (prevenzione)" mechanism="La Vitamina D non è solo una vitamina, ma un ormone steroideo che regola l'espressione di centinaia di geni. Modula sia il sistema immunitario innato che adattivo, stimolando la produzione di peptidi antimicrobici potenti come la catelicidina e le defensine nelle mucose respiratorie." notes="Fondamentale per la prevenzione delle infezioni respiratorie. La carenza è endemica in inverno. Se le analisi mostrano carenza (<30 ng/mL), dosi maggiori sotto controllo medico sono spesso necessarie." />
          <SupplementCard name="Vitamina C" type="Primary" dose="500-1000 mg/die" mechanism="Potente antiossidante idrosolubile che protegge i fagociti dallo stress ossidativo. Supporta inoltre la migrazione dei globuli bianchi verso i siti di infezione." notes="Utile soprattutto per atleti o persone sotto stress fisico intenso (es. maratoneti), dove dimezza il rischio di raffreddore. Nella popolazione generale sedentaria, riduce lievemente la durata ma non previene l'infezione." />
          <SupplementCard name="Zinco" type="Secondary" dose="75-95 mg/die (totale, solo in acuto)" mechanism="Lo zinco ionico inibisce direttamente la replicazione virale (es. rinovirus) nel rinofaringe impedendo al virus di agganciarsi alle cellule o di moltiplicarsi." notes="Cruciale il timing: va assunto entro 24h dai primi sintomi. ATTENZIONE: Per funzionare contro il raffreddore devono essere pastiglie da sciogliere lentamente in bocca (lozenges) per agire localmente, non pillole da ingoiare. NON per uso cronico (rischio carenza rame)." />
          <SupplementCard name="Spirulina" type="Promising" dose="2 g/die" mechanism="Inibisce il rilascio di istamina dai mastociti e riduce i livelli di citochine pro-infiammatorie come IL-4, spostando l'equilibrio immunitario da Th2 (allergico) a Th1 (protettivo)." notes="Studi preliminari mostrano una significativa riduzione dei sintomi della rinite allergica (naso che cola, starnuti). Scegliere fonti certificate prive di microcistine." />
          <SupplementCard name="Estratto d'aglio" type="Promising" dose="600-1200 mg/die" mechanism="Aumenta l'attività delle cellule Natural Killer (NK) e la proliferazione dei linfociti T gamma-delta, migliorando la sorveglianza immunitaria." notes="Può ridurre la frequenza e la gravità dei raffreddori e influenze. L'estratto invecchiato (AGE) è preferibile per la standardizzazione dei composti attivi (S-allilcisteina)." />
        </div>

        <ProzisSection products={[
          { name: "Vitamina D3 2000 UI", description: "Per il supporto immunitario quotidiano.", url: "https://www.prozis.com/it/it/search?text=vitamin+d3" },
          { name: "Vitamina C + Zinco", description: "Combo classica per le difese.", url: "https://www.prozis.com/it/it/search?text=vitamin+c+zinc" },
          { name: "Spirulina Biologica", description: "Superfood per il supporto allergico.", url: "https://www.prozis.com/it/it/search?text=spirulina" },
          { name: "Estratto di Aglio", description: "Senza odore, per la salute cardiovascolare e immunitaria.", url: "https://www.prozis.com/it/it/search?text=garlic" },
        ]} />

        <InfoBox title="Nota su Echinacea e Sambuco" content="Le evidenze sono miste. L'Echinacea potrebbe ridurre leggermente il rischio se presa preventivamente, ma gli studi variano molto per qualità. Il Sambuco sembra ridurre la durata dell'influenza bloccando le proteine di superficie virali, ma è meno efficace come preventivo." type="info" />
      </div>
    ),
    insights: [
      { text: "Vitamin D supplementation to prevent acute respiratory tract infections: systematic review and meta-analysis of individual participant data (BMJ)", url: "https://pubmed.ncbi.nlm.nih.gov/28202713/" },
      { text: "Zinc for the common cold (Cochrane Database Syst Rev)", url: "https://pubmed.ncbi.nlm.nih.gov/23775705/" },
      { text: "The effects of Spirulina on allergic rhinitis (Eur Arch Otorhinolaryngol)", url: "https://pubmed.ncbi.nlm.nih.gov/18398651/" },
    ],
  },

  l3: {
    subtitle: "Struttura e Longevità",
    content: (
      <div className="space-y-8 text-foreground/80 leading-relaxed">
        <p>Le ossa sono molto più complesse di quanto si pensi: non sono impalcature statiche, ma tessuto vivo in costante <strong>rimodellamento</strong> (bone turnover). Fino ai 30 anni costruiamo massa ossea ("conto in banca"), dopo i 30 iniziamo lentamente a prelevare. La strategia nutrizionale deve mirare a massimizzare il picco da giovani e rallentare il riassorbimento da anziani, bilanciando l'attività degli osteoblasti (che costruiscono) e osteoclasti (che demoliscono).</p>

        <CourseImage src="Pic 4.png" alt="Salute delle Ossa" caption="Osso sano vs Osteoporosi: l'importanza della struttura." />

        <div className="grid gap-6 md:grid-cols-2">
          <SupplementCard name="Calcio" type="Primary" dose="500-1200 mg/die (totale)" mechanism="Fornisce il materiale strutturale grezzo (cristalli di idrossiapatite) per la matrice ossea mineralizzata." notes="Meglio se assunto con Vitamina D. Preferire sempre fonti alimentari (latticini, verdure a foglia); l'eccesso da integratori può depositarsi nelle arterie (rischio cardiovascolare)." />
          <SupplementCard name="Vitamina D" type="Primary" dose="800-2000 IU/die" mechanism="Aumenta l'espressione delle proteine di trasporto del calcio nell'intestino, permettendo l'assorbimento efficace del minerale." notes="Essenziale. Senza D, il corpo assorbe solo il 10-15% del calcio alimentare, costringendo l'organismo a 'rubare' calcio dalle ossa per mantenere i livelli nel sangue." />
          <SupplementCard name="Isoflavoni di Soia" type="Primary" dose="~100 mg/die" mechanism="Agiscono come Modulatori Selettivi del Recettore degli Estrogeni (SERM), legandosi debolmente ai recettori ossei e inibendo gli osteoclasti." notes="Particolarmente utile per le donne in post-menopausa per attenuare la rapida perdita ossea dovuta al calo degli estrogeni naturali." />
          <SupplementCard name="Vitamina K2" type="Promising" dose="MK-7: 180 mcg/die" mechanism="Agisce come 'vigile urbano' del calcio: carbossila (attiva) l'osteocalcina che fissa il calcio nelle ossa e la proteina MGP che rimuove il calcio dalle arterie." notes="La sinergia D3+K2 è ottimale. MK-4 (45mg) è usato in Giappone come farmaco, mentre MK-7 a dosi minori è più comune negli integratori." />
          <SupplementCard name="Magnesio" type="Secondary" dose="200-400 mg" mechanism="Circa il 50-60% del magnesio corporeo si trova nelle ossa. È essenziale per la struttura ossea e per attivare la Vitamina D." notes="Spesso carente nella dieta moderna. L'integrazione è particolarmente utile negli anziani per prevenire fratture." />
        </div>

        <ProzisSection products={[
          { name: "Vitamina D3 + K2", description: "La coppia perfetta per la salute ossea.", url: "https://www.prozis.com/it/it/search?text=vitamin+d3+k2" },
          { name: "Calcio + Magnesio + Zinco", description: "Mix minerale completo per la struttura ossea.", url: "https://www.prozis.com/it/it/search?text=calcium+magnesium+zinc" },
          { name: "Isoflavoni di Soia", description: "Supporto specifico per donne.", url: "https://www.prozis.com/it/it/search?text=soy+isoflavones" },
        ]} />
      </div>
    ),
    insights: [
      { text: "Calcium plus vitamin D supplementation and risk of fractures: an updated meta-analysis (Osteoporos Int)", url: "https://pubmed.ncbi.nlm.nih.gov/26510847/" },
      { text: "Vitamin K and bone health: A review (Food Funct)", url: "https://pubmed.ncbi.nlm.nih.gov/24455498/" },
    ],
  },

  l4: {
    subtitle: "Cuore, Pressione e Lipidi",
    content: (
      <div className="space-y-8 text-foreground/80 leading-relaxed">
        <p>Le malattie cardiovascolari (CVD) sono responsabili di una vasta percentuale della mortalità globale, ma la prevenzione è potente. Spesso si presentano come ipertensione, problemi lipidici o disfunzione endoteliale. Gli integratori possono agire migliorando la flessibilità delle arterie, riducendo l'infiammazione sistemica e ottimizzando il profilo lipidico (grassi nel sangue).</p>

        <CourseImage src="Pic 5.png" alt="Salute Cardiovascolare" caption="Vasodilatazione: come l'Ossido Nitrico apre le arterie." />

        <div className="grid gap-6 md:grid-cols-2">
          <SupplementCard name="Nitrati" type="Core" dose="6.4-12.8 mg/kg" mechanism="Attraverso la via nitrato-nitrito-ossido nitrico, vengono convertiti in NO, una molecola di segnalazione che rilassa la muscolatura liscia dei vasi sanguigni." notes="Molto efficace per ridurre la pressione sistolica (anche di 4-10 mmHg). Fonti: succo di barbabietola, rucola, spinaci. Evitare colluttori antisettici che bloccano la conversione orale." />
          <SupplementCard name="Estratto d'aglio" type="Primary" dose="600-1200 mg/die" mechanism="I composti solforati (come la S-allilcisteina) aumentano la produzione di NO e rilasciano H2S (idrogeno solforato), entrambi potenti vasodilatatori." notes="Riduce la pressione sanguigna in modo significativo negli ipertesi. Riduce anche l'ossidazione delle LDL e l'aggregazione piastrinica." />
          <SupplementCard name="Cacao (Flavanoli)" type="Primary" dose="500-1000 mg/die (polifenoli)" mechanism="Aumenta l'attività dell'enzima eNOS (endothelial Nitric Oxide Synthase), migliorando la capacità dei vasi di dilatarsi in risposta al flusso (FMD)." notes="Migliora l'elasticità arteriosa. Attenzione: il cioccolato al latte o processato con alcali ('Dutch processed') ha pochissimi flavanoli." />
          <SupplementCard name="Omega-3 (Olio di Pesce)" type="Secondary" dose="2-4 g/die EPA+DHA" mechanism="Regolano i fattori di trascrizione epatici (come PPAR-alfa) riducendo la sintesi di nuovi trigliceridi e aumentando la loro ossidazione." notes="Efficace dose-dipendente per abbassare i trigliceridi alti. L'effetto sul colesterolo LDL è neutro o lievemente rialzante. Effetto antiaritmico e stabilizzante della placca." />
        </div>

        <ProzisSection products={[
          { name: "Omega 3 Super Strength", description: "Alta concentrazione di EPA e DHA.", url: "https://www.prozis.com/it/it/search?text=omega+3" },
          { name: "Estratto di Aglio", description: "Per la pressione e il colesterolo.", url: "https://www.prozis.com/it/it/search?text=garlic" },
          { name: "Beetroot (Barbabietola)", description: "Fonte naturale di nitrati per l'ossido nitrico.", url: "https://www.prozis.com/it/it/search?text=beetroot" },
          { name: "Cacao Biologico in Polvere", description: "Ricco di flavanoli per la circolazione.", url: "https://www.prozis.com/it/it/search?text=cacao+powder" },
        ]} />
      </div>
    ),
    insights: [
      { text: "Inorganic nitrate and beetroot juice supplementation reduces blood pressure in adults (J Nutr)", url: "https://pubmed.ncbi.nlm.nih.gov/23596162/" },
      { text: "Garlic for the prevention of cardiovascular morbidity and mortality in hypertensive patients (Cochrane)", url: "https://pubmed.ncbi.nlm.nih.gov/22895941/" },
    ],
  },

  l5: {
    subtitle: "Controllo dell'Insulina",
    content: (
      <div className="space-y-8 text-foreground/80 leading-relaxed">
        <p>Il glucosio è un semplice zucchero che il corpo usa per energia o immagazzina come <strong>glicogeno</strong> nel fegato e nei muscoli. Quando le riserve sono piene o l'insulina non funziona bene (resistenza), i livelli di zucchero nel sangue salgono. L'obiettivo è migliorare la <strong>sensibilità all'insulina</strong>, permettendo alle cellule di assorbire il glucosio efficacemente senza richiedere quantità massicce di ormone.</p>

        <CourseImage src="Pic 6.png" alt="Diabete e Glicemia" caption="Glicemia stabile vs Picchi glicemici dannosi." />

        <div className="grid gap-6 md:grid-cols-2">
          <SupplementCard name="Fibre Viscose" type="Core" dose="10-15 g/die" mechanism="Forma un gel denso nell'intestino tenue che intrappola i nutrienti e rallenta fisicamente l'azione degli enzimi digestivi, bloccando l'assorbimento rapido degli zuccheri." notes="Riduce significativamente i picchi glicemici post-prandiali. Psillio, glucomannano o pectine sono ottime scelte. Bere molta acqua è essenziale per evitare blocchi." />
          <SupplementCard name="Berberina" type="Primary" dose="900-1500 mg/die" mechanism="Attiva l'enzima AMPK, un sensore energetico cellulare spesso definito 'interruttore metabolico principale'. Questo aumenta l'assorbimento di glucosio nei muscoli indipendentemente dall'insulina e riduce la neoglucogenesi epatica." notes="Efficace paragonabile alla metformina in alcuni studi clinici. Assumere divisa in 3 dosi ai pasti principali per massimizzare l'effetto e ridurre disturbi gastrointestinali." />
          <SupplementCard name="Magnesio" type="Secondary" dose="200-400 mg/die" mechanism="Cofattore essenziale per la fosforilazione del recettore dell'insulina. La carenza peggiora l'insulino-resistenza." notes="La carenza è comune nei diabetici a causa dell'aumentata escrezione urinaria. Scegliere forme organiche (citrato, bisglicinato)." />
          <SupplementCard name="Inositolo" type="Promising" dose="2-4 g/die" mechanism="Agisce come secondo messaggero intracellulare per il segnale dell'insulina. In molte condizioni di insulino-resistenza (es. PCOS), c'è un difetto nel metabolismo dell'inositolo." notes="Particolarmente efficace nelle donne con Sindrome dell'Ovaio Policistico (PCOS) per ripristinare l'ovulazione e migliorare il profilo metabolico." />
        </div>

        <ProzisSection products={[
          { name: "Berberina 500mg", description: "Per il controllo della glicemia e metabolismo.", url: "https://www.prozis.com/it/it/search?text=berberina" },
          { name: "Psyllium Husk", description: "Fibre pure per rallentare l'assorbimento degli zuccheri.", url: "https://www.prozis.com/it/it/search?text=psyllium+husk" },
          { name: "Inositolo 500mg", description: "Supporto per la sensibilità insulinica.", url: "https://www.prozis.com/it/it/search?text=inositol" },
          { name: "Magnesio Bisglicinato", description: "Fondamentale per il metabolismo glucidico.", url: "https://www.prozis.com/it/it/search?text=magnesium" },
        ]} />
      </div>
    ),
    insights: [
      { text: "Berberine in the treatment of type 2 diabetes mellitus: a systemic review and meta-analysis (Evid Based Complement Alternat Med)", url: "https://pubmed.ncbi.nlm.nih.gov/23118793/" },
      { text: "Viscous dietary fiber supplements and blood glucose control in diabetes (Diabetes Care)", url: "https://pubmed.ncbi.nlm.nih.gov/31160417/" },
    ],
  },

  l6: {
    subtitle: "Metabolismo e Appetito",
    content: (
      <div className="space-y-8 text-foreground/80 leading-relaxed">
        <p>Bisogna distinguere tra 'bruciare grassi' (ossidazione) e 'perdere peso' (bilancio energetico negativo). Molti integratori aumentano l'ossidazione, ma se mangi troppo, ri-depositerai quel grasso. Non esiste una pillola magica che sostituisca il deficit calorico. Gli integratori efficaci agiscono o aumentando leggermente il dispendio calorico (termogenesi) o, cosa più importante, riducendo l'appetito e preservando i muscoli.</p>

        <CourseImage src="Pic 7.png" alt="Metabolismo" caption="Il bilancio energetico: Metabolismo Basale + Attività." />

        <div className="grid gap-6 md:grid-cols-2">
          <SupplementCard name="Proteine (totali)" type="Primary" dose="1.5-2.2 g/kg" mechanism="Stimolano la secrezione di ormoni della sazietà (GLP-1, PYY, CCK) e riducono la grelina (fame). Inoltre, hanno un alto effetto termico (il corpo brucia il 20-30% delle calorie proteiche solo per digerirle)." notes="La strategia n.1 per la ricomposizione corporea. Preservano la massa metabolicamente attiva (muscolo) durante il deficit calorico." />
          <SupplementCard name="Caffeina" type="Secondary" dose="100-200 mg" mechanism="Blocca i recettori dell'adenosina e stimola il rilascio di catecolamine (adrenalina/noradrenalina), aumentando il tasso metabolico basale e la lipolisi." notes="L'effetto termogenico è reale (circa 100kcal/die) ma diminuisce con l'assuefazione. Ciclizzarla aiuta a mantenere l'efficacia." />
          <SupplementCard name="Tè Verde (EGCG)" type="Secondary" dose="400-500 mg EGCG" mechanism="Inibisce l'enzima COMT che degrada la noradrenalina. Questo prolunga l'effetto dei segnali brucia-grassi, specialmente in sinergia con la caffeina." notes="L'effetto è più marcato durante l'esercizio fisico e in persone che non consumano abitualmente molta caffeina." />
        </div>

        <ProzisSection products={[
          { name: "100% Real Whey Protein", description: "Proteine di alta qualità per la sazietà.", url: "https://www.prozis.com/it/it/search?text=real+whey" },
          { name: "Caffeina Anidra 200mg", description: "Energia e termogenesi.", url: "https://www.prozis.com/it/it/search?text=caffeine" },
          { name: "Estratto Tè Verde", description: "Standardizzato in EGCG per il metabolismo.", url: "https://www.prozis.com/it/it/search?text=green+tea+extract" },
        ]} />
      </div>
    ),
    insights: [
      { text: "The effects of high protein diets on thermogenesis, satiety and weight loss (J Am Coll Nutr)", url: "https://pubmed.ncbi.nlm.nih.gov/15466943/" },
      { text: "Efficacy of a green tea extract rich in catechin polyphenols and caffeine in increasing 24-h energy expenditure (Am J Clin Nutr)", url: "https://pubmed.ncbi.nlm.nih.gov/10584049/" },
    ],
  },

  l7: {
    subtitle: "Longevità e Vitalità",
    content: (
      <div className="space-y-8 text-foreground/80 leading-relaxed">
        <p>Che cos'è l'invecchiamento? Scientificamente viene definito come una "perdita progressiva dell'integrità fisiologica", che porta a funzioni compromesse. La buona notizia è che possiamo influenzare la nostra "resilienza". A livello cellulare, questo significa mantenere la funzione mitocondriale (energia), prevenire danni al DNA e conservare la massa muscolare per evitare la fragilità.</p>

        <CourseImage src="Pic 8.png" alt="Invecchiamento Cellulare" caption="Invecchiamento cellulare e meccanismi di riparazione." />

        <div className="grid gap-6 md:grid-cols-2">
          <SupplementCard name="Proteine" type="Primary" dose="1.2-1.6 g/kg/die" mechanism="Stimolano la sintesi proteica muscolare e contrastano la sarcopenia (perdita di massa muscolare legata all'età)." notes="Fondamentale aumentare l'apporto proteico con l'avanzare dell'età per mantenere l'autonomia." />
          <SupplementCard name="Creatina" type="Primary" dose="3-5 g/die" mechanism="Migliora la bioenergetica cellulare fornendo gruppi fosfato rapidi. Negli anziani, questo contrasta la sarcopenia e migliora la bioenergetica cerebrale." notes="Sicura anche per gli anziani. Fondamentale combinarla con esercizi di resistenza per mantenere l'autonomia fisica." />
          <SupplementCard name="Vitamina D" type="Secondary" dose="800-2000 IU/die" mechanism="Regola l'assorbimento del calcio e la funzione muscolare." notes="La carenza è associata a fragilità e rischio di cadute." />
          <SupplementCard name="Vitamina B12" type="Secondary" dose="Variabile" mechanism="Cofattore cruciale per la metionina sintasi, necessaria per la metilazione del DNA e la sintesi della mielina (guaina dei nervi)." notes="L'assorbimento gastrico cala drasticamente con l'età a causa della gastrite atrofica. La carenza è una causa reversibile di pseudo-demenza." />
          <SupplementCard name="Coenzima Q10" type="Unproven" dose="100-200 mg" mechanism="Componente essenziale della catena di trasporto degli elettroni nei mitocondri per la produzione di ATP. Agisce anche come antiossidante liposolubile." notes="I livelli calano con l'età, ma l'integrazione mostra benefici chiari soprattutto in chi assume statine o ha insufficienza cardiaca, meno in anziani sani." />
        </div>

        <ProzisSection products={[
          { name: "100% Real Whey Protein", description: "Per contrastare la perdita muscolare.", url: "https://www.prozis.com/it/it/search?text=real+whey" },
          { name: "Creatina Monoidrato", description: "Per la forza e la funzione cognitiva.", url: "https://www.prozis.com/it/it/search?text=creatine+monohydrate" },
          { name: "Vitamina D3", description: "Per ossa e muscoli.", url: "https://www.prozis.com/it/it/search?text=vitamin+d3" },
          { name: "Vitamina B12", description: "Per la salute nervosa e cognitiva.", url: "https://www.prozis.com/it/it/search?text=vitamin+b12" },
        ]} />
      </div>
    ),
    insights: [
      { text: "Creatine supplementation during resistance training in older adults-a meta-analysis (Med Sci Sports Exerc)", url: "https://pubmed.ncbi.nlm.nih.gov/24576857/" },
      { text: "Vitamin B12 deficiency in the elderly (Annu Rev Nutr)", url: "https://pubmed.ncbi.nlm.nih.gov/10368310/" },
    ],
  },

  l8: {
    subtitle: "Dolore e Mobilità",
    content: (
      <div className="space-y-8 text-foreground/80 leading-relaxed">
        <p>A differenza della perdita di peso, dove esiste una formula base (deficit calorico), per i dolori articolari non c'è una soluzione unica. Le articolazioni sono complesse e spesso il danno deriva da usura o infiammazione. La strategia vincente combina la riduzione dell'infiammazione cronica con il supporto alla matrice di collagene.</p>

        <CourseImage src="Pic 9.png" alt="Articolazioni" caption="Anatomia di un ginocchio sano: cartilagine e lubrificazione." />

        <div className="grid gap-6 md:grid-cols-2">
          <SupplementCard name="Curcumina" type="Primary" dose="500-1500 mg/die" mechanism="Inibisce potenti pathway infiammatori come COX-2 e il fattore nucleare NF-kB, riducendo la cascata delle citochine." notes="Per l'osteoartrite del ginocchio, ha efficacia paragonabile all'ibuprofene ma con meno effetti collaterali gastrici. Essenziale usare forme bio-disponibili (es. fitosoma)." />
          <SupplementCard name="Boswellia Serrata" type="Secondary" dose="100-250 mg" mechanism="Inibisce specificamente l'enzima 5-LOX, una via infiammatoria diversa dai FANS classici, prevenendo la degradazione dei glicosaminoglicani." notes="Migliora mobilità e dolore, spesso con un'azione più rapida (7-14 giorni). Sinergica con la curcumina." />
          <SupplementCard name="Collagene UC-II" type="Secondary" dose="40 mg" mechanism="Agisce tramite 'tolleranza orale': interagisce con il tessuto linfoide intestinale (PLACCHE DI PEYER) per educare il sistema immunitario a smettere di attaccare il collagene delle proprie articolazioni." notes="Diverso dal collagene idrolizzato (che è un nutriente). Questo è un immunomodulatore a basso dosaggio." />
        </div>

        <ProzisSection products={[
          { name: "Curcumina + Piperina", description: "Massimo assorbimento per l'infiammazione.", url: "https://www.prozis.com/it/it/search?text=curcumin" },
          { name: "Boswellia Serrata", description: "Estratto per la mobilità articolare.", url: "https://www.prozis.com/it/it/search?text=boswellia" },
          { name: "UC-II Collagen", description: "Collagene non denaturato per le articolazioni.", url: "https://www.prozis.com/it/it/search?text=uc-ii" },
        ]} />
      </div>
    ),
    insights: [
      { text: "Efficacy of Turmeric Extracts and Curcumin for Alleviating the Symptoms of Joint Arthritis (J Med Food)", url: "https://pubmed.ncbi.nlm.nih.gov/27533649/" },
      { text: "Undenatured type II collagen (UC-II) for joint support: a randomized, double-blind, placebo-controlled study (J Int Soc Sports Nutr)", url: "https://pubmed.ncbi.nlm.nih.gov/24153020/" },
    ],
  },

  l9: {
    subtitle: "Benessere Sessuale",
    content: (
      <div className="space-y-8 text-foreground/80 leading-relaxed">
        <p>La sessualità è un complesso equilibrio neurochimico di <strong>eccitazione</strong> (guidata dalla dopamina) e <strong>inibizione</strong> (spesso mediata dalla serotonina e dagli oppioidi). Molti farmaci antidepressivi riducono la libido proprio aumentando la serotonina. Gli integratori possono agire su questo bilanciamento o sul flusso sanguigno.</p>

        <CourseImage src="Pic 10.png" alt="Bilancia Ormonale" caption="L'equilibrio ormonale che regola il desiderio sessuale." />

        <div className="grid gap-6 md:grid-cols-2">
          <SupplementCard name="Maca" type="Secondary" dose="1.5-3 g/die" mechanism="Agisce centralmente sui neurotrasmettitori cerebrali e sul sistema endocannabinoide, non sui livelli ormonali periferici." notes="Aumenta la libido soggettiva e il benessere sessuale sia in uomini che donne, anche in presenza di SSRI. Non aspettarti un aumento di testosterone." />
          <SupplementCard name="Panax Ginseng" type="Secondary" dose="200-400 mg" mechanism="Aumenta la sintesi di ossido nitrico nell'endotelio e nei corpi cavernosi, facilitando la vasodilatazione." notes="Può migliorare la funzione erettile e la vitalità psicofisica. Effetto adattogeno generale." />
          <SupplementCard name="Tribulus Terrestris" type="Promising" dose="200-450 mg" mechanism="Potrebbe aumentare la densità dei recettori degli androgeni nel cervello (osservato nei ratti), amplificando la risposta agli ormoni già presenti." notes="Tradizionalmente usato per la virilità. Studi sull'uomo confermano un effetto positivo sul desiderio sessuale, ma non sui livelli di testosterone." />
        </div>

        <ProzisSection products={[
          { name: "Maca Peruviana", description: "Radice pura per energia e libido.", url: "https://www.prozis.com/it/it/search?text=maca" },
          { name: "Panax Ginseng", description: "Per la vitalità e la circolazione.", url: "https://www.prozis.com/it/it/search?text=panax+ginseng" },
          { name: "Tribulus Terrestris", description: "Estratto ad alta potenza.", url: "https://www.prozis.com/it/it/search?text=tribulus" },
        ]} />
      </div>
    ),
    insights: [
      { text: "Effect of Lepidium meyenii (MACA) on sexual desire and its absent relationship with serum testosterone (Andrologia)", url: "https://pubmed.ncbi.nlm.nih.gov/12472620/" },
      { text: "Red ginseng for treating erectile dysfunction: a systematic review (Br J Clin Pharmacol)", url: "https://pubmed.ncbi.nlm.nih.gov/18754850/" },
    ],
  },

  l10: {
    subtitle: "Supporto e Protezione",
    content: (
      <div className="space-y-8 text-foreground/80 leading-relaxed">
        <p>Il fegato è il "Coltellino Svizzero" degli organi o una vera <strong>fabbrica chimica</strong>: produce, scompone, trasporta e immagazzina. Non è un semplice filtro che si intasa. Lavora costantemente trasformando tossine (come ammoniaca o farmaci) in composti sicuri. Gli integratori utili non fanno "detox" magici, ma supportano queste reazioni enzimatiche o proteggono le cellule dai danni.</p>

        <CourseImage src="Pic 11.png" alt="Filtro Epatico" caption="Il fegato: un filtro chimico complesso, non una spugna." />

        <div className="grid gap-6 md:grid-cols-2">
          <SupplementCard name="NAC" type="Secondary" dose="600-1200 mg" mechanism="Fornisce cisteina, il fattore limitante per la sintesi di Glutatione, il principale antiossidante endogeno del fegato." notes="Essenziale per supportare la Fase II di disintossicazione e proteggere il fegato dallo stress ossidativo (es. da alcol o paracetamolo)." />
          <SupplementCard name="Cardo Mariano" type="Secondary" dose="140-600 mg/die" mechanism="La silimarina agisce bloccando l'ingresso di tossine nelle cellule e stimolando la polimerasi A del nucleolo, aumentando la sintesi proteica e la rigenerazione." notes="Standard per danni da tossine (es. funghi, alcol). Meno utile come preventivo generico in persone sane." />
          <SupplementCard name="TUDCA" type="Secondary" dose="500-1750 mg" mechanism="Un sale biliare idrofilo che fluidifica la bile e previene l'apoptosi (morte cellulare) riducendo lo stress del reticolo endoplasmatico." notes="Molto potente per problemi di flusso biliare (colestasi) e per proteggere le cellule epatiche in condizioni di stress elevato." />
        </div>

        <ProzisSection products={[
          { name: "NAC (N-Acetilcisteina)", description: "Per la sintesi del glutatione.", url: "https://www.prozis.com/it/it/search?text=nac" },
          { name: "Cardo Mariano (Silimarina)", description: "Estratto per la protezione epatica.", url: "https://www.prozis.com/it/it/search?text=milk+thistle" },
          { name: "TUDCA", description: "Per la salute biliare e cellulare.", url: "https://www.prozis.com/it/it/search?text=tudca" },
        ]} />
      </div>
    ),
    insights: [
      { text: "Silymarin as a Supportive Treatment in Liver Diseases: A Narrative Review (Adv Ther)", url: "https://pubmed.ncbi.nlm.nih.gov/32065376/" },
      { text: "Ursodeoxycholic acid for primary biliary cirrhosis (Cochrane Database Syst Rev)", url: "https://pubmed.ncbi.nlm.nih.gov/11869599/" },
    ],
  },

  l11: {
    subtitle: "Nootropi",
    content: (
      <div className="space-y-8 text-foreground/80 leading-relaxed">
        <p>Il cervello consuma il 20% dell'energia del corpo. Per ottimizzare le funzioni cognitive (memoria, attenzione, velocità di elaborazione) servono tre cose: energia costante (glucosio/chetoni), un flusso sanguigno eccellente (per portare ossigeno e nutrienti) e neuroprotezione (per difendere i neuroni dall'infiammazione e ossidazione).</p>

        <CourseImage src="Pic 12.png" alt="Rete Neurale" caption="Sinapsi neuronali: la rete elettrica del pensiero." />

        <div className="grid gap-6 md:grid-cols-2">
          <SupplementCard name="Caffeina + Teanina" type="Primary" dose="1:2 Ratio" mechanism="Sinergia perfetta: La caffeina aumenta l'allerta bloccando l'adenosina; la Teanina aumenta le onde Alfa e il GABA, prevenendo l'ansia e il nervosismo." notes="Lo stack ideale per sessioni di lavoro intenso o studio. Focus pulito e calmo." />
          <SupplementCard name="Bacopa Monnieri" type="Secondary" dose="300 mg/die" mechanism="Stimola la crescita dei dendriti (le ramificazioni dei neuroni), facilitando la comunicazione sinaptica e la formazione della memoria." notes="Nootropo vero per la memoria a lungo termine. Richiede pazienza: 4-8 settimane per vedere i risultati." />
          <SupplementCard name="Creatina" type="Secondary" dose="5 g/die" mechanism="Aumenta le riserve di fosfocreatina nel cervello, supportando la domanda energetica dei neuroni durante compiti complessi." notes="Utile per ridurre la fatica mentale, specialmente in vegetariani o in caso di deprivazione di sonno." />
        </div>

        <ProzisSection products={[
          { name: "Caffeina + L-Teanina", description: "Per focus mentale senza agitazione.", url: "https://www.prozis.com/it/it/search?text=caffeine+theanine" },
          { name: "Bacopa Monnieri", description: "Estratto per la memoria e l'apprendimento.", url: "https://www.prozis.com/it/it/search?text=bacopa" },
          { name: "Creatina Monoidrato", description: "Per l'energia mentale.", url: "https://www.prozis.com/it/it/search?text=creatine" },
        ]} />
      </div>
    ),
    insights: [
      { text: "Blueberry supplementation improves memory in older adults (J Agric Food Chem)", url: "https://pubmed.ncbi.nlm.nih.gov/20047325/" },
      { text: "The cognitive-enhancing effects of Bacopa monnieri: a systematic review (J Altern Complement Med)", url: "https://pubmed.ncbi.nlm.nih.gov/22747190/" },
    ],
  },

  l12: {
    subtitle: "Equilibrio Emotivo",
    content: (
      <div className="space-y-8 text-foreground/80 leading-relaxed">
        <p>Tutti ci sentiamo giù ogni tanto, ma il disturbo depressivo maggiore (MDD) è una condizione distinta che colpisce milioni di persone. Gli integratori possono offrire un supporto modulando neurotrasmettitori come serotonina e dopamina, ma è fondamentale capire che non sostituiscono la terapia professionale per condizioni cliniche severe.</p>

        <CourseImage src="Pic 13.png" alt="Serotonina" caption="Serotonina: la molecola della stabilità emotiva." />

        <div className="grid gap-6 md:grid-cols-2">
          <SupplementCard name="Creatina" type="Primary" dose="5 g/die" mechanism="Migliora il metabolismo energetico cerebrale. Studi mostrano benefici significativi quando combinata con SSRI." notes="Particolarmente promettente nelle donne e in chi non risponde bene ai soli farmaci." />
          <SupplementCard name="Erba di San Giovanni" type="Primary" dose="900 mg/die" mechanism="Inibisce la ricaptazione di serotonina, noradrenalina e dopamina nello spazio sinaptico, aumentandone la disponibilità (simile agli SSRI)." notes="Efficace per depressione lieve. ATTENZIONE: Induce potenti enzimi epatici (CYP3A4) che metabolizzano e rendono inefficaci molti farmaci salvavita (es. pillola, anticoagulanti)." />
          <SupplementCard name="Olio di Pesce (EPA)" type="Secondary" dose="1-2 g EPA" mechanism="L'EPA riduce le citochine infiammatorie nel cervello. L'infiammazione cerebrale è un driver chiave della depressione in molti soggetti." notes="Per l'umore, l'EPA è superiore al DHA. Cercare formule con un rapporto EPA:DHA di almeno 2:1 o 3:1." />
          <SupplementCard name="Zafferano" type="Promising" dose="30 mg/die" mechanism="Può inibire la ricaptazione della serotonina e agire come antiossidante e antinfiammatorio." notes="Studi preliminari lo mostrano efficace quanto alcuni antidepressivi per forme lievi." />
        </div>

        <ProzisSection products={[
          { name: "Creatina Monoidrato", description: "Per l'energia cerebrale.", url: "https://www.prozis.com/it/it/search?text=creatine" },
          { name: "Super Omega 3 (Alto EPA)", description: "Antinfiammatorio naturale per il cervello.", url: "https://www.prozis.com/it/it/search?text=super+omega+3" },
          { name: "Zafferano", description: "Estratto naturale per l'equilibrio emotivo.", url: "https://www.prozis.com/it/it/search?text=saffron" },
        ]} />
      </div>
    ),
    insights: [
      { text: "St John's wort for major depression (Cochrane Database Syst Rev)", url: "https://pubmed.ncbi.nlm.nih.gov/18843608/" },
      { text: "Omega-3 fatty acids for depression in adults (Cochrane Database Syst Rev)", url: "https://pubmed.ncbi.nlm.nih.gov/26537225/" },
    ],
  },

  l13: {
    subtitle: "Forza e Recupero",
    content: (
      <div className="space-y-8 text-foreground/80 leading-relaxed">
        <p>Esiste una sorta di "Santa Trinità" dell'esercizio: Migliore Performance, Più Muscolo, Meno Grasso. Per costruire muscolo, l'esercizio è una necessità assoluta. Gli integratori agiscono come carburante o supporto per permetterti di allenarti più duramente (Creatina, Caffeina) o per recuperare meglio (Proteine).</p>

        <CourseImage src="Pic 14.png" alt="Fibra Muscolare" caption="Struttura muscolare: dove agisce la creatina." />

        <div className="grid gap-6 md:grid-cols-2">
          <SupplementCard name="Creatina" type="Core" dose="5 g/die" mechanism="Aumenta le riserve di fosfocreatina nel muscolo, permettendo una rigenerazione ultra-rapida dell'ATP durante sforzi massimali brevi (pesi, sprint)." notes="Gold standard per potenza e massa. Trattiene acqua intra-cellulare (un bene per l'anabolismo), non ritenzione idrica sottocutanea." />
          <SupplementCard name="Proteine Whey/Isolate" type="Core" dose="20-40g Post-Workout" mechanism="Forniscono aminoacidi essenziali rapidi per avviare la sintesi proteica muscolare." notes="Essenziali se non si riesce a consumare un pasto solido entro 1-2 ore dall'allenamento." />
          <SupplementCard name="Caffeina" type="Primary" dose="3-6 mg/kg" mechanism="Blocca la fatica centrale antagonizzando l'adenosina e aumenta il reclutamento delle unità motorie, permettendo contrazioni più forti." notes="Effetto immediato sulla prestazione. Ottimo pre-workout, ma attenzione a non usarla sempre per evitare tolleranza." />
          <SupplementCard name="Nitrati (Barbabietola)" type="Secondary" dose="6-12 mg/kg" mechanism="Aumentano l'efficienza mitocondriale e il flusso sanguigno." notes="Migliora la resistenza e il 'pump'. Ottimo pre-workout senza stimolanti." />
        </div>

        <ProzisSection products={[
          { name: "Creatina Creapure®", description: "La creatina più pura al mondo.", url: "https://www.prozis.com/it/it/search?text=creapure" },
          { name: "100% Real Whey Isolate", description: "Proteine isolate pure per il post-workout.", url: "https://www.prozis.com/it/it/search?text=real+whey+isolate" },
          { name: "Caffeina 200mg", description: "Energia pura pre-allenamento.", url: "https://www.prozis.com/it/it/search?text=caffeine" },
          { name: "Beetroot (Barbabietola)", description: "Fonte naturale di nitrati per l'ossido nitrico.", url: "https://www.prozis.com/it/it/search?text=beetroot" },
        ]} />
      </div>
    ),
    insights: [
      { text: "International Society of Sports Nutrition position stand: creatine supplementation and exercise", url: "https://pubmed.ncbi.nlm.nih.gov/17908288/" },
    ],
  },

  l14: {
    subtitle: "Nutrizione Estetica",
    content: (
      <div className="space-y-8 text-foreground/80 leading-relaxed">
        <p>Il mondo della cosmetica è un po' come il "Far West": ci sono poche regole e molti slogan. Etichette come "testato dermatologicamente" spesso indicano solo che un test è avvenuto, non che il prodotto funzioni. Gli integratori orali, tuttavia, possono agire dall'interno fornendo i precursori strutturali come il collagene per la pelle.</p>

        <CourseImage src="Pic 15.png" alt="Strati della Pelle" caption="Il collagene come impalcatura del derma." />

        <div className="grid gap-6 md:grid-cols-2">
          <SupplementCard name="Collagene Idrolizzato" type="Secondary" dose="2.5-10 g/die" mechanism="I peptidi bioattivi stimolano i fibroblasti della pelle a produrre nuovo collagene ed elastina." notes="Migliora l'elasticità e l'idratazione della pelle, riducendo le rughe sottili." />
        </div>

        <ProzisSection products={[
          { name: "Collagene + Magnesio", description: "Per la pelle e i tessuti connettivi.", url: "https://www.prozis.com/it/it/search?text=collagen+magnesium" },
          { name: "Collagene Idrolizzato", description: "Puro per l'assorbimento.", url: "https://www.prozis.com/it/it/search?text=hydrolyzed+collagen" },
        ]} />
      </div>
    ),
    insights: [
      { text: "Oral collagen supplementation: a systematic review of dermatological applications (J Drugs Dermatol)", url: "https://pubmed.ncbi.nlm.nih.gov/30681787/" },
    ],
  },

  l15: {
    subtitle: "Qualità del Riposo",
    content: (
      <div className="space-y-8 text-foreground/80 leading-relaxed">
        <p>I dati ci dicono che il sonno influenza i risultati in palestra o nello studio spesso più della dieta stessa. Dormire poco è correlato a livelli di stress più alti e a plateau nell'allenamento. Gli integratori possono aiutare a sincronizzare l'orologio interno (Melatonina) o a favorire il rilassamento (Magnesio).</p>

        <CourseImage src="Pic 16.png" alt="Ciclo Circadiano" caption="Ritmo Circadiano: il ciclo naturale sonno-veglia." />

        <div className="grid gap-6 md:grid-cols-2">
          <SupplementCard name="Melatonina" type="Primary" dose="0.5-3 mg" mechanism="È un cronobiotico: segnala al cervello che è buio e che è ora di dormire, abbassando la temperatura corporea e riducendo l'allerta." notes="Ottima per ridurre il tempo di addormentamento (latenza) e per il jet-lag. Dosi minori (0.3mg) sono spesso più fisiologiche ed efficaci di quelle alte." />
          <SupplementCard name="Magnesio Bisglicinato" type="Primary" dose="200-400mg sera" mechanism="Agonista GABA e miorilassante. Aiuta a ridurre l'eccitabilità neuronale e facilita il rilassamento fisico." notes="Cruciale per chi ha difficoltà a 'spegnere' il cervello la sera o soffre di crampi notturni." />
          <SupplementCard name="Lavanda" type="Secondary" dose="80 mg" mechanism="I terpeni della lavanda (linalool) modulano i canali del calcio voltaggio-dipendenti, inibendo il rilascio di neurotrasmettitori eccitatori." notes="L'olio essenziale per via orale (Silexan) riduce i pensieri ansiosi che impediscono il sonno senza causare sedazione il giorno dopo." />
        </div>

        <ProzisSection products={[
          { name: "Melatonina 1.9mg", description: "Per prendere sonno rapidamente.", url: "https://www.prozis.com/it/it/search?text=melatonin" },
          { name: "Magnesio Bisglicinato", description: "Rilassamento muscolare e nervoso.", url: "https://www.prozis.com/it/it/search?text=magnesium+bisglycinate" },
          { name: "Olio Essenziale Lavanda", description: "Per aromaterapia o uso specifico.", url: "https://www.prozis.com/it/it/search?text=lavender" },
        ]} />
      </div>
    ),
    insights: [
      { text: "Melatonin for the treatment of primary sleep disorders (PLoS One)", url: "https://pubmed.ncbi.nlm.nih.gov/23691095/" },
    ],
  },

  l16: {
    subtitle: "Resilienza",
    content: (
      <div className="space-y-8 text-foreground/80 leading-relaxed">
        <p>Spesso usiamo i termini in modo intercambiabile, ma "stress" è la pressione (causa), mentre "ansia" e "paura" sono le risposte emotive. Entrambi attivano la risposta "combatti o fuggi" (asse HPA). Gli adattogeni aiutano a 'tamponare' questa risposta biochimica, rendendo l'organismo più resiliente.</p>

        <CourseImage src="Pic 17.png" alt="Stress vs Calma" caption="Cortisolo: l'impatto dello stress cronico sul corpo." />

        <div className="grid gap-6 md:grid-cols-2">
          <SupplementCard name="Ashwagandha" type="Primary" dose="300-600 mg" mechanism="Agisce sui recettori GABA e modula l'asse ipotalamo-ipofisi-surrene, riducendo significativamente i livelli di cortisolo sierico." notes="Efficace per ridurre ansia percepita e stress. Può causare anedonia in alcuni se usata troppo a lungo; si consiglia di ciclizzarla." />
          <SupplementCard name="L-Teanina" type="Primary" dose="100-200 mg" mechanism="Aminoacido che promuove le onde cerebrali Alfa, associate a uno stato di rilassamento vigile." notes="Ottima per ridurre l'ansia acuta senza causare sonnolenza. Funziona bene in sinergia con la caffeina per un focus calmo." />
          <SupplementCard name="Lavanda" type="Primary" dose="80 mg" mechanism="Effetto ansiolitico paragonabile a basse dosi di benzodiazepine in alcuni studi." notes="Utile per l'ansia generalizzata senza sedazione pesante." />
        </div>

        <ProzisSection products={[
          { name: "Ashwagandha KSM-66", description: "L'estratto brevettato più efficace.", url: "https://www.prozis.com/it/it/search?text=ashwagandha+ksm66" },
          { name: "L-Teanina", description: "Rilassamento senza sonnolenza.", url: "https://www.prozis.com/it/it/search?text=l-theanine" },
          { name: "Olio Essenziale Lavanda", description: "Per aromaterapia o uso specifico.", url: "https://www.prozis.com/it/it/search?text=lavender" },
        ]} />
      </div>
    ),
    insights: [
      { text: "A prospective, randomized double-blind, placebo-controlled study of safety and efficacy of Ashwagandha (Ind J Psychol Med)", url: "https://pubmed.ncbi.nlm.nih.gov/23439798/" },
    ],
  },

  l17: {
    subtitle: "Ormoni Maschili",
    content: (
      <div className="space-y-8 text-foreground/80 leading-relaxed">
        <p>Pochi sanno che il testosterone è importante anche per la libido e l'umore femminile. Negli uomini, invece, c'è spesso un'ossessione per i "numeri" dei test. L'approccio scientifico non è cercare numeri magici, ma <strong>rimuovere i freni</strong> (carenze, stress, obesità) per permettere al corpo di tornare al suo picco naturale.</p>

        <CourseImage src="Pic 18.png" alt="Asse HPTA" caption="Asse HPTA: la centralina di controllo del testosterone." />

        <div className="grid gap-6 md:grid-cols-2">
          <SupplementCard name="Ashwagandha" type="Primary" dose="300-600 mg" mechanism="Riducendo il cortisolo (ormone dello stress), permette al testosterone di risalire fisiologicamente." notes="Molto efficace negli uomini stressati o che si allenano intensamente." />
          <SupplementCard name="Zinco/Magnesio/Vit D" type="Core" dose="RDA" mechanism="Cofattori enzimatici critici per la steroidogenesi nei testicoli. La carenza di Zinco blocca la produzione di T." notes="Essenziali se carenti. Se hai già livelli ottimali, prenderne di più non ti darà 'superpoteri', ma la carenza è una causa comunissima di testosterone basso." />
          <SupplementCard name="Tongkat Ali" type="Promising" dose="200-400 mg" mechanism="Può stimolare il rilascio di LH o ridurre la conversione in estrogeni, e liberare testosterone dalla proteina legante SHBG." notes="Studi moderni mostrano aumenti modesti in uomini stressati o anziani. Meno efficace in giovani sani con livelli già alti." />
        </div>

        <ProzisSection products={[
          { name: "Ashwagandha KSM-66", description: "Per ridurre lo stress e supportare il T.", url: "https://www.prozis.com/it/it/search?text=ashwagandha+ksm66" },
          { name: "ZMB6 (Zinco/Magnesio)", description: "Supporto ormonale notturno.", url: "https://www.prozis.com/it/it/search?text=zmb6" },
          { name: "Vitamina D3", description: "Essenziale per il testosterone.", url: "https://www.prozis.com/it/it/search?text=vitamin+d3" },
        ]} />
      </div>
    ),
    insights: [
      { text: "Effect of vitamin D supplementation on testosterone levels in men (Horm Metab Res)", url: "https://pubmed.ncbi.nlm.nih.gov/21154195/" },
    ],
  },

  l18: {
    subtitle: "Lacune Nutrizionali",
    content: (
      <div className="space-y-8 text-foreground/80 leading-relaxed">
        <p>Paesi come l'India hanno una tradizione vegetariana secolare. Tuttavia, la scelta moderna di escludere interi gruppi alimentari (carne o derivati animali) richiede attenzione nutrizionale. L'integrazione intelligente non è un 'fallimento' etico della dieta, ma una necessità biologica per compensare ciò che la natura ha messo principalmente negli alimenti animali (come la B12).</p>

        <CourseImage src="Pic 19.png" alt="Puzzle Nutrienti" caption="Il puzzle nutrizionale: colmare le lacune della dieta vegetale." />

        <div className="grid gap-6 md:grid-cols-2">
          <SupplementCard name="Vitamina B12" type="Core" dose="25-100 mcg" mechanism="Cofattore per la sintesi del DNA e la salute dei nervi. Assente nel regno vegetale in forma attiva." notes="Mandatorio per tutti i vegani. La carenza causa danni nervosi irreversibili. Le alghe spesso contengono pseudo-B12 che maschera la carenza." />
          <SupplementCard name="Creatina" type="Secondary" dose="5 g" mechanism="Aumenta le riserve di fosfocreatina nel cervello e nei muscoli, che sono tipicamente più basse nei vegetariani." notes="I vegani rispondono meglio degli onnivori all'integrazione di creatina, con miglioramenti marcati nella memoria e nella forza." />
          <SupplementCard name="Proteine Vegetali" type="Secondary" dose="Variabile" mechanism="Per raggiungere la quota proteica ottimale e stimolare la sintesi muscolare." notes="Soia, pisello o riso. Utili per comodità e profilo aminoacidico completo." />
          <SupplementCard name="Omega-3 (Algale)" type="Secondary" dose="200-300 mg DHA" mechanism="Fornisce DHA/EPA preformati, bypassando la conversione inefficiente dai semi di lino." notes="Importante per la salute a lungo termine di cuore e cervello." />
        </div>

        <ProzisSection products={[
          { name: "Vitamina B12", description: "Essenziale per vegani.", url: "https://www.prozis.com/it/it/search?text=vitamin+b12" },
          { name: "Creatina Creapure®", description: "Sintetizzata in laboratorio, 100% vegan.", url: "https://www.prozis.com/it/it/search?text=creapure" },
          { name: "Proteine Soia Isolate", description: "Alternativa vegetale completa alle whey.", url: "https://www.prozis.com/it/it/search?text=soy+protein" },
          { name: "Omega 3 Algale", description: "DHA da fonte vegetale.", url: "https://www.prozis.com/it/it/search?text=algae+omega" },
        ]} />
      </div>
    ),
    insights: [
      { text: "Vitamin B12 among Vegetarians: Status, Assessment and Supplementation (Nutrients)", url: "https://pubmed.ncbi.nlm.nih.gov/27916823/" },
    ],
  },

  l19: {
    subtitle: "Generatore di Protocolli",
    content: <StackBuilder />,
    insights: [],
  },
};
