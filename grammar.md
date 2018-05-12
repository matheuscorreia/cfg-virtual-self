## Context free grammar

### Non-Terminal Symbols
```
Ν = {S, NP, VP, PP, DT, Vi, Vt, NN, IN}

S = Sentence
VP = Verb Phrase
NP = Noun Phrase
PP = Prepositional Phrase
DT = Determiner
Vi = Intransitive Verb
Vt = Transitive Verb
NN = Noun
IN = Preposition
```

### Terminal Symbols
```
Σ = {sleeps, saw, man, woman, telescope, the, with, in}
```

### Production Rules
```
S → {NP, VP}
---
VP → {Vi}
VP → {Vt, NP}
VP → {VP, PP}
---
NP → {DT, NN}
NP → {NP, PP}
---
PP → {IN, NP}
---
Vi → {sleeps}
Vt → {saw}
---
NN → {man}
NN → {woman}
NN → {telescope}
---
DT → {the}
---
IN → {with}
IN → {in}
```

### Start Symbols
```
S = {S}
```
