// @flow

const nonTerminalSymbols = {
  S: 'S',
  VP: 'VP',
  NP: 'NP',
  PP: 'PP',
  DT: 'DT',
  Vi: 'Vi',
  Vt: 'Vt',
  NN: 'NN',
  IN: 'IN',
}

const terminalSymbols = {
  sleeps: 'sleeps',
  saw: 'saw',
  man: 'man',
  woman: 'woman',
  telescope: 'telescope',
  the: 'the',
  with: 'with',
  in: 'in',
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
} = nonTerminalSymbols

export const startSymbols = [
  S,
]

// small alias for making referencing easier
const ts = terminalSymbols

export const productionRules = [
  [S, [NP, VP]],
  //---
  [VP, [Vi]],
  [VP, [Vt, NP]],
  [VP, [VP, PP]],
  //---
  [NP, [DT, NN]],
  [NP, [NP, PP]],
  //---
  [PP, [IN, NP]],
  //---
  [Vi, [ts.sleeps]],
  [Vt, [ts.saw]],
  //---
  [NN, [ts.man]],
  [NN, [ts.woman]],
  [NN, [ts.telescope]],
  //---
  [DT, [ts.the]],
  //---
  [IN, [ts.with]],
  [IN, [ts.in]],
]
