import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const metaRobots = document.createElement('meta');
    metaRobots.name = 'robots';
    metaRobots.content = 'noindex, nofollow';
    document.head.appendChild(metaRobots);

    document.title = 'Privacy e Cookie Policy - Agentics';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Privacy e Cookie Policy di Agentics SRL.');
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
              Privacy e Cookie Policy
            </h1>
            <p className="text-lg font-semibold text-graphite/80 mb-2">Agentics SRL</p>
            <div className="text-sm text-graphite/60 space-y-1">
              <p>Data di entrata in vigore: 21 maggio 2025</p>
              <p>Ultimo aggiornamento: 16 marzo 2026</p>
            </div>
          </div>

          <div className="text-graphite/80 mb-12">
            <p className="leading-relaxed text-lg">
              Benvenuto su Agentics! La protezione della tua privacy è una nostra priorità assoluta. Questa informativa descrive in modo trasparente come raccogliamo, utilizziamo e proteggiamo i tuoi dati personali, in piena conformità a:
            </p>
            <ul className="list-disc pl-8 mt-4 space-y-2">
              <li>Regolamento (UE) 2016/679 ("GDPR")</li>
              <li>Direttiva 2002/58/CE ("Direttiva ePrivacy")</li>
              <li>D.Lgs. 196/2003 (Codice Privacy italiano, come modificato dal D.Lgs. 101/2018)</li>
              <li>Regolamento (UE) 2024/1689 ("AI Act") – per i trattamenti connessi a sistemi di intelligenza artificiale</li>
            </ul>
          </div>

          <div className="text-graphite/80 space-y-12">
            <section className="space-y-6">
              <h2 className="font-display font-bold text-3xl text-graphite border-b-2 border-aiblue pb-3">1. Titolare del Trattamento</h2>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-graphite text-lg mb-2">Agentics SRL</p>
                  <p className="leading-relaxed">Via Vincenzo Monti 16, 04100 Latina (LT) – Italia</p>
                  <p className="leading-relaxed">Capitale sociale: €10.000,00</p>
                  <p className="leading-relaxed">P.IVA: 03335160598</p>
                  <p className="leading-relaxed">Email: <a href="mailto:info@agentics.eu.com" className="text-aiblue hover:underline">info@agentics.eu.com</a></p>
                  <p className="leading-relaxed">PEC: <a href="mailto:agentics@pec.it" className="text-aiblue hover:underline">agentics@pec.it</a></p>
                  <p className="leading-relaxed">Tel: +39 320 289 2541</p>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="font-display font-bold text-3xl text-graphite border-b-2 border-aiblue pb-3">2. Ambito di Applicazione</h2>
              <p className="leading-relaxed">Questa informativa si applica a:</p>
              <div className="space-y-4">
                <div>
                  <p className="leading-relaxed mb-2"><strong>2.1 Dati raccolti tramite il sito web</strong></p>
                  <p className="leading-relaxed pl-4 mb-1">Quando navighi su www.agentics.eu.com o ci contatti tramite form</p>
                  <p className="leading-relaxed pl-4"><em>Ruolo GDPR: Agentics è Titolare del Trattamento</em></p>
                </div>
                <div>
                  <p className="leading-relaxed mb-2"><strong>2.2 Dati trattati nei Servizi AI/Automazione SaaS (clienti B2B)</strong></p>
                  <p className="leading-relaxed pl-4 mb-1">Quando Agentics fornisce servizi di intelligenza artificiale in modalità managed (chatbot, receptionist vocale, automazioni cloud) ai clienti business</p>
                  <p className="leading-relaxed pl-4"><em>Ruolo GDPR: Agentics agisce come Responsabile del Trattamento (Art. 28 GDPR)</em></p>
                  <p className="leading-relaxed pl-4 mt-2">Il trattamento è regolato da un Data Processing Agreement (DPA) specifico allegato al contratto di servizio.</p>
                </div>
                <div>
                  <p className="leading-relaxed mb-2"><strong>2.3 Dati trattati nell'ambito di contratti di Sviluppo Software su Commessa (clienti B2B)</strong></p>
                  <p className="leading-relaxed pl-4 mb-1">Quando Agentics sviluppa software personalizzato, agenti AI, applicativi o sistemi su misura per conto del Cliente, potrebbe venire a contatto con dati personali forniti dal Cliente per finalità di sviluppo, test e integrazione</p>
                  <p className="leading-relaxed pl-4"><em>Ruolo GDPR: Agentics agisce come Responsabile del Trattamento (Art. 28 GDPR). Il Cliente rimane Titolare dei dati.</em></p>
                  <p className="leading-relaxed pl-4 mt-2">Il trattamento è regolato da un Data Processing Agreement (DPA) specifico allegato al Contratto di Servizio. Agentics tratta i dati esclusivamente per l'esecuzione del contratto di sviluppo e non per finalità proprie.</p>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="font-display font-bold text-3xl text-graphite border-b-2 border-aiblue pb-3">3. Tipologie di Dati Personali Trattati</h2>
              <div className="space-y-6">
                <div>
                  <p className="leading-relaxed mb-2"><strong>3.1 Dati raccolti sul sito web</strong></p>
                  <p className="leading-relaxed pl-4 mb-2">A) Dati forniti volontariamente (modulo contatti):</p>
                  <ul className="list-disc pl-12 space-y-2">
                    <li>Dati identificativi: nome, cognome</li>
                    <li>Dati di contatto: indirizzo email, numero di telefono</li>
                    <li>Dati professionali: nome azienda, settore, ruolo</li>
                    <li>Dati sulla richiesta: tipo di automazione richiesta, messaggio libero</li>
                  </ul>
                </div>
                <div>
                  <p className="leading-relaxed mb-2"><strong>3.2 Dati trattati nei Servizi AI SaaS (per conto dei clienti)</strong></p>
                  <p className="leading-relaxed pl-4 mb-2">Quando forniamo servizi di automazione AI in modalità managed ai nostri clienti business, possiamo trattare per loro conto:</p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>Conversazioni AI: testi, messaggi, trascrizioni di interazioni con chatbot/receptionist virtuali</li>
                    <li>Registrazioni vocali: audio delle chiamate gestite da Voice AI</li>
                    <li>Dati identificativi end-user: nome, email, telefono degli utenti finali del Cliente</li>
                    <li>Dati comportamentali: pattern di utilizzo, preferenze, cronologia interazioni</li>
                    <li>Log di sistema: timestamp, errori, metriche prestazionali</li>
                    <li>Metadati operativi: informazioni tecniche sulle sessioni AI</li>
                  </ul>
                  <p className="leading-relaxed pl-4 mt-3 italic">Attenzione: In questo contesto, il Cliente rimane Titolare del trattamento. Agentics è Responsabile (Art. 28 GDPR) e opera secondo le istruzioni documentate nel DPA.</p>
                </div>
                <div>
                  <p className="leading-relaxed mb-2"><strong>3.3 Dati trattati nello Sviluppo Software su Commessa (per conto dei clienti)</strong></p>
                  <p className="leading-relaxed pl-4 mb-2">Nell'ambito di contratti di sviluppo software personalizzato, Agentics può trattare per conto del Cliente:</p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>Dati tecnici forniti per lo sviluppo: dataset di training, dati di test, esempi di utilizzo</li>
                    <li>Dati di integrazione: strutture di database, schemi API, dati campione anonimi o pseudonimizzati</li>
                    <li>Dati degli utenti finali del Cliente utilizzati esclusivamente in ambienti di test e staging</li>
                    <li>Log e metriche di utilizzo nelle fasi di collaudo</li>
                  </ul>
                  <p className="leading-relaxed pl-4 mt-3 italic">Attenzione: I dati forniti per lo sviluppo devono essere preferibilmente anonimi o pseudonimizzati. Se contengono dati personali, il Cliente è responsabile di informarne preventivamente Agentics e di regolare il trattamento tramite DPA. Agentics non utilizza tali dati per finalità proprie.</p>
                </div>
                <div>
                  <p className="leading-relaxed mb-2"><strong>3.3 Categorie particolari di dati (Art. 9 GDPR)</strong></p>
                  <p className="leading-relaxed pl-4 mb-2">NON raccogliamo intenzionalmente dati sensibili quali:</p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>Origine razziale o etnica</li>
                    <li>Opinioni politiche, religiose, filosofiche</li>
                    <li>Dati genetici o biometrici</li>
                    <li>Dati relativi alla salute</li>
                    <li>Vita sessuale o orientamento sessuale</li>
                  </ul>
                  <p className="leading-relaxed pl-4 mt-3">Se tali dati fossero inseriti spontaneamente (es. in messaggi liberi), procederemo alla loro immediata cancellazione senza utilizzo.</p>
                </div>
                <div>
                  <p className="leading-relaxed mb-2"><strong>3.4 Dati raccolti tramite Chatbot AI</strong></p>
                  <p className="leading-relaxed pl-4 mb-3">Quando utilizzi il chatbot presente sul nostro sito web, i tuoi dati vengono trattati anche da fornitori terzi essenziali per il funzionamento del servizio:</p>

                  <div className="pl-4 space-y-6">
                    <div>
                      <p className="font-semibold mb-2">A) Dati raccolti durante l'interazione con il chatbot:</p>
                      <ul className="list-disc pl-8 space-y-2">
                        <li><strong>Messaggi e contenuti della conversazione:</strong> tutto il testo che scrivi nel chatbot</li>
                        <li><strong>Dati di sessione:</strong> timestamp, durata conversazione, ID sessione</li>
                        <li><strong>Metadati tecnici:</strong> indirizzo IP, user agent, lingua del browser</li>
                        <li><strong>Dati forniti volontariamente:</strong> eventuali informazioni personali che scegli di condividere durante la conversazione (nome, email, telefono, richieste specifiche)</li>
                      </ul>
                    </div>

                    <div>
                      <p className="font-semibold mb-3">B) Responsabili del Trattamento per il Chatbot</p>
                      <p className="leading-relaxed mb-3">Quando utilizzi il chatbot, i tuoi dati vengono condivisi con i seguenti Responsabili del Trattamento (Art. 28 GDPR):</p>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                          <thead>
                            <tr className="bg-gray-100">
                              <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Responsabile</th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Finalità</th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Sede</th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Privacy Policy</th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Garanzie Trasferimento</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border border-gray-300 px-4 py-3">OpenAI, L.L.C.</td>
                              <td className="border border-gray-300 px-4 py-3">Elaborazione conversazioni AI tramite modelli linguistici (GPT)</td>
                              <td className="border border-gray-300 px-4 py-3">USA (California)</td>
                              <td className="border border-gray-300 px-4 py-3"><a href="https://openai.com/policies/privacy-policy" className="text-aiblue hover:underline" target="_blank" rel="noopener noreferrer">Privacy Policy OpenAI</a></td>
                              <td className="border border-gray-300 px-4 py-3">EU-US Data Privacy Framework + SCC</td>
                            </tr>
                            <tr className="bg-gray-50">
                              <td className="border border-gray-300 px-4 py-3">n8n GmbH</td>
                              <td className="border border-gray-300 px-4 py-3">Orchestrazione workflow e automazione conversazioni chatbot</td>
                              <td className="border border-gray-300 px-4 py-3">Germania (EU)</td>
                              <td className="border border-gray-300 px-4 py-3"><a href="https://n8n.io/legal/privacy" className="text-aiblue hover:underline" target="_blank" rel="noopener noreferrer">Privacy Policy n8n</a></td>
                              <td className="border border-gray-300 px-4 py-3">Sede UE - Nessun trasferimento extra-UE</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div>
                      <p className="font-semibold mb-2">C) Come vengono utilizzati i dati dal chatbot</p>
                      <ul className="list-disc pl-8 space-y-2">
                        <li><strong>Elaborazione immediata:</strong> I messaggi vengono inviati a OpenAI per generare risposte intelligenti tramite intelligenza artificiale</li>
                        <li><strong>Orchestrazione:</strong> n8n gestisce il flusso della conversazione e l'integrazione con i nostri sistemi</li>
                        <li><strong>Conservazione conversazioni:</strong> Le conversazioni possono essere conservate per migliorare il servizio e fornire supporto</li>
                      </ul>
                    </div>

                    <div>
                      <p className="font-semibold mb-3">D) Avviso importante</p>
                      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                        <p className="leading-relaxed mb-2 font-semibold text-yellow-900">⚠️ Non inserire dati sensibili nel chatbot</p>
                        <p className="leading-relaxed mb-2 text-yellow-900">Ti consigliamo di NON condividere tramite chatbot:</p>
                        <ul className="list-disc pl-8 space-y-1 text-yellow-900">
                          <li>Dati sanitari o medici</li>
                          <li>Numeri di carte di credito o coordinate bancarie</li>
                          <li>Documenti d'identità</li>
                          <li>Dati di minori</li>
                          <li>Informazioni riservate aziendali</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <p className="font-semibold mb-2">E) Consenso all'uso del chatbot</p>
                      <p className="leading-relaxed mb-3">Utilizzando il chatbot, acconsenti esplicitamente:</p>
                      <ul className="list-disc pl-8 space-y-2">
                        <li>All'invio dei tuoi messaggi a OpenAI e n8n</li>
                        <li>Al trattamento da parte di questi fornitori secondo le loro Privacy Policy</li>
                        <li>Al trasferimento dei dati verso gli USA per quanto riguarda OpenAI</li>
                      </ul>
                      <p className="leading-relaxed mt-3 mb-2 font-semibold">Se NON acconsenti, puoi contattarci tramite:</p>
                      <ul className="list-disc pl-8 space-y-2">
                        <li>Email: <a href="mailto:info@agentics.eu.com" className="text-aiblue hover:underline">info@agentics.eu.com</a></li>
                        <li>Form di contatto tradizionale (senza chatbot)</li>
                        <li>Telefono: +39 320 289 2541</li>
                      </ul>
                    </div>

                    <div>
                      <p className="font-semibold mb-2">F) Diritti specifici relativi al chatbot</p>
                      <p className="leading-relaxed mb-3">Puoi esercitare tutti i diritti GDPR (accesso, cancellazione, rettifica, ecc.) anche sui dati raccolti tramite chatbot scrivendo a: <a href="mailto:info@agentics.eu.com" className="text-aiblue hover:underline">info@agentics.eu.com</a></p>
                      <p className="leading-relaxed"><strong>Tempi di cancellazione:</strong> La cancellazione delle conversazioni dal chatbot avverrà entro 30 giorni dalla richiesta. Nota che potrebbero persistere copie nei backup per ulteriori 90 giorni.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="font-display font-bold text-3xl text-graphite border-b-2 border-aiblue pb-3">4. Finalità e Basi Giuridiche del Trattamento</h2>
              <div className="space-y-6">
                <div>
                  <p className="leading-relaxed mb-4"><strong>4.1 Finalità del trattamento sul sito web</strong></p>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Finalità</th>
                          <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Base Giuridica</th>
                          <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Dati Trattati</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-3">Rispondere a richieste informazioni</td>
                          <td className="border border-gray-300 px-4 py-3">Art. 6(1)(b) GDPR - Misure precontrattuali</td>
                          <td className="border border-gray-300 px-4 py-3">Nome, email, telefono, messaggio</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 px-4 py-3">Invio newsletter/comunicazioni marketing</td>
                          <td className="border border-gray-300 px-4 py-3">Art. 6(1)(a) GDPR - Consenso esplicito</td>
                          <td className="border border-gray-300 px-4 py-3">Email, nome</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-3">Migliorare esperienza utente e funzionalità sito</td>
                          <td className="border border-gray-300 px-4 py-3">Art. 6(1)(f) GDPR - Legittimo interesse</td>
                          <td className="border border-gray-300 px-4 py-3">Dati navigazione, analytics</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 px-4 py-3">Sicurezza informatica e prevenzione frodi</td>
                          <td className="border border-gray-300 px-4 py-3">Art. 6(1)(f) GDPR - Legittimo interesse</td>
                          <td className="border border-gray-300 px-4 py-3">IP, log accessi</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-3">Adempimenti fiscali/contabili</td>
                          <td className="border border-gray-300 px-4 py-3">Art. 6(1)(c) GDPR - Obbligo legale</td>
                          <td className="border border-gray-300 px-4 py-3">Dati fatturazione</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 px-4 py-3">Difesa diritti in sede giudiziaria</td>
                          <td className="border border-gray-300 px-4 py-3">Art. 6(1)(f) GDPR - Legittimo interesse</td>
                          <td className="border border-gray-300 px-4 py-3">Tutti i dati pertinenti</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-3">Esecuzione contratti di sviluppo software su commessa</td>
                          <td className="border border-gray-300 px-4 py-3">Art. 6(1)(b) GDPR - Esecuzione contratto</td>
                          <td className="border border-gray-300 px-4 py-3">Dati tecnici, dati di test, comunicazioni di progetto</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div>
                  <p className="leading-relaxed mb-2"><strong>4.2 Legittimo interesse (Art. 6(1)(f) GDPR)</strong></p>
                  <p className="leading-relaxed pl-4 mb-2">Quando ci basiamo sul legittimo interesse, abbiamo effettuato un bilanciamento di interessi (Legitimate Interest Assessment) verificando che:</p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>L'interesse perseguito sia legittimo e rilevante</li>
                    <li>Il trattamento sia necessario e proporzionato</li>
                    <li>I tuoi diritti e libertà non siano pregiudicati</li>
                  </ul>
                  <p className="leading-relaxed pl-4 mt-3">Puoi opporti al trattamento basato su legittimo interesse scrivendo a: <a href="mailto:info@agentics.eu.com" className="text-aiblue hover:underline">info@agentics.eu.com</a></p>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="font-display font-bold text-3xl text-graphite border-b-2 border-aiblue pb-3">5. Conservazione dei Dati</h2>
              <p className="leading-relaxed mb-4">Conserviamo i dati personali solo per il tempo strettamente necessario alle finalità per cui sono stati raccolti.</p>
              <div className="space-y-6">
                <div>
                  <p className="leading-relaxed mb-4"><strong>5.1 Criteri di conservazione</strong></p>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Tipologia</th>
                          <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Periodo di Conservazione</th>
                          <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Motivazione</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-3">Richieste precontrattuali (no contratto firmato)</td>
                          <td className="border border-gray-300 px-4 py-3">24 mesi dall'ultimo contatto</td>
                          <td className="border border-gray-300 px-4 py-3">Gestione relazione commerciale</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 px-4 py-3">Clienti attivi</td>
                          <td className="border border-gray-300 px-4 py-3">Durata rapporto contrattuale + 10 anni</td>
                          <td className="border border-gray-300 px-4 py-3">Obblighi fiscali (DPR 600/73, art. 2220 c.c.)</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-3">Candidature spontanee (CV)</td>
                          <td className="border border-gray-300 px-4 py-3">24 mesi da invio</td>
                          <td className="border border-gray-300 px-4 py-3">Gestione recruiting</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 px-4 py-3">Cookie analytics</td>
                          <td className="border border-gray-300 px-4 py-3">26 mesi</td>
                          <td className="border border-gray-300 px-4 py-3">Linee guida Garante Privacy</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-3">Log di sicurezza</td>
                          <td className="border border-gray-300 px-4 py-3">12 mesi</td>
                          <td className="border border-gray-300 px-4 py-3">Art. 32 GDPR - sicurezza</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 px-4 py-3">Backup di sicurezza</td>
                          <td className="border border-gray-300 px-4 py-3">90 giorni</td>
                          <td className="border border-gray-300 px-4 py-3">Business continuity</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div>
                  <p className="leading-relaxed mb-2"><strong>5.2 Cancellazione dei dati</strong></p>
                  <p className="leading-relaxed pl-4">Alla scadenza dei termini, procediamo a:</p>
                  <ul className="list-disc pl-8 space-y-2 mt-2">
                    <li>Cancellazione definitiva e irreversibile, oppure</li>
                    <li>Anonimizzazione (per statistiche aggregate non riconducibili a persone)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="font-display font-bold text-3xl text-graphite border-b-2 border-aiblue pb-3">6. Destinatari dei Dati e Comunicazione a Terzi</h2>
              <div className="space-y-6">
                <div>
                  <p className="leading-relaxed mb-3"><strong>6.1 Responsabili del Trattamento (Art. 28 GDPR)</strong></p>
                  <p className="leading-relaxed pl-4 mb-3">I tuoi dati possono essere comunicati a soggetti terzi che agiscono come Responsabili del Trattamento per nostro conto, vincolati da Data Processing Agreement (DPA):</p>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Responsabile</th>
                          <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Finalità</th>
                          <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Sede</th>
                          <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Garanzie Trasferimento</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-3">Google LLC (Analytics)</td>
                          <td className="border border-gray-300 px-4 py-3">Statistiche utilizzo sito</td>
                          <td className="border border-gray-300 px-4 py-3">USA</td>
                          <td className="border border-gray-300 px-4 py-3">EU-US Data Privacy Framework + SCC</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="leading-relaxed pl-4 mt-3 italic text-sm">Nota: L'elenco completo e aggiornato dei Responsabili e dei loro sub-responsabili è disponibile su richiesta a: info@agentics.eu.com</p>
                </div>
                <div>
                  <p className="leading-relaxed mb-2"><strong>6.2 Altri destinatari</strong></p>
                  <p className="leading-relaxed pl-4 mb-2">I dati possono inoltre essere comunicati a:</p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>Consulenti legali, fiscali, commercialisti (vincolati a segreto professionale)</li>
                    <li>Istituti bancari e finanziari (per gestione pagamenti)</li>
                    <li>Autorità pubbliche e organi giudiziari (su richiesta per obbligo legale)</li>
                    <li>Partner commerciali (solo previo tuo consenso specifico)</li>
                  </ul>
                  <p className="leading-relaxed pl-4 mt-3 font-semibold">Non vendiamo né cediamo i tuoi dati a terzi per finalità commerciali.</p>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="font-display font-bold text-3xl text-graphite border-b-2 border-aiblue pb-3">7. Trasferimenti Internazionali di Dati</h2>
              <div className="space-y-6">
                <div>
                  <p className="leading-relaxed mb-3"><strong>7.1 Trasferimenti verso Paesi extra-UE</strong></p>
                  <p className="leading-relaxed pl-4 mb-3">Alcuni Responsabili del Trattamento operano in Paesi al di fuori dello Spazio Economico Europeo (SEE). In questi casi, garantiamo un livello di protezione adeguato tramite:</p>
                  <div className="space-y-3 pl-4">
                    <div>
                      <p className="font-semibold">A) EU-U.S. Data Privacy Framework (DPF)</p>
                      <p className="leading-relaxed pl-4">Per fornitori USA certificati DPF (es. Google LLC)</p>
                      <p className="leading-relaxed pl-4">Elenco: <a href="https://www.dataprivacyframework.gov/list" className="text-aiblue hover:underline" target="_blank" rel="noopener noreferrer">https://www.dataprivacyframework.gov/list</a></p>
                    </div>
                    <div>
                      <p className="font-semibold">B) Clausole Contrattuali Standard (SCC)</p>
                      <p className="leading-relaxed pl-4">Clausole approvate dalla Commissione UE (Decisione 2021/914)</p>
                    </div>
                    <div>
                      <p className="font-semibold">C) Transfer Impact Assessment (TIA)</p>
                      <p className="leading-relaxed pl-4">Valutazione caso per caso ai sensi della sentenza Schrems II (C-311/18)</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="leading-relaxed mb-3"><strong>7.2 Fornitori con sede USA</strong></p>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Fornitore</th>
                          <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Sede</th>
                          <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Garanzie Adottate</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-3">Google LLC</td>
                          <td className="border border-gray-300 px-4 py-3">USA (California)</td>
                          <td className="border border-gray-300 px-4 py-3">DPF + SCC + Crittografia end-to-end</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="leading-relaxed pl-4 mt-3 italic text-sm">Documenti disponibili: Puoi richiedere copia delle SCC firmate scrivendo a: info@agentics.eu.com</p>
                </div>
                <div>
                  <p className="leading-relaxed"><strong>7.3 Monitoraggio normativo</strong></p>
                  <p className="leading-relaxed pl-4">Monitoriamo costantemente l'evoluzione normativa su trasferimenti internazionali e adeguiamo le garanzie quando necessario.</p>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="font-display font-bold text-3xl text-graphite border-b-2 border-aiblue pb-3">8. Diritti dell'Interessato</h2>
              <p className="leading-relaxed mb-4">Ai sensi degli articoli 15-22 GDPR, hai diritto di:</p>
              <div className="space-y-6">
                <div>
                  <p className="leading-relaxed mb-2"><strong>8.1 Diritto di accesso (Art. 15)</strong></p>
                  <p className="leading-relaxed pl-4">Ottenere conferma che stiamo trattando tuoi dati e riceverne copia</p>
                </div>
                <div>
                  <p className="leading-relaxed mb-2"><strong>8.2 Diritto di rettifica (Art. 16)</strong></p>
                  <p className="leading-relaxed pl-4">Correggere dati inesatti o integrare dati incompleti</p>
                </div>
                <div>
                  <p className="leading-relaxed mb-2"><strong>8.3 Diritto alla cancellazione - "Diritto all'oblio" (Art. 17)</strong></p>
                  <p className="leading-relaxed pl-4 mb-2">Ottenere la cancellazione dei dati quando:</p>
                  <ul className="list-disc pl-12 space-y-2">
                    <li>Non sono più necessari</li>
                    <li>Revochi il consenso (se questa era la base giuridica)</li>
                    <li>Ti opponi al trattamento basato su legittimo interesse</li>
                    <li>Sono stati trattati illecitamente</li>
                  </ul>
                  <p className="leading-relaxed pl-4 mt-3 mb-2"><strong>Limiti:</strong> La cancellazione può essere rifiutata per:</p>
                  <ul className="list-disc pl-12 space-y-2">
                    <li>Adempiere obblighi legali (es. conservazione fiscale 10 anni)</li>
                    <li>Difendere diritti in sede giudiziaria</li>
                    <li>Esercitare libertà di espressione/informazione</li>
                  </ul>
                </div>
                <div>
                  <p className="leading-relaxed mb-2"><strong>8.4 Diritto di limitazione (Art. 18)</strong></p>
                  <p className="leading-relaxed pl-4 mb-2">Chiedere di "congelare" temporaneamente il trattamento quando:</p>
                  <ul className="list-disc pl-12 space-y-2">
                    <li>Contesti l'esattezza dei dati</li>
                    <li>Il trattamento è illecito ma preferisci limitarlo anziché cancellarlo</li>
                    <li>Ti servono per difendere diritti in giudizio</li>
                  </ul>
                </div>
                <div>
                  <p className="leading-relaxed mb-2"><strong>8.5 Diritto alla portabilità (Art. 20)</strong></p>
                  <p className="leading-relaxed pl-4 mb-2">Ricevere i tuoi dati in formato strutturato, leggibile da dispositivo automatico (es. CSV, JSON) e trasmetterli ad altro titolare</p>
                  <p className="leading-relaxed pl-4 mb-2">Applicabile solo se:</p>
                  <ul className="list-disc pl-12 space-y-2">
                    <li>Il trattamento si basa su consenso o contratto</li>
                    <li>Viene effettuato con mezzi automatizzati</li>
                  </ul>
                </div>
                <div>
                  <p className="leading-relaxed mb-2"><strong>8.6 Diritto di opposizione (Art. 21)</strong></p>
                  <p className="leading-relaxed pl-4">Opporti al trattamento basato su legittimo interesse o per finalità di marketing diretto (anche profilazione collegata)</p>
                </div>
                <div>
                  <p className="leading-relaxed mb-2"><strong>8.7 Diritto di revoca del consenso (Art. 7.3)</strong></p>
                  <p className="leading-relaxed pl-4">Revocare il consenso in qualsiasi momento, senza pregiudicare la liceità del trattamento precedente</p>
                  <p className="leading-relaxed pl-4 mt-2 italic">Nota: La revoca non ha effetto retroattivo</p>
                </div>
                <div>
                  <p className="leading-relaxed mb-3"><strong>8.8 Come esercitare i diritti</strong></p>
                  <div className="pl-4 space-y-3">
                    <div>
                      <p className="font-semibold mb-2">Modalità:</p>
                      <ul className="list-disc pl-8 space-y-1">
                        <li>Email: <a href="mailto:info@agentics.eu.com" className="text-aiblue hover:underline">info@agentics.eu.com</a></li>
                        <li>PEC: <a href="mailto:agentics@pec.it" className="text-aiblue hover:underline">agentics@pec.it</a></li>
                        <li>Posta: Via Vincenzo Monti 16, 04100 Latina (LT)</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold mb-2">Documenti da allegare:</p>
                      <ul className="list-disc pl-8 space-y-1">
                        <li>Copia documento identità valido</li>
                        <li>Descrizione chiara della richiesta</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold mb-2">Tempi di risposta:</p>
                      <ul className="list-disc pl-8 space-y-1">
                        <li>30 giorni dalla ricezione della richiesta</li>
                        <li>Estensibili a 90 giorni in casi complessi (con comunicazione motivata entro 30 giorni)</li>
                      </ul>
                    </div>
                    <div>
                      <p className="leading-relaxed"><strong>Gratuità:</strong> L'esercizio dei diritti è gratuito. Possiamo richiedere un contributo spese solo per richieste manifestamente infondate o eccessive.</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="leading-relaxed mb-3"><strong>8.9 Reclamo al Garante</strong></p>
                  <p className="leading-relaxed pl-4 mb-3">Hai diritto di proporre reclamo all'Autorità di controllo:</p>
                  <div className="pl-4">
                    <p className="font-semibold">Garante per la Protezione dei Dati Personali</p>
                    <p className="leading-relaxed">Piazza Venezia 11, 00187 Roma</p>
                    <p className="leading-relaxed">Tel: +39 06 696771</p>
                    <p className="leading-relaxed">Email: garante@gpdp.it</p>
                    <p className="leading-relaxed">PEC: protocollo@pec.gpdp.it</p>
                    <p className="leading-relaxed">Web: <a href="https://www.garanteprivacy.it" className="text-aiblue hover:underline" target="_blank" rel="noopener noreferrer">www.garanteprivacy.it</a></p>
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="font-display font-bold text-3xl text-graphite border-b-2 border-aiblue pb-3">9. Sicurezza dei Dati</h2>
              <div className="space-y-6">
                <div>
                  <p className="leading-relaxed mb-3"><strong>9.1 Misure tecniche e organizzative (Art. 32 GDPR)</strong></p>
                  <p className="leading-relaxed pl-4 mb-3">Adottiamo misure di sicurezza adeguate per proteggere i dati da:</p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>Distruzione accidentale o illecita</li>
                    <li>Perdita, alterazione, divulgazione non autorizzata</li>
                    <li>Accesso non autorizzato</li>
                  </ul>
                  <div className="pl-4 mt-4 space-y-4">
                    <div>
                      <p className="font-semibold mb-2">A) Sicurezza tecnica</p>
                      <ul className="list-disc pl-8 space-y-2">
                        <li>Crittografia: TLS 1.3 per trasmissioni, AES-256 per dati at-rest</li>
                        <li>Firewall e IDS/IPS: Protezione perimetrale e rilevamento intrusioni</li>
                        <li>Backup: Giornalieri con test ripristino mensili</li>
                        <li>Pseudonimizzazione: Dove tecnicamente possibile</li>
                        <li>Autenticazione forte: MFA per accessi amministrativi</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold mb-2">B) Sicurezza organizzativa</p>
                      <ul className="list-disc pl-8 space-y-2">
                        <li>Controllo accessi: Principio "least privilege" e segregazione ruoli</li>
                        <li>Formazione personale: Training GDPR annuale obbligatorio</li>
                        <li>Politiche interne: Password policy, clean desk, gestione incidenti</li>
                        <li>Audit periodici: Penetration test e vulnerability assessment</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold mb-2">C) Sicurezza fisica</p>
                      <ul className="list-disc pl-8 space-y-2">
                        <li>Data center certificati ISO 27001, SOC 2 Type II</li>
                        <li>Controllo accessi biometrici</li>
                        <li>Videosorveglianza e logging accessi</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="leading-relaxed mb-3"><strong>9.2 Data Breach - Gestione violazioni (Art. 33-34 GDPR)</strong></p>
                  <p className="leading-relaxed pl-4 mb-3">In caso di violazione dei dati personali:</p>
                  <div className="pl-4 space-y-4">
                    <div>
                      <p className="font-semibold mb-2">Procedura interna:</p>
                      <ul className="list-disc pl-8 space-y-2">
                        <li>Rilevamento e contenimento entro 24 ore</li>
                        <li>Valutazione rischio per diritti e libertà interessati</li>
                        <li>Notifica al Garante entro 72 ore (se rischio)</li>
                        <li>Comunicazione agli interessati (se rischio elevato)</li>
                        <li>Documentazione nel registro violazioni (Art. 33.5)</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold mb-2">Come ti informiamo:</p>
                      <ul className="list-disc pl-8 space-y-2">
                        <li>Email all'indirizzo fornito (per violazioni specifiche)</li>
                        <li>Avviso su questa pagina (per violazioni massive)</li>
                        <li>Comunicazione per posta certificata (se richiesto)</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold mb-2">Cosa comunichiamo:</p>
                      <ul className="list-disc pl-8 space-y-2">
                        <li>Natura della violazione e categorie dati coinvolti</li>
                        <li>Numero approssimativo di interessati</li>
                        <li>Conseguenze probabili della violazione</li>
                        <li>Misure adottate per mitigarla</li>
                        <li>Misure consigliate all'interessato (es. cambio password)</li>
                        <li>Contatto DPO/Responsabile Privacy</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="font-display font-bold text-3xl text-graphite border-b-2 border-aiblue pb-3">10. Processo Decisionale Automatizzato e Profilazione</h2>
              <div className="space-y-6">
                <div>
                  <p className="leading-relaxed mb-3"><strong>10.1 Profilazione (Art. 22 GDPR)</strong></p>
                  <p className="leading-relaxed pl-4 mb-3">Attualmente NON utilizziamo i tuoi dati per:</p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>Decisioni basate esclusivamente su trattamento automatizzato</li>
                    <li>Profilazione che produca effetti giuridici o incida significativamente sulla tua persona</li>
                  </ul>
                  <div className="pl-4 mt-4">
                    <p className="font-semibold mb-2">Esempio di cosa NON facciamo:</p>
                    <ul className="space-y-1 text-red-600">
                      <li>❌ Valutazione automatica affidabilità creditizia</li>
                      <li>❌ Scoring automatico per servizi differenziati</li>
                      <li>❌ Rifiuto automatico di richieste senza intervento umano</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <p className="leading-relaxed mb-2"><strong>10.2 Analytics e personalizzazione</strong></p>
                  <p className="leading-relaxed pl-4 mb-2">Utilizziamo analytics (Google Analytics) per:</p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>Statistiche aggregate utilizzo sito</li>
                    <li>Migliorare user experience</li>
                  </ul>
                  <p className="leading-relaxed pl-4 mt-3">Questi trattamenti NON costituiscono profilazione ai sensi Art. 22 GDPR.</p>
                  <p className="leading-relaxed pl-4 mt-3 italic">Se in futuro implementassimo profilazione, ti informeremo preventivamente e richiederemo il consenso esplicito.</p>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="font-display font-bold text-3xl text-graphite border-b-2 border-aiblue pb-3">11. Registro delle Attività di Trattamento (Art. 30 GDPR)</h2>
              <p className="leading-relaxed mb-3">Manteniamo un registro interno aggiornato di tutte le attività di trattamento, contenente:</p>
              <ul className="list-disc pl-8 space-y-2">
                <li>Finalità del trattamento</li>
                <li>Categorie di interessati e dati</li>
                <li>Destinatari dei dati</li>
                <li>Trasferimenti internazionali</li>
                <li>Tempi di conservazione</li>
                <li>Misure di sicurezza</li>
              </ul>
              <p className="leading-relaxed mt-3">Il registro è disponibile su richiesta del Garante o degli interessati (in forma sintetica).</p>
            </section>

            <section className="space-y-6">
              <h2 className="font-display font-bold text-3xl text-graphite border-b-2 border-aiblue pb-3">12. Valutazione d'Impatto sulla Protezione dei Dati (DPIA - Art. 35 GDPR)</h2>
              <div className="space-y-6">
                <div>
                  <p className="leading-relaxed mb-3"><strong>12.1 Quando effettuiamo DPIA</strong></p>
                  <p className="leading-relaxed pl-4 mb-3">Realizziamo una Data Protection Impact Assessment prima di introdurre:</p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>Nuove tecnologie con rischio elevato per diritti e libertà</li>
                    <li>Trattamenti su larga scala di dati sensibili</li>
                    <li>Monitoraggio sistematico di aree accessibili al pubblico</li>
                    <li>Profilazione automatizzata con effetti giuridici</li>
                  </ul>
                  <div className="pl-4 mt-4">
                    <p className="font-semibold mb-2">Esempi:</p>
                    <ul className="list-disc pl-8 space-y-2">
                      <li>Implementazione nuovi sistemi AI conversazionali</li>
                      <li>Raccolta massiva di dati biometrici</li>
                      <li>Sistemi di videosorveglianza con riconoscimento facciale</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <p className="leading-relaxed mb-2"><strong>12.2 Consultazione preventiva (Art. 36)</strong></p>
                  <p className="leading-relaxed pl-4">Se dalla DPIA emerge rischio elevato residuo, consultiamo preventivamente il Garante prima di avviare il trattamento.</p>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="font-display font-bold text-3xl text-graphite border-b-2 border-aiblue pb-3">13. Privacy by Design e by Default (Art. 25 GDPR)</h2>
              <div className="space-y-6">
                <div>
                  <p className="leading-relaxed mb-3"><strong>13.1 Privacy fin dalla progettazione</strong></p>
                  <p className="leading-relaxed pl-4 mb-3">Integriamo la protezione dati dalla fase di design di sistemi e servizi:</p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>Minimizzazione dei dati raccolti</li>
                    <li>Pseudonimizzazione dove possibile</li>
                    <li>Trasparenza per impostazione predefinita</li>
                  </ul>
                </div>
                <div>
                  <p className="leading-relaxed mb-3"><strong>13.2 Privacy per impostazione predefinita</strong></p>
                  <p className="leading-relaxed pl-4 mb-3">Impostazioni di default:</p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>Solo dati strettamente necessari vengono raccolti</li>
                    <li>Periodo conservazione minimo applicabile</li>
                    <li>Accesso limitato ai soli autorizzati</li>
                    <li>Nessun trattamento per finalità secondarie senza consenso</li>
                  </ul>
                  <p className="leading-relaxed pl-4 mt-3">Puoi sempre modificare le impostazioni nelle preferenze privacy.</p>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="font-display font-bold text-3xl text-graphite border-b-2 border-aiblue pb-3">14. Cookie e Tecnologie di Tracciamento</h2>
              <div className="space-y-6">
                <div>
                  <p className="leading-relaxed mb-3"><strong>14.1 Cosa sono i cookie</strong></p>
                  <p className="leading-relaxed pl-4 mb-3">I cookie sono piccoli file di testo memorizzati sul tuo dispositivo quando visiti il nostro sito. Permettono di:</p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>Ricordare preferenze e impostazioni</li>
                    <li>Analizzare il traffico del sito</li>
                    <li>Migliorare l'esperienza di navigazione</li>
                    <li>Mostrare contenuti personalizzati (se acconsenti)</li>
                  </ul>
                </div>
                <div>
                  <p className="leading-relaxed mb-4"><strong>14.2 Tipologie di cookie utilizzati</strong></p>
                  <div className="space-y-4">
                    <div className="pl-4">
                      <p className="font-semibold mb-2">A) Cookie tecnici/necessari (NO consenso richiesto)</p>
                      <p className="leading-relaxed mb-1">Durata: Sessione o max 24 mesi</p>
                      <p className="leading-relaxed mb-1">Finalità: Funzionamento essenziale del sito (es. gestione sessione, sicurezza)</p>
                      <p className="leading-relaxed">Base giuridica: Art. 122 Codice Privacy + Esenzione Garante</p>
                    </div>
                    <div className="pl-4">
                      <p className="font-semibold mb-2">B) Cookie analitici (Consenso richiesto)</p>
                      <p className="leading-relaxed mb-1">Fornitore: Google Analytics</p>
                      <p className="leading-relaxed mb-1">Durata: 26 mesi</p>
                      <p className="leading-relaxed mb-2">Finalità: Statistiche aggregate utilizzo (pagine visitate, tempo permanenza, bounce rate)</p>
                      <p className="leading-relaxed mb-2">Misure privacy-friendly:</p>
                      <ul className="list-disc pl-8 space-y-1 mb-2">
                        <li>IP anonimizzato (ultimi 8 bit rimossi)</li>
                        <li>Disabilitata condivisione dati con altri servizi Google</li>
                        <li>No remarketing o advertising</li>
                      </ul>
                      <p className="leading-relaxed">Base giuridica: Art. 6(1)(a) GDPR - Consenso</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="leading-relaxed mb-3"><strong>14.3 Cookie di terze parti</strong></p>
                  <p className="leading-relaxed pl-4 mb-3">Il sito può incorporare contenuti da servizi esterni che impostano propri cookie:</p>
                  <div className="overflow-x-auto pl-4">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Servizio</th>
                          <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Tipo</th>
                          <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Privacy Policy</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-3">Google Analytics</td>
                          <td className="border border-gray-300 px-4 py-3">Analitico</td>
                          <td className="border border-gray-300 px-4 py-3"><a href="https://policies.google.com/privacy" className="text-aiblue hover:underline" target="_blank" rel="noopener noreferrer">Privacy Policy</a></td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 px-4 py-3">Google Fonts</td>
                          <td className="border border-gray-300 px-4 py-3">Tecnico</td>
                          <td className="border border-gray-300 px-4 py-3"><a href="https://policies.google.com/privacy" className="text-aiblue hover:underline" target="_blank" rel="noopener noreferrer">Privacy Policy</a></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="leading-relaxed pl-4 mt-3 italic">Importante: Non controlliamo i cookie di terze parti. Ti invitiamo a consultare le loro privacy policy.</p>
                </div>
                <div>
                  <p className="leading-relaxed mb-3"><strong>14.4 Banner cookie e gestione del consenso</strong></p>
                  <p className="leading-relaxed pl-4 mb-3">Al primo accesso al sito, viene mostrato un banner cookie che consente di:</p>
                  <ul className="list-none pl-8 space-y-2">
                    <li>✅ Accettare tutti i cookie (tecnici + analytics + marketing)</li>
                    <li>❌ Rifiutare cookie non essenziali (solo tecnici attivi)</li>
                    <li>⚙️ Personalizzare preferenze (scegliere singole categorie)</li>
                  </ul>
                  <div className="pl-4 mt-4">
                    <p className="font-semibold mb-2">Caratteristiche del banner:</p>
                    <ul className="list-disc pl-8 space-y-2">
                      <li>Blocco preventivo: Cookie non tecnici non vengono caricati fino al consenso</li>
                      <li>Granularità: Possibilità di accettare solo alcune categorie</li>
                      <li>Facilmente accessibile: Link "Impostazioni Cookie" sempre visibile nel footer</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <p className="leading-relaxed mb-3"><strong>14.5 Durata e revoca del consenso</strong></p>
                  <p className="leading-relaxed pl-4 mb-3">Durata consenso: 12 mesi dalla prima accettazione</p>
                  <p className="leading-relaxed pl-4 mb-2">Come modificare preferenze:</p>
                  <ul className="list-disc pl-8 space-y-2 mb-3">
                    <li>Cliccare su "Impostazioni Cookie" nel footer del sito</li>
                    <li>Cancellare cookie dal browser</li>
                    <li>Scrivere a: <a href="mailto:info@agentics.eu.com" className="text-aiblue hover:underline">info@agentics.eu.com</a></li>
                  </ul>
                  <div className="pl-4 space-y-3">
                    <div>
                      <p className="font-semibold mb-2">Cancellare cookie dal browser:</p>
                      <ul className="list-disc pl-8 space-y-1">
                        <li>Chrome: Impostazioni &gt; Privacy &gt; Cancella dati navigazione</li>
                        <li>Firefox: Opzioni &gt; Privacy &gt; Cancella cronologia recente</li>
                        <li>Safari: Preferenze &gt; Privacy &gt; Gestisci dati siti web</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold mb-2">Conseguenze del rifiuto:</p>
                      <ul className="list-disc pl-8 space-y-2">
                        <li>Il rifiuto dei cookie non tecnici non pregiudica la navigazione</li>
                        <li>Alcune funzionalità potrebbero essere limitate (es. contenuti personalizzati)</li>
                        <li>Statistiche aggregate potrebbero essere meno accurate</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="leading-relaxed mb-3"><strong>14.6 Opt-out specifici</strong></p>
                  <div className="pl-4 space-y-3">
                    <p className="leading-relaxed">Google Analytics: Puoi installare il componente aggiuntivo:<br />
                    <a href="https://tools.google.com/dlpage/gaoptout" className="text-aiblue hover:underline" target="_blank" rel="noopener noreferrer">https://tools.google.com/dlpage/gaoptout</a></p>
                    <div>
                      <p className="leading-relaxed mb-2">Advertising opt-out:</p>
                      <ul className="list-disc pl-8 space-y-1">
                        <li>Network pubblicitari: <a href="http://www.youronlinechoices.eu" className="text-aiblue hover:underline" target="_blank" rel="noopener noreferrer">www.youronlinechoices.eu</a></li>
                        <li>NAI opt-out: <a href="http://www.networkadvertising.org/choices" className="text-aiblue hover:underline" target="_blank" rel="noopener noreferrer">www.networkadvertising.org/choices</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="font-display font-bold text-3xl text-graphite border-b-2 border-aiblue pb-3">15. Modifiche a questa Informativa</h2>
              <div className="space-y-4">
                <div>
                  <p className="leading-relaxed mb-2"><strong>15.1 Aggiornamenti</strong></p>
                  <p className="leading-relaxed pl-4 mb-2">Ci riserviamo il diritto di aggiornare questa Privacy Policy in qualsiasi momento per:</p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>Adeguamento a nuove normative</li>
                    <li>Evoluzione dei servizi offerti</li>
                    <li>Miglioramento della trasparenza</li>
                  </ul>
                </div>
                <div>
                  <p className="leading-relaxed mb-3"><strong>15.2 Comunicazione modifiche</strong></p>
                  <div className="pl-4 space-y-3">
                    <div>
                      <p className="font-semibold mb-2">Modifiche sostanziali (es. nuove finalità, nuovi destinatari):</p>
                      <ul className="list-disc pl-8 space-y-2">
                        <li>Notifica via email agli utenti registrati</li>
                        <li>Pubblicazione avviso in evidenza sul sito per 30 giorni</li>
                        <li>Data di aggiornamento sempre visibile in alto alla Policy</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold mb-2">Modifiche non sostanziali (es. correzioni formali):</p>
                      <ul className="list-disc pl-8 space-y-2">
                        <li>Solo pubblicazione versione aggiornata</li>
                        <li>Modifica della "data ultimo aggiornamento"</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="leading-relaxed mb-3"><strong>15.3 Accettazione modifiche</strong></p>
                  <p className="leading-relaxed pl-4 mb-3">Proseguendo l'utilizzo del sito dopo la pubblicazione delle modifiche, accetti la versione aggiornata.</p>
                  <p className="leading-relaxed pl-4 mb-2">Se NON accetti le modifiche sostanziali:</p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>Puoi cessare l'uso del sito</li>
                    <li>Puoi richiedere la cancellazione dei tuoi dati</li>
                  </ul>
                </div>
                <div>
                  <p className="leading-relaxed mb-2"><strong>15.4 Storico versioni</strong></p>
                  <p className="leading-relaxed pl-4">Manteniamo uno storico delle versioni precedenti disponibile su richiesta a: <a href="mailto:info@agentics.eu.com" className="text-aiblue hover:underline">info@agentics.eu.com</a></p>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="font-display font-bold text-3xl text-graphite border-b-2 border-aiblue pb-3">16. Minori di Età</h2>
              <div className="space-y-4">
                <div>
                  <p className="leading-relaxed mb-2"><strong>16.1 Età minima</strong></p>
                  <p className="leading-relaxed pl-4">I nostri servizi sono destinati a soggetti maggiorenni (18+ anni) o imprese.</p>
                  <p className="leading-relaxed pl-4 mt-2 font-semibold">NON raccogliamo consapevolmente dati di minori di 16 anni senza consenso genitoriale.</p>
                </div>
                <div>
                  <p className="leading-relaxed mb-3"><strong>16.2 Procedura in caso di rilevazione</strong></p>
                  <p className="leading-relaxed pl-4 mb-2">Se veniamo a conoscenza di aver raccolto dati di un minore senza consenso:</p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>Cancellazione immediata dei dati</li>
                    <li>Blocco dell'account (se applicabile)</li>
                    <li>Notifica al genitore/tutore (se identificabile)</li>
                  </ul>
                </div>
                <div>
                  <p className="leading-relaxed mb-2"><strong>16.3 Segnalazione</strong></p>
                  <p className="leading-relaxed pl-4">Se sei genitore/tutore e rilevi che tuo figlio ha fornito dati personali, contattaci immediatamente: <a href="mailto:info@agentics.eu.com" className="text-aiblue hover:underline">info@agentics.eu.com</a></p>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="font-display font-bold text-3xl text-graphite border-b-2 border-aiblue pb-3">17. Link a Siti di Terze Parti</h2>
              <div className="space-y-4">
                <div>
                  <p className="leading-relaxed mb-3"><strong>17.1 Disclaimer responsabilità</strong></p>
                  <p className="leading-relaxed pl-4 mb-2">Il nostro sito può contenere link verso:</p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>Siti web di partner commerciali</li>
                    <li>Piattaforme social media</li>
                    <li>Risorse esterne di approfondimento</li>
                  </ul>
                  <p className="leading-relaxed pl-4 mt-3 mb-2 font-semibold">Agentics NON è responsabile per:</p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>Contenuti pubblicati su siti terzi</li>
                    <li>Politiche privacy di tali siti</li>
                    <li>Trattamento dati effettuato da terze parti</li>
                    <li>Sicurezza e disponibilità dei servizi esterni</li>
                  </ul>
                </div>
                <div>
                  <p className="leading-relaxed mb-2"><strong>17.2 Raccomandazione</strong></p>
                  <p className="leading-relaxed pl-4">Prima di fornire dati personali a siti terzi, leggi attentamente le loro Privacy Policy.</p>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="font-display font-bold text-3xl text-graphite border-b-2 border-aiblue pb-3">18. Contatti e Richieste</h2>
              <div className="space-y-6">
                <div>
                  <p className="leading-relaxed mb-3"><strong>18.1 Modalità di contatto</strong></p>
                  <p className="leading-relaxed pl-4 mb-2">Per esercitare i tuoi diritti GDPR, chiarimenti sulla privacy o reclami:</p>
                  <div className="pl-4 space-y-1">
                    <p className="leading-relaxed">Email: <a href="mailto:info@agentics.eu.com" className="text-aiblue hover:underline">info@agentics.eu.com</a></p>
                    <p className="leading-relaxed">PEC: <a href="mailto:agentics@pec.it" className="text-aiblue hover:underline">agentics@pec.it</a></p>
                    <p className="leading-relaxed">Telefono: +39 320 289 2541</p>
                    <p className="leading-relaxed">Posta: Via Vincenzo Monti 16, 04100 Latina (LT) – Italia</p>
                  </div>
                </div>
                <div>
                  <p className="leading-relaxed mb-3"><strong>18.2 Informazioni da fornire</strong></p>
                  <p className="leading-relaxed pl-4 mb-2">Per richieste GDPR, allega:</p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>Documento identità (copia fronte/retro)</li>
                    <li>Descrizione dettagliata della richiesta</li>
                    <li>Indirizzo email utilizzato nei nostri servizi (se applicabile)</li>
                  </ul>
                </div>
                <div>
                  <p className="leading-relaxed mb-3"><strong>18.3 Tempi di risposta</strong></p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>Entro 30 giorni dalla ricezione</li>
                    <li>Prorogabili a 90 giorni in casi complessi (con comunicazione motivata)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="font-display font-bold text-3xl text-graphite border-b-2 border-aiblue pb-3">19. Informazioni Supplementari per Clienti B2B</h2>
              <p className="leading-relaxed mb-3">Se sei un cliente business che utilizza i nostri servizi di AI/automazione o sviluppo software su commessa:</p>
              <div className="space-y-6">
                <div>
                  <p className="leading-relaxed mb-3"><strong>19.1 Data Processing Agreement (DPA) – Servizi AI SaaS</strong></p>
                  <p className="leading-relaxed pl-4 mb-2">Il trattamento dei dati nei servizi di AI in modalità managed è regolato da un DPA separato (Art. 28 GDPR) che definisce:</p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>Ruoli e responsabilità (Tu Titolare, Noi Responsabile)</li>
                    <li>Istruzioni documentate sul trattamento</li>
                    <li>Misure di sicurezza tecniche e organizzative</li>
                    <li>Gestione sub-responsabili (OpenAI, n8n e altri fornitori)</li>
                    <li>Assistenza per data breach e diritti degli interessati</li>
                    <li>Audit e ispezioni</li>
                  </ul>
                </div>
                <div>
                  <p className="leading-relaxed mb-3"><strong>19.2 Data Processing Agreement (DPA) – Sviluppo Software su Commessa</strong></p>
                  <p className="leading-relaxed pl-4 mb-2">Anche nei contratti di sviluppo software personalizzato, qualora il Cliente fornisca dati personali per lo sviluppo, il test o l'integrazione, il trattamento è regolato da un DPA separato (Art. 28 GDPR) che definisce:</p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>Tipologie di dati personali forniti per lo sviluppo</li>
                    <li>Finalità del trattamento (esclusivamente esecuzione del contratto di sviluppo)</li>
                    <li>Misure di sicurezza per ambienti di sviluppo e test</li>
                    <li>Obbligo di utilizzo di dati anonimi o pseudonimizzati ove possibile</li>
                    <li>Cancellazione dei dati di sviluppo al completamento del progetto</li>
                    <li>Divieto assoluto di utilizzo dei dati del Cliente per finalità proprie di Agentics</li>
                  </ul>
                </div>
                <div>
                  <p className="leading-relaxed mb-3"><strong>19.3 Conformità EU AI Act per soluzioni sviluppate su commessa</strong></p>
                  <p className="leading-relaxed pl-4 mb-2">Per i sistemi AI sviluppati su commessa soggetti al Regolamento (UE) 2024/1689, Agentics fornisce:</p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>Documentazione tecnica del sistema AI ai sensi dell'AI Act</li>
                    <li>Istruzioni d'uso e informazioni sui limiti del sistema</li>
                    <li>Dichiarazione di conformità per i sistemi ad alto rischio (ove applicabile)</li>
                    <li>Supporto per la valutazione della conformità del deployer (Cliente)</li>
                  </ul>
                </div>
                <div>
                  <p className="leading-relaxed mb-2"><strong>19.4 Richiedi il DPA</strong></p>
                  <p className="leading-relaxed pl-4">Puoi richiedere copia del DPA (per servizi AI SaaS o sviluppo software) firmato a: <a href="mailto:info@agentics.eu.com" className="text-aiblue hover:underline">info@agentics.eu.com</a></p>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="font-display font-bold text-3xl text-graphite border-b-2 border-aiblue pb-3">20. Glossario GDPR</h2>
              <div className="space-y-3 pl-4">
                <p className="leading-relaxed"><strong>Titolare del Trattamento:</strong> Soggetto che determina finalità e mezzi del trattamento</p>
                <p className="leading-relaxed"><strong>Responsabile del Trattamento:</strong> Soggetto che tratta dati per conto del Titolare</p>
                <p className="leading-relaxed"><strong>Interessato:</strong> Persona fisica i cui dati sono trattati</p>
                <p className="leading-relaxed"><strong>Dato Personale:</strong> Qualsiasi informazione relativa a persona identificata o identificabile</p>
                <p className="leading-relaxed"><strong>Trattamento:</strong> Qualsiasi operazione su dati personali (raccolta, conservazione, modifica, cancellazione, ecc.)</p>
                <p className="leading-relaxed"><strong>Consenso:</strong> Manifestazione di volontà libera, specifica, informata e inequivocabile</p>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="font-display font-bold text-3xl text-graphite border-b-2 border-aiblue pb-3">21. Dichiarazione Finale</h2>
              <p className="leading-relaxed mb-3 font-semibold">Prendendo visione della presente Privacy Policy, dichiari di:</p>
              <ul className="list-disc pl-8 space-y-2">
                <li>Aver letto e compreso l'informativa</li>
                <li>Essere informato su modalità e finalità del trattamento</li>
                <li>Conoscere i tuoi diritti GDPR e come esercitarli</li>
                <li>Accettare le condizioni descritte (proseguendo l'uso del sito)</li>
              </ul>
            </section>

            <div className="mt-16 pt-8 border-t-2 border-gray-300 text-center space-y-2">
              <p className="text-sm text-graphite/60">Ultimo aggiornamento: 16 marzo 2026</p>
              <p className="text-sm text-graphite/60">Versione: 2.1</p>
              <p className="text-sm text-graphite/60">Prossima revisione prevista: Marzo 2027</p>
              <p className="text-sm text-graphite/60 mt-4">© 2025–2026 Agentics SRL – Tutti i diritti riservati</p>
              <p className="text-sm text-graphite/60">P.IVA: 03335160598</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;