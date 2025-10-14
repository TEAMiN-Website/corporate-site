import React from 'react';

const Privacy: React.FC = () => {

  return (
    <div className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy / Datenschutzerklärung</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Datenschutz auf einen Blick</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Allgemeine Hinweise</h3>
            <p className="text-gray-700 mb-4">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen 
              Daten passiert, wenn Sie diese Website besuchen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Datenerfassung auf dieser Website</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Wer ist verantwortlich für die Datenerfassung?</h3>
            <p className="text-gray-700 mb-4">
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten 
              können Sie dem Impressum dieser Website entnehmen.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-2">Wie erfassen wir Ihre Daten?</h3>
            <p className="text-gray-700 mb-4">
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich 
              z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-2">Wofür nutzen wir Ihre Daten?</h3>
            <p className="text-gray-700 mb-4">
              Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. 
              Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Analyse-Tools und Tools von Drittanbietern</h2>
            <p className="text-gray-700 mb-4">
              Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht 
              vor allem mit sogenannten Analyseprogrammen. Detaillierte Informationen zu diesen Analyseprogrammen 
              finden Sie in der folgenden Datenschutzerklärung.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Ihre Rechte</h2>
            <p className="text-gray-700 mb-4">
              Sie haben jederzeit das Recht:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Auskunft über Ihre bei uns gespeicherten Daten zu erhalten</li>
              <li>Berichtigung unrichtiger personenbezogener Daten zu verlangen</li>
              <li>Löschung Ihrer bei uns gespeicherten Daten zu verlangen</li>
              <li>Einschränkung der Datenverarbeitung zu verlangen</li>
              <li>Widerspruch gegen die Verarbeitung Ihrer Daten einzulegen</li>
              <li>Datenübertragbarkeit zu verlangen</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Cookies</h2>
            <p className="text-gray-700 mb-4">
              Unsere Website verwendet Cookies. Das sind kleine Textdateien, die Ihr Webbrowser auf Ihrem 
              Endgerät speichert. Cookies helfen uns dabei, unser Angebot nutzerfreundlicher, effektiver 
              und sicherer zu machen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Kontakt</h2>
            <p className="text-gray-700">
              Bei Fragen zum Datenschutz können Sie sich jederzeit an uns wenden:<br />
              E-Mail: sportassistenz@uni-wuerzburg.de
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
