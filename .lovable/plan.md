

## Piano: Caricamento immagini statiche nella cartella pubblica

### Come funziona

I path sono già configurati nei file `*-course-data.tsx` con la convenzione:
```
/images/courses/{corso}/{corso}-lesson-{n}-{keyword}.webp
```

Vite serve automaticamente tutto ciò che si trova nella cartella `public/` alla root dell'URL. Quindi il file:
```
public/images/courses/rpe/rpe-lesson-1-rpe-scale.webp
```
sarà accessibile all'URL `/images/courses/rpe/rpe-lesson-1-rpe-scale.webp` — esattamente come già referenziato nel codice.

### Cosa devi fare tu

1. **Crea le cartelle** nella directory `public/` del progetto:
   - `public/images/courses/rpe/`
   - `public/images/courses/nutrizione/`
   - `public/images/courses/integratori/`
   - `public/images/courses/cellulite/`

2. **Genera o prepara** i file `.webp` seguendo la checklist già prodotta (63 immagini totali).

3. **Carica i file** nel progetto. Hai due opzioni:
   - **Via chat**: inviameli qui e li posiziono io nella cartella corretta.
   - **Via Code Editor**: apri il Code Editor di Lovable (icona codice in alto), naviga in `public/images/courses/` e trascina i file.

### Cosa faccio io

Creerò le cartelle vuote nel progetto così sono pronte a ricevere i file. Nessuna modifica al codice è necessaria — i path sono già corretti.

Il componente `CourseImage` gestisce già il fallback: finché un file non esiste, mostra un placeholder elegante con il path mancante.

### Sezione tecnica

- **Formato**: `.webp` (già definito nei path)
- **Dimensioni consigliate**: 1200×675px (16:9) per le immagini dei corsi
- **Naming**: già standardizzato, non modificare i nomi nei file data
- **Nessuna migrazione DB necessaria** — le immagini sono asset statici

