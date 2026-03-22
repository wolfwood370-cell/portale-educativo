import React from "react";
import CourseImage from "@/components/course/CourseImage";
import { type Lesson } from "@/components/CourseViewerLayout";

export interface LessonContent {
  subtitle: string;
  content: React.ReactNode;
  insights: { text: string; url: string }[];
}

export const rpeLessons: Lesson[] = [
  { id: "l1", title: "Cos'è l'RPE", duration: "10 min", completed: false },
  { id: "l2", title: "I 4 Sistemi di Segnalazione", duration: "12 min", completed: false },
  { id: "l3", title: "Il Disagio Mentale/Fisico", duration: "11 min", completed: false },
  { id: "l4", title: "La Degradazione Tecnica", duration: "10 min", completed: false },
  { id: "l5", title: "La Perdita di Velocità", duration: "9 min", completed: false },
  { id: "l6", title: "RIR (Ripetizioni In Riserva)", duration: "10 min", completed: false },
  { id: "l7", title: "Valutare l'RPE della Serie", duration: "12 min", completed: false },
  { id: "l8", title: "Valutare l'RPE della Sessione", duration: "8 min", completed: false },
  { id: "l9", title: "Valutare l'RPE Cardio", duration: "9 min", completed: false },
  { id: "l10", title: "Interpretare l'RPE", duration: "11 min", completed: false },
  { id: "l11", title: "Errori Comuni", duration: "10 min", completed: false },
  { id: "l12", title: "FAQ & Scenari Reali", duration: "12 min", completed: false },
];

export const rpeLessonContent: Record<string, LessonContent> = {
  l1: {
    subtitle: "RPE vs Percentuali di Carico",
    content: (
      <div className="space-y-6 text-foreground/80 leading-relaxed">
        <p className="text-lg font-light text-foreground">
          L'RPE, o <strong>Rate of Perceived Exertion</strong> (Scala di Percezione dello Sforzo), è una misura dello sforzo percepito su una scala da 1 a 10.
          È semplice da esprimere ma complesso nelle sue radici fisiologiche, perché non descrive soltanto quanto un esercizio è pesante "in teoria", bensì quanto il corpo sta realmente lavorando in quel momento.
        </p>

        <p>
          La percezione dello sforzo nasce da un insieme di segnali che il sistema nervoso raccoglie e integra: affaticamento muscolare locale, cambiamenti respiratori, accumulo di metaboliti, aumento della richiesta di stabilità, tensione mentale e calo della velocità del movimento. Tutti questi input vengono elaborati dal cervello e restituiti sotto forma di una sensazione unica: quanto la serie è "dura".
          Questo processo è inquadrato molto bene nei modelli contemporanei di percezione dello sforzo e autoregolazione dell'esercizio.
        </p>

        <div className="bg-sky-500/10 border-l-4 border-sky-500 p-6 my-6 rounded-r-lg">
          <h3 className="font-bold text-foreground mb-2">Carico Esterno vs Carico Interno</h3>
          <p className="text-foreground/80 text-base">
            Comprendere l'RPE significa capire la differenza tra <strong>carico esterno</strong> (i kg sul bilanciere) e <strong>carico interno</strong> (la risposta del corpo).
            Mentre il carico esterno è fisso e visibile, il carico interno cambia ogni giorno in base a fattori come sonno, stress, digestione, stato emotivo e accumulo di fatica.
            È per questo che due serie con lo stesso peso possono restituire sensazioni completamente diverse: il corpo non è una macchina lineare e risponde a una moltitudine di variabili.
          </p>
        </div>

        <h3 className="text-xl font-bold text-foreground mt-8 mb-4">La Svolta Moderna: Da Borg a Tuchscherer</h3>
        <p>
          Il concetto di RPE nasce negli anni '60 con lo psicofisiologo svedese Gunnar Borg, che cercava un modo per quantificare la percezione dello sforzo in attività aerobiche (la famosa scala 6-20 basata sulla frequenza cardiaca).
          La sua prima scala forniva ai ricercatori un modo per collegare sensazioni soggettive a fenomeni fisiologici misurabili.
          Per molto tempo, tuttavia, l'RPE non fu applicato al resistance training. La svolta arriva con Mike Tuchscherer, che reinterpretò l'RPE in chiave muscolare: non più una misura della fatica cardiaca, ma della vicinanza al cedimento.
          È qui che nasce la corrispondenza moderna tra RPE e <strong>RIR (Reps In Reserve)</strong>:
        </p>
        <ul className="list-disc pl-5 space-y-2 mt-2 mb-4 marker:text-sky-400">
          <li><strong>RPE 10</strong> = 0 RIR (Cedimento, nessuna ripetizione possibile con tecnica corretta).</li>
          <li><strong>RPE 9</strong> = 1 RIR (Una ripetizione in riserva).</li>
          <li><strong>RPE 8</strong> = 2 RIR (Due ripetizioni in riserva).</li>
          <li><strong>RPE 7</strong> = 3 RIR (Tre ripetizioni in riserva).</li>
        </ul>

        <CourseImage src="/images/courses/rpe/rpe-lesson-1-scale-rpe-rir.webp" alt="Scala RPE vs RIR" caption="Tabella di conversione RPE/RIR." />

        <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Perché abbandonare le percentuali fisse?</h3>
        <p>
          Usare le percentuali significa assumere che il tuo massimale (1RM) rimanga costante ogni giorno. Ma le ricerche sull'autoregolazione mostrano che le prestazioni di forza variano sensibilmente da un giorno all'altro a causa di stress, sonno e biochimica.
          Il grafico sottostante mostra la verità sull'allenamento: le percentuali fisse (linea tratteggiata) ignorano la tua biologia. L'RPE (linea azzurra) naviga sopra le onde della tua performance giornaliera.
        </p>

        <CourseImage src="/images/courses/rpe/rpe-lesson-1-performance-fluctuation.webp" alt="Fluttuazione della Performance" caption="Fluttuazione della performance: 1RM Teorico vs Reale." />

        <h4 className="font-bold text-foreground mt-4">L'RPE nella pratica reale:</h4>
        <p>
          In una giornata "no" (es. dopo un turno di notte o un esame), un 80% programmato può diventare un 90% reale, portando a un sovraccarico pericoloso.
          L'RPE adatta il peso: riduci i kg per mantenere lo sforzo corretto (es. RPE 8), salvando la sessione e prevenendo infortuni.
          Viceversa, in una giornata "sì", l'RPE ti autorizza a caricare più del previsto per sfruttare il picco di forma, garantendo sempre lo stimolo ottimale.
        </p>
      </div>
    ),
    insights: [
      { text: "Lopes, T.R. et al. (2022). Perceived Exertion: Revisiting the History and Updating the Self-Regulation Model. Sports Medicine.", url: "https://pubmed.ncbi.nlm.nih.gov/36361320/" },
      { text: "Chen, M.J., Fan, X., & Moe, S.T. (2002). Criterion-related validity of the Borg ratings of perceived exertion scale in healthy individuals: a meta-analysis. Journal of Sports Sciences, 20(11), 873-899.", url: "https://pubmed.ncbi.nlm.nih.gov/12430990/" },
      { text: "Borg, G. (1998). Borg's Perceived Exertion and Pain Scales. Human Kinetics.", url: "https://books.google.it/books/about/Borg_s_Perceived_Exertion_and_Pain_Sca.html?id=o4_qAAAAMAAJ&redir_esc=y" },
      { text: "Coquart, J.B. et al. (2012). Relevance of the measure of perceived exertion for the exercise prescription in patients. Annals of Physical and Rehabilitation Medicine.", url: "https://pubmed.ncbi.nlm.nih.gov/22981746/" },
      { text: "Zourdos, M.C. et al. (2016). Novel Resistance Training-Specific Rating of Perceived Exertion Scale Measuring Repetitions in Reserve. Journal of Strength and Conditioning Research.", url: "https://pubmed.ncbi.nlm.nih.gov/26049792/" },
      { text: "Helms, E.R. et al. (2018). RPE vs. Percentage 1RM Loading in Periodized Programs: A Within-Subject Comparison. Frontiers in Physiology.", url: "https://pubmed.ncbi.nlm.nih.gov/29628895/" },
      { text: "Greig, L. et al. (2020). Autoregulation in Resistance Training: Addressing the Needs of the Individual. Sports Medicine - Open.", url: "https://sportsmedicine-open.springeropen.com/articles/10.1186/s40798-020-00260-0" },
    ],
  },

  l2: {
    subtitle: "L'anatomia della fatica",
    content: (
      <div className="space-y-6 text-foreground/80 leading-relaxed">
        <p>
          L'RPE sembra un numero semplice (da 1 a 10), ma in realtà rappresenta un'intersezione complessa di sistemi di segnalazione. Non è una percezione unica, è un <strong>punto di convergenza</strong>.
          Il corpo comunica la fatica attraverso quattro sistemi principali che non operano separatamente, ma si sovrappongono e interagiscono.
        </p>

        <p>
          La maniera più accurata di descrivere l'RPE non è come "un pilastro dopo l'altro", ma come l'intersezione di un diagramma di Venn a quattro cerchi. Solo la zona centrale rappresenta l'intensità reale.
          Se ne ignori uno, la tua stima sarà imprecisa. Per dire "sono a RPE 9", devi avere conferme da tutti e quattro i sistemi.
        </p>

        <CourseImage src="/images/courses/rpe/rpe-lesson-2-perception-process.webp" alt="Processo di percezione" caption="Dal segnale nervoso alla percezione dell'intensità." />

        <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Il Modello a 4 Sistemi</h3>
        <p>
          L'RPE non nasce da un solo segnale. È la zona di sovrapposizione tra quattro sistemi di fatica:
        </p>

        <CourseImage src="/images/courses/rpe/rpe-lesson-2-venn-diagram-4-systems.webp" alt="Venn Diagram 4 Sistemi" caption="I 4 sistemi di segnalazione dell'RPE." />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-card p-6 rounded-xl shadow-sm border border-sky-500/20">
            <h4 className="font-bold text-sky-400 mb-2 text-lg">1. Disagio Mentale/Fisico</h4>
            <p className="text-base">È il sistema di allarme precoce. Non è lo sforzo in sé, ma l'insieme delle sensazioni che lo alimentano: tensione, fiatone, "voglia di smettere". È il primo a comparire ma il meno affidabile da solo, perché influenzabile dall'ansia o dall'emozione.</p>
          </div>
          <div className="bg-card p-6 rounded-xl shadow-sm border border-sky-500/20">
            <h4 className="font-bold text-sky-400 mb-2 text-lg">2. Degradazione Tecnica</h4>
            <p className="text-base">È il segnale visivo. Quando i muscoli primari si stancano, il corpo cerca aiuto altrove (compensi). Se la tecnica cambia (es. schiena che si inarca, ginocchia che cedono), l'intensità è salita drasticamente.</p>
          </div>
          <div className="bg-card p-6 rounded-xl shadow-sm border border-sky-500/20">
            <h4 className="font-bold text-sky-400 mb-2 text-lg">3. Perdita di Velocità</h4>
            <p className="text-base">È il segnale oggettivo. La velocità concentrica diminuisce progressivamente: è un dato reale, non un'opinione. Misurabile (con encoder) o stimabile visivamente confrontando le prime rep con le ultime.</p>
          </div>
          <div className="bg-card p-6 rounded-xl shadow-sm border border-sky-500/20">
            <h4 className="font-bold text-sky-400 mb-2 text-lg">4. RIR (Reps In Reserve)</h4>
            <p className="text-base">È il segnale quantitativo. La stima di quante ripetizioni valide restano prima del cedimento tecnico. È l'uscita finale del sistema: il numero che riassume tutto (RPE 8 = RIR 2).</p>
          </div>
        </div>
      </div>
    ),
    insights: [
      { text: "Pageaux, B. (2016). Perception of effort in Exercise Science: Definition, measurement and perspectives. European Journal of Sport Science.", url: "https://pubmed.ncbi.nlm.nih.gov/26485447/" },
      { text: "Enoka, R.M. & Duchateau, J. (2016). Translating Fatigue to Human Performance. Medicine & Science in Sports & Exercise.", url: "https://pubmed.ncbi.nlm.nih.gov/27003608/" },
      { text: "Marcora, S.M. (2009). Perception of Effort During Exercise Is a Function of the Central Motor Command. Journal of Applied Physiology.", url: "https://pubmed.ncbi.nlm.nih.gov/19131474/" },
    ],
  },

  l3: {
    subtitle: "Il Primo Sistema",
    content: (
      <div className="space-y-6 text-foreground/80 leading-relaxed">
        <p>
          Il disagio è il primo sistema a manifestarsi durante una serie. È una sensazione composita: include la fatica respiratoria, il bruciore muscolare, la tensione sistemica e la stanchezza mentale.
          Non è un segnale preciso, ma è il "primo avviso" del corpo. Il problema è che molti atleti lo confondono con il cedimento reale.
        </p>

        <p>
          Il disagio cresce linearmente durante la serie, mentre la fatica reale (incapacità di generare forza) spesso arriva esponenzialmente solo alla fine.
          Nelle prime ripetizioni il disagio è minimo. A metà serie è crescente. Nelle ultime ripetizioni diventa sistemico. Al cedimento è massimo e inevitabile.
          È fondamentale capire che il disagio è un segnale precoce: un primo avviso del sistema nervoso che la serie sta entrando in un livello di intensità rilevante.
        </p>

        <CourseImage src="/images/courses/rpe/rpe-lesson-3-discomfort-timeline.webp" alt="Timeline del Disagio" caption="Evoluzione del disagio durante la serie." />

        <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Le 4 Facce del Disagio</h3>
        <p>Il disagio non è un fenomeno unico, ma la somma di diverse componenti che emergono simultaneamente:</p>

        <CourseImage src="/images/courses/rpe/rpe-lesson-3-discomfort-types.webp" alt="Tipologie di Disagio" caption="Le componenti del disagio: Respiratorio, Muscolare, Sistemico, Mentale." />

        <ul className="space-y-4 mt-4">
          <li className="flex items-start">
            <span className="bg-sky-500/20 text-foreground font-bold px-2 py-1 rounded text-xs mr-3 mt-1 flex-shrink-0">RESPIRATORIO</span>
            <span>Aumento della richiesta ventilatoria. Tipico dei multiarticolari ad alte ripetizioni (es. Squat a 15 rep). Spesso confonde i principianti che lo interpretano come "cedimento imminente", anche se le gambe hanno ancora forza.</span>
          </li>
          <li className="flex items-start">
            <span className="bg-sky-500/20 text-foreground font-bold px-2 py-1 rounded text-xs mr-3 mt-1 flex-shrink-0">MUSCOLARE</span>
            <span>Il bruciore locale, la tensione crescente. Provocato principalmente da metaboliti come ioni H+ e fosfati inorganici. <strong>Attenzione:</strong> il bruciore non è cedimento meccanico. Arriva prima della perdita di forza reale.</span>
          </li>
          <li className="flex items-start">
            <span className="bg-sky-500/20 text-foreground font-bold px-2 py-1 rounded text-xs mr-3 mt-1 flex-shrink-0">SISTEMICO</span>
            <span>La combinazione di respiro, postura, stabilità e attivazione coordinata. Tipico di squat, stacchi e press pesanti, dove tutto il corpo lavora insieme per mantenere l'assetto.</span>
          </li>
          <li className="flex items-start">
            <span className="bg-sky-500/20 text-foreground font-bold px-2 py-1 rounded text-xs mr-3 mt-1 flex-shrink-0">MENTALE</span>
            <span>La richiesta crescente di concentrazione, volontà e controllo. La fatica mentale può aumentare la percezione dello sforzo anche senza riduzioni di forza misurabili ("non ho voglia di spingere" vs "non riesco a spingere").</span>
          </li>
        </ul>

        <div className="bg-sky-500/10 p-5 rounded-lg border-l-4 border-sky-500 mt-6">
          <h4 className="font-bold text-foreground">Coach Tip: Attenzione al Bruciore</h4>
          <p className="text-base text-foreground/80 mt-1">
            Nel <strong>Leg Extension</strong> o nei <strong>Curl</strong>, il bruciore (Disagio Muscolare Locale) diventa insopportabile molto prima che il muscolo ceda meccanicamente.
            In questi casi, ignora il dolore e concentrati solo su: "Il peso sta rallentando? Riesco ancora a muoverlo?".
          </p>
        </div>
      </div>
    ),
    insights: [
      { text: "Enoka, R.M. & Duchateau, J. (2016). Translating Fatigue to Human Performance. Medicine & Science in Sports & Exercise.", url: "https://pubmed.ncbi.nlm.nih.gov/27003608/" },
      { text: "Marcora, S.M. (2009). Perception of Effort During Exercise Is a Function of the Central Motor Command. Journal of Applied Physiology.", url: "https://pubmed.ncbi.nlm.nih.gov/19131474/" },
      { text: "Allen, D.G., Lamb, G.D., Westerblad, H. (2008). Skeletal Muscle Fatigue: Cellular Mechanisms. Physiological Reviews.", url: "https://pubmed.ncbi.nlm.nih.gov/18195085/" },
      { text: "Marcora, S.M., Staiano, W., Manning, V. (2009). Mental Fatigue Impairs Physical Performance in Humans. Journal of Applied Physiology.", url: "https://pubmed.ncbi.nlm.nih.gov/19131473/" },
    ],
  },

  l4: {
    subtitle: "Il Secondo Sistema",
    content: (
      <div className="space-y-6 text-foreground/80 leading-relaxed">
        <p>
          La degradazione tecnica è il secondo sistema di segnalazione dell'RPE ed è uno dei sistemi più "sinceri".
          Quando il livello di fatica sale, il controllo fine del movimento cambia: la stabilizzazione diminuisce, la traiettoria si altera, la coordinazione si irrigidisce.
          Non si tratta di errori didattici, ma di adattamenti fisiologici alla fatica neuromuscolare.
        </p>

        <CourseImage src="/images/courses/rpe/rpe-lesson-4-technical-degradation-stages.webp" alt="Grafico a Scalini Degradazione" caption="Fasi della degradazione tecnica." />

        <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Come si manifesta la degradazione</h3>
        <p>La degradazione tecnica non compare tutta insieme. Avanza in modo graduale, e riconoscere questi stadi è fondamentale:</p>
        <ul className="list-disc pl-5 space-y-3">
          <li><strong>Micro-variazioni (RPE 6-7):</strong> Sono quasi invisibili. Una traiettoria leggermente meno pulita, un ritmo meno uniforme, un piccolo cambiamento nell'eccentrica. Sono segnali fisiologici, non errori gravi.</li>
          <li><strong>Strategie Alternative (RPE 7.5-8.5):</strong> Il corpo adotta compensi "intelligenti" per mantenere l'alzata. Il busto si inclina di più nello squat (per usare più glutei), i gomiti si aprono nella panca (per usare più spalle). L'intensità è salita.</li>
          <li><strong>Compensi Marcati (RPE 9-9.5):</strong> Segnali evidenti di lotta. Perdita della linea articolare, eccentrica veloce, concentrica disordinata, collasso del core. Siamo al limite della sicurezza.</li>
          <li><strong>Collasso (RPE 10):</strong> Cedimento tecnico. Il corpo non è più in grado di mantenere la struttura minima del movimento. Questo è RPE 10, anche se il peso sale ancora.</li>
        </ul>

        <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Adattamento vs Compenso Dannoso</h3>
        <p>
          È fondamentale distinguere tra un adattamento fisiologico (accettabile, parte della lotta) e un compenso dannoso (da evitare perché pericoloso).
        </p>

        <CourseImage src="/images/courses/rpe/rpe-lesson-4-adaptation-vs-compensation.webp" alt="Adattamento vs Compenso" caption="Differenza tra adattamento fisiologico e compenso dannoso." />

        <div className="mt-6 space-y-4">
          <h4 className="font-bold text-foreground">Esempi pratici:</h4>
          <ul className="list-disc pl-5 space-y-2 marker:text-sky-400">
            <li><strong>Squat:</strong> Se le ginocchia cedono all'interno (valgo non controllato) o il sedere sale prima del petto (sculata) → RPE molto alto.</li>
            <li><strong>Panca:</strong> Se il bilanciere perde la traiettoria o il sedere si stacca dalla panca → Limite tecnico raggiunto.</li>
            <li><strong>Curl:</strong> Se inizi a dondolare con la schiena → Hai superato il cedimento tecnico (RIR 0).</li>
          </ul>
        </div>
      </div>
    ),
    insights: [
      { text: "Forestier, N., Nougier, V. (1998). The Effects of Fatigue on Postural Control and Movement Accuracy. Neuroscience & Biobehavioral Reviews.", url: "https://pubmed.ncbi.nlm.nih.gov/9850930/" },
      { text: "Enoka, R.M., Duchateau, J. (2016). Translating Fatigue to Human Performance. Medicine & Science in Sports & Exercise.", url: "https://pubmed.ncbi.nlm.nih.gov/27003608/" },
      { text: "Stergiou, N., Decker, L. (2011). Human Movement Variability, Nonlinear Dynamics, and Pathology. Human Movement Science.", url: "https://pubmed.ncbi.nlm.nih.gov/21802165/" },
    ],
  },

  l5: {
    subtitle: "Il Terzo Sistema",
    content: (
      <div className="space-y-6 text-foreground/80 leading-relaxed">
        <p>
          La perdita di velocità (velocity loss) è il sistema più oggettivo. Indipendentemente da come ti senti (umore, bruciore), quando la fatica cresce, la fase concentrica rallenta.
          Questo accade a causa di meccanismi fisiologici precisi:
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>Riduzione del <em>firing rate</em> (frequenza di scarica) delle unità motorie da parte del Sistema Nervoso Centrale.</li>
          <li>Affaticamento delle fibre a contrazione rapida (che si stancano prima).</li>
          <li>Accumulo di metaboliti che interferiscono con i ponti actina-miosina, rendendo la contrazione meno efficiente.</li>
        </ul>

        <CourseImage src="/images/courses/rpe/rpe-lesson-5-velocity-loss-curve.webp" alt="Curva Velocità" caption="Curva della perdita di velocità (Velocity Loss)." />

        <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Il fenomeno del "Grind"</h3>
        <p>
          Quando la velocità scende sotto una certa soglia (solitamente 0.2 m/s), entriamo nella cosiddetta zona "Grind".
          È quella ripetizione che sembra durare un'eternità, dove il bilanciere si muove al rallentatore ma continua a salire.
          Il grind è tipico dell'RPE 9-10. Esiste un grind "sicuro" (controllato e tecnicamente stabile, tipico dei powerlifter) e un grind "da cedimento" (in cui la tecnica collassa per chiudere la rep). Riconoscere questa differenza è essenziale.
        </p>

        <CourseImage src="/images/courses/rpe/rpe-lesson-5-grind-phenomenon.webp" alt="Il Grind" caption="Il fenomeno del Grind: alta intensità, bassa velocità." />

        <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Come osservare la velocità senza strumenti</h3>
        <p>
          Non serve un encoder per capire l'RPE, basta l'occhio. Devi confrontare la velocità attuale con la <strong>Baseline</strong> (le prime ripetizioni fresche).
          Senza una baseline chiara, è impossibile valutare il rallentamento successivo. Se la prima ripetizione è lenta, non puoi capire quanto rallenti la quinta.
        </p>
        <div className="bg-sky-500/5 p-5 rounded-lg border border-sky-500/20 mt-6">
          <p className="font-bold text-foreground">Nota Bene:</p>
          <p className="text-base mt-1 text-foreground/80">
            La velocità va confrontata con la <strong>TUA baseline</strong> (le prime ripetizioni della stessa serie).
            Non confrontarla con gli altri. Alcuni atleti sono esplosivi, altri sono "diesel". Conta il rallentamento relativo, non la velocità assoluta.
          </p>
        </div>
      </div>
    ),
    insights: [
      { text: "Enoka, R.M. & Duchateau, J. (2016). Translating Fatigue to Human Performance. Medicine & Science in Sports & Exercise.", url: "https://pubmed.ncbi.nlm.nih.gov/27003608/" },
      { text: "González-Badillo, J.J. & Sánchez-Medina, L. (2010). Movement Velocity as a Measure of Loading Intensity in Resistance Training. International Journal of Sports Medicine.", url: "https://pubmed.ncbi.nlm.nih.gov/20180176/" },
      { text: "Allen, D.G., Lamb, G.D., & Westerblad, H. (2008). Skeletal Muscle Fatigue: Cellular Mechanisms. Physiological Reviews.", url: "https://pubmed.ncbi.nlm.nih.gov/18195085/" },
    ],
  },

  l6: {
    subtitle: "Il Quarto Sistema",
    content: (
      <div className="space-y-6 text-foreground/80 leading-relaxed">
        <p>
          Le RIR (Reps In Reserve) sono il quarto sistema, quello più quantificabile.
          Dire "RIR 2" significa: <em>"Posso fare altre due ripetizioni mantenendo una tecnica coerente e controllata"</em>.
          Attenzione: non contano le ripetizioni possibili "a tutti i costi" (con la schiena rotta o compensi estremi), ma solo quelle valide tecnicamente. Le RIR misurano la distanza dal cedimento tecnico, non da quello assoluto (e pericoloso).
        </p>

        <h3 className="text-xl font-bold text-foreground mt-6">La curva dell'apprendimento</h3>
        <p>
          Non aspettarti di essere preciso subito. I principianti tendono a sovrastimare e/o a sottostimare enormemente il proprio margine (pensano di avere 5 RIR quando ne hanno 10, o viceversa si fermano al bruciore pensando di essere al limite).
          La letteratura mostra che la precisione migliora drasticamente dopo 12-20 settimane di allenamento specifico con RPE e adattamento neurologico. È un'abilità che va allenata.
        </p>

        <CourseImage src="/images/courses/rpe/rpe-lesson-6-rir-estimation-error.webp" alt="Errore di Stima RIR" caption="Curva di apprendimento nella stima delle RIR." />

        <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Il Metodo dell'Ultima Ripetizione</h3>
        <p>
          Per stimare le RIR, devi analizzare l'ultima ripetizione eseguita. È lì che risiede la verità, perché è il momento di massimo accumulo di segnali di fatica.
        </p>

        <CourseImage src="/images/courses/rpe/rpe-lesson-6-baseline-vs-fatigue.webp" alt="Analisi Baseline vs Verità" caption="Confronto tra fluidità iniziale e fatica finale." />

        <div className="mt-4">
          <ul className="list-disc pl-5 space-y-2 marker:text-sky-400">
            <li>Se l'ultima rep è stata identica alla prima → <strong>RIR 4+ (Riscaldamento)</strong>.</li>
            <li>Se c'è stato un rallentamento visibile ma controllato → <strong>RIR 2-3</strong>.</li>
            <li>Se è stato un grind lento e difficile → <strong>RIR 0-1</strong>.</li>
            <li>Se è un grind con collasso tecnico o quasi fallita → <strong>RIR 0 (Cedimento)</strong>.</li>
          </ul>
        </div>
      </div>
    ),
    insights: [
      { text: "Helms, E.R., Zourdos, M.C., Storey, A. (2016). Application of the Repetitions in Reserve-Based Rating of Perceived Exertion Scale for Resistance Training. Journal of Strength and Conditioning Research.", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Helms+Application+of+the+Repetitions+in+Reserve-Based+Rating+of+Perceived+Exertion+Scale" },
      { text: "Steele, J., Fisher, J., Giessing, J. (2017). The Reliability of Repetitions-in-Reserve-Based Ratings of Perceived Exertion in a Repeated Measures Design. Journal of Sports Sciences.", url: "https://pubmed.ncbi.nlm.nih.gov/28135898/" },
      { text: "González-Badillo, J.J., Sánchez-Medina, L. (2010). Movement Velocity as a Measure of Loading Intensity in Resistance Training. International Journal of Sports Medicine.", url: "https://pubmed.ncbi.nlm.nih.gov/20180176/" },
    ],
  },

  l7: {
    subtitle: "La Procedura NCPT Completa",
    content: (
      <div className="space-y-6 text-foreground/80 leading-relaxed">
        <p>
          Valutare l'RPE non deve essere un'ipotesi vaga fatta mentre sei sotto sforzo. È un processo analitico che avviene in due tempi distinti: <strong>Osservazione</strong> (durante l'esecuzione) e <strong>Giudizio</strong> (subito dopo aver posato il peso).
        </p>

        <CourseImage src="/images/courses/rpe/rpe-lesson-7-evaluation-timeline.webp" alt="Timeline Valutazione" caption="Fasi della valutazione: Osservazione vs Giudizio." />

        <p>
          Mai decidere l'RPE a metà serie: la paura o il dolore momentaneo ti faranno sottostimare le tue capacità. Solo a mente lucida, nei secondi successivi al termine della serie, emetti il verdetto.
        </p>

        <h3 className="text-xl font-bold text-foreground mt-8 mb-4">La Check-list Operativa in 4 Step</h3>
        <p>
          Ogni volta che finisci una serie importante, scorri mentalmente questa lista in ordine. Non puoi saltare i passaggi.
        </p>

        <CourseImage src="/images/courses/rpe/rpe-lesson-7-checklist-sequence.webp" alt="Sequenza di Valutazione" caption="Sequenza operativa per stimare l'RPE." />

        <ol className="list-decimal pl-5 space-y-4 mt-4 marker:text-sky-400 marker:font-bold">
          <li><strong>Disagio:</strong> Come mi sentivo? Era panico o solo fatica? Serve per capire se siamo entrati nella zona allenante e per orientarsi.</li>
          <li><strong>Tecnica:</strong> Ho mantenuto la forma o ho compensato (es. schiena storta)? Valida la qualità del lavoro e la sicurezza.</li>
          <li><strong>Velocità:</strong> L'ultima rep è stata lenta? Quanto rispetto alla prima? Conferma oggettiva della fatica.</li>
          <li><strong>RIR:</strong> Sulla base di questi dati, quante ne avevo ancora davvero? Converti in numero RPE (O RIR = 10, 1 RIR = 9, ecc.).</li>
        </ol>
      </div>
    ),
    insights: [
      { text: "González-Badillo, J.J. & Sánchez-Medina, L. (2010). Movement Velocity as a Measure of Loading Intensity in Resistance Training. International Journal of Sports Medicine.", url: "https://pubmed.ncbi.nlm.nih.gov/20180176/" },
      { text: "Helms, E.R., Storey, A., Zourdos, M.C. (2016). Application of the Repetitions in Reserve-Based Rating of Perceived Exertion Scale for Resistance Training. Journal of Strength and Conditioning Research.", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Helms+Application+of+the+Repetitions+in+Reserve-Based+Rating+of+Perceived+Exertion+Scale" },
      { text: "Steele, J., Fisher, J., Giessing, J. (2017). The Reliability of Repetitions-in-Reserve Estimation in Trained and Untrained Individuals. Journal of Sports Sciences.", url: "https://pubmed.ncbi.nlm.nih.gov/28135898/" },
    ],
  },

  l8: {
    subtitle: "Session RPE (sRPE)",
    content: (
      <div className="space-y-6 text-foreground/80 leading-relaxed">
        <p>
          L'RPE della sessione non è la media matematica delle serie. È una valutazione globale dell'impatto che l'allenamento ha avuto sul tuo sistema nervoso e sulle tue riserve energetiche.
          Una sessione può avere singole serie intense (RPE 9), ma se il volume è basso e i recuperi lunghi, l'RPE della sessione potrebbe essere solo 6.
          Al contrario, una sessione metabolica ad alta densità può avere serie a RPE 7, ma lasciarti un RPE sessione di 9.
        </p>

        <h3 className="text-xl font-bold text-foreground mt-6">La Regola dei 10 Minuti</h3>
        <p>
          Mai giudicare la sessione mentre ti stai ancora allacciando le scarpe. Sei influenzato dall'ultimo esercizio (Recency Bias) e dall'affanno immediato.
          Devi aspettare la "Finestra di Normalizzazione" (5-10 minuti dopo la fine). La pausa filtra il "rumore" della fatica acuta e permette di percepire la vera fatica sistemica residua.
        </p>

        <CourseImage src="/images/courses/rpe/rpe-lesson-8-session-rpe-timeline.webp" alt="Timeline Session RPE" caption="Tempistica di valutazione del Session RPE." />

        <div className="bg-sky-500/5 p-5 mt-6 rounded-lg border border-sky-500/20">
          <h4 className="font-bold text-foreground mb-2">Esempio Pratico:</h4>
          <p className="text-base text-foreground/80">
            Hai fatto un allenamento di forza pura: poche ripetizioni, recuperi lunghi (3-5 min).
            Le singole serie erano pesanti (RPE 9), ma sei uscito dalla palestra fresco. <strong>RPE Sessione: 6 (Moderato).</strong>
            <br /><br />
            Hai fatto un circuito metabolico: pesi leggeri, zero recupero.
            Le singole serie erano facili (RPE 6), ma alla fine sei a terra senza fiato. <strong>RPE Sessione: 8-9 (Alto).</strong>
          </p>
        </div>
      </div>
    ),
    insights: [
      { text: "Foster, C., et al. (2001). A new approach to monitoring exercise training. Journal of Strength and Conditioning Research.", url: "https://pubmed.ncbi.nlm.nih.gov/11708692/" },
      { text: "Marcora, S.M. (2009). Perception of effort during exercise is a function of the central motor command. Journal of Applied Physiology.", url: "https://pubmed.ncbi.nlm.nih.gov/19131474/" },
      { text: "González-Badillo, J.J., Sánchez-Medina, L. (2010). Movement velocity as a measure of loading intensity in resistance training. International Journal of Sports Medicine.", url: "https://pubmed.ncbi.nlm.nih.gov/20180176/" },
    ],
  },

  l9: {
    subtitle: "Il Sistema CR10",
    content: (
      <div className="space-y-6 text-foreground/80 leading-relaxed">
        <p>
          Nel cardio, le regole cambiano. Non cerchiamo il cedimento muscolare meccanico (non vogliamo RIR 0), ma monitoriamo l'intensità metabolica e respiratoria.
          La fatica nel cardio è diversa: è centrale. Il bruciore alle gambe sulla cyclette può ingannare: non è detto che il cuore sia al limite solo perché i quadricipiti bruciano.
          Per questo usiamo la scala <strong>CR10 di Borg</strong> modificata.
        </p>

        <CourseImage src="/images/courses/rpe/rpe-lesson-9-cardio-cr10-table.webp" alt="Tabella Conversione Cardio" caption="Tabella di conversione Cardio: CR10 e Talk Test." />

        <div className="space-y-4 mt-6">
          <div className="bg-sky-500/5 p-4 rounded border border-sky-500/20">
            <h4 className="font-bold text-foreground">Zona Recupero (CR10 2-3)</h4>
            <p className="text-base">Riesci a parlare fluentemente con frasi complete. Respirazione nasale possibile. Ideale per riscaldamento o recupero attivo. (HR ~60%)</p>
          </div>
          <div className="bg-sky-500/10 p-4 rounded border border-sky-500/30">
            <h4 className="font-bold text-foreground">Zona Aerobica (CR10 4-5)</h4>
            <p className="text-base">Parli con frasi brevi, devi prendere fiato spesso. È il ritmo della corsa di fondo o della cyclette costante. (HR ~75%)</p>
          </div>
          <div className="bg-sky-500/20 p-4 rounded border border-sky-500/40">
            <h4 className="font-bold text-foreground">Soglia Anaerobica (CR10 6-7)</h4>
            <p className="text-base">Riesci a dire solo "sì" o "no". Respirazione profonda, ritmica e impegnata. È un lavoro duro e sostenibile per poco tempo. (HR ~85%)</p>
          </div>
          <div className="bg-sky-600 p-4 rounded border border-sky-700 text-white">
            <h4 className="font-bold">Massimale (CR10 8-10)</h4>
            <p className="text-base text-white/80">Silenzio totale. Affanno. È la zona degli sprint o dell'HIIT finale. (HR &gt;90%)</p>
          </div>
        </div>
      </div>
    ),
    insights: [
      { text: "Powers, S.K., Howley, E.T. (2018). Exercise Physiology: Theory and Application to Fitness and Performance. McGraw-Hill Education.", url: "https://www.mheducation.com/highered/product/exercise-physiology-theory-application-fitness-performance-powers-howley/M9781259870453.html" },
      { text: "Borg, G. (1998). Borg's Perceived Exertion and Pain Scales. Human Kinetics.", url: "https://books.google.it/books/about/Borg_s_Perceived_Exertion_and_Pain_Sca.html?id=o4_qAAAAMAAJ&redir_esc=y" },
      { text: "Chen, M.J., Fan, X., & Moe, S.T. (2002). Criterion-related validity of the Borg Ratings of Perceived Exertion scale in healthy individuals: a meta-analysis. Journal of Sports Sciences.", url: "https://pubmed.ncbi.nlm.nih.gov/12430990/" },
    ],
  },

  l10: {
    subtitle: "Autoregolazione Avanzata",
    content: (
      <div className="space-y-6 text-foreground/80 leading-relaxed">
        <p>
          L'RPE è il ponte tra il programma scritto (teoria) e il tuo corpo (pratica).
          Il coach ti dà un RPE target (l'intenzione), ma tu riporti l'RPE reale (la risposta). Quando questi non coincidono, devi usare l'autoregolazione.
        </p>

        <h3 className="text-xl font-bold text-foreground mt-6">Cosa fare se l'RPE non corrisponde?</h3>
        <p>
          Hai in scheda 100kg @ RPE 8. Inizi la serie e la senti pesantissima (RPE 9.5) o leggerissima (RPE 6). Cosa fai?
          Usa questo albero decisionale.
        </p>

        <CourseImage src="/images/courses/rpe/rpe-lesson-10-autoregulation-decision-tree.webp" alt="Albero Decisionale Autoregolazione" caption="Albero decisionale per l'autoregolazione del carico." />

        <div className="mt-6 border-l-4 border-sky-500 pl-4 py-2 bg-sky-500/5 rounded-r-lg">
          <p className="font-bold text-foreground">Regola d'oro dell'Autoregolazione:</p>
          <p className="italic text-foreground/80">"Onora il corpo che hai oggi, non quello che vorresti avere."</p>
          <p className="text-base mt-2">Se è una giornata NO, abbassare il peso non è un fallimento, è una strategia per non infortunarsi e continuare a progredire.</p>
        </div>

        <h3 className="text-xl font-bold text-foreground mt-8 mb-4">L'Onda del Mesociclo</h3>
        <p>
          L'intensità dell'allenamento non deve essere sempre al massimo. Segue un andamento a onde per permettere adattamento e recupero:
          <strong> Accumulo</strong> (RPE 6-7), <strong>Progressione</strong> (RPE 7.5-8.5), <strong>Picco</strong> (RPE 9+), <strong>Scarico</strong> (RPE 4-6).
        </p>

        <CourseImage src="/images/courses/rpe/rpe-lesson-10-mesocycle-wave.webp" alt="Grafico Mesociclo" caption="Andamento dell'intensità nel mesociclo." />
      </div>
    ),
    insights: [
      { text: "Foster, C. et al. (2001). A new approach to monitoring exercise training. Journal of Strength and Conditioning Research.", url: "https://pubmed.ncbi.nlm.nih.gov/11708692/" },
      { text: "Marcora, S.M. (2009). Perception of effort during exercise is a function of the central motor command. Journal of Applied Physiology.", url: "https://pubmed.ncbi.nlm.nih.gov/19131474/" },
      { text: "Helms, E.R., Storey, A., Zourdos, M. (2016). Application of the Repetitions in Reserve-Based Rating of Perceived Exertion Scale for Resistance Training. Journal of Strength and Conditioning Research.", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Helms+Application+of+the+Repetitions+in+Reserve-Based+Rating+of+Perceived+Exertion+Scale" },
    ],
  },

  l11: {
    subtitle: "Troubleshooting",
    content: (
      <div className="space-y-6 text-foreground/80 leading-relaxed">
        <p>
          Anche i professionisti sbagliano a stimare l'RPE. L'importante è avere un sistema per accorgersene.
          Gli errori non sono un ostacolo, ma la materia prima da cui nasce la precisione. Le cause sono molteplici: confusione tra segnali, bias cognitivi, variabilità emotiva.
        </p>

        <CourseImage src="/images/courses/rpe/rpe-lesson-11-common-errors-table.webp" alt="Tabella Problema Soluzione" caption="Errori comuni e soluzioni rapide." />

        <h3 className="text-xl font-bold text-foreground mt-6">Il Loop di Correzione</h3>
        <p>
          Se ti accorgi di aver sbagliato stima, usa questo ciclo mentale circolare per migliorare nel set successivo:
          <strong> Rivedi</strong> l'ultima rep, <strong>Confronta</strong> con la baseline, <strong>Filtra</strong> il bruciore, <strong>Identifica</strong> i compensi, <strong>Aggiorna</strong> la stima.
        </p>

        <CourseImage src="/images/courses/rpe/rpe-lesson-11-correction-loop.webp" alt="Loop di Correzione" caption="Ciclo di correzione della stima RPE." />

        <div className="space-y-6 mt-8">
          <h3 className="text-xl font-bold text-foreground">Analisi Approfondita degli Errori</h3>

          <div className="bg-sky-500/5 p-5 rounded-lg border border-sky-500/20">
            <h4 className="font-bold text-foreground mb-2">1. Il Bias dell'Ego ("Ne avevo ancora")</h4>
            <p className="text-base text-foreground/80">
              È l'errore classico maschile. Finisci una panca piana tremando, grindando per 4 secondi l'ultima rep, e dici "RPE 8".
              <br /><strong>Realtà:</strong> Era RPE 10.
              <br /><strong>Soluzione:</strong> Guardati in video. Se la velocità è crollata, non avevi margine.
            </p>
          </div>

          <div className="bg-sky-500/5 p-5 rounded-lg border border-sky-500/20">
            <h4 className="font-bold text-foreground mb-2">2. La Paura del Carico</h4>
            <p className="text-base text-foreground/80">
              Senti il peso "pesante" sulle spalle nello squat e ti fermi subito.
              <br /><strong>Realtà:</strong> La sensazione di gravità non è fatica muscolare. Spesso avevi ancora 4-5 colpi (RPE 5-6).
              <br /><strong>Soluzione:</strong> Impara a distinguere "pesante" (gravità) da "difficile" (sforzo).
            </p>
          </div>

          <div className="bg-sky-500/5 p-5 rounded-lg border border-sky-500/20">
            <h4 className="font-bold text-foreground mb-2">3. Il Bruciore Ingannatore</h4>
            <p className="text-base text-foreground/80">
              Negli esercizi ad alte ripetizioni (12-15+), il bruciore diventa insopportabile. Ti fermi perché fa male.
              <br /><strong>Realtà:</strong> Era dolore metabolico, non cedimento. Potevi continuare.
              <br /><strong>Soluzione:</strong> Usa la velocità come unico giudice. Finché il peso sale veloce, non fermarti.
            </p>
          </div>
        </div>
      </div>
    ),
    insights: [
      { text: "Marcora, S.M. (2009). Perception of effort during exercise is a function of the central motor command. Journal of Applied Physiology.", url: "https://pubmed.ncbi.nlm.nih.gov/19131474/" },
      { text: "González-Badillo, J.J., Sánchez-Medina, L. (2010). Movement velocity as a measure of loading intensity in resistance training. International Journal of Sports Medicine.", url: "https://pubmed.ncbi.nlm.nih.gov/20180176/" },
      { text: "Helms, E.R., Storey, A., Zourdos, M.C. (2016). Application of the Repetitions in Reserve-Based Rating of Perceived Exertion Scale for Resistance Training. Journal of Strength and Conditioning Research.", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Helms+Application+of+the+Repetitions+in+Reserve-Based+Rating+of+Perceived+Exertion+Scale" },
    ],
  },

  l12: {
    subtitle: "Risposte dal Campo",
    content: (
      <div className="space-y-6 text-foreground/80 leading-relaxed">
        <p>
          Situazioni reali che capitano in palestra e come gestirle secondo il metodo NCPT.
          Capire l'RPE è un processo che richiede tempo: all'inizio è normale confondere il disagio con la fatica reale.
        </p>

        <h3 className="text-xl font-bold text-foreground mt-6">Albero Decisionale Rapido</h3>
        <p>
          Sei alla fine della serie e non sai che RPE assegnare? Segui questo schema logico.
        </p>

        <CourseImage src="/images/courses/rpe/rpe-lesson-12-post-set-decision-tree.webp" alt="Albero Decisionale Fine Serie" caption="Schema decisionale post-serie." />

        <h3 className="text-xl font-bold text-foreground mt-8 mb-4">FAQ Rapide</h3>
        <p>Soluzioni immediate ai problemi più comuni.</p>

        <div className="space-y-4 mt-6">
          <div className="border border-sky-500/20 rounded-xl p-5 shadow-sm bg-card hover:shadow-md transition-shadow">
            <h4 className="font-bold text-foreground flex items-center mb-2">
              <span className="w-5 h-5 mr-2 text-sky-400">❓</span>
              Non sento il muscolo lavorare, sto sbagliando?
            </h4>
            <p className="text-foreground/80 text-base leading-relaxed">
              <strong>Mito da sfatare.</strong> La "connessione mente-muscolo" è sopravvalutata negli esercizi pesanti.
              In uno Stacco da Terra pesante non devi "sentire" i femorali, devi spostare il peso dal punto A al punto B mantenendo la schiena dritta.
              Se il peso sale e la tecnica è giusta, i muscoli stanno lavorando per forza fisica. Guarda la velocità e la fatica sistemica.
            </p>
          </div>

          <div className="border border-sky-500/20 rounded-xl p-5 shadow-sm bg-card hover:shadow-md transition-shadow">
            <h4 className="font-bold text-foreground flex items-center mb-2">
              <span className="w-5 h-5 mr-2 text-sky-400">⚠️</span>
              Ho paura di cedere sotto il bilanciere
            </h4>
            <p className="text-foreground/80 text-base leading-relaxed">
              La paura è un ottimo freno di sicurezza. Non serve arrivare a RPE 10 (cedimento) per crescere.
              Fermati sistematicamente a <strong>RPE 8 o 9</strong> (1-2 colpi in canna). Ottieni il 95% dei risultati con lo 0% del rischio di rimanere schiacciato.
              Impara a usare i supporti di sicurezza (safety bars) nel rack per la tua tranquillità mentale.
            </p>
          </div>

          <div className="border border-sky-500/20 rounded-xl p-5 shadow-sm bg-card hover:shadow-md transition-shadow">
            <h4 className="font-bold text-foreground flex items-center mb-2">
              <span className="w-5 h-5 mr-2 text-sky-400">📊</span>
              Oggi è proprio una "Giornata No"
            </h4>
            <p className="text-foreground/80 text-base leading-relaxed">
              Hai dormito male, hai litigato a lavoro, il riscaldamento pesa una tonnellata.
              <strong> Strategia:</strong> Abbassa il carico del 10-15% rispetto al solito, ma mantieni la qualità tecnica perfetta.
              Non cercare di battere record oggi. L'obiettivo diventa "fare il volume previsto senza farsi male". Domani è un altro giorno.
            </p>
          </div>

          <div className="border border-sky-500/20 rounded-xl p-5 shadow-sm bg-card hover:shadow-md transition-shadow">
            <h4 className="font-bold text-foreground flex items-center mb-2">
              <span className="w-5 h-5 mr-2 text-sky-400">✅</span>
              Tutto mi sembra troppo facile (Giornata Sì)
            </h4>
            <p className="text-foreground/80 text-base leading-relaxed">
              Sei in stato di grazia. I pesi volano.
              <strong> Strategia:</strong> Sfruttala, ma con intelligenza. Invece di caricare kg all'infinito (rischio infortunio per euforia), prova a migliorare la <strong>qualità</strong>.
              Fai fermi più lunghi, controlla meglio la discesa, strizza di più in cima. Aumenta la "densità" dell'allenamento accorciando un po' i recuperi.
            </p>
          </div>
        </div>
      </div>
    ),
    insights: [
      { text: "Li, Y., et al. (2019). Subjective and Objective Measures of Training Load and Intensity in Strength Training. Sports Medicine.", url: "https://pubmed.ncbi.nlm.nih.gov/30671900/" },
      { text: "Steele, J., Fisher, J., Giessing, J. (2017). The Reliability of Repetitions-in-Reserve-Based Ratings of Perceived Exertion. Journal of Sports Sciences.", url: "https://pubmed.ncbi.nlm.nih.gov/28135898/" },
      { text: "Chen, M.J., Fan, X., & Moe, S.T. (2002). Criterion-related validity of the Borg Ratings of Perceived Exertion scale in healthy individuals: a meta-analysis. Journal of Sports Sciences.", url: "https://pubmed.ncbi.nlm.nih.gov/12430990/" },
    ],
  },
};
