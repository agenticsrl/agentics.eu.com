import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TermsOfService: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const metaRobots = document.createElement('meta');
    metaRobots.name = 'robots';
    metaRobots.content = 'noindex, nofollow';
    document.head.appendChild(metaRobots);

    document.title = 'Termini di Servizio - Agentics';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Termini e condizioni di utilizzo del servizio Agentics SRL.');
    }

    return () => {
      if (metaRobots.parentNode) {
        document.head.removeChild(metaRobots);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.button
          onClick={() => navigate('/')}
          className="mb-8 inline-flex items-center gap-2 text-graphite hover:text-aiblue transition-colors duration-300"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ x: -5 }}
        >
          <ArrowLeft size={20} />
          Torna alla Home
        </motion.button>

        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h1 className="font-display font-bold text-4xl md:text-5xl text-graphite mb-4">
              Termini di Servizio
            </h1>
            <p className="text-lg font-semibold text-graphite/80 mb-2">Agentics SRL</p>
            <div className="text-sm text-graphite/60 space-y-1">
              <p>Versione 3.0</p>
              <p>Data di entrata in vigore: 16 marzo 2026</p>
              <p>Ultimo aggiornamento: 16 marzo 2026</p>
            </div>
          </div>

          <div className="text-graphite/80 mb-12">
            <p className="leading-relaxed text-lg">
              I presenti Termini di Servizio regolano il rapporto contrattuale tra Agentics SRL e i propri clienti, con particolare riferimento ai servizi di intelligenza artificiale, automazione e <strong>sviluppo software su commessa</strong>. Si applicano in conformità a:
            </p>
            <ul className="list-disc pl-8 mt-4 space-y-2">
              <li>Legge 22 aprile 1941, n. 633 (Legge sul Diritto d'Autore)</li>
              <li>Regolamento (UE) 2016/679 ("GDPR")</li>
              <li>Regolamento (UE) 2024/1689 ("AI Act")</li>
              <li>Codice Civile italiano (artt. 2222 e ss. – contratto d'opera)</li>
              <li>D.Lgs. 196/2003 (Codice Privacy, come modificato dal D.Lgs. 101/2018)</li>
              <li>D.Lgs. 70/2003 (Commercio elettronico)</li>
            </ul>
          </div>

          <div className="text-graphite/80 space-y-12">
            <section className="space-y-6">
              <h2 className="font-display font-bold text-3xl text-graphite border-b-2 border-aiblue pb-3">1. Definizioni</h2>
              <p className="leading-relaxed">Ai fini dei presenti Termini:</p>
              <div className="space-y-4 pl-4">
                <p className="leading-relaxed"><strong className="text-graphite">"Servizi":</strong> l'insieme delle soluzioni di intelligenza artificiale, automazione, sistemi vocali, API, consulenza e ogni altro servizio erogato da Agentics, ivi incluso lo sviluppo software su commessa</p>
                <p className="leading-relaxed"><strong className="text-graphite">"Servizi SaaS / Piattaforma":</strong> servizi forniti in modalità Software-as-a-Service tramite l'infrastruttura cloud di Agentics (chatbot gestiti, receptionist vocale, automazioni ricorrenti, dashboard), per i quali Agentics mantiene la titolarità dell'infrastruttura software</p>
                <p className="leading-relaxed"><strong className="text-graphite">"Software su Commessa":</strong> software, applicativi, sistemi, agenti AI, modelli personalizzati, workflow e ogni altro prodotto digitale sviluppato da Agentics appositamente e su specifiche istruzioni del Cliente, nell'ambito di un Contratto di Servizio dedicato</p>
                <p className="leading-relaxed"><strong className="text-graphite">"Deliverable":</strong> il risultato finale del Software su Commessa consegnato al Cliente, comprensivo di codice sorgente, documentazione tecnica e manuale d'uso, come specificato nel Contratto di Servizio</p>
                <p className="leading-relaxed"><strong className="text-graphite">"Componenti Preesistenti":</strong> framework, librerie, moduli, strumenti e know-how tecnico sviluppati da Agentics anteriormente o indipendentemente dal rapporto con il Cliente, incorporati nel Deliverable</p>
                <p className="leading-relaxed"><strong className="text-graphite">"Componenti Open Source":</strong> librerie, framework o strumenti distribuiti sotto licenze open source (MIT, Apache 2.0, GPL, LGPL, AGPL ecc.) eventualmente inclusi nel Deliverable</p>
                <p className="leading-relaxed"><strong className="text-graphite">"Cliente":</strong> persona fisica o giuridica che accede o utilizza i Servizi</p>
                <p className="leading-relaxed"><strong className="text-graphite">"Piattaforma":</strong> infrastrutture tecnologiche, software, dashboard e interfacce web/mobile di Agentics</p>
                <p className="leading-relaxed"><strong className="text-graphite">"Dati del Cliente":</strong> informazioni, contenuti e dati inseriti o generati dal Cliente nell'uso dei Servizi</p>
                <p className="leading-relaxed"><strong className="text-graphite">"Documentazione":</strong> manuali tecnici, API reference, guide fornite da Agentics</p>
                <p className="leading-relaxed"><strong className="text-graphite">"Contratto di Servizio":</strong> accordo commerciale specifico stipulato per iscritto tra le parti, che prevale sui presenti Termini in caso di conflitto</p>
                <p className="leading-relaxed"><strong className="text-graphite">"Diritti Patrimoniali d'Autore":</strong> i diritti di sfruttamento economico dell'opera dell'ingegno di cui agli artt. 12-18 e 64-bis L. 633/1941 (riproduzione, distribuzione, comunicazione al pubblico, modifica, traduzione, ecc.)</p>
                <p className="leading-relaxed"><strong className="text-graphite">"Diritti Morali":</strong> i diritti inalienabili di paternità intellettuale e integrità dell'opera di cui agli artt. 20-24 L. 633/1941, che rimangono in capo agli autori persone fisiche che hanno materialmente creato il software</p>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="font-display font-bold text-3xl text-graphite border-b-2 border-aiblue pb-3">2. Accettazione e Ambito</h2>
              <div className="space-y-4">
                <p className="leading-relaxed"><strong>2.1.</strong> L'accesso al sito web e l'utilizzo dei Servizi implica accettazione integrale dei presenti Termini.</p>
                <p className="leading-relaxed"><strong>2.2.</strong> I presenti Termini si applicano in via generale. Eventuali Contratti di Servizio specifici prevalgono su questi Termini in caso di conflitto.</p>
                <p className="leading-relaxed"><strong>2.3.</strong> L'uso dei Servizi è riservato a:</p>
                <ul className="list-disc pl-8 space-y-2">
                  <li>soggetti maggiorenni</li>
                  <li>imprese regolarmente costituite</li>
                  <li>soggetti con capacità giuridica di contrarre</li>
                </ul>
                <p className="leading-relaxed"><strong>2.4.</strong> Per i contratti di sviluppo Software su Commessa, il Contratto di Servizio scritto e firmato da entrambe le parti costituisce il documento contrattuale vincolante che definisce deliverable, tempistiche, corrispettivi e modalità di cessione dei diritti.</p>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="font-display font-bold text-3xl text-graphite border-b-2 border-aiblue pb-3">3. Servizi Offerti</h2>
              <div className="space-y-4">
                <div>
                  <p className="leading-relaxed mb-3"><strong>3.1. Servizi SaaS e Piattaforma:</strong></p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>Chatbot AI intelligenti erogati in modalità managed service</li>
                    <li>Receptionist vocale AI (Voice Agent) su infrastruttura Agentics</li>
                    <li>Automazioni e workflow digitali ricorrenti</li>
                    <li>API e integrazioni tecnologiche con sistemi del Cliente</li>
                    <li>Dashboard e analytics in cloud</li>
                  </ul>
                  <p className="leading-relaxed pl-4 mt-2 italic text-sm">Per questi servizi si applica la Sezione 5.1 (licenza d'uso).</p>
                </div>
                <div>
                  <p className="leading-relaxed mb-3"><strong>3.2. Sviluppo Software su Commessa:</strong></p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>Software personalizzati (Custom GPTs, agenti AI proprietari)</li>
                    <li>Applicativi web e mobile su misura</li>
                    <li>Sistemi gestionali con intelligenza artificiale integrata</li>
                    <li>Modelli AI fine-tuned su dati del Cliente</li>
                    <li>Integrazioni enterprise personalizzate</li>
                    <li>Computer vision e sistemi di AI Vision industriale</li>
                  </ul>
                  <p className="leading-relaxed pl-4 mt-2 italic text-sm">Per questi servizi si applica la Sezione 5.2 (cessione dei diritti patrimoniali d'autore).</p>
                </div>
                <div>
                  <p className="leading-relaxed mb-3"><strong>3.3. Consulenza e servizi professionali:</strong></p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>Consulenza strategica sull'innovazione digitale e AI</li>
                    <li>Analisi di fattibilità e definizione architetture</li>
                    <li>Formazione e training su soluzioni AI</li>
                  </ul>
                </div>
                <p className="leading-relaxed"><strong>3.4.</strong> Le specifiche tecniche, SLA, deliverable, milestone e pricing sono definiti nel Contratto di Servizio individuale.</p>
                <div>
                  <p className="leading-relaxed mb-3"><strong>3.5.</strong> Agentics si riserva di:</p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>modificare features e funzionalità dei Servizi SaaS previa comunicazione</li>
                    <li>sospendere servizi per manutenzione (con preavviso quando possibile)</li>
                    <li>aggiornare tecnologie e architetture sottostanti dei Servizi SaaS</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="font-display font-bold text-3xl text-graphite border-b-2 border-aiblue pb-3">4. Obblighi del Cliente</h2>
              <p className="leading-relaxed">Il Cliente si impegna a:</p>
              <div className="space-y-4">
                <p className="leading-relaxed"><strong>4.1. Utilizzo lecito:</strong> non utilizzare i Servizi per finalità illegali, fraudolente o lesive di diritti terzi</p>
                <p className="leading-relaxed"><strong>4.2. Sicurezza:</strong> proteggere credenziali di accesso, non condividerle, segnalare tempestivamente accessi non autorizzati</p>
                <div>
                  <p className="leading-relaxed mb-3"><strong>4.3. Divieti specifici:</strong></p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>reverse engineering, decompilazione, disassemblaggio dei Servizi SaaS di Agentics</li>
                    <li>attacchi informatici, penetration test non autorizzati</li>
                    <li>sovraccarico intenzionale di sistemi (DoS/DDoS)</li>
                    <li>estrazione massiva di dati (scraping) non autorizzata</li>
                    <li>violazione di diritti IP di Agentics o terzi</li>
                    <li>sublicenza, vendita o trasferimento non autorizzato dei Deliverable consegnati</li>
                  </ul>
                </div>
                <p className="leading-relaxed"><strong>4.4. Conformità normativa:</strong> rispettare GDPR, EU AI Act, normative settoriali e regolamenti applicabili nel proprio dominio d'uso. In particolare, il Cliente che utilizza soluzioni AI è responsabile della propria conformità al Regolamento (UE) 2024/1689 nelle classi di rischio applicabili</p>
                <p className="leading-relaxed"><strong>4.5. Collaborazione per sviluppo software:</strong> nei contratti di Software su Commessa, il Cliente si impegna a fornire tempestivamente specifiche, feedback, materiali e accessi necessari per lo svolgimento del lavoro, secondo le modalità concordate nel Contratto di Servizio</p>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="font-display font-bold text-3xl text-graphite border-b-2 border-aiblue pb-3">5. Proprietà Intellettuale</h2>
              <div className="space-y-6">

                <div className="bg-blue-50 border-l-4 border-aiblue p-4 rounded">
                  <p className="font-semibold text-graphite mb-2">Distinzione fondamentale</p>
                  <p className="leading-relaxed text-graphite/80">Il regime della proprietà intellettuale varia in base alla tipologia di servizio: per i <strong>Servizi SaaS</strong> Agentics concede una licenza d'uso; per lo <strong>Sviluppo Software su Commessa</strong> Agentics cede al Cliente i diritti patrimoniali d'autore sul software sviluppato appositamente. I dettagli specifici sono sempre definiti nel Contratto di Servizio.</p>
                </div>

                <div>
                  <p className="leading-relaxed mb-2"><strong>5.1. Servizi SaaS / Piattaforma – Licenza d'uso:</strong></p>
                  <p className="leading-relaxed pl-4 mb-3">Per i Servizi erogati in modalità SaaS (chatbot gestiti, receptionist vocale, automazioni cloud, dashboard), tutti i diritti di proprietà intellettuale su software, codice, algoritmi, modelli AI, documentazione tecnica, brand, design e infrastruttura rimangono di esclusiva proprietà di Agentics SRL.</p>
                  <p className="leading-relaxed pl-4">Il Cliente riceve una <strong>licenza d'uso non esclusiva, non trasferibile, revocabile</strong> per utilizzare i Servizi SaaS secondo i termini e la durata del Contratto di Servizio. La licenza termina automaticamente alla scadenza o risoluzione del contratto.</p>
                </div>

                <div>
                  <p className="leading-relaxed mb-2"><strong>5.2. Software su Commessa – Cessione dei Diritti Patrimoniali d'Autore:</strong></p>
                  <p className="leading-relaxed pl-4 mb-3">Per i contratti di sviluppo Software su Commessa, Agentics <strong>cede al Cliente, a titolo definitivo ed esclusivo</strong>, tutti i Diritti Patrimoniali d'Autore sul software sviluppato appositamente per il Cliente, ai sensi degli artt. 64-bis e seguenti della Legge 22 aprile 1941, n. 633.</p>
                  <p className="leading-relaxed pl-4 mb-2">La cessione:</p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>comprende il diritto di usare, riprodurre, distribuire, modificare, adattare, integrare, tradurre, sublicenziare e sfruttare economicamente il software in qualsiasi forma e con qualsiasi mezzo</li>
                    <li>è valida per tutta la durata della protezione del diritto d'autore (art. 25 L. 633/1941)</li>
                    <li>è valida per tutto il territorio mondiale</li>
                    <li><strong>ha efficacia al momento del pagamento integrale</strong> del corrispettivo concordato nel Contratto di Servizio. Prima del pagamento integrale, il Cliente riceve una licenza d'uso limitata per test e validazione</li>
                    <li>è irrevocabile, salvo inadempimento grave del Cliente agli obblighi del Contratto di Servizio</li>
                  </ul>
                </div>

                <div>
                  <p className="leading-relaxed mb-2"><strong>5.3. Diritti Morali dell'Autore (artt. 20-24 L. 633/1941):</strong></p>
                  <p className="leading-relaxed pl-4">I Diritti Morali degli autori persone fisiche (dipendenti e collaboratori di Agentics che hanno materialmente contribuito alla creazione del software) sono <strong>inalienabili per legge</strong> e rimangono in capo ai rispettivi autori. Ciò include il diritto di essere riconosciuti come autori del software. Questa disposizione è inderogabile ai sensi dell'art. 22 L. 633/1941 e non costituisce limitazione ai diritti economici ceduti al Cliente.</p>
                </div>

                <div>
                  <p className="leading-relaxed mb-2"><strong>5.4. Componenti Preesistenti di Agentics:</strong></p>
                  <p className="leading-relaxed pl-4 mb-3">Il software consegnato può includere Componenti Preesistenti (framework proprietari, moduli riutilizzabili, utility, know-how tecnico) sviluppati da Agentics anteriormente o indipendentemente dal rapporto con il Cliente.</p>
                  <p className="leading-relaxed pl-4">I Componenti Preesistenti rimangono di proprietà di Agentics. Tuttavia, con la consegna del Deliverable, Agentics concede al Cliente una <strong>licenza d'uso perpetua, irrevocabile, non esclusiva e non trasferibile</strong> sui Componenti Preesistenti, limitatamente all'utilizzo nell'ambito del software consegnato, senza diritto a distribuirli, modificarli o usarli separatamente. L'elenco dei Componenti Preesistenti è indicato nella documentazione tecnica del Deliverable.</p>
                </div>

                <div>
                  <p className="leading-relaxed mb-2"><strong>5.5. Componenti Open Source:</strong></p>
                  <p className="leading-relaxed pl-4 mb-3">Il software consegnato può incorporare librerie, framework e strumenti distribuiti sotto licenze open source. In tal caso:</p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>Agentics fornisce, allegato al Deliverable, l'elenco completo delle Componenti Open Source con le relative licenze (SBOM – Software Bill of Materials)</li>
                    <li>Il Cliente è tenuto a rispettare i termini delle licenze open source applicabili</li>
                    <li>Agentics garantisce la compatibilità delle licenze open source selezionate con il progetto e con l'uso commerciale previsto dal Cliente</li>
                    <li>Per componenti AGPL o altri copyleft forti che impongano obblighi di rilascio del codice sorgente, Agentics ne informerà preventivamente il Cliente nel Contratto di Servizio</li>
                  </ul>
                </div>

                <div>
                  <p className="leading-relaxed mb-2"><strong>5.6. Consegna del Codice Sorgente:</strong></p>
                  <p className="leading-relaxed pl-4 mb-3">Per i contratti di Software su Commessa, salvo diverso accordo espresso nel Contratto di Servizio:</p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>il codice sorgente completo del Deliverable è consegnato al Cliente in formato leggibile e versionato</li>
                    <li>la consegna avviene tramite repository Git (es. GitHub, GitLab, Bitbucket) o altro supporto concordato</li>
                    <li>include documentazione tecnica (README, architettura, istruzioni di deploy) e, ove applicabile, manuale utente</li>
                    <li>il Cliente riceve tutti i permessi e le credenziali necessarie per accedere e gestire il repository</li>
                  </ul>
                </div>

                <div>
                  <p className="leading-relaxed mb-2"><strong>5.7. Garanzia di Originalità e Non Violazione:</strong></p>
                  <p className="leading-relaxed pl-4 mb-2">Agentics garantisce che il software sviluppato su commessa:</p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>è di originale creazione da parte di Agentics o è autorizzato per l'uso commerciale</li>
                    <li>non viola diritti di proprietà intellettuale di terzi</li>
                    <li>non contiene backdoor, malware, codice malevolo o logiche non documentate intenzionalmente inserite</li>
                    <li>è conforme alle specifiche tecniche concordate nel Contratto di Servizio</li>
                  </ul>
                  <p className="leading-relaxed pl-4 mt-3">In caso di rivendicazione di violazione da parte di terzi, Agentics si obbliga a difendere il Cliente e a sostituire o modificare il software in modo da eliminare la violazione, salvo che la violazione derivi da modifiche apportate dal Cliente.</p>
                </div>

                <div>
                  <p className="leading-relaxed mb-2"><strong>5.8. Dati del Cliente:</strong></p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>Il Cliente mantiene piena proprietà dei propri Dati in ogni circostanza</li>
                    <li>Agentics tratta i Dati solo come responsabile del trattamento (art. 28 GDPR)</li>
                    <li>Il Cliente garantisce di avere tutti i diritti necessari sui Dati e sui materiali conferiti ad Agentics per l'esecuzione del servizio</li>
                  </ul>
                </div>

                <div>
                  <p className="leading-relaxed mb-2"><strong>5.9. Output generati da AI:</strong></p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>Gli output prodotti dalle soluzioni AI per conto del Cliente appartengono al Cliente</li>
                    <li>Agentics può utilizzare dati aggregati e anonimizzati per migliorare i Servizi, previo consenso ove necessario</li>
                    <li>Il Cliente è responsabile della valutazione e dell'uso degli output AI nel proprio contesto operativo</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="font-display font-bold text-3xl text-graphite border-b-2 border-aiblue pb-3">6. Sviluppo Software su Commessa – Disposizioni Specifiche</h2>
              <div className="space-y-6">
                <p className="leading-relaxed">Le presenti disposizioni si applicano esclusivamente ai contratti aventi ad oggetto lo sviluppo di Software su Commessa, integrando quanto previsto nel Contratto di Servizio specifico.</p>

                <div>
                  <p className="leading-relaxed mb-2"><strong>6.1. Processo di sviluppo:</strong></p>
                  <p className="leading-relaxed pl-4 mb-2">Lo sviluppo si svolge secondo le fasi e le milestone definite nel Contratto di Servizio, tipicamente:</p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li><strong>Analisi e definizione requisiti:</strong> raccolta delle specifiche funzionali e tecniche del Cliente</li>
                    <li><strong>Progettazione architetturale:</strong> definizione dell'architettura software e approvazione da parte del Cliente</li>
                    <li><strong>Sviluppo iterativo:</strong> implementazione con revisioni periodiche</li>
                    <li><strong>Test e validazione:</strong> testing interno e acceptance testing con il Cliente</li>
                    <li><strong>Consegna e go-live:</strong> deploy, consegna del codice sorgente e documentazione</li>
                  </ul>
                </div>

                <div>
                  <p className="leading-relaxed mb-2"><strong>6.2. Specifiche e change request:</strong></p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>Le specifiche tecniche concordate nel Contratto di Servizio sono vincolanti per entrambe le parti</li>
                    <li>Modifiche alle specifiche successive alla firma del contratto ("change request") devono essere concordate per iscritto e possono comportare adeguamenti di tempistiche e corrispettivo</li>
                    <li>Agentics si riserva di rifiutare change request che alterino sostanzialmente l'oggetto contrattuale, salvo accordo su un nuovo contratto</li>
                  </ul>
                </div>

                <div>
                  <p className="leading-relaxed mb-2"><strong>6.3. Test di accettazione (Acceptance Testing):</strong></p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>Prima della consegna finale, il Cliente ha diritto a un periodo di acceptance testing della durata concordata nel Contratto di Servizio (di default 15 giorni lavorativi)</li>
                    <li>Durante il periodo di test, il Cliente verifica la conformità del software alle specifiche concordate</li>
                    <li>I difetti riscontrati sono comunicati per iscritto entro la fine del periodo di test. Agentics si impegna a correggerli entro i termini concordati</li>
                    <li>Il silenzio del Cliente al termine del periodo di acceptance testing equivale ad accettazione tacita del Deliverable</li>
                    <li>L'accettazione (espressa o tacita) del Deliverable determina il trasferimento dei Diritti Patrimoniali d'Autore, contestualmente al saldo del corrispettivo</li>
                  </ul>
                </div>

                <div>
                  <p className="leading-relaxed mb-2"><strong>6.4. Garanzia post-consegna:</strong></p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>Agentics garantisce il Deliverable per un periodo di <strong>90 giorni</strong> dalla data di accettazione (salvo diverso accordo nel Contratto di Servizio)</li>
                    <li>Durante il periodo di garanzia, Agentics corregge gratuitamente i bug e i difetti che rendano il software non conforme alle specifiche concordate</li>
                    <li>La garanzia non copre: malfunzionamenti causati da modifiche apportate dal Cliente, incompatibilità con sistemi terzi non indicati nelle specifiche, uso improprio del software</li>
                    <li>Dopo la scadenza della garanzia, il supporto e la manutenzione sono regolati da un contratto separato</li>
                  </ul>
                </div>

                <div>
                  <p className="leading-relaxed mb-2"><strong>6.5. Riservatezza nel contesto dello sviluppo:</strong></p>
                  <p className="leading-relaxed pl-4 mb-2">Nel corso dello sviluppo software, entrambe le parti possono venire a conoscenza di informazioni riservate dell'altra parte (specifiche tecniche, modelli di business, dati tecnici, codice preesistente). Entrambe le parti si impegnano a:</p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>mantenere strettamente riservate tali informazioni</li>
                    <li>non divulgarle a terzi senza preventivo consenso scritto dell'altra parte</li>
                    <li>utilizzarle esclusivamente per l'esecuzione del contratto</li>
                  </ul>
                  <p className="leading-relaxed pl-4 mt-2">L'obbligo di riservatezza permane per 5 anni dalla cessazione del rapporto contrattuale, salvo diverso accordo nel Contratto di Servizio.</p>
                </div>

                <div>
                  <p className="leading-relaxed mb-2"><strong>6.6. Conformità EU AI Act per Software su Commessa:</strong></p>
                  <p className="leading-relaxed pl-4 mb-2">Per i sistemi AI sviluppati su commessa, le parti concordano nel Contratto di Servizio la ripartizione delle responsabilità ai sensi del Regolamento (UE) 2024/1689, in particolare:</p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>Agentics agisce come <em>provider</em> del sistema AI ai sensi dell'AI Act e si assume la responsabilità della conformità tecnica del sistema alle classi di rischio applicabili</li>
                    <li>Il Cliente, in qualità di <em>deployer</em>, è responsabile dell'utilizzo conforme del sistema AI nel proprio contesto operativo</li>
                    <li>Agentics fornisce la documentazione tecnica richiesta dall'AI Act, incluse le istruzioni d'uso e le informazioni sui limiti del sistema</li>
                    <li>Le parti collaborano per la valutazione della conformità e per eventuali adeguamenti normativi</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="font-display font-bold text-3xl text-graphite border-b-2 border-aiblue pb-3">7. Protezione dei Dati Personali</h2>
              <div className="space-y-4">
                <div>
                  <p className="leading-relaxed mb-2"><strong>7.1. Riferimento all'Informativa Privacy:</strong></p>
                  <p className="leading-relaxed pl-4">Il trattamento dei dati personali è disciplinato dalla Privacy Policy, redatta ai sensi degli artt. 13-14 GDPR.</p>
                </div>
                <div>
                  <p className="leading-relaxed mb-2"><strong>7.2. Ruoli GDPR:</strong></p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>Titolare: Cliente (per i dati che conferisce)</li>
                    <li>Responsabile del trattamento: Agentics (art. 28 GDPR)</li>
                    <li>Un Data Processing Agreement (DPA) separato regola gli obblighi GDPR</li>
                  </ul>
                </div>
                <div>
                  <p className="leading-relaxed mb-2"><strong>7.3. Sicurezza:</strong></p>
                  <p className="leading-relaxed pl-4">Agentics implementa misure tecniche e organizzative adeguate (crittografia TLS 1.3 / AES-256, controllo accessi, backup, monitoring, MFA).</p>
                </div>
                <div>
                  <p className="leading-relaxed mb-2"><strong>7.4. Data Breach:</strong></p>
                  <p className="leading-relaxed pl-4">In caso di violazione di dati personali, Agentics notifica il Cliente entro 72 ore dalla scoperta, come da art. 33 GDPR.</p>
                </div>
                <div>
                  <p className="leading-relaxed mb-2"><strong>7.5. Trasferimenti extra-UE:</strong></p>
                  <p className="leading-relaxed pl-4 mb-2">Eventuali trasferimenti verso Paesi terzi avvengono tramite:</p>
                  <ul className="list-disc pl-12 space-y-2">
                    <li>Clausole contrattuali standard UE (Decisione 2021/914)</li>
                    <li>Decisioni di adeguatezza della Commissione UE</li>
                    <li>EU-U.S. Data Privacy Framework (per fornitori USA certificati)</li>
                    <li>Altri meccanismi legittimi (art. 46 GDPR)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="font-display font-bold text-3xl text-graphite border-b-2 border-aiblue pb-3">8. Limitazione di Responsabilità</h2>
              <div className="space-y-4">
                <div>
                  <p className="leading-relaxed mb-2"><strong>8.1. Servizi SaaS "as is":</strong></p>
                  <p className="leading-relaxed pl-4">I Servizi SaaS sono forniti "nello stato in cui si trovano", salvo quanto diversamente pattuito nel Contratto di Servizio.</p>
                </div>
                <div>
                  <p className="leading-relaxed mb-2"><strong>8.2. Software su Commessa:</strong></p>
                  <p className="leading-relaxed pl-4">Per il Software su Commessa, Agentics risponde della conformità del Deliverable alle specifiche concordate, nei termini di cui alla Sezione 6.4 (garanzia post-consegna). La responsabilità per difetti latenti non rilevabili con ordinaria diligenza è regolata dalle norme applicabili al contratto d'opera (artt. 2222 e ss. c.c.) e al contratto d'appalto (artt. 1667-1668 c.c.) per analogia.</p>
                </div>
                <div>
                  <p className="leading-relaxed mb-2"><strong>8.3. Esclusioni nei limiti di legge:</strong></p>
                  <p className="leading-relaxed pl-4 mb-2">Nei limiti consentiti dall'ordinamento italiano, Agentics non risponde di:</p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>danni indiretti, consequenziali, lucro cessante, perdita di dati (salvo dolo o colpa grave)</li>
                    <li>malfunzionamenti causati da: forza maggiore, interventi di terzi, uso improprio da parte del Cliente</li>
                    <li>contenuti, accuratezza o affidabilità di servizi/piattaforme di terze parti integrate</li>
                    <li>decisioni operative adottate dal Cliente sulla base di output AI generati dai sistemi</li>
                  </ul>
                </div>
                <div>
                  <p className="leading-relaxed mb-2"><strong>8.4. Massimale di responsabilità:</strong></p>
                  <p className="leading-relaxed pl-4">La responsabilità complessiva di Agentics è limitata all'importo corrisposto dal Cliente nei 12 mesi precedenti l'evento dannoso, salvo dolo o colpa grave. Per il Software su Commessa, il massimale è pari al corrispettivo totale del Contratto di Servizio specifico, salvo dolo o colpa grave.</p>
                </div>
                <div>
                  <p className="leading-relaxed mb-2"><strong>8.5. Obblighi non derogabili:</strong></p>
                  <p className="leading-relaxed pl-4">Restano fermi obblighi inderogabili per legge (es. responsabilità per danni da prodotto difettoso, tutela consumatori ove applicabile, responsabilità per violazione del diritto d'autore).</p>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="font-display font-bold text-3xl text-graphite border-b-2 border-aiblue pb-3">9. Servizi di Terze Parti</h2>
              <div className="space-y-4">
                <p className="leading-relaxed"><strong>9.1.</strong> La Piattaforma e i Deliverable possono integrare servizi esterni (cloud providers, API terze, modelli AI di terzi, plugin).</p>
                <div>
                  <p className="leading-relaxed mb-2"><strong>9.2.</strong> Agentics non controlla tali servizi e declina ogni responsabilità per:</p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>disponibilità, sicurezza, privacy</li>
                    <li>modifiche unilaterali di termini/funzionalità</li>
                    <li>interruzioni o data breach di terze parti</li>
                  </ul>
                </div>
                <p className="leading-relaxed"><strong>9.3.</strong> Per i contratti di Software su Commessa, l'elenco dei servizi terzi integrati è indicato nella documentazione tecnica del Deliverable. Il Cliente è tenuto a rispettare i termini di servizio di tali fornitori terzi.</p>
                <p className="leading-relaxed"><strong>9.4.</strong> L'utilizzo di servizi di terzi è soggetto ai loro specifici Termini e Privacy Policy.</p>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="font-display font-bold text-3xl text-graphite border-b-2 border-aiblue pb-3">10. Durata, Sospensione e Risoluzione</h2>
              <div className="space-y-4">
                <p className="leading-relaxed"><strong>10.1. Durata:</strong> come da Contratto di Servizio (o a tempo indeterminato per utilizzo generico del sito).</p>
                <div>
                  <p className="leading-relaxed mb-2"><strong>10.2.</strong> Sospensione immediata da parte di Agentics in caso di:</p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>violazione grave dei Termini</li>
                    <li>mancato pagamento (se applicabile)</li>
                    <li>uso fraudolento o lesivo della sicurezza</li>
                    <li>ordine dell'autorità giudiziaria</li>
                  </ul>
                </div>
                <div>
                  <p className="leading-relaxed mb-2"><strong>10.3. Risoluzione:</strong></p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>Il Cliente può recedere secondo modalità previste nel Contratto di Servizio</li>
                    <li>Agentics può risolvere con 30 giorni di preavviso per giusta causa</li>
                    <li>Per i contratti di Software su Commessa, in caso di recesso anticipato del Cliente, è dovuto il corrispettivo per le attività svolte fino alla data di recesso</li>
                    <li>In caso di risoluzione per inadempimento di Agentics, il Cliente ha diritto alla restituzione del corrispettivo pagato per le fasi non completate</li>
                  </ul>
                </div>
                <div>
                  <p className="leading-relaxed mb-2"><strong>10.4.</strong> Effetti della cessazione per Servizi SaaS:</p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>accesso ai Servizi viene revocato</li>
                    <li>Dati del Cliente conservati per 90 giorni (salvo obblighi legali), poi cancellati</li>
                    <li>il Cliente può richiedere esportazione dati entro 30 giorni</li>
                  </ul>
                </div>
                <div>
                  <p className="leading-relaxed mb-2"><strong>10.5.</strong> Effetti della cessazione per Software su Commessa:</p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>i diritti ceduti restano in capo al Cliente per il software già consegnato e pagato</li>
                    <li>i lavori in corso vengono documentati e resi disponibili al Cliente nella loro forma attuale</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="font-display font-bold text-3xl text-graphite border-b-2 border-aiblue pb-3">11. Modifiche ai Termini</h2>
              <div className="space-y-4">
                <p className="leading-relaxed"><strong>11.1.</strong> Agentics può modificare i Termini in qualsiasi momento pubblicandoli sul sito.</p>
                <p className="leading-relaxed"><strong>11.2.</strong> Le modifiche sostanziali sono comunicate via email con 30 giorni di anticipo.</p>
                <p className="leading-relaxed"><strong>11.3.</strong> L'uso continuato dei Servizi dopo la modifica costituisce accettazione.</p>
                <p className="leading-relaxed"><strong>11.4.</strong> In caso di disaccordo, il Cliente può recedere entro 30 giorni dalla notifica.</p>
                <p className="leading-relaxed"><strong>11.5.</strong> Le modifiche ai presenti Termini non hanno effetto retroattivo sui Contratti di Servizio già conclusi, che rimangono regolati dalla versione dei Termini vigente alla data di sottoscrizione.</p>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="font-display font-bold text-3xl text-graphite border-b-2 border-aiblue pb-3">12. Disposizioni Generali</h2>
              <div className="space-y-4">
                <p className="leading-relaxed"><strong>12.1. Cessione:</strong> Il Cliente non può cedere il contratto senza consenso scritto di Agentics. Agentics può cedere il contratto a soggetti terzi che acquisiscano il ramo d'azienda, previa comunicazione al Cliente.</p>
                <p className="leading-relaxed"><strong>12.2. Invalidità parziale:</strong> se una clausola è nulla, le altre restano valide. La clausola nulla è sostituita dalla norma di legge applicabile.</p>
                <p className="leading-relaxed"><strong>12.3. Rinuncia:</strong> il mancato esercizio di un diritto non costituisce rinuncia.</p>
                <div>
                  <p className="leading-relaxed mb-2"><strong>12.4. Comunicazioni:</strong></p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>Cliente → Agentics: info@agentics.eu.com o PEC: agentics@pec.it</li>
                    <li>Agentics → Cliente: indirizzo email o PEC indicato in fase di registrazione o nel Contratto di Servizio</li>
                    <li>Per comunicazioni con valore legale, si raccomanda l'uso della PEC</li>
                  </ul>
                </div>
                <p className="leading-relaxed"><strong>12.5. Forza maggiore:</strong> nessuna parte risponde per inadempimenti causati da eventi di forza maggiore (inclusi: pandemie, cyberattacchi di massa, interruzioni infrastrutture critiche, provvedimenti governativi). La parte che subisce l'evento di forza maggiore ne dà comunicazione tempestiva all'altra parte.</p>
                <p className="leading-relaxed"><strong>12.6. Integrazione:</strong> i presenti Termini, unitamente al Contratto di Servizio e alla Privacy Policy, costituiscono l'intero accordo tra le parti in relazione all'oggetto del contratto e sostituiscono ogni precedente accordo verbale o scritto.</p>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="font-display font-bold text-3xl text-graphite border-b-2 border-aiblue pb-3">13. Legge Applicabile e Foro Competente</h2>
              <div className="space-y-4">
                <p className="leading-relaxed"><strong>13.1.</strong> I presenti Termini e i Contratti di Servizio sono regolati dalla legge italiana.</p>
                <p className="leading-relaxed"><strong>13.2.</strong> Per controversie con consumatori: foro del luogo di residenza del consumatore (D.Lgs. 206/2005).</p>
                <p className="leading-relaxed"><strong>13.3.</strong> Per controversie con imprese/professionisti: competenza esclusiva del Foro di Roma.</p>
                <p className="leading-relaxed"><strong>13.4.</strong> Risoluzione alternativa: le parti possono ricorrere a mediazione/arbitrato prima di azioni giudiziali (D.Lgs. 28/2010).</p>
                <p className="leading-relaxed"><strong>13.5.</strong> Per le controversie relative a contratti di sviluppo software, si applica in via interpretativa la disciplina del contratto d'opera intellettuale (artt. 2222 e ss. c.c.) e, ove pertinente, la Legge 22 aprile 1941, n. 633.</p>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="font-display font-bold text-3xl text-graphite border-b-2 border-aiblue pb-3">14. Contatti</h2>
              <div className="grid md:grid-cols-2 gap-6 text-base">
                <div className="space-y-2">
                  <p className="font-semibold text-graphite text-lg">Agentics SRL</p>
                  <p className="leading-relaxed">Via Vincenzo Monti 16<br />04100 Latina (LT) – Italia</p>
                  <p className="leading-relaxed"><strong>P.IVA:</strong> 03335160598</p>
                </div>
                <div className="space-y-2">
                  <p className="leading-relaxed"><strong>Email:</strong> <a href="mailto:info@agentics.eu.com" className="text-aiblue hover:underline">info@agentics.eu.com</a></p>
                  <p className="leading-relaxed"><strong>PEC:</strong> <a href="mailto:agentics@pec.it" className="text-aiblue hover:underline">agentics@pec.it</a></p>
                  <p className="leading-relaxed"><strong>Web:</strong> <a href="https://agentics.eu.com" className="text-aiblue hover:underline">www.agentics.eu.com</a></p>
                </div>
              </div>
            </section>
          </div>

          <div className="mt-16 pt-8 border-t-2 border-gray-300 text-center space-y-2">
            <p className="text-sm text-graphite/60">Ultimo aggiornamento: 16 marzo 2026</p>
            <p className="text-sm text-graphite/60">Versione: 3.0</p>
            <p className="text-sm text-graphite/60">Prossima revisione prevista: Marzo 2027</p>
            <p className="text-sm text-graphite/60 mt-4">© 2025–2026 Agentics SRL – Tutti i diritti riservati</p>
            <p className="text-sm text-graphite/60">P.IVA: 03335160598</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;
