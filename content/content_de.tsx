// content.ts

import {
    Warning,
    Person,
    Security,
    Psychology,
    Schedule,
    ChildCare,
    Female,
    AutoStories
  } from '@mui/icons-material';
  import React from 'react';
  
  export const heroSectionText = {
    dark: {
      title: 'Dark Romance',
      subtitle: '& New Adult Literatur',
      description: 'Die dunkle Verführung unserer Jugend',
      button: 'Enthülle die Wahrheit',
    },
    light: {
      title: 'Dark Romance',
      subtitle: '& New Adult Literatur',
      description: 'Eine kritische Betrachtung problematischer Romantisierung',
      button: 'Jetzt schützen',
    },
  };
  
  export const themesSectionText = {
    dark: {
      title: 'Die dunklen Geheimnisse',
      description: 'Hinter der Fassade romantischer Fantasien verbergen sich gefährliche Botschaften, die das Leben und die Beziehungsvorstellungen junger Menschen nachhaltig prägen können',
      statsTitle: 'Die erschreckenden Zahlen',
    },
    light: {
      title: 'Problematische Muster',
      description: 'Eine detaillierte Analyse der problematischen Elemente, die in vielen populären Dark Romance und New Adult Büchern zu finden sind',
      statsTitle: 'Wichtige Statistiken',
    },
  };
  
  export const ctaFooterText = {
    dark: {
      title: 'Schützen Sie Ihre Kinder',
      description: 'Die Verführung ist real. Die Gefahr ist da. Nur durch Aufklärung und offene Gespräche können wir unsere Jugend vor den schädlichen Einflüssen dieser Literatur schützen.',
      reader: {
        title: 'Für Leser',
        text: 'Stärken Sie Ihre Medienkompetenz, um Fiktion von Realität zu unterscheiden. Nutzen Sie Trigger-Warnungen und brechen Sie Bücher ab, die persönliche Grenzen überschreiten.',
      },
      parents: {
        title: 'Für Eltern & Erzieher',
        text: 'Führen Sie eine offene Kommunikation über Medieninhalte. Eine umfassende Aufklärung über gesunde Beziehungen und Konsens ist der beste Schutz. Nutzen Sie dazu gerne unseren Leitfaden.',
      },
      authors: {
        title: 'Für Autoren & Verlage',
        text: 'Übernehmen Sie Verantwortung durch sensible Darstellungen und ehrliche Kennzeichnung von Inhalten, um insbesondere junge Leser zu schützen.',
      },
      button: 'Schutzleitfaden erhalten',
    },
    light: {
      title: 'Gemeinsam handeln',
      description: 'Nur durch bewusste Auseinandersetzung mit diesen Themen können wir eine gesündere Literaturlandschaft für junge Menschen schaffen. Lassen Sie uns gemeinsam handeln.',
      reader: {
        title: 'Für Leser',
        text: 'Stärken Sie Ihre Medienkompetenz, um Fiktion von Realität zu unterscheiden. Nutzen Sie Trigger-Warnungen und brechen Sie Bücher ab, die persönliche Grenzen überschreiten.',
      },
      parents: {
        title: 'Für Eltern & Erzieher',
        text: 'Führen Sie eine offene Kommunikation über Medieninhalte. Eine umfassende Aufklärung über gesunde Beziehungen und Konsens ist der beste Schutz. Nutzen Sie dazu gerne unsern Leitfaden.',
      },
      authors: {
        title: 'Für Autoren & Verlage',
        text: 'Übernehmen Sie Verantwortung durch sensible Darstellungen und ehrliche Kennzeichnung von Inhalten, um insbesondere junge Leser zu schützen.',
      },
      button: 'Zum Leitfaden',
    },
  };
  
  export const themeCardsData = [
    { 
      icon: <Warning fontSize="large" />, 
      title: 'Romantisierung von Missbrauch', 
      description: 'Emotionale, körperliche und sexuelle Gewalt wird als leidenschaftliche Liebe dargestellt und normalisiert.', 
      details: [
        'Kontrolle über Partner als "Schutz" verklärt',
        'Ignorieren von Nein-Aussagen romantisiert', 
        'Isolation vom sozialen Umfeld glorifiziert',
        'Eifersucht als Liebesbeweis dargestellt'
      ],
      examples: [
        'Häusliche Gewalt wird in der Storyline von „Very Bad Kings“ romantisiert und als "leidenschaftliche" oder "intensive" Liebe dargestellt.',
        'Der Plot basiert auf einer ungesunden emotionalen Bindung, dem Trauma-Bonding, das als tiefe Verbindung verkauft wird. - The Reading Room, A Critical Analysis of the Dark Romance Genre', 
        'Die Eifersucht des männlichen Protagonisten wird als Beweis seiner tiefen Zuneigung dargestellt, anstatt als ein Zeichen von Besitzanspruch und Kontrolle.'
      ],
      severity: 'critical' as const 
    },
    { 
      icon: <Security fontSize="large" />, 
      title: 'Kriminelle als Traumpartner', 
      description: 'Gefährliche Kriminelle werden zu romantischen Helden stilisiert, wodurch Gewalt verharmlost wird.', 
      details: [
        'Mafia-Bosse als fürsorgliche Partner dargestellt',
        'Stalking als romantische Aufmerksamkeit verkauft',
        'Entführung als Schutzmaßnahme romantisiert',
        'Gewalt gegen andere als "Beschützerinstinkt" erklärt'
      ],
      examples: [
        'Ein Mafia-Boss in „Very Bad Kings“ wird als fürsorglicher und beschützender Partner dargestellt, obwohl er gewalttätig ist. "He was a killer, a predator, and all mine."',
        'Die Straftaten der Protagonisten werden mit ihrer „verwirrenden Liebe“ begründet.',
        'Die männlichen Protagonisten sind gewalttätig und frauenfeindlich, aber ihre dunkle Vergangenheit macht sie attraktiv.'
      ],
      severity: 'critical' as const 
    },
    { 
      icon: <Psychology fontSize="large" />, 
      title: 'Unrealistische Sexualität', 
      description: 'Extreme und oft schmerzhafte Sexualpraktiken werden als normal und erstrebenswert dargestellt.', 
      details: [
        'Schmerz und Demütigung als Lustgewinn normalisiert',
        'Consent-Konzepte werden ignoriert oder verdreht',
        'Unrealistische körperliche Erwartungen geweckt',
        'Gefährliche Praktiken ohne Aufklärung dargestellt'
      ],
      examples: [
        'In „Gemolken vom Mountain Daddy“ findet die sexuelle Handlung durch Überrumpelung statt. "She was in his bed, under his thumb, and it was exactly where she wanted to be."',
        'Der männliche Protagonist in „Icebreaker“ setzt die weibliche Protagonistin unter Druck, was als Teil des romantischen Spiels dargestellt wird, anstatt die fehlende Einwilligung zu thematisieren.',
        'Der Verlag bewirbt die Beziehung als einvernehmlich, obwohl der Konsens fehlt.'
      ],
      severity: 'critical' as const 
    },
    { 
      icon: <Person fontSize="large" />, 
      title: 'Toxische Geschlechterrollen', 
      description: 'Veraltete und schädliche Rollenbilder werden als romantisch und erstrebenswert propagiert.', 
      details: [
        'Frauen als hilflose, zu rettende Objekte dargestellt',
        'Männliche Aggression als Zeichen von Stärke glorifiziert',
        'Emotionale Unreife als "geheimnisvoll" verklärt',
        'Abhängigkeit als romantische Hingabe interpretiert'
      ],
      examples: [
        'Der männliche Protagonist in „Very Bad Kings“ wird als dominanter, aggressiver Alpha dargestellt, dessen Verhalten als "männlich" und attraktiv gilt.',
        'Weibliche Charaktere sind oft in ungesunde Abhängigkeiten von den männlichen Protagonisten verwickelt.',
        'Männliche Dominanz wird in den Geschichten als Stärke dargestellt.'
      ],
      severity: 'high' as const 
    },
    { 
      icon: <Schedule fontSize="large" />, 
      title: 'Problematische Altersunterschiede', 
      description: 'Große Altersunterschiede und Machtgefälle werden romantisiert und als besonders erregend dargestellt.', 
      details: [
        'Extreme Age-Gaps als besonders reizvoll beworben',
        'Machtungleichgewichte werden erotisiert',
        'Erfahrene "Mentoren" als ideale Partner dargestellt',
        'Junge Naivität als besonders attraktiv verkauft'
      ],
      examples: [
        'In „Gemolken vom Mountain Daddy“ wird ein massives Altersgefälle romantisiert, was auch der Titel des Buches verherrlicht.',
        'Eine unreife Protagonistin wird in eine Beziehung mit einem „erfahrenen“ Mann gezwungen.',
        'Eine Protagonistin, die als "unschuldig" oder naiv beschrieben wird, wird mit einem deutlich älteren, erfahrenen Mann zusammengebracht, was das Machtungleichgewicht romantisiert.'
      ],
      severity: 'high' as const 
    },
    { 
      icon: <ChildCare fontSize="large" />, 
      title: 'Irreführende Vermarktung', 
      description: 'Explizite Inhalte werden durch niedliche Cover und als "Young Adult" getarnt an Minderjährige vermarktet.', 
      details: [
        'Cartoon-artige Cover verschleiern explizite Inhalte',
        'Fehlende oder irreführende Altersangaben',
        'BookTok-Marketing zielt bewusst auf Teenager ab',
        'Harmlos wirkende Titel bei extremen Inhalten'
      ],
      examples: [
        'Die "Triggerwarnung" in „Very Bad Kings“ dient eher als reißerisches Marketing-Instrument, das junge Leser neugierig macht. - The Cornell Daily Sun, The Dark Romance Booktok Trend',
        'BookTok-Videos machen die Bücher auch für ein junges Publikum sichtbar, indem sie mit Hashtags wie #spicybooks beworben werden.',
        'Buchcover und Klappentexte verschleiern oft die problematischen Inhalte durch harmlos wirkende Titel und Bilder.'
      ],
      severity: 'high' as const 
    },
    { 
      icon: <Female fontSize="large" />, 
      title: 'Pseudo-Feminismus', 
      description: 'Unter dem Deckmantel weiblicher Ermächtigung werden frauenfeindliche Narrative als progressiv verkauft.', 
      details: [
        'Unterwerfung als "weibliche Wahl" glorifiziert',
        'Gewalt gegen Frauen als "empowerment" verkauft',
        'Opferblaming durch "sie wollte es so" Narrative',
        'Feministische Begriffe zur Verschleierung von Missbrauch'
      ],
      examples: [
        'Die scheinbare Einwilligung der Protagonistin in „Gemolken vom Mountain Daddy“ wird als weibliche Ermächtigung fehlinterpretiert, obwohl sie sich in einer toxischen Beziehung befindet.',
        'Unterwerfung wird als bewusste, stärkende Entscheidung der weiblichen Protagonistin dargestellt, obwohl sie in einer toxischen Beziehung gefangen ist. - The Reading Room, A Critical Analysis of the Dark Romance Genre',
        'Bücher werden als „Empowerment“ vermarktet, obwohl sie frauenfeindliche Tropen reproduzieren.'
      ],
      severity: 'critical' as const 
    },
    { 
      icon: <AutoStories fontSize="large" />, 
      title: 'Literarische Manipulation', 
      description: 'Durch geschickte Erzählstrukturen werden problematische Inhalte als romantisch und normal vermittelt.', 
      details: [
        'Täter-Perspektiven humanisieren Missbrauchsverhalten',
        'Trauma-Bonding als "tiefe Verbindung" dargestellt',
        'Problematisches Verhalten durch Backstories gerechtfertigt',
        'Stockholm-Syndrom als wahre Liebe verkauft'
      ],
      examples: [
        'Missbrauch wird in „Very Bad Kings“ durch die Darstellung als Trauma-Bonding verharmlost, was die ungesunde Bindung romantisiert.',
        'Das problematische Verhalten des männlichen Protagonisten wird durch eine tragische Hintergrundgeschichte entschuldigt, was Empathie für den Täter erzeugt. - The Reading Room, A Critical Analysis of the Dark Romance Genre',
        'Die Lesenden werden dazu gebracht, mit dem Täter zu sympathisieren.'
      ],
      severity: 'medium' as const 
    },
  ];