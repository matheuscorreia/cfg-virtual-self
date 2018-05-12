// @flow

export type NonTerminalSymbol = string

export type TerminalSymbol = string

export type ProductionRule = [NonTerminalSymbol, Symbol[]]

export type StartSymbol = string

export type Symbol = NonTerminalSymbol | TerminalSymbol;

export type ContextFreeGrammar = {
  terminalSymbols: Array<TerminalSymbol>,
  nonTerminalSymbols: Array<NonTerminalSymbol>,
  productionRules: Array<[NonTerminalSymbol, Array<Symbol>]>,
  startSymbols: Array<NonTerminalSymbol>,
}
