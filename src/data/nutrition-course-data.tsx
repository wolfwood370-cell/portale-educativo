import React from "react";
import CourseImage from "@/components/course/CourseImage";
import { InfoBox, FoodTable, DecisionProtocol, QualityChecklist } from "@/components/course/NutritionComponents";
import { type Lesson } from "@/components/CourseViewerLayout";
import { Activity, Brain, Microscope, Droplet, CheckCircle, AlertTriangle } from "lucide-react";

export interface NutritionLessonContent {
  subtitle: string;
  content: React.ReactNode;
  insights: { text: string; url: string }[];
}

export const nutritionLessons: Lesson[] = [
  { id: "l1", title: "Introduzione: La Filosofia del Cibo", duration: "10 min", completed: false },
  { id: "l2", title: "La Qualità del Cibo", duration: "9 min", completed: false },
  { id: "l3", title: "Le Proteine", duration: "12 min", completed: false },
  { id: "l4", title: "Le Verdure & Fitochimici", duration: "10 min", completed: false },
  { id: "l5", title: "I Carboidrati", duration: "11 min", completed: false },
  { id: "l6", title: "I Grassi", duration: "10 min", completed: false },
  { id: "l7", title: "Timing", duration: "9 min", completed: false },
  { id: "l8", title: "Personalizzazione e Troubleshooting", duration: "11 min", completed: false },
];

export const nutritionLessonContent: Record<string, NutritionLessonContent> = {
  l1: {
    subtitle: "Psicologia e Sostenibilità",
    content: (
      <div className="space-y-6 text-foreground/80 leading-relaxed">
        <p className="text-lg font-light text-foreground">Viviamo in un'era di estremi nutrizionali. La realtà fisiologica è che il corpo umano è una macchina adattiva resiliente, non un tempio fragile. L'approccio moderno propone un cambio di paradigma: passare dal concetto di "Dieta" (finita) a quello di "Lifestyle Practice" (infinita). Ma perché falliamo spesso? A causa del <strong>ciclo Restrizione-Abbuffata</strong>, alimentato dal cortisolo e dalla psicologia della privazione.</p>

        <QualityChecklist items={[
          "Mangia lentamente e mastica a lungo.",
          "Fermati quando sei sazio all'80% (non \"pieno\").",
          "Bevi un bicchiere d'acqua prima di ogni pasto.",
        ]} />

        <CourseImage src="/images/courses/nutrition/nutrition-lesson-1-restriction-binge-cycle.webp" alt="Il Ciclo Restrizione-Abbuffata" caption="Il Ciclo Restrizione-Abbuffata" />

        <h3 className="text-xl font-bold text-foreground mt-6">Il Meccanismo del Cortisolo</h3>
        <p>Quando ti imponi regole rigide ("Mai più pizza"), il tuo cervello percepisce una minaccia. Questo eleva il cortisolo. Il cortisolo alto cronico ha due effetti devastanti:</p>
        <ul className="list-decimal pl-5 space-y-2 mt-2 font-medium">
          <li>Aumenta la fame specifica per cibi densi (grassi+zuccheri).</li>
          <li>Mobilita il grasso dalle estremità per depositarlo nel tessuto viscerale (pancia), dove è metabolicamente più attivo e pericoloso.</li>
        </ul>

        <InfoBox
          title="Cos'è il Cortisolo?"
          content="Il cortisolo è l'ormone dello stress primario, prodotto dalle ghiandole surrenali. Evolutivamente serve a darti energia rapida per scappare da un pericolo (aumenta la glicemia). Ma se rimane alto cronicamente (per diete rigide o stress lavorativo), distrugge la massa muscolare e favorisce l'accumulo di grasso addominale resistente."
          icon={Brain}
        />

        <CourseImage src="/images/courses/nutrition/nutrition-lesson-1-80-20-principle.webp" alt="Infografica: Il Principio 80/20" caption="Il Principio 80/20" />

        <div className="bg-emerald-500/10 border-l-4 border-emerald-500 p-6 my-6 rounded-r-lg">
          <h3 className="font-bold text-foreground mb-2 text-lg">Il Principio dell'80/20</h3>
          <p className="text-foreground/80">Puntare al 100% di aderenza è la ricetta per il fallimento. L'<strong>80%</strong> nutre le tue cellule (vitamine, minerali, fibre). Il restante <strong>20%</strong> nutre la tua anima (socialità, piacere). Questo approccio riduce lo stress e migliora l'aderenza a lungo termine.</p>
        </div>
      </div>
    ),
    insights: [
      { text: "Polivy, J., & Herman, C. P. (1985). Dieting and binging: A causal analysis. American Psychologist.", url: "https://pubmed.ncbi.nlm.nih.gov/3883301/" },
      { text: "Aragon, A.A. et al. (2017). ISSN position stand: diets and body composition.", url: "https://jissn.biomedcentral.com/articles/10.1186/s12970-017-0174-y" },
    ],
  },

  l2: {
    subtitle: "Perché processato è diverso",
    content: (
      <div className="space-y-6 text-foreground/80 leading-relaxed">
        <p>Il concetto di "Caloria è una Caloria" è vero in termodinamica, ma falso in fisiologia. 100 kcal di broccoli e 100 kcal di caramelle inviano <strong>messaggi ormonali</strong> opposti. I cibi ultra-processati sono progettati per l'iper-palatabilità, hackerando i nostri segnali di sazietà.</p>

        <CourseImage src="/images/courses/nutrition/nutrition-lesson-2-brain-hacking-satiety.webp" alt="Illustrazione: L'Hacking del Cervello" caption="Hacking della Sazietà" />

        <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Analisi degli Errori Comuni</h3>
        <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-lg">
          <h4 className="font-bold text-red-400 mb-2 flex items-center">
            <AlertTriangle className="w-4 h-4 mr-2" /> Falso Amico: L'Halo Effect "Bio/Veg"
          </h4>
          <p className="text-base text-foreground/80">Molti credono che se un biscotto è "Bio" o "Senza Glutine", allora non faccia ingrassare. <strong>Realtà:</strong> Lo zucchero di canna biologico ha lo stesso impatto metabolico dello zucchero bianco. Le patatine fritte vegane sono pur sempre patatine fritte. Non guardare l'etichetta frontale (marketing), guarda la lista ingredienti (realtà).</p>
        </div>

        <CourseImage src="/images/courses/nutrition/nutrition-lesson-2-real-vs-processed-food.webp" alt="Confronto Visivo: Cibo Vero vs Processato" caption="Cibo Vero vs Ultra-Processato" />

        <DecisionProtocol
          title="Valutazione Qualità Cibo"
          scenarios={[
            { if: "Ha più di 5 ingredienti che non hai in cucina", then: "È probabilmente ultra-processato (Mangiane meno)", why: "La complessità industriale indica spesso additivi che aumentano l'appetibilità artificiale." },
            { if: "È venduto senza etichetta (es. frutta, pesce)", then: "È Cibo Vero (Mangiane di più)", why: "Gli alimenti a singolo ingrediente contengono la matrice naturale che regola l'assorbimento." },
            { if: "Promette benefici miracolosi sulla confezione", then: "È Marketing (Sii scettico)", why: "Il cibo vero non ha bisogno di strillare 'Salutare' sulla confezione." },
          ]}
        />
      </div>
    ),
    insights: [
      { text: "Hall, K. D., et al. (2019). Ultra-Processed Diets Cause Excess Calorie Intake and Weight Gain. Cell Metabolism.", url: "https://www.cell.com/cell-metabolism/fulltext/S1550-4131(19)30248-7" },
      { text: "Monteiro, C.A. et al. (2018). The UN Decade of Nutrition, the NOVA food classification and the trouble with ultra-processing.", url: "https://pubmed.ncbi.nlm.nih.gov/29529271/" },
    ],
  },

  l3: {
    subtitle: "Mattoni e Metabolismo",
    content: (
      <div className="space-y-6 text-foreground/80 leading-relaxed">
        <p>Le proteine sono l'unico macronutriente essenziale per il turnover strutturale. Hanno un <strong>TEF (Effetto Termico)</strong> altissimo: il 25-30% delle calorie viene bruciato nella digestione. Questo le rende il nutriente più saziante e "dimagrante" a parità di calorie.</p>

        <InfoBox
          title="Che cos'è il TEF (Effetto Termico del Cibo)?"
          content="È l'energia che il tuo corpo spende per digerire, assorbire e processare i nutrienti. Le proteine sono le più 'costose': per ogni 100 calorie di pollo che mangi, ne assorbi solo 70-75, perché 25-30 vengono bruciate subito come calore. I grassi, invece, sono molto 'economici': ne assorbi quasi il 98%."
          icon={Activity}
        />

        <CourseImage src="/images/courses/nutrition/nutrition-lesson-3-thermic-effect-digestion.webp" alt="Grafico: Costo Metabolico della Digestione" caption="Costo Metabolico della Digestione (TEF)" />

        <div className="bg-sky-500/10 p-5 rounded-lg border border-sky-500/20 my-6">
          <h4 className="font-bold text-sky-300 mb-2">Perché usiamo la mano come unità di misura?</h4>
          <p className="text-base text-foreground/80">Non hai sempre una bilancia con te, ma hai sempre le tue mani. Inoltre, le mani sono proporzionate alla tua taglia: una persona più grande ha mani più grandi e necessita di porzioni maggiori. Per le proteine, il <strong>PALMO</strong> (senza dita) corrisponde alla quantità di tessuto muscolare che il tuo corpo può gestire in un pasto.</p>
        </div>

        <CourseImage src="/images/courses/nutrition/nutrition-lesson-3-palm-portion-protein.webp" alt="Guida Visiva: Porzione a Palmo" caption="Guida Porzione: Proteine" />

        <FoodTable
          title="Fonti Proteiche"
          more={["Uova intere (Bio)", "Petto di Pollo", "Tacchino (fesa)", "Pesce Bianco (Merluzzo/Orata)", "Salmone selvaggio", "Yogurt Greco 0%", "Tofu al naturale", "Tempeh", "Albumi d'uovo", "Lenticchie (Miste)"]}
          some={["Manzo grasso (Costata)", "Formaggi stagionati", "Affettati magri (Bresaola)", "Proteine in polvere (Whey)", "Salsiccia fresca magra", "Cosce di pollo (con pelle)", "Latte intero", "Mozzarella", "Ricotta"]}
          less={["Wurstel", "Salame / Mortadella", "Carni panate (Cotolette)", "Barrette proteiche con zuccheri", "Kebab di bassa qualità", "Pancetta / Bacon", "Carne in scatola"]}
        />

        <DecisionProtocol
          title="Scelta della Proteina"
          scenarios={[
            { if: "È un pasto principale (Pranzo/Cena)", then: "Usa fonti solide (Carne, Pesce, Uova)", why: "La masticazione e la digestione lenta delle fonti solide massimizzano il segnale di sazietà a lungo termine." },
            { if: "È un post-allenamento", then: "Usa fonti rapide (Whey, Albume, Pesce bianco)", why: "Dopo lo sforzo, il muscolo è più ricettivo e beneficia di un afflusso rapido di amminoacidi nel sangue." },
            { if: "Sei Vegano/Vegetariano", then: "Combina cereali e legumi nell'arco della giornata", why: "Per ottenere tutti gli amminoacidi essenziali, poiché molte fonti vegetali sono incomplete (mancano di un 'mattoncino')." },
          ]}
        />
      </div>
    ),
    insights: [
      { text: "Jäger, R., et al. (2017). International Society of Sports Nutrition Position Stand: Protein and exercise. JISSN.", url: "https://jissn.biomedcentral.com/articles/10.1186/s12970-017-0177-8" },
      { text: "Phillips, S. M. (2011). Dietary protein for athletes.", url: "https://pubmed.ncbi.nlm.nih.gov/22150425/" },
    ],
  },

  l4: {
    subtitle: "Volume, Microbioma e Farmacia Naturale",
    content: (
      <div className="space-y-6 text-foreground/80 leading-relaxed">
        <p>Le verdure forniscono volume gastrico (sazietà meccanica) e fitochimici che modulano l'espressione genica. L'obiettivo è la varietà cromatica per coprire diversi spettri di protezione (via Nrf2, antiossidanti).</p>

        <InfoBox
          title="Fitochimici, Nrf2 e Antiossidanti"
          content="I fitochimici sono le 'armi' chimiche delle piante. Quando li mangiamo, attivano nel nostro corpo la proteina Nrf2, un interruttore genetico che accende i nostri sistemi di difesa interni. Gli antiossidanti non si limitano a combattere i radicali liberi: segnalano alle nostre cellule di diventare più forti e resistenti allo stress."
          icon={Microscope}
        />

        <CourseImage src="/images/courses/nutrition/nutrition-lesson-4-gastric-volume-satiety.webp" alt="Confronto: Volume Gastrico e Sazietà" caption="Volume Gastrico e Sazietà" />

        <div className="bg-sky-500/10 p-5 rounded-lg border border-sky-500/20 my-6">
          <h4 className="font-bold text-sky-300 mb-2">La Regola del Pugno</h4>
          <p className="text-base text-foreground/80">Per le verdure, l'unità di misura è il <strong>PUGNO</strong> chiuso. Essendo poco dense caloricamente, il pugno ci aiuta a garantire un volume minimo di fibre e micronutrienti. Un pugno è circa una tazza (cup) di verdure cotte o crude. L'obiettivo è riempire lo stomaco con volume a bassa densità energetica.</p>
        </div>

        <CourseImage src="/images/courses/nutrition/nutrition-lesson-4-fist-portion-vegetables.webp" alt="Guida Visiva: Porzione a Pugno" caption="Guida Porzione: Verdure" />

        <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-lg mt-6">
          <h4 className="font-bold text-yellow-400 mb-2 flex items-center">
            <AlertTriangle className="w-4 h-4 mr-2" /> Troubleshooting: Gonfiore Addominale
          </h4>
          <p className="text-base text-foreground/80">Passare da 0 a 5 pugni di verdure al giorno può causare gas. <strong>Soluzione:</strong> Aumenta gradualmente. Preferisci verdure cotte (vapore/forno) a quelle crude all'inizio. Mastica molto.</p>
        </div>

        <FoodTable
          title="Fonti Vegetali"
          more={["Spinaci", "Broccoli", "Cavolfiore", "Zucchine", "Finocchi", "Pomodori", "Peperoni", "Asparagi", "Fagiolini", "Cavolo Nero", "Melanzane", "Cetrioli", "Funghi", "Rucola", "Radicchio"]}
          some={["Carote cotte", "Zucca", "Minestrone misto", "Barbabietola", "Mais dolce", "Piselli", "Carciofi", "Cavoletti di Bruxelles"]}
          less={["Patatine fritte", "Verdure pastellate", "Verdure sott'olio", "Sottaceti (molto sale)", "Chips di verdura fritte", "Purea istantanea", "Insalata russa"]}
        />

        <DecisionProtocol
          title="Gestione Verdure"
          scenarios={[
            { if: "Hai ancora fame dopo il pasto", then: "Raddoppia la razione di verdure verdi nel pasto successivo", why: "Le verdure verdi hanno densità calorica quasi nulla; riempiono lo stomaco meccanicamente senza aggiungere energia significativa." },
            { if: "Mangi sempre la stessa insalata", then: "Compra una verdura di colore diverso (Viola/Arancione)", why: "Ogni colore corrisponde a un diverso profilo di polifenoli protettivi per il DNA." },
            { if: "Odi le verdure bollite", then: "Provale arrosto al forno con spezie e un filo d'olio", why: "La reazione di Maillard (doratura) rende le verdure più dolci e appetibili rispetto alla bollitura." },
          ]}
        />
      </div>
    ),
    insights: [
      { text: "Slavin, J. L. (2013). Fiber and prebiotics. Nutrients.", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3705355/" },
    ],
  },

  l5: {
    subtitle: "Carburante e Glicemia",
    content: (
      <div className="space-y-6 text-foreground/80 leading-relaxed">
        <p>I carboidrati non sono il nemico, ma vanno "guadagnati". Più sei attivo, più i recettori GLUT-4 sui muscoli sono pronti a captare glucosio. Se sei sedentario, l'eccesso diventa grasso. Gestire il carico glicemico è la chiave per evitare il crash energetico.</p>

        <InfoBox
          title="I Recettori GLUT-4: Le Porte del Muscolo"
          content="Immagina il glucosio come auto che cercano parcheggio. I recettori GLUT-4 sono i cancelli dei garage muscolari. Quando sei a riposo, i cancelli sono chiusi. Quando ti alleni, i cancelli si spalancano magicamente (senza bisogno di insulina) per far entrare il glucosio. Ecco perché mangiare carboidrati DOPO l'allenamento li dirige verso i muscoli e non verso la pancia."
          icon={Activity}
        />

        <CourseImage src="/images/courses/nutrition/nutrition-lesson-5-glycemic-rollercoaster.webp" alt="Grafico: Montagne Russe Glicemiche" caption="Impatto Glicemico" />

        <div className="bg-sky-500/10 p-5 rounded-lg border border-sky-500/20 my-6">
          <h4 className="font-bold text-sky-300 mb-2">La Mano a Coppa</h4>
          <p className="text-base text-foreground/80">I carboidrati sono densi di energia. Per evitare eccessi, usiamo la <strong>MANO A COPPA</strong>. Immagina di tenere dell'acqua nel palmo della mano: quella è la quantità massima di amidi (riso, pasta, patate) o frutta per porzione. Questa misura limita naturalmente l'introito calorico senza dover pesare nulla.</p>
        </div>

        <CourseImage src="/images/courses/nutrition/nutrition-lesson-5-cupped-hand-portion-carbs.webp" alt="Guida Visiva: Porzione a Coppa" caption="Guida Porzione: Carboidrati" />

        <h3 className="text-xl font-bold text-foreground mt-6">Analisi Errori: La Trappola della Colazione Dolce</h3>
        <p>Iniziare la giornata con soli zuccheri (brioche, biscotti) crea un picco insulinico che crollerà a metà mattina, generando fame reattiva. <strong>Soluzione:</strong> Inserisci sempre una fonte proteica o grassa a colazione per smussare la curva glicemica.</p>

        <FoodTable
          title="Fonti di Carboidrati"
          more={["Avena", "Riso Nero", "Riso Rosso", "Quinoa", "Grano Saraceno", "Patate dolci", "Fagioli", "Ceci", "Lenticchie", "Mele", "Frutti di Bosco", "Kiwi", "Pere", "Arance"]}
          some={["Riso bianco", "Pasta al dente", "Pane lievito madre", "Couscous", "Banane mature", "Patate bianche", "Gnocchi", "Polenta", "Castagne", "Uva"]}
          less={["Zucchero", "Biscotti", "Succhi di frutta", "Cracker raffinati", "Pizza surgelata", "Merendine", "Bevande gassate", "Caramelle", "Cereali glassati"]}
        />

        <DecisionProtocol
          title="Timing Carboidrati (Earn Your Carbs)"
          scenarios={[
            { if: "Ti sei allenato intensamente", then: "Mangia la porzione più grande di carbo nel pasto post-workout", why: "I tuoi recettori GLUT-4 sono aperti e le riserve di glicogeno (benzina muscolare) vanno ripristinate." },
            { if: "È un giorno di riposo sedentario", then: "Riduci i carboidrati (solo verdure e frutta) o dimezza le porzioni", why: "Senza spesa energetica muscolare, il serbatoio è pieno. Aggiungere altra benzina porta a traboccamento (grasso)." },
            { if: "Hai sonnolenza dopo pranzo", then: "Sposta i carboidrati a cena (aiutano il sonno) e fai un pranzo proteico/grassi", why: "I carboidrati stimolano la serotonina e possono causare rilassamento. Sfrutta questo effetto per dormire meglio, non per dormire in ufficio." },
          ]}
        />
      </div>
    ),
    insights: [
      { text: "Ludwig, D. S. (2002). The glycemic index. JAMA.", url: "https://pubmed.ncbi.nlm.nih.gov/11988062/" },
    ],
  },

  l6: {
    subtitle: "Ormoni e Infiammazione",
    content: (
      <div className="space-y-6 text-foreground/80 leading-relaxed">
        <p>I grassi sono essenziali per le membrane cellulari e gli ormoni, ma sono densissimi (9 kcal/g). L'errore più comune è l'<strong>"Halo Effect"</strong>: pensare che poiché noci e avocado sono sani, se ne possano mangiare quantità illimitate.</p>

        <div className="bg-sky-500/10 p-5 rounded-lg border border-sky-500/20 my-6">
          <h4 className="font-bold text-sky-300 mb-2">Il Pollice di Sicurezza</h4>
          <p className="text-base text-foreground/80">Proprio perché i grassi sono così calorici, la porzione è piccola: corrisponde al tuo <strong>POLLICE</strong> intero. Questo equivale a circa un cucchiaio d'olio o una manciatina di frutta secca. È facile esagerare coi grassi (specialmente oli e condimenti), quindi usare il pollice è un ottimo freno visivo.</p>
        </div>

        <CourseImage src="/images/courses/nutrition/nutrition-lesson-6-thumb-portion-fats.webp" alt="Guida Visiva: Porzione a Pollice" caption="Guida Porzione: Grassi" />

        <FoodTable
          title="Fonti di Grassi"
          more={["Olio Extravergine d'Oliva", "Avocado", "Noci", "Mandorle", "Semi di lino macinati", "Semi di Chia", "Salmone", "Sgombro", "Tuorlo d'uovo", "Olive"]}
          some={["Burro", "Ghee", "Olio di cocco", "Cioccolato fondente 85%+", "Burro arachidi 100%", "Pistacchi", "Anacardi", "Formaggi grassi", "Pesto", "Latte di cocco"]}
          less={["Margarina", "Oli di semi raffinati (Girasole/Mais)", "Grassi trans", "Creme spalmabili dolci", "Panna vegetale", "Olio di palma", "Maionese industriale"]}
        />

        <DecisionProtocol
          title="Gestione Grassi"
          scenarios={[
            { if: "Il pasto ha già carne grassa o salmone", then: "Non aggiungere olio o noci (hai già usato il 'pollice')", why: "La carne grassa contiene già la tua quota lipidica 'nascosta' nelle fibre muscolari." },
            { if: "Mangi insalata scondita", then: "Devi aggiungere grassi (Olio EVO) per assorbire le vitamine liposolubili", why: "Le vitamine A, D, E, K necessitano di un veicolo grasso per passare dall'intestino al sangue." },
            { if: "Usi olio per cucinare", then: "Misuralo col cucchiaio, non versare 'a occhio'", why: "È impossibile stimare a occhio 10g di olio. Spesso se ne versano 30g, triplicando le calorie del condimento." },
          ]}
        />
      </div>
    ),
    insights: [
      { text: "Simopoulos, A. P. (2002). Omega-6/omega-3 ratio. Biomedicine & Pharmacotherapy.", url: "https://pubmed.ncbi.nlm.nih.gov/12442909/" },
    ],
  },

  l7: {
    subtitle: "Nutrizione Sportiva & Strategie",
    content: (
      <div className="space-y-6 text-foreground/80 leading-relaxed">
        <p>Per la maggior parte delle persone, la qualità e la quantità totale del cibo sono i fattori più importanti. Tuttavia, se ti alleni intensamente, il <strong>timing dei nutrienti</strong> (quando mangi) può fare la differenza nel recupero e nella performance.</p>

        <InfoBox
          title="Mito: La Finestra Anabolica"
          content="Non devi correre a bere il tuo shake proteico entro 30 minuti dalla fine dell'allenamento. La cosiddetta 'finestra anabolica' è molto più ampia (diverse ore), purché tu abbia consumato un pasto bilanciato prima dell'allenamento."
          icon={Activity}
        />

        <CourseImage src="/images/courses/nutrition/nutrition-lesson-7-sports-nutrition-timeline.webp" alt="Timeline Nutrizione Sportiva" caption="Timing Nutrizionale Sportivo" />

        <h3 className="text-xl font-bold text-foreground mt-6">Cosa Mangiare Intorno all'Allenamento</h3>
        <DecisionProtocol
          title="Nutrizione Peri-Workout"
          scenarios={[
            { if: "Mancano < 2 ore all'allenamento", then: "Pasto leggero o liquido: Carboidrati facili + Proteine veloci (es. Yogurt greco + Frutta, o Shake). Evita troppi grassi/fibre.", why: "Grassi e fibre rallentano la digestione, rischiando di appesantirti durante lo sforzo." },
            { if: "Mancano > 3 ore all'allenamento", then: "Pasto completo solido e bilanciato (es. Pollo, Riso, Verdure, Olio).", why: "Hai tempo sufficiente per digerire nutrienti complessi." },
            { if: "Hai finito l'allenamento", then: "Pasto completo appena possibile. Se non puoi mangiare subito, usa uno shake di recupero.", why: "L'obiettivo è reidratare, ripristinare il glicogeno e avviare la sintesi proteica." },
          ]}
        />

        <h3 className="text-xl font-bold text-foreground mt-6">Idratazione Strategica</h3>
        <p>L'acqua è il nutriente più importante per la performance. Una disidratazione anche leggera (2%) riduce la forza, la concentrazione e aumenta la percezione della fatica. Non affidarti solo alla sete: pianifica.</p>

        <InfoBox
          title="Elettroliti: Non solo acqua"
          content="Quando sudi perdi acqua e sali (soprattutto sodio). Bere solo acqua in grandi quantità senza reintegrare i sali può portare a iponatriemia (basso sodio), che causa crampi e debolezza. Per sessioni intense, il sodio è il tuo migliore amico."
          icon={Droplet}
        />

        <CourseImage src="/images/courses/nutrition/nutrition-lesson-7-hydration-color-scale.webp" alt="Scala Cromatica Idratazione" caption="Scala Cromatica Idratazione" />

        <DecisionProtocol
          title="Protocollo Idratazione"
          scenarios={[
            { if: "Le urine sono giallo scuro / ambrate", then: "Bevi 500ml di acqua immediatamente.", why: "Sei già disidratato. Il corpo sta conservando acqua." },
            { if: "L'allenamento dura meno di 60 minuti", then: "Bevi acqua semplice a sensazione.", why: "Le riserve di elettroliti sono sufficienti per sforzi brevi." },
            { if: "L'allenamento dura oltre 90 minuti o fa molto caldo", then: "Aggiungi un pizzico di sale e limone all'acqua (o usa integratori di sali).", why: "Devi rimpiazzare il sodio perso col sudore per mantenere la contrazione muscolare efficiente." },
          ]}
        />
      </div>
    ),
    insights: [
      { text: "Kerksick, C.M., et al. (2017). ISSN Position Stand: Nutrient timing.", url: "https://jissn.biomedcentral.com/articles/10.1186/s12970-017-0189-4" },
    ],
  },

  l8: {
    subtitle: "Come adattare il piano",
    content: (
      <div className="space-y-6 text-foreground/80 leading-relaxed">
        <p>Nessun piano sopravvive al contatto con la realtà senza adattamenti. Usa il metodo scientifico:</p>
        <ul className="list-disc pl-5 space-y-2 font-medium text-foreground">
          <li>Osserva i dati (peso, energia, fame)</li>
          <li>Ipotizza una modifica</li>
          <li>Testa per 2 settimane</li>
        </ul>

        <CourseImage src="/images/courses/nutrition/nutrition-lesson-8-experimental-cycle-flowchart.webp" alt="Diagramma di Flusso: Il Ciclo Sperimentale" caption="Il Ciclo Sperimentale" />

        <h3 className="text-xl font-bold text-foreground mt-6">Protocolli di Risoluzione Problemi</h3>

        <div className="space-y-6 mt-4">
          <DecisionProtocol
            title="Stallo del Peso"
            scenarios={[
              { if: "Il peso è fermo da < 14 giorni", then: "È ritenzione idrica o normale fluttuazione. Non cambiare nulla.", why: "Il corpo non perde grasso linearmente. L'acqua maschera spesso la perdita di grasso." },
              { if: "Il peso è fermo da > 14 giorni", then: "Riduci i grassi o i carbo di mezza porzione in un pasto.", why: "Il tuo corpo si è adattato al nuovo peso riducendo il dispendio (metabolismo). Devi creare un nuovo deficit." },
              { if: "Ti senti debole e hai freddo", then: "Potresti mangiare troppo poco (down-regulation metabolica). Aumenta leggermente.", why: "Se mangi troppo poco, la tiroide rallenta per 'salvarti' dalla carestia, bloccando il dimagrimento." },
            ]}
          />

          <DecisionProtocol
            title="Fame Costante"
            scenarios={[
              { if: "Hai fame 1 ora dopo mangiato", then: "Pasto troppo ricco di zuccheri/povero di proteine. Aumenta proteine e fibre.", why: "Hai avuto un picco glicemico seguito da un crollo (ipoglicemia reattiva) che il cervello interpreta come fame." },
              { if: "Hai fame prima di dormire", then: "Prova una piccola porzione di proteine a lento rilascio (fiocchi di latte) o carbo complessi a cena.", why: "Stabilizzare la glicemia notturna previene i risvegli e la fame mattutina vorace." },
            ]}
          />
        </div>
      </div>
    ),
    insights: [
      { text: "Trexler, E.T. et al. (2014). Metabolic adaptation to weight loss.", url: "https://jissn.biomedcentral.com/articles/10.1186/1550-2783-11-7" },
    ],
  },
};
