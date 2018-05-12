// @flow

// @TODO: Extend this file with more grammar shit

type Symbols = {
  [string]: string,
}

type TerminalSymbols = {
  [string]: {
    [string]: string,
  },
}

const nonTerminalSymbols: Symbols = {
  S: 'S',
  VP: 'VP',
  NP: 'NP',
  PP: 'PP',
  DT: 'DT',
  Vi: 'Vi',
  Vt: 'Vt',
  NN: 'NN',
  IN: 'IN',
  ADJ: 'ADJ',
}

const terminalSymbols: TerminalSymbols = {
  transitiveVerbs: {
    saw: 'saw',
    sense: 'sense',
    is: 'is',
    trust: 'trust',
    sense: 'sense',
    resurrected: 'resurrected',
    locked: 'locked',
  },
  intransitiveVerbs: {
    sleeps: 'sleeps',
  },
  prepositions: {
    with: 'with',
    in: 'in',
    at: 'at',
    since: 'since',
    to: 'to',
    through: 'through',
  },
  nouns: {
    sky: 'sky',
    gate: 'gate',
    void: 'void',
    oblivion: 'oblivion',
    myth: 'myth',
    echo: 'echo',
    key: 'key',
    time: 'time',
    voice: 'voice',
    particle: 'particle',
    light: 'light',
    sense: 'sense',
    existence: 'existence',
    'digital-VIRUS': 'digital-VIRUS',
  },
  determiners: {
    the: 'the',
    my: 'my',
    your: 'your',
    our: 'our',
  },
  adjectives: {
    holy: 'holy',
    empty: 'empty',
    infinite: 'infinite',
  },
}

const {
  S,
  VP,
  NP,
  PP,
  DT,
  Vi,
  Vt,
  NN,
  IN,
  ADJ,
} = nonTerminalSymbols

export const startSymbols = [
  S,
]

// small alias for making referencing easier
const ts = terminalSymbols

export const productionRules: [string, string[]][] = [
  [S, [NP, VP]],
  //---
  [VP, [Vi]],
  [VP, [Vt, NP]],
  [VP, [VP, PP]],
  //---
  [NP, [DT, NN]],
  [NP, [DT, ADJ, NN]],
  // this causes recursion, making big as shit phrases
  // [NP, [NP, PP]],
  //---
  [PP, [IN, NP]],
  //---
  ...Object.values(terminalSymbols.transitiveVerbs).map((sbl: any) => [Vt, [sbl]]),
  ...Object.values(terminalSymbols.intransitiveVerbs).map((sbl: any) => [Vi, [sbl]]),
  //---
  ...Object.values(terminalSymbols.nouns).map((sbl: any) => [NN, [sbl]]),
  //---
  ...Object.values(terminalSymbols.determiners).map((sbl: any) => [DT, [sbl]]),
  //---
  ...Object.values(terminalSymbols.prepositions).map((sbl: any) => [IN, [sbl]]),
  //---
  ...Object.values(terminalSymbols.adjectives).map((sbl: any) => [ADJ, [sbl]]),
]
