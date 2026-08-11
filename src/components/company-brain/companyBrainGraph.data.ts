/**
 * Grafo del "company brain": i sistemi e i giacimenti di dati di un'azienda
 * e i legami fra loro. Le etichette stanno qui in entrambe le lingue invece
 * che in translations.ts: sono nomi di nodi, non copy di pagina, e tenerli
 * accanto alla topologia evita venti chiavi sparse.
 */

export type NodeKind = 'core' | 'hub' | 'leaf' | 'dot';

export interface BrainNode {
  id: string;
  kind: NodeKind;
  it?: string;
  en?: string;
}

export interface BrainLink {
  source: string;
  target: string;
}

const CORE = 'core';

/** Grappoli tematici: ognuno è un hub con le sue voci. */
const CLUSTERS: readonly {
  id: string;
  it: string;
  en: string;
  leaves: readonly { id: string; it: string; en: string }[];
}[] = [
  {
    id: 'doc',
    it: 'Documenti',
    en: 'Documents',
    leaves: [
      { id: 'doc-contratti', it: 'Contratti', en: 'Contracts' },
      { id: 'doc-preventivi', it: 'Preventivi', en: 'Quotes' },
      { id: 'doc-fatture', it: 'Fatture', en: 'Invoices' },
      { id: 'doc-ddt', it: 'DDT', en: 'Delivery notes' },
      { id: 'doc-capitolati', it: 'Capitolati', en: 'Specifications' },
    ],
  },
  {
    id: 'com',
    it: 'Comunicazioni',
    en: 'Communications',
    leaves: [
      { id: 'com-email', it: 'Email', en: 'Email' },
      { id: 'com-ticket', it: 'Ticket', en: 'Tickets' },
      { id: 'com-chat', it: 'Chat', en: 'Chat' },
      { id: 'com-chiamate', it: 'Chiamate', en: 'Calls' },
    ],
  },
  {
    id: 'ges',
    it: 'Gestionale',
    en: 'Core systems',
    leaves: [
      { id: 'ges-erp', it: 'ERP', en: 'ERP' },
      { id: 'ges-crm', it: 'CRM', en: 'CRM' },
      { id: 'ges-magazzino', it: 'Magazzino', en: 'Inventory' },
      { id: 'ges-anagrafiche', it: 'Anagrafiche', en: 'Master data' },
    ],
  },
  {
    id: 'ops',
    it: 'Operazioni',
    en: 'Operations',
    leaves: [
      { id: 'ops-commesse', it: 'Commesse', en: 'Jobs' },
      { id: 'ops-scadenze', it: 'Scadenze', en: 'Deadlines' },
      { id: 'ops-approvazioni', it: 'Approvazioni', en: 'Approvals' },
      { id: 'ops-turni', it: 'Turni', en: 'Shifts' },
    ],
  },
  {
    id: 'kno',
    it: 'Conoscenza',
    en: 'Knowledge',
    leaves: [
      { id: 'kno-procedure', it: 'Procedure', en: 'Procedures' },
      { id: 'kno-storico', it: 'Storico', en: 'History' },
      { id: 'kno-decisioni', it: 'Decisioni', en: 'Decisions' },
      { id: 'kno-manuali', it: 'Manuali', en: 'Manuals' },
    ],
  },
];

/**
 * Legami fra grappoli diversi. Sono loro a dare al grafo l'aspetto organico:
 * senza, resterebbe una stella di raggi separati.
 */
const CROSS_LINKS: readonly BrainLink[] = [
  { source: 'doc-preventivi', target: 'ges-crm' },
  { source: 'doc-fatture', target: 'ges-erp' },
  { source: 'doc-ddt', target: 'ges-magazzino' },
  { source: 'doc-contratti', target: 'ops-commesse' },
  { source: 'com-email', target: 'doc-preventivi' },
  { source: 'com-ticket', target: 'ops-approvazioni' },
  { source: 'com-chiamate', target: 'ges-crm' },
  { source: 'ops-commesse', target: 'ges-erp' },
  { source: 'ops-scadenze', target: 'doc-fatture' },
  { source: 'ops-turni', target: 'ges-anagrafiche' },
  { source: 'kno-procedure', target: 'ops-approvazioni' },
  { source: 'kno-storico', target: 'com-email' },
  { source: 'kno-decisioni', target: 'ops-commesse' },
  { source: 'kno-manuali', target: 'ges-erp' },
  { source: 'kno-storico', target: 'doc-contratti' },
];

/** Quanti puntini muti agganciare a ogni voce: sono il "pieno di punti". */
const DOTS_PER_LEAF = 2;

interface BrainGraph {
  nodes: readonly BrainNode[];
  links: readonly BrainLink[];
}

const build = (): BrainGraph => {
  const nodes: BrainNode[] = [
    { id: CORE, kind: 'core', it: 'Company Brain', en: 'Company Brain' },
  ];
  const links: BrainLink[] = [];

  CLUSTERS.forEach((cluster) => {
    nodes.push({ id: cluster.id, kind: 'hub', it: cluster.it, en: cluster.en });
    links.push({ source: CORE, target: cluster.id });

    cluster.leaves.forEach((leaf, leafIndex) => {
      nodes.push({ id: leaf.id, kind: 'leaf', it: leaf.it, en: leaf.en });
      links.push({ source: cluster.id, target: leaf.id });

      // Puntini senza nome: densità visiva, come le note isolate di un grafo reale.
      for (let d = 0; d < DOTS_PER_LEAF; d += 1) {
        const dotId = `${leaf.id}-d${d}`;
        nodes.push({ id: dotId, kind: 'dot' });
        // Alternati fra la voce e il suo hub, così i grappoli non sono raggiere identiche.
        links.push({ source: (leafIndex + d) % 3 === 0 ? cluster.id : leaf.id, target: dotId });
      }
    });
  });

  return { nodes, links: [...links, ...CROSS_LINKS] };
};

export const COMPANY_BRAIN_GRAPH: BrainGraph = build();
