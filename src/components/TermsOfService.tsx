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
              <p>Versione 2.0</p>
              <p>Data di entrata in vigore: 21 maggio 2025</p>
              <p>Ultimo aggiornamento: 21 maggio 2025</p>
            </div>
          </div>

          <div className="text-graphite/80 space-y-12">
            <section className="space-y-6">
              <h2 className="font-display font-bold text-3xl text-graphite border-b-2 border-aiblue pb-3">1. Definizioni</h2>
              <p className="leading-relaxed">Ai fini dei presenti Termini:</p>
              <div className="space-y-4 pl-4">
                <p className="leading-relaxed"><strong className="text-graphite">"Servizi":</strong> soluzioni di intelligenza artificiale, automazione, sistemi vocali, API, consulenza e ogni altro servizio erogato da Agentics</p>
                <p className="leading-relaxed"><strong className="text-graphite">"Cliente":</strong> persona fisica o giuridica che accede o utilizza i Servizi</p>
                <p className="leading-relaxed"><strong className="text-graphite">"Piattaforma":</strong> infrastrutture tecnologiche, software, dashboard e interfacce web/mobile di Agentics</p>
                <p className="leading-relaxed"><strong className="text-graphite">"Dati del Cliente":</strong> informazioni, contenuti e dati inseriti o generati dal Cliente nell'uso dei Servizi</p>
                <p className="leading-relaxed"><strong className="text-graphite">"Documentazione":</strong> manuali tecnici, API reference, guide fornite da Agentics</p>
                <p className="leading-relaxed"><strong className="text-graphite">"Contratto di Servizio":</strong> accordo commerciale specifico stipulato tra le parti</p>
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
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="font-display font-bold text-3xl text-graphite border-b-2 border-aiblue pb-3">3. Servizi Offerti</h2>
              <div className="space-y-4">
                <div>
                  <p className="leading-relaxed mb-3"><strong>3.1.</strong> Agentics eroga:</p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>Sviluppo e implementazione di soluzioni AI custom</li>
                    <li>Sistemi di automazione e workflow digitali</li>
                    <li>Voice AI e conversational interfaces</li>
                    <li>API e integrazioni tecnologiche</li>
                    <li>Consulenza strategica sull'innovazione digitale</li>
                  </ul>
                </div>
                <p className="leading-relaxed"><strong>3.2.</strong> Le specifiche tecniche, SLA, deliverable e pricing sono definiti nel Contratto di Servizio individuale.</p>
                <div>
                  <p className="leading-relaxed mb-3"><strong>3.3.</strong> Agentics si riserva di:</p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>modificare features e funzionalità previa comunicazione</li>
                    <li>sospendere servizi per manutenzione (con preavviso quando possibile)</li>
                    <li>aggiornare tecnologie e architetture sottostanti</li>
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
                    <li>reverse engineering, decompilazione, disassemblaggio del software</li>
                    <li>attacchi informatici, penetration test non autorizzati</li>
                    <li>sovraccarico intenzionale di sistemi (DoS/DDoS)</li>
                    <li>estrazione massiva di dati (scraping) non autorizzata</li>
                    <li>violazione di diritti IP di Agentics o terzi</li>
                  </ul>
                </div>
                <p className="leading-relaxed"><strong>4.4. Conformità normativa:</strong> rispettare GDPR, normative settoriali, regolamenti applicabili nel proprio dominio d'uso</p>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="font-display font-bold text-3xl text-graphite border-b-2 border-aiblue pb-3">5. Proprietà Intellettuale</h2>
              <div className="space-y-4">
                <div>
                  <p className="leading-relaxed mb-2"><strong>5.1. Proprietà di Agentics:</strong></p>
                  <p className="leading-relaxed pl-4">Tutti i diritti di proprietà intellettuale su software, codice, algoritmi, modelli AI, documentazione, brand, design rimangono di esclusiva proprietà di Agentics.</p>
                </div>
                <div>
                  <p className="leading-relaxed mb-2"><strong>5.2. Licenza d'uso:</strong></p>
                  <p className="leading-relaxed pl-4">Il Cliente riceve una licenza non esclusiva, non trasferibile, revocabile per utilizzare i Servizi secondo i termini contrattuali.</p>
                </div>
                <div>
                  <p className="leading-relaxed mb-2"><strong>5.3. Dati del Cliente:</strong></p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>Il Cliente mantiene piena proprietà dei propri Dati</li>
                    <li>Agentics tratta i Dati solo come responsabile del trattamento (art. 28 GDPR)</li>
                    <li>Il Cliente garantisce di avere tutti i diritti necessari sui Dati conferiti</li>
                  </ul>
                </div>
                <div>
                  <p className="leading-relaxed mb-2"><strong>5.4. Output generati da AI:</strong></p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>Output prodotti dai modelli AI appartengono al Cliente</li>
                    <li>Agentics può utilizzare dati aggregati e anonimizzati per migliorare i Servizi (previo consenso ove necessario)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="font-display font-bold text-3xl text-graphite border-b-2 border-aiblue pb-3">6. Protezione dei Dati Personali</h2>
              <div className="space-y-4">
                <div>
                  <p className="leading-relaxed mb-2"><strong>6.1. Riferimento all'Informativa Privacy:</strong></p>
                  <p className="leading-relaxed pl-4">Il trattamento dei dati personali è disciplinato dalla Privacy Policy, redatta ai sensi degli artt. 13-14 GDPR.</p>
                </div>
                <div>
                  <p className="leading-relaxed mb-2"><strong>6.2. Ruoli GDPR:</strong></p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>Titolare: Cliente (per i dati che conferisce)</li>
                    <li>Responsabile del trattamento: Agentics (art. 28 GDPR)</li>
                    <li>Un Data Processing Agreement (DPA) separato regola gli obblighi GDPR</li>
                  </ul>
                </div>
                <div>
                  <p className="leading-relaxed mb-2"><strong>6.3. Sicurezza:</strong></p>
                  <p className="leading-relaxed pl-4">Agentics implementa misure tecniche e organizzative adeguate (crittografia, controllo accessi, backup, monitoring).</p>
                </div>
                <div>
                  <p className="leading-relaxed mb-2"><strong>6.4. Data Breach:</strong></p>
                  <p className="leading-relaxed pl-4">In caso di violazione di dati personali, Agentics notifica il Cliente entro 72 ore dalla scoperta, come da art. 33 GDPR.</p>
                </div>
                <div>
                  <p className="leading-relaxed mb-2"><strong>6.5. Trasferimenti extra-UE:</strong></p>
                  <p className="leading-relaxed pl-4 mb-2">Eventuali trasferimenti verso Paesi terzi avvengono tramite:</p>
                  <ul className="list-disc pl-12 space-y-2">
                    <li>Clausole contrattuali standard UE</li>
                    <li>Decisioni di adeguatezza</li>
                    <li>Altri meccanismi legittimi (art. 46 GDPR)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="font-display font-bold text-3xl text-graphite border-b-2 border-aiblue pb-3">7. Limitazione di Responsabilità</h2>
              <div className="space-y-4">
                <div>
                  <p className="leading-relaxed mb-2"><strong>7.1. Servizi "as is":</strong></p>
                  <p className="leading-relaxed pl-4">I Servizi sono forniti "nello stato in cui si trovano", salvo quanto diversamente pattuito nel Contratto di Servizio.</p>
                </div>
                <div>
                  <p className="leading-relaxed mb-2"><strong>7.2. Esclusioni nei limiti di legge:</strong></p>
                  <p className="leading-relaxed pl-4 mb-2">Nei limiti consentiti dall'ordinamento italiano, Agentics non risponde di:</p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>danni indiretti, consequenziali, lucro cessante, perdita di dati (salvo dolo o colpa grave)</li>
                    <li>malfunzionamenti causati da: forza maggiore, interventi di terzi, uso improprio da parte del Cliente</li>
                    <li>contenuti, accuratezza o affidabilità di servizi/piattaforme di terze parti integrate</li>
                  </ul>
                </div>
                <div>
                  <p className="leading-relaxed mb-2"><strong>7.3. Massimale di responsabilità:</strong></p>
                  <p className="leading-relaxed pl-4">La responsabilità complessiva di Agentics è limitata all'importo corrisposto dal Cliente nei 12 mesi precedenti l'evento dannoso, salvo dolo o colpa grave.</p>
                </div>
                <div>
                  <p className="leading-relaxed mb-2"><strong>7.4. Obblighi non derogabili:</strong></p>
                  <p className="leading-relaxed pl-4">Restano fermi obblighi inderogabili per legge (es. responsabilità per danni da prodotto difettoso, tutela consumatori ove applicabile).</p>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="font-display font-bold text-3xl text-graphite border-b-2 border-aiblue pb-3">8. Servizi di Terze Parti</h2>
              <div className="space-y-4">
                <p className="leading-relaxed"><strong>8.1.</strong> La Piattaforma può integrare servizi esterni (cloud providers, API terze, plugin).</p>
                <div>
                  <p className="leading-relaxed mb-2"><strong>8.2.</strong> Agentics non controlla tali servizi e declina ogni responsabilità per:</p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>disponibilità, sicurezza, privacy</li>
                    <li>modifiche unilaterali di termini/funzionalità</li>
                    <li>interruzioni o data breach di terze parti</li>
                  </ul>
                </div>
                <p className="leading-relaxed"><strong>8.3.</strong> L'utilizzo di servizi di terzi è soggetto ai loro specifici Termini e Privacy Policy.</p>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="font-display font-bold text-3xl text-graphite border-b-2 border-aiblue pb-3">9. Durata, Sospensione e Risoluzione</h2>
              <div className="space-y-4">
                <p className="leading-relaxed"><strong>9.1. Durata:</strong> come da Contratto di Servizio (o a tempo indeterminato per utilizzo generico del sito).</p>
                <div>
                  <p className="leading-relaxed mb-2"><strong>9.2.</strong> Sospensione immediata da parte di Agentics in caso di:</p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>violazione grave dei Termini</li>
                    <li>mancato pagamento (se applicabile)</li>
                    <li>uso fraudolento o lesivo della sicurezza</li>
                    <li>ordine dell'autorità giudiziaria</li>
                  </ul>
                </div>
                <div>
                  <p className="leading-relaxed mb-2"><strong>9.3. Risoluzione:</strong></p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>Il Cliente può recedere secondo modalità previste nel Contratto di Servizio</li>
                    <li>Agentics può risolvere con 30 giorni di preavviso per giusta causa</li>
                  </ul>
                </div>
                <div>
                  <p className="leading-relaxed mb-2"><strong>9.4.</strong> Effetti della cessazione:</p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>accesso ai Servizi viene revocato</li>
                    <li>Dati del Cliente conservati per 90 giorni (salvo obblighi legali), poi cancellati</li>
                    <li>il Cliente può richiedere esportazione dati entro 30 giorni</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="font-display font-bold text-3xl text-graphite border-b-2 border-aiblue pb-3">10. Modifiche ai Termini</h2>
              <div className="space-y-4">
                <p className="leading-relaxed"><strong>10.1.</strong> Agentics può modificare i Termini in qualsiasi momento pubblicandoli sul sito.</p>
                <p className="leading-relaxed"><strong>10.2.</strong> Le modifiche sostanziali sono comunicate via email con 30 giorni di anticipo.</p>
                <p className="leading-relaxed"><strong>10.3.</strong> L'uso continuato dei Servizi dopo la modifica costituisce accettazione.</p>
                <p className="leading-relaxed"><strong>10.4.</strong> In caso di disaccordo, il Cliente può recedere entro 30 giorni dalla notifica.</p>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="font-display font-bold text-3xl text-graphite border-b-2 border-aiblue pb-3">11. Disposizioni Generali</h2>
              <div className="space-y-4">
                <p className="leading-relaxed"><strong>11.1. Cessione:</strong> Il Cliente non può cedere il contratto senza consenso scritto di Agentics.</p>
                <p className="leading-relaxed"><strong>11.2. Invalidità parziale:</strong> se una clausola è nulla, le altre restano valide.</p>
                <p className="leading-relaxed"><strong>11.3. Rinuncia:</strong> il mancato esercizio di un diritto non costituisce rinuncia.</p>
                <div>
                  <p className="leading-relaxed mb-2"><strong>11.4. Comunicazioni:</strong></p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>Cliente → Agentics: info@agentics.eu.com o PEC: agentics@pec.it</li>
                    <li>Agentics → Cliente: indirizzo indicato in fase di registrazione</li>
                  </ul>
                </div>
                <p className="leading-relaxed"><strong>11.5. Forza maggiore:</strong> nessuna parte risponde per inadempimenti causati da eventi di forza maggiore.</p>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="font-display font-bold text-3xl text-graphite border-b-2 border-aiblue pb-3">12. Legge Applicabile e Foro Competente</h2>
              <div className="space-y-4">
                <p className="leading-relaxed"><strong>12.1.</strong> I presenti Termini sono regolati dalla legge italiana.</p>
                <p className="leading-relaxed"><strong>12.2.</strong> Per controversie con consumatori: foro del luogo di residenza del consumatore (D.Lgs. 206/2005).</p>
                <p className="leading-relaxed"><strong>12.3.</strong> Per controversie con imprese/professionisti: competenza esclusiva del Foro di Roma.</p>
                <p className="leading-relaxed"><strong>12.4.</strong> Risoluzione alternativa: le parti possono ricorrere a mediazione/arbitrato prima di azioni giudiziali.</p>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="font-display font-bold text-3xl text-graphite border-b-2 border-aiblue pb-3">13. Contatti</h2>
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
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;