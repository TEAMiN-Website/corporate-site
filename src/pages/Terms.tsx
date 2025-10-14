import React from 'react';

const Terms: React.FC = () => {

  return (
    <div className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Use / Nutzungsbedingungen</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Geltungsbereich</h2>
            <p className="text-gray-700 mb-4">
              Diese Nutzungsbedingungen regeln die Nutzung der Website von TEAMiN und des 
              Sport-Assistenz Programms (SpAss). Mit dem Zugriff auf die Website oder der Nutzung 
              unserer Dienste erklären Sie sich mit diesen Bedingungen einverstanden.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Nutzung der Website</h2>
            <p className="text-gray-700 mb-4">
              Die Inhalte dieser Website sind urheberrechtlich geschützt. Die Vervielfältigung, 
              Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des 
              Urheberrechtes bedürfen der schriftlichen Zustimmung des Betreibers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Registrierung und Teilnahme</h2>
            <p className="text-gray-700 mb-4">
              Die Teilnahme am Sport-Assistenz Programm erfordert eine Registrierung. Sie verpflichten 
              sich, wahrheitsgemäße und vollständige Angaben zu machen und diese aktuell zu halten.
            </p>
            <p className="text-gray-700 mb-4">
              Als Sport-Assistent verpflichten Sie sich:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Die Ausbildung vollständig zu absolvieren</li>
              <li>Die Grundsätze inklusiver Sportassistenz zu befolgen</li>
              <li>Vertrauliche Informationen zu schützen</li>
              <li>Professionell und respektvoll zu agieren</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Haftungsausschluss</h2>
            <p className="text-gray-700 mb-4">
              TEAMiN übernimmt keine Haftung für Schäden, die durch die Nutzung der Website oder 
              die Teilnahme am Programm entstehen, es sei denn, diese beruhen auf Vorsatz oder 
              grober Fahrlässigkeit.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Datenschutz</h2>
            <p className="text-gray-700 mb-4">
              Die Verarbeitung personenbezogener Daten erfolgt gemäß unserer Datenschutzerklärung. 
              Diese können Sie unter dem Menüpunkt "Datenschutz" einsehen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Änderungen der Nutzungsbedingungen</h2>
            <p className="text-gray-700 mb-4">
              Wir behalten uns das Recht vor, diese Nutzungsbedingungen jederzeit zu ändern. 
              Über wesentliche Änderungen werden registrierte Nutzer per E-Mail informiert.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Schlussbestimmungen</h2>
            <p className="text-gray-700 mb-4">
              Es gilt das Recht der Bundesrepublik Deutschland. Sollten einzelne Bestimmungen 
              dieser Nutzungsbedingungen unwirksam sein, bleibt die Wirksamkeit der übrigen 
              Bestimmungen davon unberührt.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Kontakt</h2>
            <p className="text-gray-700">
              Bei Fragen zu den Nutzungsbedingungen können Sie uns kontaktieren:<br />
              E-Mail: sportassistenz@uni-wuerzburg.de<br />
              Telefon: +49 (0) 931 31-86601
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
