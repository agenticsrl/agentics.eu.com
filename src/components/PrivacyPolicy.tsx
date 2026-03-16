import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useSEO } from '../hooks/useSEO';

const PrivacyPolicy: React.FC = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();

  useSEO({
    title: language === 'it' ? 'Privacy e Cookie Policy - Agentics' : 'Privacy and Cookie Policy - Agentics',
    description: language === 'it' ? 'Privacy e Cookie Policy di Agentics SRL.' : 'Privacy and Cookie Policy of Agentics SRL.',
    canonicalUrl: 'https://agentics.eu.com/privacy-policy',
    robots: 'noindex, nofollow',
    language,
    ogType: 'article',
  });

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
          {language === 'it' ? 'Torna alla Home' : 'Back to Home'}
        </motion.button>

        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <p className="text-[11px] font-semibold uppercase tracking-[.12em] text-aiblue mb-4">
              Agentics SRL — Legal
            </p>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-graphite mb-4 uppercase tracking-[.04em]">
              {language === 'it' ? 'Privacy e Cookie Policy' : 'Privacy and Cookie Policy'}
            </h1>
            <p className="text-lg font-semibold text-graphite/80 mb-2">Agentics SRL</p>
            <div className="text-sm text-graphite/60 space-y-1">
              <p>{language === 'it' ? 'Data di entrata in vigore: 21 maggio 2025' : 'Effective date: May 21, 2025'}</p>
              <p>{language === 'it' ? 'Ultimo aggiornamento: 16 marzo 2026' : 'Last updated: March 16, 2026'}</p>
            </div>
          </div>

          <div className="text-graphite/80 mb-12">
            <p className="leading-relaxed text-lg">
              {language === 'it'
                ? 'Benvenuto su Agentics! La protezione della tua privacy è una nostra priorità assoluta. Questa informativa descrive in modo trasparente come raccogliamo, utilizziamo e proteggiamo i tuoi dati personali, in piena conformità a:'
                : 'Welcome to Agentics! Protecting your privacy is our absolute priority. This policy transparently describes how we collect, use, and protect your personal data, in full compliance with:'}
            </p>
            <ul className="list-disc pl-8 mt-4 space-y-2">
              <li>{language === 'it' ? 'Regolamento (UE) 2016/679 ("GDPR")' : 'Regulation (EU) 2016/679 ("GDPR")'}</li>
              <li>{language === 'it' ? 'Direttiva 2002/58/CE ("Direttiva ePrivacy")' : 'Directive 2002/58/EC ("ePrivacy Directive")'}</li>
              <li>{language === 'it' ? 'D.Lgs. 196/2003 (Codice Privacy italiano, come modificato dal D.Lgs. 101/2018)' : 'Legislative Decree 196/2003 (Italian Privacy Code, as amended by Legislative Decree 101/2018)'}</li>
              <li>{language === 'it' ? 'Regolamento (UE) 2024/1689 ("AI Act") – per i trattamenti connessi a sistemi di intelligenza artificiale' : 'Regulation (EU) 2024/1689 ("AI Act") – for processing related to artificial intelligence systems'}</li>
            </ul>
          </div>

          <div className="text-graphite/80 space-y-12">
            <section className="space-y-6">
              <h2 className="font-display font-bold text-3xl text-graphite border-b-2 border-aiblue pb-3">{language === 'it' ? '1. Titolare del Trattamento' : '1. Data Controller'}</h2>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-graphite text-lg mb-2">Agentics SRL</p>
                  <p className="leading-relaxed">{language === 'it' ? 'Via Vincenzo Monti 16, 04100 Latina (LT) – Italia' : 'Via Vincenzo Monti 16, 04100 Latina (LT) – Italy'}</p>
                  <p className="leading-relaxed">{language === 'it' ? 'Capitale sociale: €10.000,00' : 'Share capital: €10,000.00'}</p>
                  <p className="leading-relaxed">{language === 'it' ? 'P.IVA' : 'VAT'}: 03335160598</p>
                  <p className="leading-relaxed">Email: <a href="mailto:info@agentics.eu.com" className="text-aiblue hover:underline">info@agentics.eu.com</a></p>
                  <p className="leading-relaxed">PEC: <a href="mailto:agentics@pec.it" className="text-aiblue hover:underline">agentics@pec.it</a></p>
                  <p className="leading-relaxed">{language === 'it' ? 'Tel' : 'Phone'}: +39 320 289 2541</p>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="font-display font-bold text-3xl text-graphite border-b-2 border-aiblue pb-3">{language === 'it' ? '2. Ambito di Applicazione' : '2. Scope of Application'}</h2>
              <p className="leading-relaxed">{language === 'it' ? 'Questa informativa si applica a:' : 'This policy applies to:'}</p>
              <div className="space-y-4">
                <div>
                  <p className="leading-relaxed mb-2"><strong>{language === 'it' ? '2.1 Dati raccolti tramite il sito web' : '2.1 Data collected through the website'}</strong></p>
                  <p className="leading-relaxed pl-4 mb-1">{language === 'it' ? 'Quando navighi su www.agentics.eu.com o ci contatti tramite form' : 'When you browse www.agentics.eu.com or contact us through forms'}</p>
                  <p className="leading-relaxed pl-4"><em>{language === 'it' ? 'Ruolo GDPR: Agentics è Titolare del Trattamento' : 'GDPR Role: Agentics is the Data Controller'}</em></p>
                </div>
                <div>
                  <p className="leading-relaxed mb-2"><strong>{language === 'it' ? '2.2 Dati trattati nei Servizi AI/Automazione SaaS (clienti B2B)' : '2.2 Data processed in AI/Automation SaaS Services (B2B clients)'}</strong></p>
                  <p className="leading-relaxed pl-4 mb-1">{language === 'it' ? 'Quando Agentics fornisce servizi di intelligenza artificiale in modalità managed (chatbot, receptionist vocale, automazioni cloud) ai clienti business' : 'When Agentics provides managed artificial intelligence services (chatbot, voice receptionist, cloud automations) to business clients'}</p>
                  <p className="leading-relaxed pl-4"><em>{language === 'it' ? 'Ruolo GDPR: Agentics agisce come Responsabile del Trattamento (Art. 28 GDPR)' : 'GDPR Role: Agentics acts as Data Processor (Art. 28 GDPR)'}</em></p>
                  <p className="leading-relaxed pl-4 mt-2">{language === 'it' ? 'Il trattamento è regolato da un Data Processing Agreement (DPA) specifico allegato al contratto di servizio.' : 'Processing is governed by a specific Data Processing Agreement (DPA) attached to the service contract.'}</p>
                </div>
                <div>
                  <p className="leading-relaxed mb-2"><strong>{language === 'it' ? '2.3 Dati trattati nell\'ambito di contratti di Sviluppo Software su Commessa (clienti B2B)' : '2.3 Data processed under Custom Software Development contracts (B2B clients)'}</strong></p>
                  <p className="leading-relaxed pl-4 mb-1">{language === 'it' ? 'Quando Agentics sviluppa software personalizzato, agenti AI, applicativi o sistemi su misura per conto del Cliente, potrebbe venire a contatto con dati personali forniti dal Cliente per finalità di sviluppo, test e integrazione' : 'When Agentics develops custom software, AI agents, applications, or bespoke systems on behalf of the Client, it may come into contact with personal data provided by the Client for development, testing, and integration purposes'}</p>
                  <p className="leading-relaxed pl-4"><em>{language === 'it' ? 'Ruolo GDPR: Agentics agisce come Responsabile del Trattamento (Art. 28 GDPR). Il Cliente rimane Titolare dei dati.' : 'GDPR Role: Agentics acts as Data Processor (Art. 28 GDPR). The Client remains the Data Controller.'}</em></p>
                  <p className="leading-relaxed pl-4 mt-2">{language === 'it' ? 'Il trattamento è regolato da un Data Processing Agreement (DPA) specifico allegato al Contratto di Servizio. Agentics tratta i dati esclusivamente per l\'esecuzione del contratto di sviluppo e non per finalità proprie.' : 'Processing is governed by a specific Data Processing Agreement (DPA) attached to the Service Contract. Agentics processes data exclusively for the performance of the development contract and not for its own purposes.'}</p>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="font-display font-bold text-3xl text-graphite border-b-2 border-aiblue pb-3">{language === 'it' ? '3. Tipologie di Dati Personali Trattati' : '3. Types of Personal Data Processed'}</h2>
              <div className="space-y-6">
                <div>
                  <p className="leading-relaxed mb-2"><strong>{language === 'it' ? '3.1 Dati raccolti sul sito web' : '3.1 Data collected on the website'}</strong></p>
                  <p className="leading-relaxed pl-4 mb-2">{language === 'it' ? 'A) Dati forniti volontariamente (modulo contatti):' : 'A) Data voluntarily provided (contact form):'}</p>
                  <ul className="list-disc pl-12 space-y-2">
                    <li>{language === 'it' ? 'Dati identificativi: nome, cognome' : 'Identification data: first name, last name'}</li>
                    <li>{language === 'it' ? 'Dati di contatto: indirizzo email, numero di telefono' : 'Contact data: email address, phone number'}</li>
                    <li>{language === 'it' ? 'Dati professionali: nome azienda, settore, ruolo' : 'Professional data: company name, industry, role'}</li>
                    <li>{language === 'it' ? 'Dati sulla richiesta: tipo di automazione richiesta, messaggio libero' : 'Request data: type of automation requested, free-text message'}</li>
                  </ul>
                </div>
                <div>
                  <p className="leading-relaxed mb-2"><strong>{language === 'it' ? '3.2 Dati trattati nei Servizi AI SaaS (per conto dei clienti)' : '3.2 Data processed in AI SaaS Services (on behalf of clients)'}</strong></p>
                  <p className="leading-relaxed pl-4 mb-2">{language === 'it' ? 'Quando forniamo servizi di automazione AI in modalità managed ai nostri clienti business, possiamo trattare per loro conto:' : 'When we provide managed AI automation services to our business clients, we may process on their behalf:'}</p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>{language === 'it' ? 'Conversazioni AI: testi, messaggi, trascrizioni di interazioni con chatbot/receptionist virtuali' : 'AI conversations: texts, messages, transcriptions of interactions with chatbots/virtual receptionists'}</li>
                    <li>{language === 'it' ? 'Registrazioni vocali: audio delle chiamate gestite da Voice AI' : 'Voice recordings: audio of calls handled by Voice AI'}</li>
                    <li>{language === 'it' ? 'Dati identificativi end-user: nome, email, telefono degli utenti finali del Cliente' : 'End-user identification data: name, email, phone number of the Client\'s end users'}</li>
                    <li>{language === 'it' ? 'Dati comportamentali: pattern di utilizzo, preferenze, cronologia interazioni' : 'Behavioral data: usage patterns, preferences, interaction history'}</li>
                    <li>{language === 'it' ? 'Log di sistema: timestamp, errori, metriche prestazionali' : 'System logs: timestamps, errors, performance metrics'}</li>
                    <li>{language === 'it' ? 'Metadati operativi: informazioni tecniche sulle sessioni AI' : 'Operational metadata: technical information about AI sessions'}</li>
                  </ul>
                  <p className="leading-relaxed pl-4 mt-3 italic">{language === 'it' ? 'Attenzione: In questo contesto, il Cliente rimane Titolare del trattamento. Agentics è Responsabile (Art. 28 GDPR) e opera secondo le istruzioni documentate nel DPA.' : 'Notice: In this context, the Client remains the Data Controller. Agentics is the Data Processor (Art. 28 GDPR) and operates according to the documented instructions in the DPA.'}</p>
                </div>
                <div>
                  <p className="leading-relaxed mb-2"><strong>{language === 'it' ? '3.3 Dati trattati nello Sviluppo Software su Commessa (per conto dei clienti)' : '3.3 Data processed in Custom Software Development (on behalf of clients)'}</strong></p>
                  <p className="leading-relaxed pl-4 mb-2">{language === 'it' ? 'Nell\'ambito di contratti di sviluppo software personalizzato, Agentics può trattare per conto del Cliente:' : 'Under custom software development contracts, Agentics may process on behalf of the Client:'}</p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>{language === 'it' ? 'Dati tecnici forniti per lo sviluppo: dataset di training, dati di test, esempi di utilizzo' : 'Technical data provided for development: training datasets, test data, usage examples'}</li>
                    <li>{language === 'it' ? 'Dati di integrazione: strutture di database, schemi API, dati campione anonimi o pseudonimizzati' : 'Integration data: database structures, API schemas, anonymous or pseudonymized sample data'}</li>
                    <li>{language === 'it' ? 'Dati degli utenti finali del Cliente utilizzati esclusivamente in ambienti di test e staging' : 'Client\'s end-user data used exclusively in test and staging environments'}</li>
                    <li>{language === 'it' ? 'Log e metriche di utilizzo nelle fasi di collaudo' : 'Logs and usage metrics during testing phases'}</li>
                  </ul>
                  <p className="leading-relaxed pl-4 mt-3 italic">{language === 'it' ? 'Attenzione: I dati forniti per lo sviluppo devono essere preferibilmente anonimi o pseudonimizzati. Se contengono dati personali, il Cliente è responsabile di informarne preventivamente Agentics e di regolare il trattamento tramite DPA. Agentics non utilizza tali dati per finalità proprie.' : 'Notice: Data provided for development should preferably be anonymous or pseudonymized. If they contain personal data, the Client is responsible for informing Agentics in advance and regulating the processing through a DPA. Agentics does not use such data for its own purposes.'}</p>
                </div>
                <div>
                  <p className="leading-relaxed mb-2"><strong>{language === 'it' ? '3.3 Categorie particolari di dati (Art. 9 GDPR)' : '3.3 Special categories of data (Art. 9 GDPR)'}</strong></p>
                  <p className="leading-relaxed pl-4 mb-2">{language === 'it' ? 'NON raccogliamo intenzionalmente dati sensibili quali:' : 'We do NOT intentionally collect sensitive data such as:'}</p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>{language === 'it' ? 'Origine razziale o etnica' : 'Racial or ethnic origin'}</li>
                    <li>{language === 'it' ? 'Opinioni politiche, religiose, filosofiche' : 'Political, religious, or philosophical opinions'}</li>
                    <li>{language === 'it' ? 'Dati genetici o biometrici' : 'Genetic or biometric data'}</li>
                    <li>{language === 'it' ? 'Dati relativi alla salute' : 'Health-related data'}</li>
                    <li>{language === 'it' ? 'Vita sessuale o orientamento sessuale' : 'Sex life or sexual orientation'}</li>
                  </ul>
                  <p className="leading-relaxed pl-4 mt-3">{language === 'it' ? 'Se tali dati fossero inseriti spontaneamente (es. in messaggi liberi), procederemo alla loro immediata cancellazione senza utilizzo.' : 'If such data is spontaneously provided (e.g., in free-text messages), we will proceed with their immediate deletion without use.'}</p>
                </div>
                <div>
                  <p className="leading-relaxed mb-2"><strong>{language === 'it' ? '3.4 Dati raccolti tramite Chatbot AI' : '3.4 Data collected through AI Chatbot'}</strong></p>
                  <p className="leading-relaxed pl-4 mb-3">{language === 'it' ? 'Quando utilizzi il chatbot presente sul nostro sito web, i tuoi dati vengono trattati anche da fornitori terzi essenziali per il funzionamento del servizio:' : 'When you use the chatbot on our website, your data is also processed by third-party providers essential for the operation of the service:'}</p>

                  <div className="pl-4 space-y-6">
                    <div>
                      <p className="font-semibold mb-2">{language === 'it' ? 'A) Dati raccolti durante l\'interazione con il chatbot:' : 'A) Data collected during chatbot interaction:'}</p>
                      <ul className="list-disc pl-8 space-y-2">
                        <li><strong>{language === 'it' ? 'Messaggi e contenuti della conversazione:' : 'Messages and conversation content:'}</strong> {language === 'it' ? 'tutto il testo che scrivi nel chatbot' : 'all text you type in the chatbot'}</li>
                        <li><strong>{language === 'it' ? 'Dati di sessione:' : 'Session data:'}</strong> {language === 'it' ? 'timestamp, durata conversazione, ID sessione' : 'timestamp, conversation duration, session ID'}</li>
                        <li><strong>{language === 'it' ? 'Metadati tecnici:' : 'Technical metadata:'}</strong> {language === 'it' ? 'indirizzo IP, user agent, lingua del browser' : 'IP address, user agent, browser language'}</li>
                        <li><strong>{language === 'it' ? 'Dati forniti volontariamente:' : 'Voluntarily provided data:'}</strong> {language === 'it' ? 'eventuali informazioni personali che scegli di condividere durante la conversazione (nome, email, telefono, richieste specifiche)' : 'any personal information you choose to share during the conversation (name, email, phone, specific requests)'}</li>
                      </ul>
                    </div>

                    <div>
                      <p className="font-semibold mb-3">{language === 'it' ? 'B) Responsabili del Trattamento per il Chatbot' : 'B) Data Processors for the Chatbot'}</p>
                      <p className="leading-relaxed mb-3">{language === 'it' ? 'Quando utilizzi il chatbot, i tuoi dati vengono condivisi con i seguenti Responsabili del Trattamento (Art. 28 GDPR):' : 'When you use the chatbot, your data is shared with the following Data Processors (Art. 28 GDPR):'}</p>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                          <thead>
                            <tr className="bg-gray-100">
                              <th className="border border-gray-300 px-4 py-3 text-left font-semibold">{language === 'it' ? 'Responsabile' : 'Processor'}</th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-semibold">{language === 'it' ? 'Finalità' : 'Purpose'}</th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-semibold">{language === 'it' ? 'Sede' : 'Location'}</th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Privacy Policy</th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-semibold">{language === 'it' ? 'Garanzie Trasferimento' : 'Transfer Safeguards'}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border border-gray-300 px-4 py-3">OpenAI, L.L.C.</td>
                              <td className="border border-gray-300 px-4 py-3">{language === 'it' ? 'Elaborazione conversazioni AI tramite modelli linguistici (GPT)' : 'AI conversation processing through language models (GPT)'}</td>
                              <td className="border border-gray-300 px-4 py-3">USA (California)</td>
                              <td className="border border-gray-300 px-4 py-3"><a href="https://openai.com/policies/privacy-policy" className="text-aiblue hover:underline" target="_blank" rel="noopener noreferrer">Privacy Policy OpenAI</a></td>
                              <td className="border border-gray-300 px-4 py-3">EU-US Data Privacy Framework + SCC</td>
                            </tr>
                            <tr className="bg-gray-50">
                              <td className="border border-gray-300 px-4 py-3">n8n GmbH</td>
                              <td className="border border-gray-300 px-4 py-3">{language === 'it' ? 'Orchestrazione workflow e automazione conversazioni chatbot' : 'Workflow orchestration and chatbot conversation automation'}</td>
                              <td className="border border-gray-300 px-4 py-3">{language === 'it' ? 'Germania (EU)' : 'Germany (EU)'}</td>
                              <td className="border border-gray-300 px-4 py-3"><a href="https://n8n.io/legal/privacy" className="text-aiblue hover:underline" target="_blank" rel="noopener noreferrer">Privacy Policy n8n</a></td>
                              <td className="border border-gray-300 px-4 py-3">{language === 'it' ? 'Sede UE - Nessun trasferimento extra-UE' : 'EU headquarters - No extra-EU transfer'}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div>
                      <p className="font-semibold mb-2">{language === 'it' ? 'C) Come vengono utilizzati i dati dal chatbot' : 'C) How chatbot data is used'}</p>
                      <ul className="list-disc pl-8 space-y-2">
                        <li><strong>{language === 'it' ? 'Elaborazione immediata:' : 'Immediate processing:'}</strong> {language === 'it' ? 'I messaggi vengono inviati a OpenAI per generare risposte intelligenti tramite intelligenza artificiale' : 'Messages are sent to OpenAI to generate intelligent responses through artificial intelligence'}</li>
                        <li><strong>{language === 'it' ? 'Orchestrazione:' : 'Orchestration:'}</strong> {language === 'it' ? 'n8n gestisce il flusso della conversazione e l\'integrazione con i nostri sistemi' : 'n8n manages the conversation flow and integration with our systems'}</li>
                        <li><strong>{language === 'it' ? 'Conservazione conversazioni:' : 'Conversation retention:'}</strong> {language === 'it' ? 'Le conversazioni possono essere conservate per migliorare il servizio e fornire supporto' : 'Conversations may be retained to improve the service and provide support'}</li>
                      </ul>
                    </div>

                    <div>
                      <p className="font-semibold mb-3">{language === 'it' ? 'D) Avviso importante' : 'D) Important notice'}</p>
                      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                        <p className="leading-relaxed mb-2 font-semibold text-yellow-900">{language === 'it' ? 'Attenzione: Non inserire dati sensibili nel chatbot' : 'Warning: Do not enter sensitive data in the chatbot'}</p>
                        <p className="leading-relaxed mb-2 text-yellow-900">{language === 'it' ? 'Ti consigliamo di NON condividere tramite chatbot:' : 'We advise you NOT to share via chatbot:'}</p>
                        <ul className="list-disc pl-8 space-y-1 text-yellow-900">
                          <li>{language === 'it' ? 'Dati sanitari o medici' : 'Health or medical data'}</li>
                          <li>{language === 'it' ? 'Numeri di carte di credito o coordinate bancarie' : 'Credit card numbers or bank details'}</li>
                          <li>{language === 'it' ? 'Documenti d\'identità' : 'Identity documents'}</li>
                          <li>{language === 'it' ? 'Dati di minori' : 'Data of minors'}</li>
                          <li>{language === 'it' ? 'Informazioni riservate aziendali' : 'Confidential business information'}</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <p className="font-semibold mb-2">{language === 'it' ? 'E) Consenso all\'uso del chatbot' : 'E) Consent to chatbot use'}</p>
                      <p className="leading-relaxed mb-3">{language === 'it' ? 'Utilizzando il chatbot, acconsenti esplicitamente:' : 'By using the chatbot, you explicitly consent to:'}</p>
                      <ul className="list-disc pl-8 space-y-2">
                        <li>{language === 'it' ? 'All\'invio dei tuoi messaggi a OpenAI e n8n' : 'Sending your messages to OpenAI and n8n'}</li>
                        <li>{language === 'it' ? 'Al trattamento da parte di questi fornitori secondo le loro Privacy Policy' : 'Processing by these providers according to their Privacy Policies'}</li>
                        <li>{language === 'it' ? 'Al trasferimento dei dati verso gli USA per quanto riguarda OpenAI' : 'Data transfer to the USA regarding OpenAI'}</li>
                      </ul>
                      <p className="leading-relaxed mt-3 mb-2 font-semibold">{language === 'it' ? 'Se NON acconsenti, puoi contattarci tramite:' : 'If you do NOT consent, you can contact us via:'}</p>
                      <ul className="list-disc pl-8 space-y-2">
                        <li>Email: <a href="mailto:info@agentics.eu.com" className="text-aiblue hover:underline">info@agentics.eu.com</a></li>
                        <li>{language === 'it' ? 'Form di contatto tradizionale (senza chatbot)' : 'Traditional contact form (without chatbot)'}</li>
                        <li>{language === 'it' ? 'Telefono' : 'Phone'}: +39 320 289 2541</li>
                      </ul>
                    </div>

                    <div>
                      <p className="font-semibold mb-2">{language === 'it' ? 'F) Diritti specifici relativi al chatbot' : 'F) Specific rights regarding the chatbot'}</p>
                      <p className="leading-relaxed mb-3">
                        {language === 'it'
                          ? <>Puoi esercitare tutti i diritti GDPR (accesso, cancellazione, rettifica, ecc.) anche sui dati raccolti tramite chatbot scrivendo a: <a href="mailto:info@agentics.eu.com" className="text-aiblue hover:underline">info@agentics.eu.com</a></>
                          : <>You can exercise all GDPR rights (access, deletion, rectification, etc.) also on data collected through the chatbot by writing to: <a href="mailto:info@agentics.eu.com" className="text-aiblue hover:underline">info@agentics.eu.com</a></>}
                      </p>
                      <p className="leading-relaxed">{language === 'it' ? <><strong>Tempi di cancellazione:</strong> La cancellazione delle conversazioni dal chatbot avverrà entro 30 giorni dalla richiesta. Nota che potrebbero persistere copie nei backup per ulteriori 90 giorni.</> : <><strong>Deletion timeframe:</strong> Deletion of chatbot conversations will occur within 30 days of the request. Note that copies may persist in backups for an additional 90 days.</>}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="font-display font-bold text-3xl text-graphite border-b-2 border-aiblue pb-3">{language === 'it' ? '4. Finalità e Basi Giuridiche del Trattamento' : '4. Purposes and Legal Bases for Processing'}</h2>
              <div className="space-y-6">
                <div>
                  <p className="leading-relaxed mb-4"><strong>{language === 'it' ? '4.1 Finalità del trattamento sul sito web' : '4.1 Processing purposes on the website'}</strong></p>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 px-4 py-3 text-left font-semibold">{language === 'it' ? 'Finalità' : 'Purpose'}</th>
                          <th className="border border-gray-300 px-4 py-3 text-left font-semibold">{language === 'it' ? 'Base Giuridica' : 'Legal Basis'}</th>
                          <th className="border border-gray-300 px-4 py-3 text-left font-semibold">{language === 'it' ? 'Dati Trattati' : 'Data Processed'}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-3">{language === 'it' ? 'Rispondere a richieste informazioni' : 'Responding to information requests'}</td>
                          <td className="border border-gray-300 px-4 py-3">{language === 'it' ? 'Art. 6(1)(b) GDPR - Misure precontrattuali' : 'Art. 6(1)(b) GDPR - Pre-contractual measures'}</td>
                          <td className="border border-gray-300 px-4 py-3">{language === 'it' ? 'Nome, email, telefono, messaggio' : 'Name, email, phone, message'}</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 px-4 py-3">{language === 'it' ? 'Invio newsletter/comunicazioni marketing' : 'Sending newsletter/marketing communications'}</td>
                          <td className="border border-gray-300 px-4 py-3">{language === 'it' ? 'Art. 6(1)(a) GDPR - Consenso esplicito' : 'Art. 6(1)(a) GDPR - Explicit consent'}</td>
                          <td className="border border-gray-300 px-4 py-3">{language === 'it' ? 'Email, nome' : 'Email, name'}</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-3">{language === 'it' ? 'Migliorare esperienza utente e funzionalità sito' : 'Improving user experience and site functionality'}</td>
                          <td className="border border-gray-300 px-4 py-3">{language === 'it' ? 'Art. 6(1)(f) GDPR - Legittimo interesse' : 'Art. 6(1)(f) GDPR - Legitimate interest'}</td>
                          <td className="border border-gray-300 px-4 py-3">{language === 'it' ? 'Dati navigazione, analytics' : 'Navigation data, analytics'}</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 px-4 py-3">{language === 'it' ? 'Sicurezza informatica e prevenzione frodi' : 'IT security and fraud prevention'}</td>
                          <td className="border border-gray-300 px-4 py-3">{language === 'it' ? 'Art. 6(1)(f) GDPR - Legittimo interesse' : 'Art. 6(1)(f) GDPR - Legitimate interest'}</td>
                          <td className="border border-gray-300 px-4 py-3">{language === 'it' ? 'IP, log accessi' : 'IP, access logs'}</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-3">{language === 'it' ? 'Adempimenti fiscali/contabili' : 'Tax/accounting obligations'}</td>
                          <td className="border border-gray-300 px-4 py-3">{language === 'it' ? 'Art. 6(1)(c) GDPR - Obbligo legale' : 'Art. 6(1)(c) GDPR - Legal obligation'}</td>
                          <td className="border border-gray-300 px-4 py-3">{language === 'it' ? 'Dati fatturazione' : 'Billing data'}</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 px-4 py-3">{language === 'it' ? 'Difesa diritti in sede giudiziaria' : 'Defense of rights in court'}</td>
                          <td className="border border-gray-300 px-4 py-3">{language === 'it' ? 'Art. 6(1)(f) GDPR - Legittimo interesse' : 'Art. 6(1)(f) GDPR - Legitimate interest'}</td>
                          <td className="border border-gray-300 px-4 py-3">{language === 'it' ? 'Tutti i dati pertinenti' : 'All relevant data'}</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-3">{language === 'it' ? 'Esecuzione contratti di sviluppo software su commessa' : 'Execution of custom software development contracts'}</td>
                          <td className="border border-gray-300 px-4 py-3">{language === 'it' ? 'Art. 6(1)(b) GDPR - Esecuzione contratto' : 'Art. 6(1)(b) GDPR - Contract performance'}</td>
                          <td className="border border-gray-300 px-4 py-3">{language === 'it' ? 'Dati tecnici, dati di test, comunicazioni di progetto' : 'Technical data, test data, project communications'}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div>
                  <p className="leading-relaxed mb-2"><strong>{language === 'it' ? '4.2 Legittimo interesse (Art. 6(1)(f) GDPR)' : '4.2 Legitimate interest (Art. 6(1)(f) GDPR)'}</strong></p>
                  <p className="leading-relaxed pl-4 mb-2">{language === 'it' ? 'Quando ci basiamo sul legittimo interesse, abbiamo effettuato un bilanciamento di interessi (Legitimate Interest Assessment) verificando che:' : 'When we rely on legitimate interest, we have conducted a balancing of interests (Legitimate Interest Assessment) verifying that:'}</p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>{language === 'it' ? 'L\'interesse perseguito sia legittimo e rilevante' : 'The interest pursued is legitimate and relevant'}</li>
                    <li>{language === 'it' ? 'Il trattamento sia necessario e proporzionato' : 'The processing is necessary and proportionate'}</li>
                    <li>{language === 'it' ? 'I tuoi diritti e libertà non siano pregiudicati' : 'Your rights and freedoms are not prejudiced'}</li>
                  </ul>
                  <p className="leading-relaxed pl-4 mt-3">
                    {language === 'it'
                      ? <>Puoi opporti al trattamento basato su legittimo interesse scrivendo a: <a href="mailto:info@agentics.eu.com" className="text-aiblue hover:underline">info@agentics.eu.com</a></>
                      : <>You can object to processing based on legitimate interest by writing to: <a href="mailto:info@agentics.eu.com" className="text-aiblue hover:underline">info@agentics.eu.com</a></>}
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="font-display font-bold text-3xl text-graphite border-b-2 border-aiblue pb-3">{language === 'it' ? '5. Conservazione dei Dati' : '5. Data Retention'}</h2>
              <p className="leading-relaxed mb-4">{language === 'it' ? 'Conserviamo i dati personali solo per il tempo strettamente necessario alle finalità per cui sono stati raccolti.' : 'We retain personal data only for the time strictly necessary for the purposes for which it was collected.'}</p>
              <div className="space-y-6">
                <div>
                  <p className="leading-relaxed mb-4"><strong>{language === 'it' ? '5.1 Criteri di conservazione' : '5.1 Retention criteria'}</strong></p>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 px-4 py-3 text-left font-semibold">{language === 'it' ? 'Tipologia' : 'Type'}</th>
                          <th className="border border-gray-300 px-4 py-3 text-left font-semibold">{language === 'it' ? 'Periodo di Conservazione' : 'Retention Period'}</th>
                          <th className="border border-gray-300 px-4 py-3 text-left font-semibold">{language === 'it' ? 'Motivazione' : 'Reason'}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-3">{language === 'it' ? 'Richieste precontrattuali (no contratto firmato)' : 'Pre-contractual requests (no signed contract)'}</td>
                          <td className="border border-gray-300 px-4 py-3">{language === 'it' ? '24 mesi dall\'ultimo contatto' : '24 months from last contact'}</td>
                          <td className="border border-gray-300 px-4 py-3">{language === 'it' ? 'Gestione relazione commerciale' : 'Commercial relationship management'}</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 px-4 py-3">{language === 'it' ? 'Clienti attivi' : 'Active clients'}</td>
                          <td className="border border-gray-300 px-4 py-3">{language === 'it' ? 'Durata rapporto contrattuale + 10 anni' : 'Duration of contractual relationship + 10 years'}</td>
                          <td className="border border-gray-300 px-4 py-3">{language === 'it' ? 'Obblighi fiscali (DPR 600/73, art. 2220 c.c.)' : 'Tax obligations (DPR 600/73, art. 2220 c.c.)'}</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-3">{language === 'it' ? 'Candidature spontanee (CV)' : 'Unsolicited applications (CV)'}</td>
                          <td className="border border-gray-300 px-4 py-3">{language === 'it' ? '24 mesi da invio' : '24 months from submission'}</td>
                          <td className="border border-gray-300 px-4 py-3">{language === 'it' ? 'Gestione recruiting' : 'Recruitment management'}</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 px-4 py-3">Cookie analytics</td>
                          <td className="border border-gray-300 px-4 py-3">{language === 'it' ? '26 mesi' : '26 months'}</td>
                          <td className="border border-gray-300 px-4 py-3">{language === 'it' ? 'Linee guida Garante Privacy' : 'Data Protection Authority guidelines'}</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-3">{language === 'it' ? 'Log di sicurezza' : 'Security logs'}</td>
                          <td className="border border-gray-300 px-4 py-3">{language === 'it' ? '12 mesi' : '12 months'}</td>
                          <td className="border border-gray-300 px-4 py-3">{language === 'it' ? 'Art. 32 GDPR - sicurezza' : 'Art. 32 GDPR - security'}</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 px-4 py-3">{language === 'it' ? 'Backup di sicurezza' : 'Security backups'}</td>
                          <td className="border border-gray-300 px-4 py-3">{language === 'it' ? '90 giorni' : '90 days'}</td>
                          <td className="border border-gray-300 px-4 py-3">Business continuity</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div>
                  <p className="leading-relaxed mb-2"><strong>{language === 'it' ? '5.2 Cancellazione dei dati' : '5.2 Data deletion'}</strong></p>
                  <p className="leading-relaxed pl-4">{language === 'it' ? 'Alla scadenza dei termini, procediamo a:' : 'Upon expiration of the terms, we proceed with:'}</p>
                  <ul className="list-disc pl-8 space-y-2 mt-2">
                    <li>{language === 'it' ? 'Cancellazione definitiva e irreversibile, oppure' : 'Definitive and irreversible deletion, or'}</li>
                    <li>{language === 'it' ? 'Anonimizzazione (per statistiche aggregate non riconducibili a persone)' : 'Anonymization (for aggregate statistics not attributable to individuals)'}</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="font-display font-bold text-3xl text-graphite border-b-2 border-aiblue pb-3">{language === 'it' ? '6. Destinatari dei Dati e Comunicazione a Terzi' : '6. Data Recipients and Third-Party Disclosure'}</h2>
              <div className="space-y-6">
                <div>
                  <p className="leading-relaxed mb-3"><strong>{language === 'it' ? '6.1 Responsabili del Trattamento (Art. 28 GDPR)' : '6.1 Data Processors (Art. 28 GDPR)'}</strong></p>
                  <p className="leading-relaxed pl-4 mb-3">{language === 'it' ? 'I tuoi dati possono essere comunicati a soggetti terzi che agiscono come Responsabili del Trattamento per nostro conto, vincolati da Data Processing Agreement (DPA):' : 'Your data may be disclosed to third parties acting as Data Processors on our behalf, bound by Data Processing Agreements (DPA):'}</p>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 px-4 py-3 text-left font-semibold">{language === 'it' ? 'Responsabile' : 'Processor'}</th>
                          <th className="border border-gray-300 px-4 py-3 text-left font-semibold">{language === 'it' ? 'Finalità' : 'Purpose'}</th>
                          <th className="border border-gray-300 px-4 py-3 text-left font-semibold">{language === 'it' ? 'Sede' : 'Location'}</th>
                          <th className="border border-gray-300 px-4 py-3 text-left font-semibold">{language === 'it' ? 'Garanzie Trasferimento' : 'Transfer Safeguards'}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-3">Google LLC (Analytics)</td>
                          <td className="border border-gray-300 px-4 py-3">{language === 'it' ? 'Statistiche utilizzo sito' : 'Website usage statistics'}</td>
                          <td className="border border-gray-300 px-4 py-3">USA</td>
                          <td className="border border-gray-300 px-4 py-3">EU-US Data Privacy Framework + SCC</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="leading-relaxed pl-4 mt-3 italic text-sm">{language === 'it' ? 'Nota: L\'elenco completo e aggiornato dei Responsabili e dei loro sub-responsabili è disponibile su richiesta a: info@agentics.eu.com' : 'Note: The complete and updated list of Processors and their sub-processors is available upon request at: info@agentics.eu.com'}</p>
                </div>
                <div>
                  <p className="leading-relaxed mb-2"><strong>{language === 'it' ? '6.2 Altri destinatari' : '6.2 Other recipients'}</strong></p>
                  <p className="leading-relaxed pl-4 mb-2">{language === 'it' ? 'I dati possono inoltre essere comunicati a:' : 'Data may also be disclosed to:'}</p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>{language === 'it' ? 'Consulenti legali, fiscali, commercialisti (vincolati a segreto professionale)' : 'Legal, tax, and accounting consultants (bound by professional secrecy)'}</li>
                    <li>{language === 'it' ? 'Istituti bancari e finanziari (per gestione pagamenti)' : 'Banks and financial institutions (for payment management)'}</li>
                    <li>{language === 'it' ? 'Autorità pubbliche e organi giudiziari (su richiesta per obbligo legale)' : 'Public authorities and judicial bodies (upon request for legal obligation)'}</li>
                    <li>{language === 'it' ? 'Partner commerciali (solo previo tuo consenso specifico)' : 'Business partners (only with your specific prior consent)'}</li>
                  </ul>
                  <p className="leading-relaxed pl-4 mt-3 font-semibold">{language === 'it' ? 'Non vendiamo né cediamo i tuoi dati a terzi per finalità commerciali.' : 'We do not sell or transfer your data to third parties for commercial purposes.'}</p>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="font-display font-bold text-3xl text-graphite border-b-2 border-aiblue pb-3">{language === 'it' ? '7. Trasferimenti Internazionali di Dati' : '7. International Data Transfers'}</h2>
              <div className="space-y-6">
                <div>
                  <p className="leading-relaxed mb-3"><strong>{language === 'it' ? '7.1 Trasferimenti verso Paesi extra-UE' : '7.1 Transfers to non-EU countries'}</strong></p>
                  <p className="leading-relaxed pl-4 mb-3">{language === 'it' ? 'Alcuni Responsabili del Trattamento operano in Paesi al di fuori dello Spazio Economico Europeo (SEE). In questi casi, garantiamo un livello di protezione adeguato tramite:' : 'Some Data Processors operate in countries outside the European Economic Area (EEA). In these cases, we ensure an adequate level of protection through:'}</p>
                  <div className="space-y-3 pl-4">
                    <div>
                      <p className="font-semibold">A) EU-U.S. Data Privacy Framework (DPF)</p>
                      <p className="leading-relaxed pl-4">{language === 'it' ? 'Per fornitori USA certificati DPF (es. Google LLC)' : 'For DPF-certified US providers (e.g., Google LLC)'}</p>
                      <p className="leading-relaxed pl-4">{language === 'it' ? 'Elenco' : 'List'}: <a href="https://www.dataprivacyframework.gov/list" className="text-aiblue hover:underline" target="_blank" rel="noopener noreferrer">https://www.dataprivacyframework.gov/list</a></p>
                    </div>
                    <div>
                      <p className="font-semibold">{language === 'it' ? 'B) Clausole Contrattuali Standard (SCC)' : 'B) Standard Contractual Clauses (SCC)'}</p>
                      <p className="leading-relaxed pl-4">{language === 'it' ? 'Clausole approvate dalla Commissione UE (Decisione 2021/914)' : 'Clauses approved by the EU Commission (Decision 2021/914)'}</p>
                    </div>
                    <div>
                      <p className="font-semibold">C) Transfer Impact Assessment (TIA)</p>
                      <p className="leading-relaxed pl-4">{language === 'it' ? 'Valutazione caso per caso ai sensi della sentenza Schrems II (C-311/18)' : 'Case-by-case assessment pursuant to the Schrems II ruling (C-311/18)'}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="leading-relaxed mb-3"><strong>{language === 'it' ? '7.2 Fornitori con sede USA' : '7.2 US-based providers'}</strong></p>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 px-4 py-3 text-left font-semibold">{language === 'it' ? 'Fornitore' : 'Provider'}</th>
                          <th className="border border-gray-300 px-4 py-3 text-left font-semibold">{language === 'it' ? 'Sede' : 'Location'}</th>
                          <th className="border border-gray-300 px-4 py-3 text-left font-semibold">{language === 'it' ? 'Garanzie Adottate' : 'Safeguards Adopted'}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-3">Google LLC</td>
                          <td className="border border-gray-300 px-4 py-3">USA (California)</td>
                          <td className="border border-gray-300 px-4 py-3">{language === 'it' ? 'DPF + SCC + Crittografia end-to-end' : 'DPF + SCC + End-to-end encryption'}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="leading-relaxed pl-4 mt-3 italic text-sm">{language === 'it' ? 'Documenti disponibili: Puoi richiedere copia delle SCC firmate scrivendo a: info@agentics.eu.com' : 'Available documents: You can request a copy of the signed SCCs by writing to: info@agentics.eu.com'}</p>
                </div>
                <div>
                  <p className="leading-relaxed"><strong>{language === 'it' ? '7.3 Monitoraggio normativo' : '7.3 Regulatory monitoring'}</strong></p>
                  <p className="leading-relaxed pl-4">{language === 'it' ? 'Monitoriamo costantemente l\'evoluzione normativa su trasferimenti internazionali e adeguiamo le garanzie quando necessario.' : 'We constantly monitor regulatory developments on international transfers and adjust safeguards when necessary.'}</p>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="font-display font-bold text-3xl text-graphite border-b-2 border-aiblue pb-3">{language === 'it' ? '8. Diritti dell\'Interessato' : '8. Data Subject Rights'}</h2>
              <p className="leading-relaxed mb-4">{language === 'it' ? 'Ai sensi degli articoli 15-22 GDPR, hai diritto di:' : 'Pursuant to Articles 15-22 GDPR, you have the right to:'}</p>
              <div className="space-y-6">
                <div>
                  <p className="leading-relaxed mb-2"><strong>{language === 'it' ? '8.1 Diritto di accesso (Art. 15)' : '8.1 Right of access (Art. 15)'}</strong></p>
                  <p className="leading-relaxed pl-4">{language === 'it' ? 'Ottenere conferma che stiamo trattando tuoi dati e riceverne copia' : 'Obtain confirmation that we are processing your data and receive a copy'}</p>
                </div>
                <div>
                  <p className="leading-relaxed mb-2"><strong>{language === 'it' ? '8.2 Diritto di rettifica (Art. 16)' : '8.2 Right to rectification (Art. 16)'}</strong></p>
                  <p className="leading-relaxed pl-4">{language === 'it' ? 'Correggere dati inesatti o integrare dati incompleti' : 'Correct inaccurate data or supplement incomplete data'}</p>
                </div>
                <div>
                  <p className="leading-relaxed mb-2"><strong>{language === 'it' ? '8.3 Diritto alla cancellazione - "Diritto all\'oblio" (Art. 17)' : '8.3 Right to erasure - "Right to be forgotten" (Art. 17)'}</strong></p>
                  <p className="leading-relaxed pl-4 mb-2">{language === 'it' ? 'Ottenere la cancellazione dei dati quando:' : 'Obtain the erasure of data when:'}</p>
                  <ul className="list-disc pl-12 space-y-2">
                    <li>{language === 'it' ? 'Non sono più necessari' : 'They are no longer necessary'}</li>
                    <li>{language === 'it' ? 'Revochi il consenso (se questa era la base giuridica)' : 'You withdraw consent (if this was the legal basis)'}</li>
                    <li>{language === 'it' ? 'Ti opponi al trattamento basato su legittimo interesse' : 'You object to processing based on legitimate interest'}</li>
                    <li>{language === 'it' ? 'Sono stati trattati illecitamente' : 'They have been unlawfully processed'}</li>
                  </ul>
                  <p className="leading-relaxed pl-4 mt-3 mb-2"><strong>{language === 'it' ? 'Limiti:' : 'Limitations:'}</strong> {language === 'it' ? 'La cancellazione può essere rifiutata per:' : 'Erasure may be refused for:'}</p>
                  <ul className="list-disc pl-12 space-y-2">
                    <li>{language === 'it' ? 'Adempiere obblighi legali (es. conservazione fiscale 10 anni)' : 'Compliance with legal obligations (e.g., 10-year tax retention)'}</li>
                    <li>{language === 'it' ? 'Difendere diritti in sede giudiziaria' : 'Defense of rights in court'}</li>
                    <li>{language === 'it' ? 'Esercitare libertà di espressione/informazione' : 'Exercise of freedom of expression/information'}</li>
                  </ul>
                </div>
                <div>
                  <p className="leading-relaxed mb-2"><strong>{language === 'it' ? '8.4 Diritto di limitazione (Art. 18)' : '8.4 Right to restriction (Art. 18)'}</strong></p>
                  <p className="leading-relaxed pl-4 mb-2">{language === 'it' ? 'Chiedere di "congelare" temporaneamente il trattamento quando:' : 'Request to temporarily "freeze" processing when:'}</p>
                  <ul className="list-disc pl-12 space-y-2">
                    <li>{language === 'it' ? 'Contesti l\'esattezza dei dati' : 'You contest the accuracy of the data'}</li>
                    <li>{language === 'it' ? 'Il trattamento è illecito ma preferisci limitarlo anziché cancellarlo' : 'The processing is unlawful but you prefer restriction rather than erasure'}</li>
                    <li>{language === 'it' ? 'Ti servono per difendere diritti in giudizio' : 'You need them for the defense of rights in court'}</li>
                  </ul>
                </div>
                <div>
                  <p className="leading-relaxed mb-2"><strong>{language === 'it' ? '8.5 Diritto alla portabilità (Art. 20)' : '8.5 Right to data portability (Art. 20)'}</strong></p>
                  <p className="leading-relaxed pl-4 mb-2">{language === 'it' ? 'Ricevere i tuoi dati in formato strutturato, leggibile da dispositivo automatico (es. CSV, JSON) e trasmetterli ad altro titolare' : 'Receive your data in a structured, machine-readable format (e.g., CSV, JSON) and transmit them to another controller'}</p>
                  <p className="leading-relaxed pl-4 mb-2">{language === 'it' ? 'Applicabile solo se:' : 'Applicable only if:'}</p>
                  <ul className="list-disc pl-12 space-y-2">
                    <li>{language === 'it' ? 'Il trattamento si basa su consenso o contratto' : 'The processing is based on consent or contract'}</li>
                    <li>{language === 'it' ? 'Viene effettuato con mezzi automatizzati' : 'It is carried out by automated means'}</li>
                  </ul>
                </div>
                <div>
                  <p className="leading-relaxed mb-2"><strong>{language === 'it' ? '8.6 Diritto di opposizione (Art. 21)' : '8.6 Right to object (Art. 21)'}</strong></p>
                  <p className="leading-relaxed pl-4">{language === 'it' ? 'Opporti al trattamento basato su legittimo interesse o per finalità di marketing diretto (anche profilazione collegata)' : 'Object to processing based on legitimate interest or for direct marketing purposes (including related profiling)'}</p>
                </div>
                <div>
                  <p className="leading-relaxed mb-2"><strong>{language === 'it' ? '8.7 Diritto di revoca del consenso (Art. 7.3)' : '8.7 Right to withdraw consent (Art. 7.3)'}</strong></p>
                  <p className="leading-relaxed pl-4">{language === 'it' ? 'Revocare il consenso in qualsiasi momento, senza pregiudicare la liceità del trattamento precedente' : 'Withdraw consent at any time, without affecting the lawfulness of prior processing'}</p>
                  <p className="leading-relaxed pl-4 mt-2 italic">{language === 'it' ? 'Nota: La revoca non ha effetto retroattivo' : 'Note: Withdrawal does not have retroactive effect'}</p>
                </div>
                <div>
                  <p className="leading-relaxed mb-3"><strong>{language === 'it' ? '8.8 Come esercitare i diritti' : '8.8 How to exercise your rights'}</strong></p>
                  <div className="pl-4 space-y-3">
                    <div>
                      <p className="font-semibold mb-2">{language === 'it' ? 'Modalità:' : 'Methods:'}</p>
                      <ul className="list-disc pl-8 space-y-1">
                        <li>Email: <a href="mailto:info@agentics.eu.com" className="text-aiblue hover:underline">info@agentics.eu.com</a></li>
                        <li>PEC: <a href="mailto:agentics@pec.it" className="text-aiblue hover:underline">agentics@pec.it</a></li>
                        <li>{language === 'it' ? 'Posta' : 'Mail'}: Via Vincenzo Monti 16, 04100 Latina (LT)</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold mb-2">{language === 'it' ? 'Documenti da allegare:' : 'Documents to attach:'}</p>
                      <ul className="list-disc pl-8 space-y-1">
                        <li>{language === 'it' ? 'Copia documento identità valido' : 'Copy of valid identity document'}</li>
                        <li>{language === 'it' ? 'Descrizione chiara della richiesta' : 'Clear description of the request'}</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold mb-2">{language === 'it' ? 'Tempi di risposta:' : 'Response times:'}</p>
                      <ul className="list-disc pl-8 space-y-1">
                        <li>{language === 'it' ? '30 giorni dalla ricezione della richiesta' : '30 days from receipt of request'}</li>
                        <li>{language === 'it' ? 'Estensibili a 90 giorni in casi complessi (con comunicazione motivata entro 30 giorni)' : 'Extendable to 90 days in complex cases (with reasoned communication within 30 days)'}</li>
                      </ul>
                    </div>
                    <div>
                      <p className="leading-relaxed"><strong>{language === 'it' ? 'Gratuità:' : 'Free of charge:'}</strong> {language === 'it' ? 'L\'esercizio dei diritti è gratuito. Possiamo richiedere un contributo spese solo per richieste manifestamente infondate o eccessive.' : 'Exercising your rights is free of charge. We may request a fee only for manifestly unfounded or excessive requests.'}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="leading-relaxed mb-3"><strong>{language === 'it' ? '8.9 Reclamo al Garante' : '8.9 Complaint to the Data Protection Authority'}</strong></p>
                  <p className="leading-relaxed pl-4 mb-3">{language === 'it' ? 'Hai diritto di proporre reclamo all\'Autorità di controllo:' : 'You have the right to lodge a complaint with the supervisory authority:'}</p>
                  <div className="pl-4">
                    <p className="font-semibold">{language === 'it' ? 'Garante per la Protezione dei Dati Personali' : 'Italian Data Protection Authority (Garante per la Protezione dei Dati Personali)'}</p>
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
              <h2 className="font-display font-bold text-3xl text-graphite border-b-2 border-aiblue pb-3">{language === 'it' ? '9. Sicurezza dei Dati' : '9. Data Security'}</h2>
              <div className="space-y-6">
                <div>
                  <p className="leading-relaxed mb-3"><strong>{language === 'it' ? '9.1 Misure tecniche e organizzative (Art. 32 GDPR)' : '9.1 Technical and organizational measures (Art. 32 GDPR)'}</strong></p>
                  <p className="leading-relaxed pl-4 mb-3">{language === 'it' ? 'Adottiamo misure di sicurezza adeguate per proteggere i dati da:' : 'We adopt adequate security measures to protect data from:'}</p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>{language === 'it' ? 'Distruzione accidentale o illecita' : 'Accidental or unlawful destruction'}</li>
                    <li>{language === 'it' ? 'Perdita, alterazione, divulgazione non autorizzata' : 'Loss, alteration, unauthorized disclosure'}</li>
                    <li>{language === 'it' ? 'Accesso non autorizzato' : 'Unauthorized access'}</li>
                  </ul>
                  <div className="pl-4 mt-4 space-y-4">
                    <div>
                      <p className="font-semibold mb-2">{language === 'it' ? 'A) Sicurezza tecnica' : 'A) Technical security'}</p>
                      <ul className="list-disc pl-8 space-y-2">
                        <li>{language === 'it' ? 'Crittografia: TLS 1.3 per trasmissioni, AES-256 per dati at-rest' : 'Encryption: TLS 1.3 for transmissions, AES-256 for data at-rest'}</li>
                        <li>{language === 'it' ? 'Firewall e IDS/IPS: Protezione perimetrale e rilevamento intrusioni' : 'Firewall and IDS/IPS: Perimeter protection and intrusion detection'}</li>
                        <li>{language === 'it' ? 'Backup: Giornalieri con test ripristino mensili' : 'Backup: Daily with monthly recovery tests'}</li>
                        <li>{language === 'it' ? 'Pseudonimizzazione: Dove tecnicamente possibile' : 'Pseudonymization: Where technically feasible'}</li>
                        <li>{language === 'it' ? 'Autenticazione forte: MFA per accessi amministrativi' : 'Strong authentication: MFA for administrative access'}</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold mb-2">{language === 'it' ? 'B) Sicurezza organizzativa' : 'B) Organizational security'}</p>
                      <ul className="list-disc pl-8 space-y-2">
                        <li>{language === 'it' ? 'Controllo accessi: Principio "least privilege" e segregazione ruoli' : 'Access control: "Least privilege" principle and role segregation'}</li>
                        <li>{language === 'it' ? 'Formazione personale: Training GDPR annuale obbligatorio' : 'Staff training: Mandatory annual GDPR training'}</li>
                        <li>{language === 'it' ? 'Politiche interne: Password policy, clean desk, gestione incidenti' : 'Internal policies: Password policy, clean desk, incident management'}</li>
                        <li>{language === 'it' ? 'Audit periodici: Penetration test e vulnerability assessment' : 'Periodic audits: Penetration testing and vulnerability assessment'}</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold mb-2">{language === 'it' ? 'C) Sicurezza fisica' : 'C) Physical security'}</p>
                      <ul className="list-disc pl-8 space-y-2">
                        <li>{language === 'it' ? 'Data center certificati ISO 27001, SOC 2 Type II' : 'ISO 27001, SOC 2 Type II certified data centers'}</li>
                        <li>{language === 'it' ? 'Controllo accessi biometrici' : 'Biometric access control'}</li>
                        <li>{language === 'it' ? 'Videosorveglianza e logging accessi' : 'Video surveillance and access logging'}</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="leading-relaxed mb-3"><strong>{language === 'it' ? '9.2 Data Breach - Gestione violazioni (Art. 33-34 GDPR)' : '9.2 Data Breach - Breach management (Art. 33-34 GDPR)'}</strong></p>
                  <p className="leading-relaxed pl-4 mb-3">{language === 'it' ? 'In caso di violazione dei dati personali:' : 'In the event of a personal data breach:'}</p>
                  <div className="pl-4 space-y-4">
                    <div>
                      <p className="font-semibold mb-2">{language === 'it' ? 'Procedura interna:' : 'Internal procedure:'}</p>
                      <ul className="list-disc pl-8 space-y-2">
                        <li>{language === 'it' ? 'Rilevamento e contenimento entro 24 ore' : 'Detection and containment within 24 hours'}</li>
                        <li>{language === 'it' ? 'Valutazione rischio per diritti e libertà interessati' : 'Risk assessment for data subjects\' rights and freedoms'}</li>
                        <li>{language === 'it' ? 'Notifica al Garante entro 72 ore (se rischio)' : 'Notification to the Authority within 72 hours (if risk exists)'}</li>
                        <li>{language === 'it' ? 'Comunicazione agli interessati (se rischio elevato)' : 'Communication to data subjects (if high risk)'}</li>
                        <li>{language === 'it' ? 'Documentazione nel registro violazioni (Art. 33.5)' : 'Documentation in the breach register (Art. 33.5)'}</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold mb-2">{language === 'it' ? 'Come ti informiamo:' : 'How we inform you:'}</p>
                      <ul className="list-disc pl-8 space-y-2">
                        <li>{language === 'it' ? 'Email all\'indirizzo fornito (per violazioni specifiche)' : 'Email to the address provided (for specific breaches)'}</li>
                        <li>{language === 'it' ? 'Avviso su questa pagina (per violazioni massive)' : 'Notice on this page (for massive breaches)'}</li>
                        <li>{language === 'it' ? 'Comunicazione per posta certificata (se richiesto)' : 'Certified mail communication (if requested)'}</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold mb-2">{language === 'it' ? 'Cosa comunichiamo:' : 'What we communicate:'}</p>
                      <ul className="list-disc pl-8 space-y-2">
                        <li>{language === 'it' ? 'Natura della violazione e categorie dati coinvolti' : 'Nature of the breach and categories of data involved'}</li>
                        <li>{language === 'it' ? 'Numero approssimativo di interessati' : 'Approximate number of data subjects affected'}</li>
                        <li>{language === 'it' ? 'Conseguenze probabili della violazione' : 'Likely consequences of the breach'}</li>
                        <li>{language === 'it' ? 'Misure adottate per mitigarla' : 'Measures taken to mitigate it'}</li>
                        <li>{language === 'it' ? 'Misure consigliate all\'interessato (es. cambio password)' : 'Recommended measures for the data subject (e.g., password change)'}</li>
                        <li>{language === 'it' ? 'Contatto DPO/Responsabile Privacy' : 'DPO/Privacy Officer contact'}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="font-display font-bold text-3xl text-graphite border-b-2 border-aiblue pb-3">{language === 'it' ? '10. Processo Decisionale Automatizzato e Profilazione' : '10. Automated Decision-Making and Profiling'}</h2>
              <div className="space-y-6">
                <div>
                  <p className="leading-relaxed mb-3"><strong>{language === 'it' ? '10.1 Profilazione (Art. 22 GDPR)' : '10.1 Profiling (Art. 22 GDPR)'}</strong></p>
                  <p className="leading-relaxed pl-4 mb-3">{language === 'it' ? 'Attualmente NON utilizziamo i tuoi dati per:' : 'We currently do NOT use your data for:'}</p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>{language === 'it' ? 'Decisioni basate esclusivamente su trattamento automatizzato' : 'Decisions based solely on automated processing'}</li>
                    <li>{language === 'it' ? 'Profilazione che produca effetti giuridici o incida significativamente sulla tua persona' : 'Profiling that produces legal effects or significantly affects you'}</li>
                  </ul>
                  <div className="pl-4 mt-4">
                    <p className="font-semibold mb-2">{language === 'it' ? 'Esempio di cosa NON facciamo:' : 'Examples of what we do NOT do:'}</p>
                    <ul className="list-disc pl-8 space-y-1 text-red-600">
                      <li>{language === 'it' ? 'Valutazione automatica affidabilità creditizia' : 'Automated creditworthiness assessment'}</li>
                      <li>{language === 'it' ? 'Scoring automatico per servizi differenziati' : 'Automated scoring for differentiated services'}</li>
                      <li>{language === 'it' ? 'Rifiuto automatico di richieste senza intervento umano' : 'Automatic rejection of requests without human intervention'}</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <p className="leading-relaxed mb-2"><strong>{language === 'it' ? '10.2 Analytics e personalizzazione' : '10.2 Analytics and personalization'}</strong></p>
                  <p className="leading-relaxed pl-4 mb-2">{language === 'it' ? 'Utilizziamo analytics (Google Analytics) per:' : 'We use analytics (Google Analytics) for:'}</p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>{language === 'it' ? 'Statistiche aggregate utilizzo sito' : 'Aggregate website usage statistics'}</li>
                    <li>{language === 'it' ? 'Migliorare user experience' : 'Improving user experience'}</li>
                  </ul>
                  <p className="leading-relaxed pl-4 mt-3">{language === 'it' ? 'Questi trattamenti NON costituiscono profilazione ai sensi Art. 22 GDPR.' : 'This processing does NOT constitute profiling within the meaning of Art. 22 GDPR.'}</p>
                  <p className="leading-relaxed pl-4 mt-3 italic">{language === 'it' ? 'Se in futuro implementassimo profilazione, ti informeremo preventivamente e richiederemo il consenso esplicito.' : 'If we implement profiling in the future, we will inform you in advance and request your explicit consent.'}</p>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="font-display font-bold text-3xl text-graphite border-b-2 border-aiblue pb-3">{language === 'it' ? '11. Registro delle Attività di Trattamento (Art. 30 GDPR)' : '11. Record of Processing Activities (Art. 30 GDPR)'}</h2>
              <p className="leading-relaxed mb-3">{language === 'it' ? 'Manteniamo un registro interno aggiornato di tutte le attività di trattamento, contenente:' : 'We maintain an updated internal record of all processing activities, containing:'}</p>
              <ul className="list-disc pl-8 space-y-2">
                <li>{language === 'it' ? 'Finalità del trattamento' : 'Processing purposes'}</li>
                <li>{language === 'it' ? 'Categorie di interessati e dati' : 'Categories of data subjects and data'}</li>
                <li>{language === 'it' ? 'Destinatari dei dati' : 'Data recipients'}</li>
                <li>{language === 'it' ? 'Trasferimenti internazionali' : 'International transfers'}</li>
                <li>{language === 'it' ? 'Tempi di conservazione' : 'Retention periods'}</li>
                <li>{language === 'it' ? 'Misure di sicurezza' : 'Security measures'}</li>
              </ul>
              <p className="leading-relaxed mt-3">{language === 'it' ? 'Il registro è disponibile su richiesta del Garante o degli interessati (in forma sintetica).' : 'The record is available upon request from the Authority or data subjects (in summary form).'}</p>
            </section>

            <section className="space-y-6">
              <h2 className="font-display font-bold text-3xl text-graphite border-b-2 border-aiblue pb-3">{language === 'it' ? '12. Valutazione d\'Impatto sulla Protezione dei Dati (DPIA - Art. 35 GDPR)' : '12. Data Protection Impact Assessment (DPIA - Art. 35 GDPR)'}</h2>
              <div className="space-y-6">
                <div>
                  <p className="leading-relaxed mb-3"><strong>{language === 'it' ? '12.1 Quando effettuiamo DPIA' : '12.1 When we conduct DPIA'}</strong></p>
                  <p className="leading-relaxed pl-4 mb-3">{language === 'it' ? 'Realizziamo una Data Protection Impact Assessment prima di introdurre:' : 'We carry out a Data Protection Impact Assessment before introducing:'}</p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>{language === 'it' ? 'Nuove tecnologie con rischio elevato per diritti e libertà' : 'New technologies with high risk for rights and freedoms'}</li>
                    <li>{language === 'it' ? 'Trattamenti su larga scala di dati sensibili' : 'Large-scale processing of sensitive data'}</li>
                    <li>{language === 'it' ? 'Monitoraggio sistematico di aree accessibili al pubblico' : 'Systematic monitoring of publicly accessible areas'}</li>
                    <li>{language === 'it' ? 'Profilazione automatizzata con effetti giuridici' : 'Automated profiling with legal effects'}</li>
                  </ul>
                  <div className="pl-4 mt-4">
                    <p className="font-semibold mb-2">{language === 'it' ? 'Esempi:' : 'Examples:'}</p>
                    <ul className="list-disc pl-8 space-y-2">
                      <li>{language === 'it' ? 'Implementazione nuovi sistemi AI conversazionali' : 'Implementation of new conversational AI systems'}</li>
                      <li>{language === 'it' ? 'Raccolta massiva di dati biometrici' : 'Mass collection of biometric data'}</li>
                      <li>{language === 'it' ? 'Sistemi di videosorveglianza con riconoscimento facciale' : 'Video surveillance systems with facial recognition'}</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <p className="leading-relaxed mb-2"><strong>{language === 'it' ? '12.2 Consultazione preventiva (Art. 36)' : '12.2 Prior consultation (Art. 36)'}</strong></p>
                  <p className="leading-relaxed pl-4">{language === 'it' ? 'Se dalla DPIA emerge rischio elevato residuo, consultiamo preventivamente il Garante prima di avviare il trattamento.' : 'If the DPIA reveals high residual risk, we consult the Authority in advance before starting the processing.'}</p>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="font-display font-bold text-3xl text-graphite border-b-2 border-aiblue pb-3">{language === 'it' ? '13. Privacy by Design e by Default (Art. 25 GDPR)' : '13. Privacy by Design and by Default (Art. 25 GDPR)'}</h2>
              <div className="space-y-6">
                <div>
                  <p className="leading-relaxed mb-3"><strong>{language === 'it' ? '13.1 Privacy fin dalla progettazione' : '13.1 Privacy from the design stage'}</strong></p>
                  <p className="leading-relaxed pl-4 mb-3">{language === 'it' ? 'Integriamo la protezione dati dalla fase di design di sistemi e servizi:' : 'We integrate data protection from the design phase of systems and services:'}</p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>{language === 'it' ? 'Minimizzazione dei dati raccolti' : 'Minimization of collected data'}</li>
                    <li>{language === 'it' ? 'Pseudonimizzazione dove possibile' : 'Pseudonymization where possible'}</li>
                    <li>{language === 'it' ? 'Trasparenza per impostazione predefinita' : 'Transparency by default'}</li>
                  </ul>
                </div>
                <div>
                  <p className="leading-relaxed mb-3"><strong>{language === 'it' ? '13.2 Privacy per impostazione predefinita' : '13.2 Privacy by default'}</strong></p>
                  <p className="leading-relaxed pl-4 mb-3">{language === 'it' ? 'Impostazioni di default:' : 'Default settings:'}</p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>{language === 'it' ? 'Solo dati strettamente necessari vengono raccolti' : 'Only strictly necessary data is collected'}</li>
                    <li>{language === 'it' ? 'Periodo conservazione minimo applicabile' : 'Minimum applicable retention period'}</li>
                    <li>{language === 'it' ? 'Accesso limitato ai soli autorizzati' : 'Access limited to authorized personnel only'}</li>
                    <li>{language === 'it' ? 'Nessun trattamento per finalità secondarie senza consenso' : 'No processing for secondary purposes without consent'}</li>
                  </ul>
                  <p className="leading-relaxed pl-4 mt-3">{language === 'it' ? 'Puoi sempre modificare le impostazioni nelle preferenze privacy.' : 'You can always change settings in your privacy preferences.'}</p>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="font-display font-bold text-3xl text-graphite border-b-2 border-aiblue pb-3">{language === 'it' ? '14. Cookie e Tecnologie di Tracciamento' : '14. Cookies and Tracking Technologies'}</h2>
              <div className="space-y-6">
                <div>
                  <p className="leading-relaxed mb-3"><strong>{language === 'it' ? '14.1 Cosa sono i cookie' : '14.1 What are cookies'}</strong></p>
                  <p className="leading-relaxed pl-4 mb-3">{language === 'it' ? 'I cookie sono piccoli file di testo memorizzati sul tuo dispositivo quando visiti il nostro sito. Permettono di:' : 'Cookies are small text files stored on your device when you visit our site. They allow us to:'}</p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>{language === 'it' ? 'Ricordare preferenze e impostazioni' : 'Remember preferences and settings'}</li>
                    <li>{language === 'it' ? 'Analizzare il traffico del sito' : 'Analyze site traffic'}</li>
                    <li>{language === 'it' ? 'Migliorare l\'esperienza di navigazione' : 'Improve the browsing experience'}</li>
                    <li>{language === 'it' ? 'Mostrare contenuti personalizzati (se acconsenti)' : 'Display personalized content (if you consent)'}</li>
                  </ul>
                </div>
                <div>
                  <p className="leading-relaxed mb-4"><strong>{language === 'it' ? '14.2 Tipologie di cookie utilizzati' : '14.2 Types of cookies used'}</strong></p>
                  <div className="space-y-4">
                    <div className="pl-4">
                      <p className="font-semibold mb-2">{language === 'it' ? 'A) Cookie tecnici/necessari (NO consenso richiesto)' : 'A) Technical/necessary cookies (NO consent required)'}</p>
                      <p className="leading-relaxed mb-1">{language === 'it' ? 'Durata: Sessione o max 24 mesi' : 'Duration: Session or max 24 months'}</p>
                      <p className="leading-relaxed mb-1">{language === 'it' ? 'Finalità: Funzionamento essenziale del sito (es. gestione sessione, sicurezza)' : 'Purpose: Essential site operation (e.g., session management, security)'}</p>
                      <p className="leading-relaxed">{language === 'it' ? 'Base giuridica: Art. 122 Codice Privacy + Esenzione Garante' : 'Legal basis: Art. 122 Privacy Code + Authority Exemption'}</p>
                    </div>
                    <div className="pl-4">
                      <p className="font-semibold mb-2">{language === 'it' ? 'B) Cookie analitici (Consenso richiesto)' : 'B) Analytical cookies (Consent required)'}</p>
                      <p className="leading-relaxed mb-1">{language === 'it' ? 'Fornitore: Google Analytics' : 'Provider: Google Analytics'}</p>
                      <p className="leading-relaxed mb-1">{language === 'it' ? 'Durata: 26 mesi' : 'Duration: 26 months'}</p>
                      <p className="leading-relaxed mb-2">{language === 'it' ? 'Finalità: Statistiche aggregate utilizzo (pagine visitate, tempo permanenza, bounce rate)' : 'Purpose: Aggregate usage statistics (pages visited, time on page, bounce rate)'}</p>
                      <p className="leading-relaxed mb-2">{language === 'it' ? 'Misure privacy-friendly:' : 'Privacy-friendly measures:'}</p>
                      <ul className="list-disc pl-8 space-y-1 mb-2">
                        <li>{language === 'it' ? 'IP anonimizzato (ultimi 8 bit rimossi)' : 'Anonymized IP (last 8 bits removed)'}</li>
                        <li>{language === 'it' ? 'Disabilitata condivisione dati con altri servizi Google' : 'Data sharing with other Google services disabled'}</li>
                        <li>{language === 'it' ? 'No remarketing o advertising' : 'No remarketing or advertising'}</li>
                      </ul>
                      <p className="leading-relaxed">{language === 'it' ? 'Base giuridica: Art. 6(1)(a) GDPR - Consenso' : 'Legal basis: Art. 6(1)(a) GDPR - Consent'}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="leading-relaxed mb-3"><strong>{language === 'it' ? '14.3 Cookie di terze parti' : '14.3 Third-party cookies'}</strong></p>
                  <p className="leading-relaxed pl-4 mb-3">{language === 'it' ? 'Il sito può incorporare contenuti da servizi esterni che impostano propri cookie:' : 'The site may embed content from external services that set their own cookies:'}</p>
                  <div className="overflow-x-auto pl-4">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 px-4 py-3 text-left font-semibold">{language === 'it' ? 'Servizio' : 'Service'}</th>
                          <th className="border border-gray-300 px-4 py-3 text-left font-semibold">{language === 'it' ? 'Tipo' : 'Type'}</th>
                          <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Privacy Policy</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-3">Google Analytics</td>
                          <td className="border border-gray-300 px-4 py-3">{language === 'it' ? 'Analitico' : 'Analytical'}</td>
                          <td className="border border-gray-300 px-4 py-3"><a href="https://policies.google.com/privacy" className="text-aiblue hover:underline" target="_blank" rel="noopener noreferrer">Privacy Policy</a></td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 px-4 py-3">Google Fonts</td>
                          <td className="border border-gray-300 px-4 py-3">{language === 'it' ? 'Tecnico' : 'Technical'}</td>
                          <td className="border border-gray-300 px-4 py-3"><a href="https://policies.google.com/privacy" className="text-aiblue hover:underline" target="_blank" rel="noopener noreferrer">Privacy Policy</a></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="leading-relaxed pl-4 mt-3 italic">{language === 'it' ? 'Importante: Non controlliamo i cookie di terze parti. Ti invitiamo a consultare le loro privacy policy.' : 'Important: We do not control third-party cookies. We encourage you to consult their privacy policies.'}</p>
                </div>
                <div>
                  <p className="leading-relaxed mb-3"><strong>{language === 'it' ? '14.4 Banner cookie e gestione del consenso' : '14.4 Cookie banner and consent management'}</strong></p>
                  <p className="leading-relaxed pl-4 mb-3">{language === 'it' ? 'Al primo accesso al sito, viene mostrato un banner cookie che consente di:' : 'On first visit to the site, a cookie banner is shown that allows you to:'}</p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>{language === 'it' ? 'Accettare tutti i cookie (tecnici + analytics + marketing)' : 'Accept all cookies (technical + analytics + marketing)'}</li>
                    <li>{language === 'it' ? 'Rifiutare cookie non essenziali (solo tecnici attivi)' : 'Reject non-essential cookies (only technical cookies active)'}</li>
                    <li>{language === 'it' ? 'Personalizzare preferenze (scegliere singole categorie)' : 'Customize preferences (choose individual categories)'}</li>
                  </ul>
                  <div className="pl-4 mt-4">
                    <p className="font-semibold mb-2">{language === 'it' ? 'Caratteristiche del banner:' : 'Banner features:'}</p>
                    <ul className="list-disc pl-8 space-y-2">
                      <li>{language === 'it' ? 'Blocco preventivo: Cookie non tecnici non vengono caricati fino al consenso' : 'Prior blocking: Non-technical cookies are not loaded until consent is given'}</li>
                      <li>{language === 'it' ? 'Granularità: Possibilità di accettare solo alcune categorie' : 'Granularity: Option to accept only certain categories'}</li>
                      <li>{language === 'it' ? 'Facilmente accessibile: Link "Impostazioni Cookie" sempre visibile nel footer' : 'Easily accessible: "Cookie Settings" link always visible in the footer'}</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <p className="leading-relaxed mb-3"><strong>{language === 'it' ? '14.5 Durata e revoca del consenso' : '14.5 Consent duration and withdrawal'}</strong></p>
                  <p className="leading-relaxed pl-4 mb-3">{language === 'it' ? 'Durata consenso: 12 mesi dalla prima accettazione' : 'Consent duration: 12 months from first acceptance'}</p>
                  <p className="leading-relaxed pl-4 mb-2">{language === 'it' ? 'Come modificare preferenze:' : 'How to change preferences:'}</p>
                  <ul className="list-disc pl-8 space-y-2 mb-3">
                    <li>{language === 'it' ? 'Cliccare su "Impostazioni Cookie" nel footer del sito' : 'Click on "Cookie Settings" in the site footer'}</li>
                    <li>{language === 'it' ? 'Cancellare cookie dal browser' : 'Delete cookies from your browser'}</li>
                    <li>{language === 'it' ? <>Scrivere a: <a href="mailto:info@agentics.eu.com" className="text-aiblue hover:underline">info@agentics.eu.com</a></> : <>Write to: <a href="mailto:info@agentics.eu.com" className="text-aiblue hover:underline">info@agentics.eu.com</a></>}</li>
                  </ul>
                  <div className="pl-4 space-y-3">
                    <div>
                      <p className="font-semibold mb-2">{language === 'it' ? 'Cancellare cookie dal browser:' : 'Delete cookies from your browser:'}</p>
                      <ul className="list-disc pl-8 space-y-1">
                        <li>{language === 'it' ? 'Chrome: Impostazioni > Privacy > Cancella dati navigazione' : 'Chrome: Settings > Privacy > Clear browsing data'}</li>
                        <li>{language === 'it' ? 'Firefox: Opzioni > Privacy > Cancella cronologia recente' : 'Firefox: Options > Privacy > Clear recent history'}</li>
                        <li>{language === 'it' ? 'Safari: Preferenze > Privacy > Gestisci dati siti web' : 'Safari: Preferences > Privacy > Manage website data'}</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold mb-2">{language === 'it' ? 'Conseguenze del rifiuto:' : 'Consequences of refusal:'}</p>
                      <ul className="list-disc pl-8 space-y-2">
                        <li>{language === 'it' ? 'Il rifiuto dei cookie non tecnici non pregiudica la navigazione' : 'Refusing non-technical cookies does not affect browsing'}</li>
                        <li>{language === 'it' ? 'Alcune funzionalità potrebbero essere limitate (es. contenuti personalizzati)' : 'Some features may be limited (e.g., personalized content)'}</li>
                        <li>{language === 'it' ? 'Statistiche aggregate potrebbero essere meno accurate' : 'Aggregate statistics may be less accurate'}</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="leading-relaxed mb-3"><strong>{language === 'it' ? '14.6 Opt-out specifici' : '14.6 Specific opt-outs'}</strong></p>
                  <div className="pl-4 space-y-3">
                    <p className="leading-relaxed">{language === 'it' ? 'Google Analytics: Puoi installare il componente aggiuntivo:' : 'Google Analytics: You can install the opt-out add-on:'}<br />
                    <a href="https://tools.google.com/dlpage/gaoptout" className="text-aiblue hover:underline" target="_blank" rel="noopener noreferrer">https://tools.google.com/dlpage/gaoptout</a></p>
                    <div>
                      <p className="leading-relaxed mb-2">Advertising opt-out:</p>
                      <ul className="list-disc pl-8 space-y-1">
                        <li>{language === 'it' ? 'Network pubblicitari' : 'Advertising networks'}: <a href="http://www.youronlinechoices.eu" className="text-aiblue hover:underline" target="_blank" rel="noopener noreferrer">www.youronlinechoices.eu</a></li>
                        <li>NAI opt-out: <a href="http://www.networkadvertising.org/choices" className="text-aiblue hover:underline" target="_blank" rel="noopener noreferrer">www.networkadvertising.org/choices</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="font-display font-bold text-3xl text-graphite border-b-2 border-aiblue pb-3">{language === 'it' ? '15. Modifiche a questa Informativa' : '15. Changes to this Policy'}</h2>
              <div className="space-y-4">
                <div>
                  <p className="leading-relaxed mb-2"><strong>{language === 'it' ? '15.1 Aggiornamenti' : '15.1 Updates'}</strong></p>
                  <p className="leading-relaxed pl-4 mb-2">{language === 'it' ? 'Ci riserviamo il diritto di aggiornare questa Privacy Policy in qualsiasi momento per:' : 'We reserve the right to update this Privacy Policy at any time for:'}</p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>{language === 'it' ? 'Adeguamento a nuove normative' : 'Compliance with new regulations'}</li>
                    <li>{language === 'it' ? 'Evoluzione dei servizi offerti' : 'Evolution of services offered'}</li>
                    <li>{language === 'it' ? 'Miglioramento della trasparenza' : 'Improvement of transparency'}</li>
                  </ul>
                </div>
                <div>
                  <p className="leading-relaxed mb-3"><strong>{language === 'it' ? '15.2 Comunicazione modifiche' : '15.2 Communication of changes'}</strong></p>
                  <div className="pl-4 space-y-3">
                    <div>
                      <p className="font-semibold mb-2">{language === 'it' ? 'Modifiche sostanziali (es. nuove finalità, nuovi destinatari):' : 'Substantial changes (e.g., new purposes, new recipients):'}</p>
                      <ul className="list-disc pl-8 space-y-2">
                        <li>{language === 'it' ? 'Notifica via email agli utenti registrati' : 'Email notification to registered users'}</li>
                        <li>{language === 'it' ? 'Pubblicazione avviso in evidenza sul sito per 30 giorni' : 'Prominent notice published on the site for 30 days'}</li>
                        <li>{language === 'it' ? 'Data di aggiornamento sempre visibile in alto alla Policy' : 'Update date always visible at the top of the Policy'}</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold mb-2">{language === 'it' ? 'Modifiche non sostanziali (es. correzioni formali):' : 'Non-substantial changes (e.g., formal corrections):'}</p>
                      <ul className="list-disc pl-8 space-y-2">
                        <li>{language === 'it' ? 'Solo pubblicazione versione aggiornata' : 'Publication of updated version only'}</li>
                        <li>{language === 'it' ? 'Modifica della "data ultimo aggiornamento"' : 'Change of "last updated" date'}</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="leading-relaxed mb-3"><strong>{language === 'it' ? '15.3 Accettazione modifiche' : '15.3 Acceptance of changes'}</strong></p>
                  <p className="leading-relaxed pl-4 mb-3">{language === 'it' ? 'Proseguendo l\'utilizzo del sito dopo la pubblicazione delle modifiche, accetti la versione aggiornata.' : 'By continuing to use the site after the publication of changes, you accept the updated version.'}</p>
                  <p className="leading-relaxed pl-4 mb-2">{language === 'it' ? 'Se NON accetti le modifiche sostanziali:' : 'If you do NOT accept the substantial changes:'}</p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>{language === 'it' ? 'Puoi cessare l\'uso del sito' : 'You can stop using the site'}</li>
                    <li>{language === 'it' ? 'Puoi richiedere la cancellazione dei tuoi dati' : 'You can request the deletion of your data'}</li>
                  </ul>
                </div>
                <div>
                  <p className="leading-relaxed mb-2"><strong>{language === 'it' ? '15.4 Storico versioni' : '15.4 Version history'}</strong></p>
                  <p className="leading-relaxed pl-4">
                    {language === 'it'
                      ? <>Manteniamo uno storico delle versioni precedenti disponibile su richiesta a: <a href="mailto:info@agentics.eu.com" className="text-aiblue hover:underline">info@agentics.eu.com</a></>
                      : <>We maintain a history of previous versions available upon request at: <a href="mailto:info@agentics.eu.com" className="text-aiblue hover:underline">info@agentics.eu.com</a></>}
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="font-display font-bold text-3xl text-graphite border-b-2 border-aiblue pb-3">{language === 'it' ? '16. Minori di Età' : '16. Minors'}</h2>
              <div className="space-y-4">
                <div>
                  <p className="leading-relaxed mb-2"><strong>{language === 'it' ? '16.1 Età minima' : '16.1 Minimum age'}</strong></p>
                  <p className="leading-relaxed pl-4">{language === 'it' ? 'I nostri servizi sono destinati a soggetti maggiorenni (18+ anni) o imprese.' : 'Our services are intended for adults (18+ years) or businesses.'}</p>
                  <p className="leading-relaxed pl-4 mt-2 font-semibold">{language === 'it' ? 'NON raccogliamo consapevolmente dati di minori di 16 anni senza consenso genitoriale.' : 'We do NOT knowingly collect data from minors under 16 without parental consent.'}</p>
                </div>
                <div>
                  <p className="leading-relaxed mb-3"><strong>{language === 'it' ? '16.2 Procedura in caso di rilevazione' : '16.2 Procedure upon detection'}</strong></p>
                  <p className="leading-relaxed pl-4 mb-2">{language === 'it' ? 'Se veniamo a conoscenza di aver raccolto dati di un minore senza consenso:' : 'If we become aware that we have collected data from a minor without consent:'}</p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>{language === 'it' ? 'Cancellazione immediata dei dati' : 'Immediate data deletion'}</li>
                    <li>{language === 'it' ? 'Blocco dell\'account (se applicabile)' : 'Account blocking (if applicable)'}</li>
                    <li>{language === 'it' ? 'Notifica al genitore/tutore (se identificabile)' : 'Notification to parent/guardian (if identifiable)'}</li>
                  </ul>
                </div>
                <div>
                  <p className="leading-relaxed mb-2"><strong>{language === 'it' ? '16.3 Segnalazione' : '16.3 Reporting'}</strong></p>
                  <p className="leading-relaxed pl-4">
                    {language === 'it'
                      ? <>Se sei genitore/tutore e rilevi che tuo figlio ha fornito dati personali, contattaci immediatamente: <a href="mailto:info@agentics.eu.com" className="text-aiblue hover:underline">info@agentics.eu.com</a></>
                      : <>If you are a parent/guardian and discover that your child has provided personal data, contact us immediately: <a href="mailto:info@agentics.eu.com" className="text-aiblue hover:underline">info@agentics.eu.com</a></>}
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="font-display font-bold text-3xl text-graphite border-b-2 border-aiblue pb-3">{language === 'it' ? '17. Link a Siti di Terze Parti' : '17. Links to Third-Party Websites'}</h2>
              <div className="space-y-4">
                <div>
                  <p className="leading-relaxed mb-3"><strong>{language === 'it' ? '17.1 Disclaimer responsabilità' : '17.1 Liability disclaimer'}</strong></p>
                  <p className="leading-relaxed pl-4 mb-2">{language === 'it' ? 'Il nostro sito può contenere link verso:' : 'Our site may contain links to:'}</p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>{language === 'it' ? 'Siti web di partner commerciali' : 'Business partner websites'}</li>
                    <li>{language === 'it' ? 'Piattaforme social media' : 'Social media platforms'}</li>
                    <li>{language === 'it' ? 'Risorse esterne di approfondimento' : 'External in-depth resources'}</li>
                  </ul>
                  <p className="leading-relaxed pl-4 mt-3 mb-2 font-semibold">{language === 'it' ? 'Agentics NON è responsabile per:' : 'Agentics is NOT responsible for:'}</p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>{language === 'it' ? 'Contenuti pubblicati su siti terzi' : 'Content published on third-party sites'}</li>
                    <li>{language === 'it' ? 'Politiche privacy di tali siti' : 'Privacy policies of such sites'}</li>
                    <li>{language === 'it' ? 'Trattamento dati effettuato da terze parti' : 'Data processing carried out by third parties'}</li>
                    <li>{language === 'it' ? 'Sicurezza e disponibilità dei servizi esterni' : 'Security and availability of external services'}</li>
                  </ul>
                </div>
                <div>
                  <p className="leading-relaxed mb-2"><strong>{language === 'it' ? '17.2 Raccomandazione' : '17.2 Recommendation'}</strong></p>
                  <p className="leading-relaxed pl-4">{language === 'it' ? 'Prima di fornire dati personali a siti terzi, leggi attentamente le loro Privacy Policy.' : 'Before providing personal data to third-party sites, carefully read their Privacy Policy.'}</p>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="font-display font-bold text-3xl text-graphite border-b-2 border-aiblue pb-3">{language === 'it' ? '18. Contatti e Richieste' : '18. Contacts and Requests'}</h2>
              <div className="space-y-6">
                <div>
                  <p className="leading-relaxed mb-3"><strong>{language === 'it' ? '18.1 Modalità di contatto' : '18.1 Contact methods'}</strong></p>
                  <p className="leading-relaxed pl-4 mb-2">{language === 'it' ? 'Per esercitare i tuoi diritti GDPR, chiarimenti sulla privacy o reclami:' : 'To exercise your GDPR rights, for privacy clarifications, or complaints:'}</p>
                  <div className="pl-4 space-y-1">
                    <p className="leading-relaxed">Email: <a href="mailto:info@agentics.eu.com" className="text-aiblue hover:underline">info@agentics.eu.com</a></p>
                    <p className="leading-relaxed">PEC: <a href="mailto:agentics@pec.it" className="text-aiblue hover:underline">agentics@pec.it</a></p>
                    <p className="leading-relaxed">{language === 'it' ? 'Telefono' : 'Phone'}: +39 320 289 2541</p>
                    <p className="leading-relaxed">{language === 'it' ? 'Posta' : 'Mail'}: Via Vincenzo Monti 16, 04100 Latina (LT) – {language === 'it' ? 'Italia' : 'Italy'}</p>
                  </div>
                </div>
                <div>
                  <p className="leading-relaxed mb-3"><strong>{language === 'it' ? '18.2 Informazioni da fornire' : '18.2 Information to provide'}</strong></p>
                  <p className="leading-relaxed pl-4 mb-2">{language === 'it' ? 'Per richieste GDPR, allega:' : 'For GDPR requests, please attach:'}</p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>{language === 'it' ? 'Documento identità (copia fronte/retro)' : 'Identity document (front/back copy)'}</li>
                    <li>{language === 'it' ? 'Descrizione dettagliata della richiesta' : 'Detailed description of the request'}</li>
                    <li>{language === 'it' ? 'Indirizzo email utilizzato nei nostri servizi (se applicabile)' : 'Email address used in our services (if applicable)'}</li>
                  </ul>
                </div>
                <div>
                  <p className="leading-relaxed mb-3"><strong>{language === 'it' ? '18.3 Tempi di risposta' : '18.3 Response times'}</strong></p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>{language === 'it' ? 'Entro 30 giorni dalla ricezione' : 'Within 30 days of receipt'}</li>
                    <li>{language === 'it' ? 'Prorogabili a 90 giorni in casi complessi (con comunicazione motivata)' : 'Extendable to 90 days in complex cases (with reasoned communication)'}</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="font-display font-bold text-3xl text-graphite border-b-2 border-aiblue pb-3">{language === 'it' ? '19. Informazioni Supplementari per Clienti B2B' : '19. Additional Information for B2B Clients'}</h2>
              <p className="leading-relaxed mb-3">{language === 'it' ? 'Se sei un cliente business che utilizza i nostri servizi di AI/automazione o sviluppo software su commessa:' : 'If you are a business client using our AI/automation services or custom software development:'}</p>
              <div className="space-y-6">
                <div>
                  <p className="leading-relaxed mb-3"><strong>{language === 'it' ? '19.1 Data Processing Agreement (DPA) – Servizi AI SaaS' : '19.1 Data Processing Agreement (DPA) – AI SaaS Services'}</strong></p>
                  <p className="leading-relaxed pl-4 mb-2">{language === 'it' ? 'Il trattamento dei dati nei servizi di AI in modalità managed è regolato da un DPA separato (Art. 28 GDPR) che definisce:' : 'Data processing in managed AI services is governed by a separate DPA (Art. 28 GDPR) that defines:'}</p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>{language === 'it' ? 'Ruoli e responsabilità (Tu Titolare, Noi Responsabile)' : 'Roles and responsibilities (You Controller, We Processor)'}</li>
                    <li>{language === 'it' ? 'Istruzioni documentate sul trattamento' : 'Documented processing instructions'}</li>
                    <li>{language === 'it' ? 'Misure di sicurezza tecniche e organizzative' : 'Technical and organizational security measures'}</li>
                    <li>{language === 'it' ? 'Gestione sub-responsabili (OpenAI, n8n e altri fornitori)' : 'Sub-processor management (OpenAI, n8n, and other providers)'}</li>
                    <li>{language === 'it' ? 'Assistenza per data breach e diritti degli interessati' : 'Assistance for data breaches and data subject rights'}</li>
                    <li>{language === 'it' ? 'Audit e ispezioni' : 'Audits and inspections'}</li>
                  </ul>
                </div>
                <div>
                  <p className="leading-relaxed mb-3"><strong>{language === 'it' ? '19.2 Data Processing Agreement (DPA) – Sviluppo Software su Commessa' : '19.2 Data Processing Agreement (DPA) – Custom Software Development'}</strong></p>
                  <p className="leading-relaxed pl-4 mb-2">{language === 'it' ? 'Anche nei contratti di sviluppo software personalizzato, qualora il Cliente fornisca dati personali per lo sviluppo, il test o l\'integrazione, il trattamento è regolato da un DPA separato (Art. 28 GDPR) che definisce:' : 'Also in custom software development contracts, where the Client provides personal data for development, testing, or integration, the processing is governed by a separate DPA (Art. 28 GDPR) that defines:'}</p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>{language === 'it' ? 'Tipologie di dati personali forniti per lo sviluppo' : 'Types of personal data provided for development'}</li>
                    <li>{language === 'it' ? 'Finalità del trattamento (esclusivamente esecuzione del contratto di sviluppo)' : 'Processing purposes (exclusively execution of the development contract)'}</li>
                    <li>{language === 'it' ? 'Misure di sicurezza per ambienti di sviluppo e test' : 'Security measures for development and testing environments'}</li>
                    <li>{language === 'it' ? 'Obbligo di utilizzo di dati anonimi o pseudonimizzati ove possibile' : 'Obligation to use anonymous or pseudonymized data where possible'}</li>
                    <li>{language === 'it' ? 'Cancellazione dei dati di sviluppo al completamento del progetto' : 'Deletion of development data upon project completion'}</li>
                    <li>{language === 'it' ? 'Divieto assoluto di utilizzo dei dati del Cliente per finalità proprie di Agentics' : 'Absolute prohibition on using Client data for Agentics\' own purposes'}</li>
                  </ul>
                </div>
                <div>
                  <p className="leading-relaxed mb-3"><strong>{language === 'it' ? '19.3 Conformità EU AI Act per soluzioni sviluppate su commessa' : '19.3 EU AI Act compliance for custom-developed solutions'}</strong></p>
                  <p className="leading-relaxed pl-4 mb-2">{language === 'it' ? 'Per i sistemi AI sviluppati su commessa soggetti al Regolamento (UE) 2024/1689, Agentics fornisce:' : 'For custom-developed AI systems subject to Regulation (EU) 2024/1689, Agentics provides:'}</p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>{language === 'it' ? 'Documentazione tecnica del sistema AI ai sensi dell\'AI Act' : 'Technical documentation of the AI system pursuant to the AI Act'}</li>
                    <li>{language === 'it' ? 'Istruzioni d\'uso e informazioni sui limiti del sistema' : 'Usage instructions and information on system limitations'}</li>
                    <li>{language === 'it' ? 'Dichiarazione di conformità per i sistemi ad alto rischio (ove applicabile)' : 'Declaration of conformity for high-risk systems (where applicable)'}</li>
                    <li>{language === 'it' ? 'Supporto per la valutazione della conformità del deployer (Cliente)' : 'Support for deployer (Client) conformity assessment'}</li>
                  </ul>
                </div>
                <div>
                  <p className="leading-relaxed mb-2"><strong>{language === 'it' ? '19.4 Richiedi il DPA' : '19.4 Request the DPA'}</strong></p>
                  <p className="leading-relaxed pl-4">
                    {language === 'it'
                      ? <>Puoi richiedere copia del DPA (per servizi AI SaaS o sviluppo software) firmato a: <a href="mailto:info@agentics.eu.com" className="text-aiblue hover:underline">info@agentics.eu.com</a></>
                      : <>You can request a copy of the signed DPA (for AI SaaS services or software development) at: <a href="mailto:info@agentics.eu.com" className="text-aiblue hover:underline">info@agentics.eu.com</a></>}
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="font-display font-bold text-3xl text-graphite border-b-2 border-aiblue pb-3">{language === 'it' ? '20. Glossario GDPR' : '20. GDPR Glossary'}</h2>
              <div className="space-y-3 pl-4">
                <p className="leading-relaxed">{language === 'it' ? <><strong>Titolare del Trattamento:</strong> Soggetto che determina finalità e mezzi del trattamento</> : <><strong>Data Controller:</strong> Entity that determines the purposes and means of processing</>}</p>
                <p className="leading-relaxed">{language === 'it' ? <><strong>Responsabile del Trattamento:</strong> Soggetto che tratta dati per conto del Titolare</> : <><strong>Data Processor:</strong> Entity that processes data on behalf of the Controller</>}</p>
                <p className="leading-relaxed">{language === 'it' ? <><strong>Interessato:</strong> Persona fisica i cui dati sono trattati</> : <><strong>Data Subject:</strong> Natural person whose data is processed</>}</p>
                <p className="leading-relaxed">{language === 'it' ? <><strong>Dato Personale:</strong> Qualsiasi informazione relativa a persona identificata o identificabile</> : <><strong>Personal Data:</strong> Any information relating to an identified or identifiable person</>}</p>
                <p className="leading-relaxed">{language === 'it' ? <><strong>Trattamento:</strong> Qualsiasi operazione su dati personali (raccolta, conservazione, modifica, cancellazione, ecc.)</> : <><strong>Processing:</strong> Any operation on personal data (collection, storage, modification, deletion, etc.)</>}</p>
                <p className="leading-relaxed">{language === 'it' ? <><strong>Consenso:</strong> Manifestazione di volontà libera, specifica, informata e inequivocabile</> : <><strong>Consent:</strong> Freely given, specific, informed, and unambiguous indication of will</>}</p>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="font-display font-bold text-3xl text-graphite border-b-2 border-aiblue pb-3">{language === 'it' ? '21. Dichiarazione Finale' : '21. Final Declaration'}</h2>
              <p className="leading-relaxed mb-3 font-semibold">{language === 'it' ? 'Prendendo visione della presente Privacy Policy, dichiari di:' : 'By reviewing this Privacy Policy, you declare that you:'}</p>
              <ul className="list-disc pl-8 space-y-2">
                <li>{language === 'it' ? 'Aver letto e compreso l\'informativa' : 'Have read and understood this policy'}</li>
                <li>{language === 'it' ? 'Essere informato su modalità e finalità del trattamento' : 'Are informed about the methods and purposes of processing'}</li>
                <li>{language === 'it' ? 'Conoscere i tuoi diritti GDPR e come esercitarli' : 'Know your GDPR rights and how to exercise them'}</li>
                <li>{language === 'it' ? 'Accettare le condizioni descritte (proseguendo l\'uso del sito)' : 'Accept the described conditions (by continuing to use the site)'}</li>
              </ul>
            </section>

            <div className="mt-16 pt-8 border-t-2 border-gray-300 text-center space-y-2">
              <p className="text-sm text-graphite/60">{language === 'it' ? 'Ultimo aggiornamento: 16 marzo 2026' : 'Last updated: March 16, 2026'}</p>
              <p className="text-sm text-graphite/60">{language === 'it' ? 'Versione' : 'Version'}: 2.1</p>
              <p className="text-sm text-graphite/60">{language === 'it' ? 'Prossima revisione prevista: Marzo 2027' : 'Next scheduled review: March 2027'}</p>
              <p className="text-sm text-graphite/60 mt-4">© 2025–2026 Agentics SRL – {language === 'it' ? 'Tutti i diritti riservati' : 'All rights reserved'}</p>
              <p className="text-sm text-graphite/60">{language === 'it' ? 'P.IVA' : 'VAT'}: 03335160598</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
