import React from 'react';

const Impressum: React.FC = () => {

  return (
    <div className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Impressum</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Angaben gemäß § 5 TMG</h2>
            <p className="text-gray-700">
              TEAMiN - Sport-Assistenz Programm<br />
              Julius-Maximilians-Universität Würzburg<br />
              Institut für Sportwissenschaft<br />
              Judenbühlweg 11<br />
              97082 Würzburg<br />
              Deutschland
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Kontakt</h2>
            <p className="text-gray-700">
              Telefon: +49 (0) 931 31-86601<br />
              E-Mail: sportassistenz@uni-wuerzburg.de
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Vertretungsberechtigte</h2>
            <p className="text-gray-700">
              Projektleitung: Dr. Christiane Reuter<br />
              Projektleitung: Prof. Dr. David Rygl
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Haftungsausschluss</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Haftung für Inhalte</h3>
            <p className="text-gray-700 mb-4">
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, 
              Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Haftung für Links</h3>
            <p className="text-gray-700">
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen 
              Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Urheberrecht</h2>
            <p className="text-gray-700">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen 
              dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art 
              der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung 
              des jeweiligen Autors bzw. Erstellers.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Impressum;
