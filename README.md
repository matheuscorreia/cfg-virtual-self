# Virtual Self CFG

Stupid sentence generator that creates pseudo philosophical quotes in the aesthetic
of [Virtual Self music videos](https://www.youtube.com/watch?v=e7QeR0VxnlA).

It uses a (for now) simple context free grammar composed of:

### Non-Terminal Symbols
```
Ν = { S, NP, VP, PP }

S = Sentence
VP = Verb Phrase
NP = Noun Phrase
PP = Prepositional Phrase
```

### Terminal Symbols
```
Σ = { DT, Vi, Vt, NN, IN, ADJ }

DT = Determiner
Vi = Intransitive Verb
Vt = Transitive Verb
NN = Noun
IN = Preposition
ADJ = Adjective
```

### Alphabet
Check [Grammar File](src/grammar.js)

### Production Rules
```
S → {NP, VP}
---
VP → {Vi}
VP → {Vt, NP}
VP → {VP, PP}
---
NP → {DT, NN}
NP → {DT, ADJ, NN}
---
PP → {IN, NP}
```

### Start Symbols
```
S = {S}
```

## How to run
 - Clone this repo
 - Run `yarn`
 - Run `yarn start`
 - Check the `sentences` file created with 100 bullshit phrases

## Stuff to do later
- Extend the grammar
- Add length parameter to define an approximated length of the sentence
