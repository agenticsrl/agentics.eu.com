import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useSEO } from '../hooks/useSEO';

const TermsOfService: React.FC = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();

  useSEO({
    title: language === 'it' ? 'Termini di Servizio - Agentics' : 'Terms of Service - Agentics',
    description: language === 'it'
      ? 'Termini e condizioni di utilizzo del servizio Agentics SRL.'
      : 'Terms and conditions of use for Agentics SRL services.',
    canonicalUrl: 'https://agentics.eu.com/terms-of-service',
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
              {language === 'it' ? 'Termini di Servizio' : 'Terms of Service'}
            </h1>
            <div className="text-sm text-graphite/60 space-y-1">
              <p>{language === 'it' ? 'Versione 3.0' : 'Version 3.0'}</p>
              <p>{language === 'it' ? 'Data di entrata in vigore: 16 marzo 2026' : 'Effective date: March 16, 2026'}</p>
              <p>{language === 'it' ? 'Ultimo aggiornamento: 16 marzo 2026' : 'Last updated: March 16, 2026'}</p>
            </div>
          </div>

          <div className="text-graphite/80 mb-12">
            <p className="leading-relaxed text-lg">
              {language === 'it'
                ? <>I presenti Termini di Servizio regolano il rapporto contrattuale tra Agentics SRL e i propri clienti, con particolare riferimento ai servizi di intelligenza artificiale, automazione e <strong>sviluppo software su commessa</strong>. Si applicano in conformità a:</>
                : <>These Terms of Service govern the contractual relationship between Agentics SRL and its clients, with particular reference to artificial intelligence services, automation, and <strong>bespoke software development</strong>. They apply in accordance with:</>}
            </p>
            <ul className="list-disc pl-8 mt-4 space-y-2">
              <li>{language === 'it' ? 'Legge 22 aprile 1941, n. 633 (Legge sul Diritto d\'Autore)' : 'Legge 22 aprile 1941, n. 633 (Copyright Law)'}</li>
              <li>{language === 'it' ? 'Regolamento (UE) 2016/679 ("GDPR")' : 'Regulation (EU) 2016/679 ("GDPR")'}</li>
              <li>{language === 'it' ? 'Regolamento (UE) 2024/1689 ("AI Act")' : 'Regulation (EU) 2024/1689 ("AI Act")'}</li>
              <li>{language === 'it' ? 'Codice Civile italiano (artt. 2222 e ss. – contratto d\'opera)' : 'Italian Civil Code (Articles 2222 et seq. – contract for work)'}</li>
              <li>{language === 'it' ? 'D.Lgs. 196/2003 (Codice Privacy, come modificato dal D.Lgs. 101/2018)' : 'Legislative Decree 196/2003 (Privacy Code, as amended by Legislative Decree 101/2018)'}</li>
              <li>{language === 'it' ? 'D.Lgs. 70/2003 (Commercio elettronico)' : 'Legislative Decree 70/2003 (Electronic Commerce)'}</li>
            </ul>
          </div>

          <div className="text-graphite/80 space-y-12">
            <section className="space-y-6">
              <h2 className="font-display font-bold text-3xl text-graphite border-b-2 border-aiblue pb-3">{language === 'it' ? '1. Definizioni' : '1. Definitions'}</h2>
              <p className="leading-relaxed">{language === 'it' ? 'Ai fini dei presenti Termini:' : 'For the purposes of these Terms:'}</p>
              <div className="space-y-4 pl-4">
                <p className="leading-relaxed"><strong className="text-graphite">{language === 'it' ? '"Servizi":' : '"Services":'}</strong> {language === 'it' ? 'l\'insieme delle soluzioni di intelligenza artificiale, automazione, sistemi vocali, API, consulenza e ogni altro servizio erogato da Agentics, ivi incluso lo sviluppo software su commessa' : 'the set of artificial intelligence solutions, automation, voice systems, APIs, consulting, and any other service provided by Agentics, including bespoke software development'}</p>
                <p className="leading-relaxed"><strong className="text-graphite">{language === 'it' ? '"Servizi SaaS / Piattaforma":' : '"SaaS Services / Platform":'}</strong> {language === 'it' ? 'servizi forniti in modalità Software-as-a-Service tramite l\'infrastruttura cloud di Agentics (chatbot gestiti, receptionist vocale, automazioni ricorrenti, dashboard), per i quali Agentics mantiene la titolarità dell\'infrastruttura software' : 'services provided as Software-as-a-Service through Agentics\' cloud infrastructure (managed chatbots, voice receptionist, recurring automations, dashboards), for which Agentics retains ownership of the software infrastructure'}</p>
                <p className="leading-relaxed"><strong className="text-graphite">{language === 'it' ? '"Software su Commessa":' : '"Bespoke Software":'}</strong> {language === 'it' ? 'software, applicativi, sistemi, agenti AI, modelli personalizzati, workflow e ogni altro prodotto digitale sviluppato da Agentics appositamente e su specifiche istruzioni del Cliente, nell\'ambito di un Contratto di Servizio dedicato' : 'software, applications, systems, AI agents, custom models, workflows, and any other digital product developed by Agentics specifically and according to Client instructions, under a dedicated Service Agreement'}</p>
                <p className="leading-relaxed"><strong className="text-graphite">{language === 'it' ? '"Deliverable":' : '"Deliverable":'}</strong> {language === 'it' ? 'il risultato finale del Software su Commessa consegnato al Cliente, comprensivo di codice sorgente, documentazione tecnica e manuale d\'uso, come specificato nel Contratto di Servizio' : 'the final result of the Bespoke Software delivered to the Client, including source code, technical documentation, and user manual, as specified in the Service Agreement'}</p>
                <p className="leading-relaxed"><strong className="text-graphite">{language === 'it' ? '"Componenti Preesistenti":' : '"Pre-existing Components":'}</strong> {language === 'it' ? 'framework, librerie, moduli, strumenti e know-how tecnico sviluppati da Agentics anteriormente o indipendentemente dal rapporto con il Cliente, incorporati nel Deliverable' : 'frameworks, libraries, modules, tools, and technical know-how developed by Agentics prior to or independently of the relationship with the Client, incorporated into the Deliverable'}</p>
                <p className="leading-relaxed"><strong className="text-graphite">{language === 'it' ? '"Componenti Open Source":' : '"Open Source Components":'}</strong> {language === 'it' ? 'librerie, framework o strumenti distribuiti sotto licenze open source (MIT, Apache 2.0, GPL, LGPL, AGPL ecc.) eventualmente inclusi nel Deliverable' : 'libraries, frameworks, or tools distributed under open source licenses (MIT, Apache 2.0, GPL, LGPL, AGPL, etc.) potentially included in the Deliverable'}</p>
                <p className="leading-relaxed"><strong className="text-graphite">{language === 'it' ? '"Cliente":' : '"Client":'}</strong> {language === 'it' ? 'persona fisica o giuridica che accede o utilizza i Servizi' : 'natural or legal person who accesses or uses the Services'}</p>
                <p className="leading-relaxed"><strong className="text-graphite">{language === 'it' ? '"Piattaforma":' : '"Platform":'}</strong> {language === 'it' ? 'infrastrutture tecnologiche, software, dashboard e interfacce web/mobile di Agentics' : 'technological infrastructure, software, dashboards, and web/mobile interfaces of Agentics'}</p>
                <p className="leading-relaxed"><strong className="text-graphite">{language === 'it' ? '"Dati del Cliente":' : '"Client Data":'}</strong> {language === 'it' ? 'informazioni, contenuti e dati inseriti o generati dal Cliente nell\'uso dei Servizi' : 'information, content, and data entered or generated by the Client while using the Services'}</p>
                <p className="leading-relaxed"><strong className="text-graphite">{language === 'it' ? '"Documentazione":' : '"Documentation":'}</strong> {language === 'it' ? 'manuali tecnici, API reference, guide fornite da Agentics' : 'technical manuals, API references, and guides provided by Agentics'}</p>
                <p className="leading-relaxed"><strong className="text-graphite">{language === 'it' ? '"Contratto di Servizio":' : '"Service Agreement":'}</strong> {language === 'it' ? 'accordo commerciale specifico stipulato per iscritto tra le parti, che prevale sui presenti Termini in caso di conflitto' : 'specific commercial agreement entered into in writing between the parties, which prevails over these Terms in case of conflict'}</p>
                <p className="leading-relaxed"><strong className="text-graphite">{language === 'it' ? '"Diritti Patrimoniali d\'Autore":' : '"Economic Copyright":'}</strong> {language === 'it' ? 'i diritti di sfruttamento economico dell\'opera dell\'ingegno di cui agli artt. 12-18 e 64-bis L. 633/1941 (riproduzione, distribuzione, comunicazione al pubblico, modifica, traduzione, ecc.)' : 'the economic exploitation rights over intellectual works pursuant to Articles 12-18 and 64-bis of Law 633/1941 (reproduction, distribution, communication to the public, modification, translation, etc.)'}</p>
                <p className="leading-relaxed"><strong className="text-graphite">{language === 'it' ? '"Diritti Morali":' : '"Moral Rights":'}</strong> {language === 'it' ? 'i diritti inalienabili di paternità intellettuale e integrità dell\'opera di cui agli artt. 20-24 L. 633/1941, che rimangono in capo agli autori persone fisiche che hanno materialmente creato il software' : 'the inalienable rights of authorship attribution and integrity of the work pursuant to Articles 20-24 of Law 633/1941, which remain with the individual authors who materially created the software'}</p>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="font-display font-bold text-3xl text-graphite border-b-2 border-aiblue pb-3">{language === 'it' ? '2. Accettazione e Ambito' : '2. Acceptance and Scope'}</h2>
              <div className="space-y-4">
                <p className="leading-relaxed"><strong>2.1.</strong> {language === 'it' ? 'L\'accesso al sito web e l\'utilizzo dei Servizi implica accettazione integrale dei presenti Termini.' : 'Accessing the website and using the Services implies full acceptance of these Terms.'}</p>
                <p className="leading-relaxed"><strong>2.2.</strong> {language === 'it' ? 'I presenti Termini si applicano in via generale. Eventuali Contratti di Servizio specifici prevalgono su questi Termini in caso di conflitto.' : 'These Terms apply generally. Any specific Service Agreements shall prevail over these Terms in case of conflict.'}</p>
                <p className="leading-relaxed"><strong>2.3.</strong> {language === 'it' ? 'L\'uso dei Servizi è riservato a:' : 'Use of the Services is restricted to:'}</p>
                <ul className="list-disc pl-8 space-y-2">
                  <li>{language === 'it' ? 'soggetti maggiorenni' : 'individuals of legal age'}</li>
                  <li>{language === 'it' ? 'imprese regolarmente costituite' : 'duly established businesses'}</li>
                  <li>{language === 'it' ? 'soggetti con capacità giuridica di contrarre' : 'persons with legal capacity to contract'}</li>
                </ul>
                <p className="leading-relaxed"><strong>2.4.</strong> {language === 'it' ? 'Per i contratti di sviluppo Software su Commessa, il Contratto di Servizio scritto e firmato da entrambe le parti costituisce il documento contrattuale vincolante che definisce deliverable, tempistiche, corrispettivi e modalità di cessione dei diritti.' : 'For Bespoke Software development contracts, the Service Agreement signed in writing by both parties constitutes the binding contractual document that defines deliverables, timelines, fees, and terms for the assignment of rights.'}</p>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="font-display font-bold text-3xl text-graphite border-b-2 border-aiblue pb-3">{language === 'it' ? '3. Servizi Offerti' : '3. Services Offered'}</h2>
              <div className="space-y-4">
                <div>
                  <p className="leading-relaxed mb-3"><strong>{language === 'it' ? '3.1. Servizi SaaS e Piattaforma:' : '3.1. SaaS Services and Platform:'}</strong></p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>{language === 'it' ? 'Chatbot AI intelligenti erogati in modalità managed service' : 'Intelligent AI chatbots delivered as a managed service'}</li>
                    <li>{language === 'it' ? 'Receptionist vocale AI (Voice Agent) su infrastruttura Agentics' : 'AI voice receptionist (Voice Agent) on Agentics infrastructure'}</li>
                    <li>{language === 'it' ? 'Automazioni e workflow digitali ricorrenti' : 'Recurring digital automations and workflows'}</li>
                    <li>{language === 'it' ? 'API e integrazioni tecnologiche con sistemi del Cliente' : 'APIs and technology integrations with Client systems'}</li>
                    <li>{language === 'it' ? 'Dashboard e analytics in cloud' : 'Cloud dashboards and analytics'}</li>
                  </ul>
                  <p className="leading-relaxed pl-4 mt-2 italic text-sm">{language === 'it' ? 'Per questi servizi si applica la Sezione 5.1 (licenza d\'uso).' : 'Section 5.1 (license of use) applies to these services.'}</p>
                </div>
                <div>
                  <p className="leading-relaxed mb-3"><strong>{language === 'it' ? '3.2. Sviluppo Software su Commessa:' : '3.2. Bespoke Software Development:'}</strong></p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>{language === 'it' ? 'Software personalizzati (Custom GPTs, agenti AI proprietari)' : 'Custom software (Custom GPTs, proprietary AI agents)'}</li>
                    <li>{language === 'it' ? 'Applicativi web e mobile su misura' : 'Custom web and mobile applications'}</li>
                    <li>{language === 'it' ? 'Sistemi gestionali con intelligenza artificiale integrata' : 'Management systems with integrated artificial intelligence'}</li>
                    <li>{language === 'it' ? 'Modelli AI fine-tuned su dati del Cliente' : 'AI models fine-tuned on Client data'}</li>
                    <li>{language === 'it' ? 'Integrazioni enterprise personalizzate' : 'Custom enterprise integrations'}</li>
                    <li>{language === 'it' ? 'Computer vision e sistemi di AI Vision industriale' : 'Computer vision and industrial AI Vision systems'}</li>
                  </ul>
                  <p className="leading-relaxed pl-4 mt-2 italic text-sm">{language === 'it' ? 'Per questi servizi si applica la Sezione 5.2 (cessione dei diritti patrimoniali d\'autore).' : 'Section 5.2 (assignment of economic copyright) applies to these services.'}</p>
                </div>
                <div>
                  <p className="leading-relaxed mb-3"><strong>{language === 'it' ? '3.3. Consulenza e servizi professionali:' : '3.3. Consulting and professional services:'}</strong></p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>{language === 'it' ? 'Consulenza strategica sull\'innovazione digitale e AI' : 'Strategic consulting on digital innovation and AI'}</li>
                    <li>{language === 'it' ? 'Analisi di fattibilità e definizione architetture' : 'Feasibility analysis and architecture design'}</li>
                    <li>{language === 'it' ? 'Formazione e training su soluzioni AI' : 'Training and education on AI solutions'}</li>
                  </ul>
                </div>
                <p className="leading-relaxed"><strong>3.4.</strong> {language === 'it' ? 'Le specifiche tecniche, SLA, deliverable, milestone e pricing sono definiti nel Contratto di Servizio individuale.' : 'Technical specifications, SLAs, deliverables, milestones, and pricing are defined in the individual Service Agreement.'}</p>
                <div>
                  <p className="leading-relaxed mb-3"><strong>3.5.</strong> {language === 'it' ? 'Agentics si riserva di:' : 'Agentics reserves the right to:'}</p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>{language === 'it' ? 'modificare features e funzionalità dei Servizi SaaS previa comunicazione' : 'modify features and functionalities of SaaS Services with prior notice'}</li>
                    <li>{language === 'it' ? 'sospendere servizi per manutenzione (con preavviso quando possibile)' : 'suspend services for maintenance (with advance notice when possible)'}</li>
                    <li>{language === 'it' ? 'aggiornare tecnologie e architetture sottostanti dei Servizi SaaS' : 'update underlying technologies and architectures of SaaS Services'}</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="font-display font-bold text-3xl text-graphite border-b-2 border-aiblue pb-3">{language === 'it' ? '4. Obblighi del Cliente' : '4. Client Obligations'}</h2>
              <p className="leading-relaxed">{language === 'it' ? 'Il Cliente si impegna a:' : 'The Client agrees to:'}</p>
              <div className="space-y-4">
                <p className="leading-relaxed"><strong>{language === 'it' ? '4.1. Utilizzo lecito:' : '4.1. Lawful use:'}</strong> {language === 'it' ? 'non utilizzare i Servizi per finalità illegali, fraudolente o lesive di diritti terzi' : 'not use the Services for illegal, fraudulent, or harmful purposes that infringe third-party rights'}</p>
                <p className="leading-relaxed"><strong>{language === 'it' ? '4.2. Sicurezza:' : '4.2. Security:'}</strong> {language === 'it' ? 'proteggere credenziali di accesso, non condividerle, segnalare tempestivamente accessi non autorizzati' : 'protect access credentials, not share them, promptly report unauthorized access'}</p>
                <div>
                  <p className="leading-relaxed mb-3"><strong>{language === 'it' ? '4.3. Divieti specifici:' : '4.3. Specific prohibitions:'}</strong></p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>{language === 'it' ? 'reverse engineering, decompilazione, disassemblaggio dei Servizi SaaS di Agentics' : 'reverse engineering, decompilation, disassembly of Agentics SaaS Services'}</li>
                    <li>{language === 'it' ? 'attacchi informatici, penetration test non autorizzati' : 'cyberattacks, unauthorized penetration testing'}</li>
                    <li>{language === 'it' ? 'sovraccarico intenzionale di sistemi (DoS/DDoS)' : 'intentional system overloading (DoS/DDoS)'}</li>
                    <li>{language === 'it' ? 'estrazione massiva di dati (scraping) non autorizzata' : 'unauthorized mass data extraction (scraping)'}</li>
                    <li>{language === 'it' ? 'violazione di diritti IP di Agentics o terzi' : 'infringement of Agentics\' or third parties\' IP rights'}</li>
                    <li>{language === 'it' ? 'sublicenza, vendita o trasferimento non autorizzato dei Deliverable consegnati' : 'unauthorized sublicensing, sale, or transfer of delivered Deliverables'}</li>
                  </ul>
                </div>
                <p className="leading-relaxed"><strong>{language === 'it' ? '4.4. Conformità normativa:' : '4.4. Regulatory compliance:'}</strong> {language === 'it' ? 'rispettare GDPR, EU AI Act, normative settoriali e regolamenti applicabili nel proprio dominio d\'uso. In particolare, il Cliente che utilizza soluzioni AI è responsabile della propria conformità al Regolamento (UE) 2024/1689 nelle classi di rischio applicabili' : 'comply with GDPR, EU AI Act, sector-specific regulations, and applicable rules in their domain of use. In particular, Clients using AI solutions are responsible for their own compliance with Regulation (EU) 2024/1689 in the applicable risk classes'}</p>
                <p className="leading-relaxed"><strong>{language === 'it' ? '4.5. Collaborazione per sviluppo software:' : '4.5. Collaboration for software development:'}</strong> {language === 'it' ? 'nei contratti di Software su Commessa, il Cliente si impegna a fornire tempestivamente specifiche, feedback, materiali e accessi necessari per lo svolgimento del lavoro, secondo le modalità concordate nel Contratto di Servizio' : 'in Bespoke Software contracts, the Client agrees to promptly provide specifications, feedback, materials, and access necessary for the performance of the work, in accordance with the terms agreed in the Service Agreement'}</p>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="font-display font-bold text-3xl text-graphite border-b-2 border-aiblue pb-3">{language === 'it' ? '5. Proprietà Intellettuale' : '5. Intellectual Property'}</h2>
              <div className="space-y-6">

                <div className="bg-blue-50 border-l-4 border-aiblue p-4 rounded">
                  <p className="font-semibold text-graphite mb-2">{language === 'it' ? 'Distinzione fondamentale' : 'Fundamental distinction'}</p>
                  <p className="leading-relaxed text-graphite/80">
                    {language === 'it'
                      ? <>Il regime della proprietà intellettuale varia in base alla tipologia di servizio: per i <strong>Servizi SaaS</strong> Agentics concede una licenza d'uso; per lo <strong>Sviluppo Software su Commessa</strong> Agentics cede al Cliente i diritti patrimoniali d'autore sul software sviluppato appositamente. I dettagli specifici sono sempre definiti nel Contratto di Servizio.</>
                      : <>The intellectual property regime varies depending on the type of service: for <strong>SaaS Services</strong>, Agentics grants a license of use; for <strong>Bespoke Software Development</strong>, Agentics assigns to the Client the economic copyright on the software specifically developed. Specific details are always defined in the Service Agreement.</>}
                  </p>
                </div>

                <div>
                  <p className="leading-relaxed mb-2"><strong>{language === 'it' ? '5.1. Servizi SaaS / Piattaforma – Licenza d\'uso:' : '5.1. SaaS Services / Platform – License of use:'}</strong></p>
                  <p className="leading-relaxed pl-4 mb-3">{language === 'it' ? 'Per i Servizi erogati in modalità SaaS (chatbot gestiti, receptionist vocale, automazioni cloud, dashboard), tutti i diritti di proprietà intellettuale su software, codice, algoritmi, modelli AI, documentazione tecnica, brand, design e infrastruttura rimangono di esclusiva proprietà di Agentics SRL.' : 'For Services provided in SaaS mode (managed chatbots, voice receptionist, cloud automations, dashboards), all intellectual property rights over software, code, algorithms, AI models, technical documentation, brand, design, and infrastructure remain the exclusive property of Agentics SRL.'}</p>
                  <p className="leading-relaxed pl-4">
                    {language === 'it'
                      ? <>Il Cliente riceve una <strong>licenza d'uso non esclusiva, non trasferibile, revocabile</strong> per utilizzare i Servizi SaaS secondo i termini e la durata del Contratto di Servizio. La licenza termina automaticamente alla scadenza o risoluzione del contratto.</>
                      : <>The Client receives a <strong>non-exclusive, non-transferable, revocable license of use</strong> to use the SaaS Services according to the terms and duration of the Service Agreement. The license automatically terminates upon expiration or termination of the agreement.</>}
                  </p>
                </div>

                <div>
                  <p className="leading-relaxed mb-2"><strong>{language === 'it' ? '5.2. Software su Commessa – Cessione dei Diritti Patrimoniali d\'Autore:' : '5.2. Bespoke Software – Assignment of Economic Copyright:'}</strong></p>
                  <p className="leading-relaxed pl-4 mb-3">
                    {language === 'it'
                      ? <>Per i contratti di sviluppo Software su Commessa, Agentics <strong>cede al Cliente, a titolo definitivo ed esclusivo</strong>, tutti i Diritti Patrimoniali d'Autore sul software sviluppato appositamente per il Cliente, ai sensi degli artt. 64-bis e seguenti della Legge 22 aprile 1941, n. 633.</>
                      : <>For Bespoke Software development contracts, Agentics <strong>assigns to the Client, on a definitive and exclusive basis</strong>, all Economic Copyright on the software specifically developed for the Client, pursuant to Articles 64-bis et seq. of Legge 22 aprile 1941, n. 633 (Copyright Law).</>}
                  </p>
                  <p className="leading-relaxed pl-4 mb-2">{language === 'it' ? 'La cessione:' : 'The assignment:'}</p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>{language === 'it' ? 'comprende il diritto di usare, riprodurre, distribuire, modificare, adattare, integrare, tradurre, sublicenziare e sfruttare economicamente il software in qualsiasi forma e con qualsiasi mezzo' : 'includes the right to use, reproduce, distribute, modify, adapt, integrate, translate, sublicense, and commercially exploit the software in any form and by any means'}</li>
                    <li>{language === 'it' ? 'è valida per tutta la durata della protezione del diritto d\'autore (art. 25 L. 633/1941)' : 'is valid for the entire duration of copyright protection (Article 25 of Law 633/1941)'}</li>
                    <li>{language === 'it' ? 'è valida per tutto il territorio mondiale' : 'is valid worldwide'}</li>
                    <li>
                      {language === 'it'
                        ? <><strong>ha efficacia al momento del pagamento integrale</strong> del corrispettivo concordato nel Contratto di Servizio. Prima del pagamento integrale, il Cliente riceve una licenza d'uso limitata per test e validazione</>
                        : <><strong>takes effect upon full payment</strong> of the fee agreed in the Service Agreement. Prior to full payment, the Client receives a limited license of use for testing and validation</>}
                    </li>
                    <li>{language === 'it' ? 'è irrevocabile, salvo inadempimento grave del Cliente agli obblighi del Contratto di Servizio' : 'is irrevocable, except in case of serious breach by the Client of the obligations under the Service Agreement'}</li>
                  </ul>
                </div>

                <div>
                  <p className="leading-relaxed mb-2"><strong>{language === 'it' ? '5.3. Diritti Morali dell\'Autore (artt. 20-24 L. 633/1941):' : '5.3. Author\'s Moral Rights (Articles 20-24 of Law 633/1941):'}</strong></p>
                  <p className="leading-relaxed pl-4">
                    {language === 'it'
                      ? <>I Diritti Morali degli autori persone fisiche (dipendenti e collaboratori di Agentics che hanno materialmente contribuito alla creazione del software) sono <strong>inalienabili per legge</strong> e rimangono in capo ai rispettivi autori. Ciò include il diritto di essere riconosciuti come autori del software. Questa disposizione è inderogabile ai sensi dell'art. 22 L. 633/1941 e non costituisce limitazione ai diritti economici ceduti al Cliente.</>
                      : <>The Moral Rights of individual authors (employees and collaborators of Agentics who materially contributed to the creation of the software) are <strong>inalienable by law</strong> and remain with the respective authors. This includes the right to be recognized as authors of the software. This provision is mandatory under Article 22 of Law 633/1941 and does not constitute a limitation on the economic rights assigned to the Client.</>}
                  </p>
                </div>

                <div>
                  <p className="leading-relaxed mb-2"><strong>{language === 'it' ? '5.4. Componenti Preesistenti di Agentics:' : '5.4. Agentics Pre-existing Components:'}</strong></p>
                  <p className="leading-relaxed pl-4 mb-3">{language === 'it' ? 'Il software consegnato può includere Componenti Preesistenti (framework proprietari, moduli riutilizzabili, utility, know-how tecnico) sviluppati da Agentics anteriormente o indipendentemente dal rapporto con il Cliente.' : 'The delivered software may include Pre-existing Components (proprietary frameworks, reusable modules, utilities, technical know-how) developed by Agentics prior to or independently of the relationship with the Client.'}</p>
                  <p className="leading-relaxed pl-4">
                    {language === 'it'
                      ? <>I Componenti Preesistenti rimangono di proprietà di Agentics. Tuttavia, con la consegna del Deliverable, Agentics concede al Cliente una <strong>licenza d'uso perpetua, irrevocabile, non esclusiva e non trasferibile</strong> sui Componenti Preesistenti, limitatamente all'utilizzo nell'ambito del software consegnato, senza diritto a distribuirli, modificarli o usarli separatamente. L'elenco dei Componenti Preesistenti è indicato nella documentazione tecnica del Deliverable.</>
                      : <>Pre-existing Components remain the property of Agentics. However, upon delivery of the Deliverable, Agentics grants the Client a <strong>perpetual, irrevocable, non-exclusive, and non-transferable license of use</strong> over the Pre-existing Components, limited to use within the delivered software, without the right to distribute, modify, or use them separately. The list of Pre-existing Components is indicated in the Deliverable's technical documentation.</>}
                  </p>
                </div>

                <div>
                  <p className="leading-relaxed mb-2"><strong>{language === 'it' ? '5.5. Componenti Open Source:' : '5.5. Open Source Components:'}</strong></p>
                  <p className="leading-relaxed pl-4 mb-3">{language === 'it' ? 'Il software consegnato può incorporare librerie, framework e strumenti distribuiti sotto licenze open source. In tal caso:' : 'The delivered software may incorporate libraries, frameworks, and tools distributed under open source licenses. In such cases:'}</p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>{language === 'it' ? 'Agentics fornisce, allegato al Deliverable, l\'elenco completo delle Componenti Open Source con le relative licenze (SBOM – Software Bill of Materials)' : 'Agentics provides, attached to the Deliverable, the complete list of Open Source Components with their respective licenses (SBOM – Software Bill of Materials)'}</li>
                    <li>{language === 'it' ? 'Il Cliente è tenuto a rispettare i termini delle licenze open source applicabili' : 'The Client is required to comply with the terms of the applicable open source licenses'}</li>
                    <li>{language === 'it' ? 'Agentics garantisce la compatibilità delle licenze open source selezionate con il progetto e con l\'uso commerciale previsto dal Cliente' : 'Agentics guarantees the compatibility of the selected open source licenses with the project and with the Client\'s intended commercial use'}</li>
                    <li>{language === 'it' ? 'Per componenti AGPL o altri copyleft forti che impongano obblighi di rilascio del codice sorgente, Agentics ne informerà preventivamente il Cliente nel Contratto di Servizio' : 'For AGPL components or other strong copyleft licenses that impose source code release obligations, Agentics will inform the Client in advance in the Service Agreement'}</li>
                  </ul>
                </div>

                <div>
                  <p className="leading-relaxed mb-2"><strong>{language === 'it' ? '5.6. Consegna del Codice Sorgente:' : '5.6. Source Code Delivery:'}</strong></p>
                  <p className="leading-relaxed pl-4 mb-3">{language === 'it' ? 'Per i contratti di Software su Commessa, salvo diverso accordo espresso nel Contratto di Servizio:' : 'For Bespoke Software contracts, unless otherwise expressly agreed in the Service Agreement:'}</p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>{language === 'it' ? 'il codice sorgente completo del Deliverable è consegnato al Cliente in formato leggibile e versionato' : 'the complete source code of the Deliverable is delivered to the Client in a readable and versioned format'}</li>
                    <li>{language === 'it' ? 'la consegna avviene tramite repository Git (es. GitHub, GitLab, Bitbucket) o altro supporto concordato' : 'delivery is made via Git repository (e.g., GitHub, GitLab, Bitbucket) or other agreed medium'}</li>
                    <li>{language === 'it' ? 'include documentazione tecnica (README, architettura, istruzioni di deploy) e, ove applicabile, manuale utente' : 'includes technical documentation (README, architecture, deployment instructions) and, where applicable, user manual'}</li>
                    <li>{language === 'it' ? 'il Cliente riceve tutti i permessi e le credenziali necessarie per accedere e gestire il repository' : 'the Client receives all permissions and credentials necessary to access and manage the repository'}</li>
                  </ul>
                </div>

                <div>
                  <p className="leading-relaxed mb-2"><strong>{language === 'it' ? '5.7. Garanzia di Originalità e Non Violazione:' : '5.7. Guarantee of Originality and Non-Infringement:'}</strong></p>
                  <p className="leading-relaxed pl-4 mb-2">{language === 'it' ? 'Agentics garantisce che il software sviluppato su commessa:' : 'Agentics guarantees that the bespoke software:'}</p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>{language === 'it' ? 'è di originale creazione da parte di Agentics o è autorizzato per l\'uso commerciale' : 'is originally created by Agentics or is authorized for commercial use'}</li>
                    <li>{language === 'it' ? 'non viola diritti di proprietà intellettuale di terzi' : 'does not infringe third-party intellectual property rights'}</li>
                    <li>{language === 'it' ? 'non contiene backdoor, malware, codice malevolo o logiche non documentate intenzionalmente inserite' : 'does not contain backdoors, malware, malicious code, or intentionally inserted undocumented logic'}</li>
                    <li>{language === 'it' ? 'è conforme alle specifiche tecniche concordate nel Contratto di Servizio' : 'complies with the technical specifications agreed in the Service Agreement'}</li>
                  </ul>
                  <p className="leading-relaxed pl-4 mt-3">{language === 'it' ? 'In caso di rivendicazione di violazione da parte di terzi, Agentics si obbliga a difendere il Cliente e a sostituire o modificare il software in modo da eliminare la violazione, salvo che la violazione derivi da modifiche apportate dal Cliente.' : 'In the event of a third-party infringement claim, Agentics undertakes to defend the Client and to replace or modify the software to eliminate the infringement, unless the infringement results from modifications made by the Client.'}</p>
                </div>

                <div>
                  <p className="leading-relaxed mb-2"><strong>{language === 'it' ? '5.8. Dati del Cliente:' : '5.8. Client Data:'}</strong></p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>{language === 'it' ? 'Il Cliente mantiene piena proprietà dei propri Dati in ogni circostanza' : 'The Client retains full ownership of their Data under all circumstances'}</li>
                    <li>{language === 'it' ? 'Agentics tratta i Dati solo come responsabile del trattamento (art. 28 GDPR)' : 'Agentics processes Data only as a data processor (Article 28 GDPR)'}</li>
                    <li>{language === 'it' ? 'Il Cliente garantisce di avere tutti i diritti necessari sui Dati e sui materiali conferiti ad Agentics per l\'esecuzione del servizio' : 'The Client warrants that they have all necessary rights over the Data and materials provided to Agentics for the performance of the service'}</li>
                  </ul>
                </div>

                <div>
                  <p className="leading-relaxed mb-2"><strong>{language === 'it' ? '5.9. Output generati da AI:' : '5.9. AI-generated outputs:'}</strong></p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>{language === 'it' ? 'Gli output prodotti dalle soluzioni AI per conto del Cliente appartengono al Cliente' : 'Outputs produced by AI solutions on behalf of the Client belong to the Client'}</li>
                    <li>{language === 'it' ? 'Agentics può utilizzare dati aggregati e anonimizzati per migliorare i Servizi, previo consenso ove necessario' : 'Agentics may use aggregated and anonymized data to improve the Services, with consent where required'}</li>
                    <li>{language === 'it' ? 'Il Cliente è responsabile della valutazione e dell\'uso degli output AI nel proprio contesto operativo' : 'The Client is responsible for evaluating and using AI outputs in their own operational context'}</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="font-display font-bold text-3xl text-graphite border-b-2 border-aiblue pb-3">{language === 'it' ? '6. Sviluppo Software su Commessa – Disposizioni Specifiche' : '6. Bespoke Software Development – Specific Provisions'}</h2>
              <div className="space-y-6">
                <p className="leading-relaxed">{language === 'it' ? 'Le presenti disposizioni si applicano esclusivamente ai contratti aventi ad oggetto lo sviluppo di Software su Commessa, integrando quanto previsto nel Contratto di Servizio specifico.' : 'These provisions apply exclusively to contracts for the development of Bespoke Software, supplementing the provisions of the specific Service Agreement.'}</p>

                <div>
                  <p className="leading-relaxed mb-2"><strong>{language === 'it' ? '6.1. Processo di sviluppo:' : '6.1. Development process:'}</strong></p>
                  <p className="leading-relaxed pl-4 mb-2">{language === 'it' ? 'Lo sviluppo si svolge secondo le fasi e le milestone definite nel Contratto di Servizio, tipicamente:' : 'Development follows the phases and milestones defined in the Service Agreement, typically:'}</p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li><strong>{language === 'it' ? 'Analisi e definizione requisiti:' : 'Requirements analysis and definition:'}</strong> {language === 'it' ? 'raccolta delle specifiche funzionali e tecniche del Cliente' : 'gathering of functional and technical specifications from the Client'}</li>
                    <li><strong>{language === 'it' ? 'Progettazione architetturale:' : 'Architectural design:'}</strong> {language === 'it' ? 'definizione dell\'architettura software e approvazione da parte del Cliente' : 'definition of the software architecture and approval by the Client'}</li>
                    <li><strong>{language === 'it' ? 'Sviluppo iterativo:' : 'Iterative development:'}</strong> {language === 'it' ? 'implementazione con revisioni periodiche' : 'implementation with periodic reviews'}</li>
                    <li><strong>{language === 'it' ? 'Test e validazione:' : 'Testing and validation:'}</strong> {language === 'it' ? 'testing interno e acceptance testing con il Cliente' : 'internal testing and acceptance testing with the Client'}</li>
                    <li><strong>{language === 'it' ? 'Consegna e go-live:' : 'Delivery and go-live:'}</strong> {language === 'it' ? 'deploy, consegna del codice sorgente e documentazione' : 'deployment, source code delivery, and documentation'}</li>
                  </ul>
                </div>

                <div>
                  <p className="leading-relaxed mb-2"><strong>{language === 'it' ? '6.2. Specifiche e change request:' : '6.2. Specifications and change requests:'}</strong></p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>{language === 'it' ? 'Le specifiche tecniche concordate nel Contratto di Servizio sono vincolanti per entrambe le parti' : 'The technical specifications agreed in the Service Agreement are binding on both parties'}</li>
                    <li>{language === 'it' ? 'Modifiche alle specifiche successive alla firma del contratto ("change request") devono essere concordate per iscritto e possono comportare adeguamenti di tempistiche e corrispettivo' : 'Changes to specifications after contract signing ("change requests") must be agreed in writing and may result in adjustments to timelines and fees'}</li>
                    <li>{language === 'it' ? 'Agentics si riserva di rifiutare change request che alterino sostanzialmente l\'oggetto contrattuale, salvo accordo su un nuovo contratto' : 'Agentics reserves the right to reject change requests that substantially alter the contractual scope, unless a new agreement is reached'}</li>
                  </ul>
                </div>

                <div>
                  <p className="leading-relaxed mb-2"><strong>{language === 'it' ? '6.3. Test di accettazione (Acceptance Testing):' : '6.3. Acceptance Testing:'}</strong></p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>{language === 'it' ? 'Prima della consegna finale, il Cliente ha diritto a un periodo di acceptance testing della durata concordata nel Contratto di Servizio (di default 15 giorni lavorativi)' : 'Before final delivery, the Client is entitled to an acceptance testing period of the duration agreed in the Service Agreement (default 15 business days)'}</li>
                    <li>{language === 'it' ? 'Durante il periodo di test, il Cliente verifica la conformità del software alle specifiche concordate' : 'During the testing period, the Client verifies the software\'s compliance with the agreed specifications'}</li>
                    <li>{language === 'it' ? 'I difetti riscontrati sono comunicati per iscritto entro la fine del periodo di test. Agentics si impegna a correggerli entro i termini concordati' : 'Defects found are reported in writing by the end of the testing period. Agentics commits to fixing them within the agreed timeframe'}</li>
                    <li>{language === 'it' ? 'Il silenzio del Cliente al termine del periodo di acceptance testing equivale ad accettazione tacita del Deliverable' : 'The Client\'s silence at the end of the acceptance testing period constitutes tacit acceptance of the Deliverable'}</li>
                    <li>{language === 'it' ? 'L\'accettazione (espressa o tacita) del Deliverable determina il trasferimento dei Diritti Patrimoniali d\'Autore, contestualmente al saldo del corrispettivo' : 'Acceptance (express or tacit) of the Deliverable triggers the transfer of Economic Copyright, concurrent with payment of the balance'}</li>
                  </ul>
                </div>

                <div>
                  <p className="leading-relaxed mb-2"><strong>{language === 'it' ? '6.4. Garanzia post-consegna:' : '6.4. Post-delivery warranty:'}</strong></p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>
                      {language === 'it'
                        ? <>Agentics garantisce il Deliverable per un periodo di <strong>90 giorni</strong> dalla data di accettazione (salvo diverso accordo nel Contratto di Servizio)</>
                        : <>Agentics warrants the Deliverable for a period of <strong>90 days</strong> from the date of acceptance (unless otherwise agreed in the Service Agreement)</>}
                    </li>
                    <li>{language === 'it' ? 'Durante il periodo di garanzia, Agentics corregge gratuitamente i bug e i difetti che rendano il software non conforme alle specifiche concordate' : 'During the warranty period, Agentics corrects free of charge bugs and defects that render the software non-compliant with the agreed specifications'}</li>
                    <li>{language === 'it' ? 'La garanzia non copre: malfunzionamenti causati da modifiche apportate dal Cliente, incompatibilità con sistemi terzi non indicati nelle specifiche, uso improprio del software' : 'The warranty does not cover: malfunctions caused by modifications made by the Client, incompatibility with third-party systems not indicated in the specifications, improper use of the software'}</li>
                    <li>{language === 'it' ? 'Dopo la scadenza della garanzia, il supporto e la manutenzione sono regolati da un contratto separato' : 'After the warranty expires, support and maintenance are governed by a separate agreement'}</li>
                  </ul>
                </div>

                <div>
                  <p className="leading-relaxed mb-2"><strong>{language === 'it' ? '6.5. Riservatezza nel contesto dello sviluppo:' : '6.5. Confidentiality in the development context:'}</strong></p>
                  <p className="leading-relaxed pl-4 mb-2">{language === 'it' ? 'Nel corso dello sviluppo software, entrambe le parti possono venire a conoscenza di informazioni riservate dell\'altra parte (specifiche tecniche, modelli di business, dati tecnici, codice preesistente). Entrambe le parti si impegnano a:' : 'During software development, both parties may become aware of confidential information of the other party (technical specifications, business models, technical data, pre-existing code). Both parties agree to:'}</p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>{language === 'it' ? 'mantenere strettamente riservate tali informazioni' : 'keep such information strictly confidential'}</li>
                    <li>{language === 'it' ? 'non divulgarle a terzi senza preventivo consenso scritto dell\'altra parte' : 'not disclose it to third parties without the other party\'s prior written consent'}</li>
                    <li>{language === 'it' ? 'utilizzarle esclusivamente per l\'esecuzione del contratto' : 'use it exclusively for the performance of the contract'}</li>
                  </ul>
                  <p className="leading-relaxed pl-4 mt-2">{language === 'it' ? 'L\'obbligo di riservatezza permane per 5 anni dalla cessazione del rapporto contrattuale, salvo diverso accordo nel Contratto di Servizio.' : 'The confidentiality obligation remains in effect for 5 years from the termination of the contractual relationship, unless otherwise agreed in the Service Agreement.'}</p>
                </div>

                <div>
                  <p className="leading-relaxed mb-2"><strong>{language === 'it' ? '6.6. Conformità EU AI Act per Software su Commessa:' : '6.6. EU AI Act Compliance for Bespoke Software:'}</strong></p>
                  <p className="leading-relaxed pl-4 mb-2">{language === 'it' ? 'Per i sistemi AI sviluppati su commessa, le parti concordano nel Contratto di Servizio la ripartizione delle responsabilità ai sensi del Regolamento (UE) 2024/1689, in particolare:' : 'For AI systems developed on commission, the parties agree in the Service Agreement on the allocation of responsibilities under Regulation (EU) 2024/1689, in particular:'}</p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>{language === 'it' ? <>Agentics agisce come <em>provider</em> del sistema AI ai sensi dell'AI Act e si assume la responsabilità della conformità tecnica del sistema alle classi di rischio applicabili</> : <>Agentics acts as the AI system <em>provider</em> under the AI Act and assumes responsibility for the system's technical compliance with the applicable risk classes</>}</li>
                    <li>{language === 'it' ? <>Il Cliente, in qualità di <em>deployer</em>, è responsabile dell'utilizzo conforme del sistema AI nel proprio contesto operativo</> : <>The Client, as <em>deployer</em>, is responsible for the compliant use of the AI system in their own operational context</>}</li>
                    <li>{language === 'it' ? 'Agentics fornisce la documentazione tecnica richiesta dall\'AI Act, incluse le istruzioni d\'uso e le informazioni sui limiti del sistema' : 'Agentics provides the technical documentation required by the AI Act, including usage instructions and information on system limitations'}</li>
                    <li>{language === 'it' ? 'Le parti collaborano per la valutazione della conformità e per eventuali adeguamenti normativi' : 'The parties collaborate for conformity assessment and for any regulatory adjustments'}</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="font-display font-bold text-3xl text-graphite border-b-2 border-aiblue pb-3">{language === 'it' ? '7. Protezione dei Dati Personali' : '7. Personal Data Protection'}</h2>
              <div className="space-y-4">
                <div>
                  <p className="leading-relaxed mb-2"><strong>{language === 'it' ? '7.1. Riferimento all\'Informativa Privacy:' : '7.1. Reference to the Privacy Policy:'}</strong></p>
                  <p className="leading-relaxed pl-4">{language === 'it' ? 'Il trattamento dei dati personali è disciplinato dalla Privacy Policy, redatta ai sensi degli artt. 13-14 GDPR.' : 'The processing of personal data is governed by the Privacy Policy, drafted pursuant to Articles 13-14 GDPR.'}</p>
                </div>
                <div>
                  <p className="leading-relaxed mb-2"><strong>{language === 'it' ? '7.2. Ruoli GDPR:' : '7.2. GDPR Roles:'}</strong></p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>{language === 'it' ? 'Titolare: Cliente (per i dati che conferisce)' : 'Data Controller: Client (for the data they provide)'}</li>
                    <li>{language === 'it' ? 'Responsabile del trattamento: Agentics (art. 28 GDPR)' : 'Data Processor: Agentics (Article 28 GDPR)'}</li>
                    <li>{language === 'it' ? 'Un Data Processing Agreement (DPA) separato regola gli obblighi GDPR' : 'A separate Data Processing Agreement (DPA) governs GDPR obligations'}</li>
                  </ul>
                </div>
                <div>
                  <p className="leading-relaxed mb-2"><strong>{language === 'it' ? '7.3. Sicurezza:' : '7.3. Security:'}</strong></p>
                  <p className="leading-relaxed pl-4">{language === 'it' ? 'Agentics implementa misure tecniche e organizzative adeguate (crittografia TLS 1.3 / AES-256, controllo accessi, backup, monitoring, MFA).' : 'Agentics implements appropriate technical and organizational measures (TLS 1.3 / AES-256 encryption, access control, backup, monitoring, MFA).'}</p>
                </div>
                <div>
                  <p className="leading-relaxed mb-2"><strong>7.4. Data Breach:</strong></p>
                  <p className="leading-relaxed pl-4">{language === 'it' ? 'In caso di violazione di dati personali, Agentics notifica il Cliente entro 72 ore dalla scoperta, come da art. 33 GDPR.' : 'In the event of a personal data breach, Agentics notifies the Client within 72 hours of discovery, as per Article 33 GDPR.'}</p>
                </div>
                <div>
                  <p className="leading-relaxed mb-2"><strong>{language === 'it' ? '7.5. Trasferimenti extra-UE:' : '7.5. Extra-EU transfers:'}</strong></p>
                  <p className="leading-relaxed pl-4 mb-2">{language === 'it' ? 'Eventuali trasferimenti verso Paesi terzi avvengono tramite:' : 'Any transfers to third countries are carried out through:'}</p>
                  <ul className="list-disc pl-12 space-y-2">
                    <li>{language === 'it' ? 'Clausole contrattuali standard UE (Decisione 2021/914)' : 'EU Standard Contractual Clauses (Decision 2021/914)'}</li>
                    <li>{language === 'it' ? 'Decisioni di adeguatezza della Commissione UE' : 'EU Commission adequacy decisions'}</li>
                    <li>{language === 'it' ? 'EU-U.S. Data Privacy Framework (per fornitori USA certificati)' : 'EU-U.S. Data Privacy Framework (for certified U.S. providers)'}</li>
                    <li>{language === 'it' ? 'Altri meccanismi legittimi (art. 46 GDPR)' : 'Other legitimate mechanisms (Article 46 GDPR)'}</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="font-display font-bold text-3xl text-graphite border-b-2 border-aiblue pb-3">{language === 'it' ? '8. Limitazione di Responsabilità' : '8. Limitation of Liability'}</h2>
              <div className="space-y-4">
                <div>
                  <p className="leading-relaxed mb-2"><strong>{language === 'it' ? '8.1. Servizi SaaS "as is":' : '8.1. SaaS Services "as is":'}</strong></p>
                  <p className="leading-relaxed pl-4">{language === 'it' ? 'I Servizi SaaS sono forniti "nello stato in cui si trovano", salvo quanto diversamente pattuito nel Contratto di Servizio.' : 'SaaS Services are provided "as is", unless otherwise agreed in the Service Agreement.'}</p>
                </div>
                <div>
                  <p className="leading-relaxed mb-2"><strong>{language === 'it' ? '8.2. Software su Commessa:' : '8.2. Bespoke Software:'}</strong></p>
                  <p className="leading-relaxed pl-4">{language === 'it' ? 'Per il Software su Commessa, Agentics risponde della conformità del Deliverable alle specifiche concordate, nei termini di cui alla Sezione 6.4 (garanzia post-consegna). La responsabilità per difetti latenti non rilevabili con ordinaria diligenza è regolata dalle norme applicabili al contratto d\'opera (artt. 2222 e ss. c.c.) e al contratto d\'appalto (artt. 1667-1668 c.c.) per analogia.' : 'For Bespoke Software, Agentics is liable for the Deliverable\'s compliance with the agreed specifications, under the terms of Section 6.4 (post-delivery warranty). Liability for latent defects not detectable with ordinary diligence is governed by the applicable provisions on contracts for work (Articles 2222 et seq. of the Civil Code) and, by analogy, on construction contracts (Articles 1667-1668 of the Civil Code).'}</p>
                </div>
                <div>
                  <p className="leading-relaxed mb-2"><strong>{language === 'it' ? '8.3. Esclusioni nei limiti di legge:' : '8.3. Exclusions within legal limits:'}</strong></p>
                  <p className="leading-relaxed pl-4 mb-2">{language === 'it' ? 'Nei limiti consentiti dall\'ordinamento italiano, Agentics non risponde di:' : 'To the extent permitted by Italian law, Agentics shall not be liable for:'}</p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>{language === 'it' ? 'danni indiretti, consequenziali, lucro cessante, perdita di dati (salvo dolo o colpa grave)' : 'indirect, consequential damages, loss of profits, data loss (except in cases of willful misconduct or gross negligence)'}</li>
                    <li>{language === 'it' ? 'malfunzionamenti causati da: forza maggiore, interventi di terzi, uso improprio da parte del Cliente' : 'malfunctions caused by: force majeure, third-party interventions, improper use by the Client'}</li>
                    <li>{language === 'it' ? 'contenuti, accuratezza o affidabilità di servizi/piattaforme di terze parti integrate' : 'content, accuracy, or reliability of integrated third-party services/platforms'}</li>
                    <li>{language === 'it' ? 'decisioni operative adottate dal Cliente sulla base di output AI generati dai sistemi' : 'operational decisions made by the Client based on AI outputs generated by the systems'}</li>
                  </ul>
                </div>
                <div>
                  <p className="leading-relaxed mb-2"><strong>{language === 'it' ? '8.4. Massimale di responsabilità:' : '8.4. Liability cap:'}</strong></p>
                  <p className="leading-relaxed pl-4">{language === 'it' ? 'La responsabilità complessiva di Agentics è limitata all\'importo corrisposto dal Cliente nei 12 mesi precedenti l\'evento dannoso, salvo dolo o colpa grave. Per il Software su Commessa, il massimale è pari al corrispettivo totale del Contratto di Servizio specifico, salvo dolo o colpa grave.' : 'Agentics\' total liability is limited to the amount paid by the Client in the 12 months preceding the damaging event, except in cases of willful misconduct or gross negligence. For Bespoke Software, the cap is equal to the total fee of the specific Service Agreement, except in cases of willful misconduct or gross negligence.'}</p>
                </div>
                <div>
                  <p className="leading-relaxed mb-2"><strong>{language === 'it' ? '8.5. Obblighi non derogabili:' : '8.5. Non-waivable obligations:'}</strong></p>
                  <p className="leading-relaxed pl-4">{language === 'it' ? 'Restano fermi obblighi inderogabili per legge (es. responsabilità per danni da prodotto difettoso, tutela consumatori ove applicabile, responsabilità per violazione del diritto d\'autore).' : 'Mandatory legal obligations remain unaffected (e.g., product liability for defective products, consumer protection where applicable, liability for copyright infringement).'}</p>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="font-display font-bold text-3xl text-graphite border-b-2 border-aiblue pb-3">{language === 'it' ? '9. Servizi di Terze Parti' : '9. Third-Party Services'}</h2>
              <div className="space-y-4">
                <p className="leading-relaxed"><strong>9.1.</strong> {language === 'it' ? 'La Piattaforma e i Deliverable possono integrare servizi esterni (cloud providers, API terze, modelli AI di terzi, plugin).' : 'The Platform and Deliverables may integrate external services (cloud providers, third-party APIs, third-party AI models, plugins).'}</p>
                <div>
                  <p className="leading-relaxed mb-2"><strong>9.2.</strong> {language === 'it' ? 'Agentics non controlla tali servizi e declina ogni responsabilità per:' : 'Agentics does not control such services and disclaims all liability for:'}</p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>{language === 'it' ? 'disponibilità, sicurezza, privacy' : 'availability, security, privacy'}</li>
                    <li>{language === 'it' ? 'modifiche unilaterali di termini/funzionalità' : 'unilateral changes to terms/functionalities'}</li>
                    <li>{language === 'it' ? 'interruzioni o data breach di terze parti' : 'third-party outages or data breaches'}</li>
                  </ul>
                </div>
                <p className="leading-relaxed"><strong>9.3.</strong> {language === 'it' ? 'Per i contratti di Software su Commessa, l\'elenco dei servizi terzi integrati è indicato nella documentazione tecnica del Deliverable. Il Cliente è tenuto a rispettare i termini di servizio di tali fornitori terzi.' : 'For Bespoke Software contracts, the list of integrated third-party services is indicated in the Deliverable\'s technical documentation. The Client is required to comply with the terms of service of such third-party providers.'}</p>
                <p className="leading-relaxed"><strong>9.4.</strong> {language === 'it' ? 'L\'utilizzo di servizi di terzi è soggetto ai loro specifici Termini e Privacy Policy.' : 'The use of third-party services is subject to their specific Terms and Privacy Policy.'}</p>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="font-display font-bold text-3xl text-graphite border-b-2 border-aiblue pb-3">{language === 'it' ? '10. Durata, Sospensione e Risoluzione' : '10. Duration, Suspension, and Termination'}</h2>
              <div className="space-y-4">
                <p className="leading-relaxed"><strong>{language === 'it' ? '10.1. Durata:' : '10.1. Duration:'}</strong> {language === 'it' ? 'come da Contratto di Servizio (o a tempo indeterminato per utilizzo generico del sito).' : 'as per the Service Agreement (or indefinite for general use of the website).'}</p>
                <div>
                  <p className="leading-relaxed mb-2"><strong>10.2.</strong> {language === 'it' ? 'Sospensione immediata da parte di Agentics in caso di:' : 'Immediate suspension by Agentics in case of:'}</p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>{language === 'it' ? 'violazione grave dei Termini' : 'serious violation of the Terms'}</li>
                    <li>{language === 'it' ? 'mancato pagamento (se applicabile)' : 'non-payment (if applicable)'}</li>
                    <li>{language === 'it' ? 'uso fraudolento o lesivo della sicurezza' : 'fraudulent use or security compromise'}</li>
                    <li>{language === 'it' ? 'ordine dell\'autorità giudiziaria' : 'court order'}</li>
                  </ul>
                </div>
                <div>
                  <p className="leading-relaxed mb-2"><strong>{language === 'it' ? '10.3. Risoluzione:' : '10.3. Termination:'}</strong></p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>{language === 'it' ? 'Il Cliente può recedere secondo modalità previste nel Contratto di Servizio' : 'The Client may withdraw according to the terms of the Service Agreement'}</li>
                    <li>{language === 'it' ? 'Agentics può risolvere con 30 giorni di preavviso per giusta causa' : 'Agentics may terminate with 30 days\' notice for just cause'}</li>
                    <li>{language === 'it' ? 'Per i contratti di Software su Commessa, in caso di recesso anticipato del Cliente, è dovuto il corrispettivo per le attività svolte fino alla data di recesso' : 'For Bespoke Software contracts, in case of early withdrawal by the Client, the fee for work performed up to the withdrawal date is due'}</li>
                    <li>{language === 'it' ? 'In caso di risoluzione per inadempimento di Agentics, il Cliente ha diritto alla restituzione del corrispettivo pagato per le fasi non completate' : 'In case of termination due to Agentics\' breach, the Client is entitled to a refund of the fee paid for uncompleted phases'}</li>
                  </ul>
                </div>
                <div>
                  <p className="leading-relaxed mb-2"><strong>10.4.</strong> {language === 'it' ? 'Effetti della cessazione per Servizi SaaS:' : 'Effects of termination for SaaS Services:'}</p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>{language === 'it' ? 'accesso ai Servizi viene revocato' : 'access to the Services is revoked'}</li>
                    <li>{language === 'it' ? 'Dati del Cliente conservati per 90 giorni (salvo obblighi legali), poi cancellati' : 'Client Data retained for 90 days (unless legal obligations require otherwise), then deleted'}</li>
                    <li>{language === 'it' ? 'il Cliente può richiedere esportazione dati entro 30 giorni' : 'the Client may request data export within 30 days'}</li>
                  </ul>
                </div>
                <div>
                  <p className="leading-relaxed mb-2"><strong>10.5.</strong> {language === 'it' ? 'Effetti della cessazione per Software su Commessa:' : 'Effects of termination for Bespoke Software:'}</p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>{language === 'it' ? 'i diritti ceduti restano in capo al Cliente per il software già consegnato e pagato' : 'assigned rights remain with the Client for software already delivered and paid for'}</li>
                    <li>{language === 'it' ? 'i lavori in corso vengono documentati e resi disponibili al Cliente nella loro forma attuale' : 'work in progress is documented and made available to the Client in its current form'}</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="font-display font-bold text-3xl text-graphite border-b-2 border-aiblue pb-3">{language === 'it' ? '11. Modifiche ai Termini' : '11. Amendments to the Terms'}</h2>
              <div className="space-y-4">
                <p className="leading-relaxed"><strong>11.1.</strong> {language === 'it' ? 'Agentics può modificare i Termini in qualsiasi momento pubblicandoli sul sito.' : 'Agentics may amend the Terms at any time by publishing them on the website.'}</p>
                <p className="leading-relaxed"><strong>11.2.</strong> {language === 'it' ? 'Le modifiche sostanziali sono comunicate via email con 30 giorni di anticipo.' : 'Substantial changes are communicated via email with 30 days\' advance notice.'}</p>
                <p className="leading-relaxed"><strong>11.3.</strong> {language === 'it' ? 'L\'uso continuato dei Servizi dopo la modifica costituisce accettazione.' : 'Continued use of the Services after the amendment constitutes acceptance.'}</p>
                <p className="leading-relaxed"><strong>11.4.</strong> {language === 'it' ? 'In caso di disaccordo, il Cliente può recedere entro 30 giorni dalla notifica.' : 'In case of disagreement, the Client may withdraw within 30 days of notification.'}</p>
                <p className="leading-relaxed"><strong>11.5.</strong> {language === 'it' ? 'Le modifiche ai presenti Termini non hanno effetto retroattivo sui Contratti di Servizio già conclusi, che rimangono regolati dalla versione dei Termini vigente alla data di sottoscrizione.' : 'Amendments to these Terms do not have retroactive effect on Service Agreements already executed, which remain governed by the version of the Terms in force at the date of signing.'}</p>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="font-display font-bold text-3xl text-graphite border-b-2 border-aiblue pb-3">{language === 'it' ? '12. Disposizioni Generali' : '12. General Provisions'}</h2>
              <div className="space-y-4">
                <p className="leading-relaxed"><strong>{language === 'it' ? '12.1. Cessione:' : '12.1. Assignment:'}</strong> {language === 'it' ? 'Il Cliente non può cedere il contratto senza consenso scritto di Agentics. Agentics può cedere il contratto a soggetti terzi che acquisiscano il ramo d\'azienda, previa comunicazione al Cliente.' : 'The Client may not assign the contract without Agentics\' written consent. Agentics may assign the contract to third parties acquiring the business unit, with prior notice to the Client.'}</p>
                <p className="leading-relaxed"><strong>{language === 'it' ? '12.2. Invalidità parziale:' : '12.2. Severability:'}</strong> {language === 'it' ? 'se una clausola è nulla, le altre restano valide. La clausola nulla è sostituita dalla norma di legge applicabile.' : 'if a clause is void, the remaining clauses remain valid. The void clause is replaced by the applicable legal provision.'}</p>
                <p className="leading-relaxed"><strong>{language === 'it' ? '12.3. Rinuncia:' : '12.3. Waiver:'}</strong> {language === 'it' ? 'il mancato esercizio di un diritto non costituisce rinuncia.' : 'failure to exercise a right does not constitute a waiver.'}</p>
                <div>
                  <p className="leading-relaxed mb-2"><strong>{language === 'it' ? '12.4. Comunicazioni:' : '12.4. Communications:'}</strong></p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>{language === 'it' ? 'Cliente → Agentics: info@agentics.eu.com o PEC: agentics@pec.it' : 'Client → Agentics: info@agentics.eu.com or PEC: agentics@pec.it'}</li>
                    <li>{language === 'it' ? 'Agentics → Cliente: indirizzo email o PEC indicato in fase di registrazione o nel Contratto di Servizio' : 'Agentics → Client: email address or PEC provided during registration or in the Service Agreement'}</li>
                    <li>{language === 'it' ? 'Per comunicazioni con valore legale, si raccomanda l\'uso della PEC' : 'For communications with legal value, the use of PEC is recommended'}</li>
                  </ul>
                </div>
                <p className="leading-relaxed"><strong>{language === 'it' ? '12.5. Forza maggiore:' : '12.5. Force majeure:'}</strong> {language === 'it' ? 'nessuna parte risponde per inadempimenti causati da eventi di forza maggiore (inclusi: pandemie, cyberattacchi di massa, interruzioni infrastrutture critiche, provvedimenti governativi). La parte che subisce l\'evento di forza maggiore ne dà comunicazione tempestiva all\'altra parte.' : 'neither party shall be liable for non-performance caused by force majeure events (including: pandemics, mass cyberattacks, critical infrastructure outages, government orders). The party affected by the force majeure event shall promptly notify the other party.'}</p>
                <p className="leading-relaxed"><strong>{language === 'it' ? '12.6. Integrazione:' : '12.6. Entire agreement:'}</strong> {language === 'it' ? 'i presenti Termini, unitamente al Contratto di Servizio e alla Privacy Policy, costituiscono l\'intero accordo tra le parti in relazione all\'oggetto del contratto e sostituiscono ogni precedente accordo verbale o scritto.' : 'these Terms, together with the Service Agreement and the Privacy Policy, constitute the entire agreement between the parties regarding the subject matter of the contract and supersede any prior oral or written agreements.'}</p>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="font-display font-bold text-3xl text-graphite border-b-2 border-aiblue pb-3">{language === 'it' ? '13. Legge Applicabile e Foro Competente' : '13. Applicable Law and Jurisdiction'}</h2>
              <div className="space-y-4">
                <p className="leading-relaxed"><strong>13.1.</strong> {language === 'it' ? 'I presenti Termini e i Contratti di Servizio sono regolati dalla legge italiana.' : 'These Terms and Service Agreements are governed by Italian law.'}</p>
                <p className="leading-relaxed"><strong>13.2.</strong> {language === 'it' ? 'Per controversie con consumatori: foro del luogo di residenza del consumatore (D.Lgs. 206/2005).' : 'For consumer disputes: jurisdiction of the consumer\'s place of residence (Legislative Decree 206/2005).'}</p>
                <p className="leading-relaxed"><strong>13.3.</strong> {language === 'it' ? 'Per controversie con imprese/professionisti: competenza esclusiva del Foro di Roma.' : 'For disputes with businesses/professionals: exclusive jurisdiction of the Court of Rome.'}</p>
                <p className="leading-relaxed"><strong>13.4.</strong> {language === 'it' ? 'Risoluzione alternativa: le parti possono ricorrere a mediazione/arbitrato prima di azioni giudiziali (D.Lgs. 28/2010).' : 'Alternative dispute resolution: the parties may resort to mediation/arbitration before judicial proceedings (Legislative Decree 28/2010).'}</p>
                <p className="leading-relaxed"><strong>13.5.</strong> {language === 'it' ? 'Per le controversie relative a contratti di sviluppo software, si applica in via interpretativa la disciplina del contratto d\'opera intellettuale (artt. 2222 e ss. c.c.) e, ove pertinente, la Legge 22 aprile 1941, n. 633.' : 'For disputes relating to software development contracts, the rules governing contracts for intellectual work (Articles 2222 et seq. of the Civil Code) apply by analogy, and, where relevant, Legge 22 aprile 1941, n. 633 (Copyright Law).'}</p>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="font-display font-bold text-3xl text-graphite border-b-2 border-aiblue pb-3">{language === 'it' ? '14. Contatti' : '14. Contact'}</h2>
              <div className="grid md:grid-cols-2 gap-6 text-base">
                <div className="space-y-2">
                  <p className="font-semibold text-graphite text-lg">Agentics SRL</p>
                  <p className="leading-relaxed">Via Vincenzo Monti 16<br />04100 Latina (LT) – {language === 'it' ? 'Italia' : 'Italy'}</p>
                  <p className="leading-relaxed"><strong>{language === 'it' ? 'P.IVA:' : 'VAT:'}</strong> 03335160598</p>
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
            <p className="text-sm text-graphite/60">{language === 'it' ? 'Ultimo aggiornamento: 16 marzo 2026' : 'Last updated: March 16, 2026'}</p>
            <p className="text-sm text-graphite/60">{language === 'it' ? 'Versione: 3.0' : 'Version: 3.0'}</p>
            <p className="text-sm text-graphite/60">{language === 'it' ? 'Prossima revisione prevista: Marzo 2027' : 'Next scheduled review: March 2027'}</p>
            <p className="text-sm text-graphite/60 mt-4">{language === 'it' ? '© 2025–2026 Agentics SRL – Tutti i diritti riservati' : '© 2025–2026 Agentics SRL – All rights reserved'}</p>
            <p className="text-sm text-graphite/60">{language === 'it' ? 'P.IVA: 03335160598' : 'VAT: 03335160598'}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;
