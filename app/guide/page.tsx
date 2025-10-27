/* eslint-disable */

'use client';

import React, { useState, useEffect, Suspense } from 'react';
import './../globals.css';
import { useSearchParams } from 'next/navigation';

interface GuideContent {
  selects: any;
  hero: { subtitle: string; description: string };
  genres: any;
  erkennung: any;
  tropes: any;
  gespraech: any;
  risiken: any;
  hilfe: any;
}

interface CardSectionProps {
  title: string;
  description: string;
  contentList: string[];
}

const CardSection: React.FC<CardSectionProps> = ({ title, description, contentList }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h4 className="text-2xl font-bold mb-4">{title}</h4>
    <p className="mb-4 text-gray-600">{description}</p>
    <ul className="text-gray-700 space-y-2">
      {contentList.map((item, index) => (
        <li
          key={index}
          className="pl-4 border-l-2 border-[#EAE3DC]"
          dangerouslySetInnerHTML={{ __html: item }}
        />
      ))}
    </ul>
  </div>
);

interface SectionHeaderProps {
  title: string;
  description: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, description }) => (
  <div className="text-center mb-8">
    <h3 className="text-3xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>
  </div>
);

// Separate component that uses useSearchParams
const DarkRomanceGuideContent = () => {
  const [activeAge, setActiveAge] = useState<'u14' | '14-16' | '16-18' | null>('14-16');
  const [decision, setDecision] = useState<'ja' | 'nein' | null>(null);
  const [guideContent, setGuideContent] = useState<GuideContent | null>(null);

  const searchParams = useSearchParams();
  const lang = searchParams.get('lang') ?? 'de';

  useEffect(() => {
    const loadContent = async () => {
      const mod =
        lang === 'de'
          ? await import('./content/content_de')
          : await import('./content/content_en');

      setGuideContent(mod.guideContent);
    };
    loadContent();
  }, [lang]);

  const handleAgeChange = (age: 'u14' | '14-16' | '16-18') => {
    setActiveAge(age);
    setDecision(null); // Reset decision when age changes
  };

  if (!guideContent) {
    return <div className="p-8 text-center">Loading...</div>;
  }

  const currentAgeGroup = activeAge ? guideContent.gespraech.ageGroups[activeAge] : null;

  return (
    <div className="min-h-screen bg-[#F8F5F2] text-[#4A4A4A] font-inter">
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section id="intro" className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-[#333]">{guideContent.hero.subtitle}</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            {guideContent.hero.description}
          </p>
        </section>

        {/* Genres Section */}
        <section id="genres" className="mb-16 scroll-mt-20">
          <SectionHeader
            title={guideContent.genres.title}
            description={guideContent.genres.description}
          />
          <div className="grid md:grid-cols-2 gap-8">
            <CardSection
              title={guideContent.genres.naCard.title}
              description={guideContent.genres.naCard.description}
              contentList={guideContent.genres.naCard.list}
            />
            <CardSection
              title={guideContent.genres.drCard.title}
              description={guideContent.genres.drCard.description}
              contentList={guideContent.genres.drCard.list}
            />
          </div>
        </section>

        {/* Erkennen Section */}
        <section id="erkennen" className="mb-16 scroll-mt-20">
          <SectionHeader
            title={guideContent.erkennung.title}
            description={guideContent.erkennung.description}
          />
          <div className="bg-white p-8 rounded-lg shadow-md grid md:grid-cols-2 gap-8">
            <div>
              <h5 className="text-xl font-semibold mb-3">
                {guideContent.erkennung.visuell.title}
              </h5>
              <p
                className="text-gray-600"
                dangerouslySetInnerHTML={{ __html: guideContent.erkennung.visuell.content }}
              />
            </div>
            <div>
              <h5 className="text-xl font-semibold mb-3">
                {guideContent.erkennung.digital.title}
              </h5>
              <p
                className="text-gray-600"
                dangerouslySetInnerHTML={{ __html: guideContent.erkennung.digital.content }}
              />
            </div>
          </div>
        </section>

        {/* Tropes & Kinks Section */}
        <section id="tropes-kinks" className="mb-16 scroll-mt-20">
          <SectionHeader
            title={guideContent.tropes.title}
            description={guideContent.tropes.description}
          />
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="space-y-4">
              {guideContent.tropes.items.map((trope: any, index: number) => (
                <details
                  key={index}
                  className="border-b border-gray-200 py-4 trope-item"
                >
                  <summary className="font-semibold text-lg cursor-pointer">
                    {trope.name}
                  </summary>
                  <div className="mt-3 px-2">
                    <p className="text-gray-700">{trope.desc}</p>
                    <p className="mt-2 text-red-700 bg-red-100 p-2 rounded-md font-semibold">
                      {guideContent.tropes.risk} {trope.risk}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Gespräch Section */}
        <section id="gespraech" className="mb-16 scroll-mt-20">
          <SectionHeader
            title={guideContent.gespraech.title}
            description={guideContent.gespraech.description}
          />
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex justify-center mb-8 space-x-2 md:space-x-4">
              {Object.keys(guideContent.gespraech.ageGroups).map((age) => (
                <button
                  key={age}
                  onClick={() => handleAgeChange(age as 'u14' | '14-16' | '16-18')}
                  className={`px-4 py-2 rounded-full font-semibold transition-colors duration-300 border-2 border-[#DCD3CB] ${
                    activeAge === age ? 'bg-[#A0522D] text-white border-[#A0522D]' : ''
                  }`}
                >
                  {age === 'u14' ? guideContent.selects.child : age.replace('-', ' - ')}
                </button>
              ))}
            </div>

            {currentAgeGroup && (
              <div
                id="gespraech-content"
                className="transition-opacity duration-500 opacity-100"
              >
                <h4 className="text-2xl font-bold mb-3 text-center">
                  {currentAgeGroup.title}
                </h4>
                <p className="text-gray-600 mb-6 text-center max-w-xl mx-auto">
                  {currentAgeGroup.content}
                </p>

                <div className="text-center my-8 p-4 bg-stone-100 rounded-lg">
                  <h5 className="text-xl font-semibold mb-4 text-gray-800">
                    {guideContent.selects.leserfrage}
                  </h5>
                  <div className="flex justify-center space-x-4">
                    <button
                      onClick={() => setDecision('nein')}
                      className={`decision-button px-6 py-2 rounded-full font-semibold transition-colors duration-300 border-2 border-[#B9A491] hover:bg-[#A0522D] hover:text-white ${
                        decision === 'nein'
                          ? 'active bg-[#A0522D] text-white'
                          : ''
                      }`}
                    >
                      {guideContent.selects.nicht_leser}
                    </button>
                    <button
                      onClick={() => setDecision('ja')}
                      className={`decision-button px-6 py-2 rounded-full font-semibold transition-colors duration-300 border-2 border-[#B9A491] hover:bg-[#A0522D] hover:text-white ${
                        decision === 'ja' ? 'active bg-[#A0522D] text-white' : ''
                      }`}
                    >
                      {guideContent.selects.leser}
                    </button>
                  </div>
                </div>

                {decision && (
                  <div id="gespraech-path-content" className="mt-8">
                    <h5 className="text-2xl font-bold mb-6 text-center text-gray-800">
                      {currentAgeGroup.paths[decision].title}
                    </h5>
                    <div className="max-w-2xl mx-auto space-y-4">
                      {currentAgeGroup.paths[decision].diagram.map(
                        (step: any, index: number) => (
                          <div key={index}>
                            <div className="flowchart-step border-2 border-[#DCD3CB] bg-white rounded-lg p-6 text-center shadow-md">
                              <strong className="font-semibold text-lg text-[#A0522D]">
                                {step.text}
                              </strong>
                              <p className="text-gray-600 mt-2">{step.subtext}</p>
                            </div>
                            {index <
                              currentAgeGroup.paths[decision].diagram.length - 1 && (
                              <div className="flex justify-center">
                                <div className="text-3xl text-[#B9A491]">↓</div>
                              </div>
                            )}
                          </div>
                        )
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>

        {/* Risiken Section */}
        <section id="risiken" className="mb-16 scroll-mt-20">
          <SectionHeader
            title={guideContent.risiken.title}
            description={guideContent.risiken.description}
          />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-2xl font-bold mb-4">
                🚨 {guideContent.risiken.normalisierung.title}
              </h4>
              <p className="text-gray-600">
                {guideContent.risiken.normalisierung.content}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-2xl font-bold mb-4">
                🧠 {guideContent.risiken.fantasie.title}
              </h4>
              <p className="text-gray-600">
                {guideContent.risiken.fantasie.content}
              </p>
            </div>
          </div>
        </section>

        {/* Hilfe Section */}
        <section id="hilfe" className="scroll-mt-20">
          <SectionHeader
            title={guideContent.hilfe.title}
            description={guideContent.hilfe.description}
          />
          <div className="bg-white p-8 rounded-lg shadow-md grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {guideContent.hilfe.items.map((item: any, index: number) => (
              <div key={index} className="border border-gray-200 p-4 rounded-lg">
                <h5 className="font-bold text-lg">{item.name}</h5>
                <p className="text-gray-600 text-sm my-1">{item.desc}</p>
                {item.contact && (
                  <p className="font-semibold text-[#A0522D] mt-2">{item.contact}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

// Loading component for Suspense fallback
const LoadingFallback = () => (
  <div className="min-h-screen bg-[#F8F5F2] flex items-center justify-center">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#A0522D] mx-auto mb-4"></div>
      <p className="text-gray-600">Loading...</p>
    </div>
  </div>
);

// Main component that wraps the content in Suspense
const DarkRomanceGuide = () => {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <DarkRomanceGuideContent />
    </Suspense>
  );
};


export default DarkRomanceGuide;

