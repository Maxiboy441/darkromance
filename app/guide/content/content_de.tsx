export const guideContent = {
  hero: {
    title: "Eltern-Leitfaden",
    subtitle: "Dark Romance & New Adult Verstehen",
    description: "Ein interaktiver Leitfaden, der Ihnen hilft, die Buch-Trends Ihrer Kinder zu verstehen, kritische Inhalte zu erkennen und ein offenes, vertrauensvolles Gespräch zu führen."
  },
  genres: {
    title: "Was ist das? Die Genre-Landkarte",
    description: "New Adult und Dark Romance sind zwei populäre Genres, die oft verwechselt werden. Diese Sektion erklärt die Kernmerkmale und hilft Ihnen, die entscheidenden Unterschiede zu verstehen.",
    naCard: {
      title: "📘 New Adult (NA)",
      description: "Primär für junge Erwachsene. Die Protagonisten navigieren den Übergang zum Erwachsenwerden: Studium, erster Job, Selbstfindung. Behandelt reale Probleme wie psychische Gesundheit, gerne mit expliziterer Beschreibung von Sexualität und Sex. Hier meist noch mit gesellschaftsfähigeren Fetischen, jedoch sind auch Kinks gerne Thema und Einvernehmlichkeit gern fraglich.",
      list: [
        "<strong>Geeignet für:</strong> Junge Erwachsene (18-25 Jahre)",
        "<strong>Kernthemen:</strong> Selbstfindung, erste Liebe, Karriere",
        "<strong>Emotionaler Ton:</strong> Intensiv, emotional, drama-basiert",
        "<strong>Typisches Ende:</strong> Happy End durch persönliches Wachstum",
        "<strong>Cover:</strong> Oft hell, pastellfarben, illustriert"
      ]
    },
    drCard: {
      title: "🖤 Dark Romance (DR)",
      description: "Ein Subgenre für reife Leser. Zeichnet sich durch moralisch fragwürdige und tabuisierte Themen aus. Beziehungen sind oft von Machtgefälle, Toxizität und kriminellen Handlungen (Stalking, Entführung) geprägt. Das Ende kann toxisches Verhalten belohnen. Hier wird auch Sex häufig mit gesellschaftlichen Grenzüberschreitungen wie Gewalt, Vergewaltigung, etc.",
      list: [
        "<strong>Geeignet für:</strong> Reife Leser (18+)",
        "<strong>Kernthemen:</strong> Toxische Beziehungen, Gewalt, Tabus",
        "<strong>Emotionaler Ton:</strong> Düster, intensiv, unheimlich",
        "<strong>Typisches Ende:</strong> 'Dunkles' Happy End, das Fehlverhalten romantisiert",
        "<strong>Cover:</strong> Dunkle Farben, symbolisch, provokant"
      ]
    }
  },
  erkennung: {
    title: "Bücher erkennen",
    description: "Wie identifiziert man potenziell problematische Bücher? Achten Sie auf visuelle Merkmale, digitale Schlüsselwörter und die Bedeutung von Triggerwarnungen.",
    visuell: {
      title: "👁️ Visuelle Sprache (Cover & Titel)",
      content: "<strong>New Adult:</strong> Oft helle, pastellfarbene und illustrierte Cover ('Cartoon-Stil'). <br><strong>Dark Romance:</strong> Düstere Farben (schwarz, rot), symbolische Bilder (Rose, verdeckte Gesichter) und provokante Titel ('Twisted Game').<br><br><strong class='text-red-600'>Achtung:</strong> Verlage nutzen oft bewusst harmlose Cover für problematische Inhalte, um eine jüngere Zielgruppe anzusprechen. Verlassen Sie sich nie allein auf das Cover!"
    },
    digital: {
      title: "💻 Digitale Spurensuche (Tags & Keywords)",
      content: "Suchen Sie online nach diesen Begriffen, um den wahren Inhalt eines Buches zu verstehen:<br><strong>Allgemein:</strong> <code>dark romance</code>, <code>spicy booktok</code>, <code>smutty romance</code><br><strong>Charaktere:</strong> <code>morally grey</code>, <code>villain romance</code>, <code>stalker romance</code><br><strong>Inhalt:</strong> <code>trigger warnings</code>, <code>dub-con</code>/<code>non-con</code>, <code>mafia</code>, <code>bully romance</code>"
    }
  },
  tropes: {
    title: "🔄 Tropes verstehen: Wiederkehrende Muster und ihre Risiken",
    description: "Ein 'Trope' ist ein wiederkehrendes Erzählmuster. Während einige in der New Adult Literatur romantisch sein können, normalisieren andere in der Dark Romance gefährliches Verhalten. Hier sind die wichtigsten:",
     risk: "Potenzielles Risiko:",
    items: [
      { name: "Enemies to Lovers", desc: "Zwei verfeindete Charaktere verlieben sich. Die anfängliche Spannung wird als Vorstufe zur Liebe dargestellt.", risk: "In der Dark Romance wird die Grenze zwischen Hass und Gewalt oft verwischt, was Grausamkeit als 'Leidenschaft' fehlinterpretiert." },
      { name: "Forced Proximity", desc: "Charaktere werden durch äußere Umstände (z.B. ein Schneesturm) gezwungen, Zeit miteinander zu verbringen und sich anzunähern.", risk: "Kann in Dark Romance-Kontexten Machtgefälle und Kontrollverlust romantisieren, indem mangelnde Wahlfreiheit als Schicksal dargestellt wird." },
      { name: "Bully Romance", desc: "Mobbing und Demütigung werden als Anzeichen von Zuneigung und als Vorstufe einer Beziehung dargestellt.", risk: "Romantisiert psychische und physische Gewalt. Vermittelt die gefährliche Botschaft, dass Grausamkeit ein Zeichen von Liebe ist." },
      { name: "Stalker / Captive", desc: "Stalking oder Entführung führt zu einer 'romantischen' Beziehung.", risk: "Verharmlost schwere Straftaten und Kontrollzwang. Kann das Verständnis für persönliche Grenzen und Selbstwertgefühl massiv schädigen." },
      { name: "Age Gap", desc: "Eine Beziehung zwischen zwei Personen mit einem großen Altersunterschied.", risk: "Kann in Dark Romance-Kontexten gefährlich sein, da es Machtgefälle, Manipulation und die Ausnutzung von Unerfahrenheit verharmlost." },
      { name: "Possessive / Obsessive Hero", desc: "Der männliche Protagonist ist extrem eifersüchtig, kontrollierend und oft gewalttätig, um seine Partnerin zu 'beschützen'.", risk: "Normalisiert Kontrollzwang und Besitzdenken, was oft die ersten Schritte in einer missbräuchlichen Beziehung sind. Romantisiert auch das sogenannte 'Touch Her and Die' Trope." },
      { name: "Amnesia", desc: "Ein Charakter verliert das Gedächtnis, was eine neue, ungleiche Beziehungsdynamik ermöglicht.", risk: "Romantisiert die Ausnutzung einer verletzlichen, orientierungslosen Person." },
      { name: "Only One Bed", desc: "Zwei Charaktere, die sich nicht mögen oder kennen, müssen sich ein Bett teilen.", risk: "Oft harmlos in NA, aber in DR kann dies zu erzwungenen Situationen und zur Verharmlung der Missachtung von Grenzen führen." },
      { name: "Mafia Romance / Organised Crime", desc: "Die Protagonistin verliebt sich in ein Mitglied der organisierten Kriminalität.", risk: "Romantisiert Gewalt, Verbrechen und oft brutale Machtdynamiken. Blendet die Realität von Kriminalität, Trauma und den Missbrauch von Macht aus." },
      { name: "Reverse Harem", desc: "Eine Protagonistin hat eine Beziehung mit mehreren Männern.", risk: "Kann in Dark Romance mit Machtgefälle, Manipulation und ungesunden Beziehungsdynamiken verbunden sein." },
      { name: "Grumpy/Sunshine", desc: "Ein mürrischer Charakter wird von einem optimistischen 'erweicht'.", risk: "Ein beliebter NA-Trope, der in DR ungesund werden kann, wenn der 'Sunshine'-Charakter die Aufgabe hat, toxisches Verhalten zu 'heilen'." }
    ]
  },
  kinks: {
    title: "🌶️ Was sind Kinks in der Literatur?",
    description: "Ein 'Kink' ist eine sexuelle Präferenz oder ein Fetisch. In der Literatur werden sie oft verwendet, um die sexuelle Spannung zu erhöhen. Es ist entscheidend, den Unterschied zwischen einvernehmlichen sexuellen Praktiken und der Romantisierung von Gewalt zu verstehen. Das Thema 'Consent' (Einvernehmlichkeit) ist hier der Schlüssel.",
    items: [
      { name: "BDSM (Bondage, Discipline, Sadism, Masochism)", desc: "Beinhaltet Elemente von Fesselung, Dominanz und Unterwerfung.", risk: "Romantisiert, wenn kein Wert auf Kommunikation und Einvernehmlichkeit ('Safe, Sane, and Consensual' - SSC) gelegt wird. Das Fehlen von klaren Grenzen kann eine gefährliche Dynamik vermitteln." },
      { name: "Consensual Non-Consent (CNC)", desc: "Eine Sexualpraktik, bei der ein Partner so tut, als sei er nicht einverstanden, obwohl er es in Wirklichkeit ist.", risk: "Kann leicht missinterpretiert werden und bei jungen Lesern die gefährliche Botschaft vermitteln, dass ein 'Nein' nicht ernst gemeint sein muss." },
      { name: "Dom/Sub (Dominanz/Submission)", desc: "Eine Beziehungsdynamik, bei der ein Partner die dominante und der andere die unterwürfige Rolle einnimmt.", risk: "Normalisiert ein Machtgefälle. Ohne die klare Betonung von Kommunikation und Einvernehmlichkeit kann es als romantische Darstellung von Kontrolle und Gehorsam fehlinterpretiert werden." },
      { name: "Age Play", desc: "Eine sexuelle Fantasie, bei der sich Partner wie in einer anderen Altersgruppe verhalten.", risk: "Extrem problematisch, da es die sexuelle Ausbeutung von Minderjährigen verharmlosen oder normalisieren kann." },
      { name: "Sexual Violence (Trigger Warning)", desc: "Darstellung von sexueller Nötigung oder Vergewaltigung.", risk: "Das explizite Kennzeichnen ist von entscheidender Bedeutung. In Dark Romance wird dies oft romantisiert, was die Wahrnehmung von Gewalt als 'normal' oder sogar 'begehrenswert' beeinflussen kann." }
    ]
  },
  gespraech: {
    title: "Das offene Gespräch suchen",
    description: "Ein Verbot ist selten die Lösung. Ein offener Dialog ist der beste Weg, um Ihr Kind zu begleiten. Wählen Sie die Altersgruppe und die Situation, um passende Strategien zu erhalten.",
    ageGroups: {
      u14: {
        title: "Unter 14: Absoluter Schutz & Klare Grenzen",
        content: "In diesem Alter ist die psychische Entwicklung noch nicht so weit, die komplexen und oft gewalttätigen Inhalte von Dark Romance zu verarbeiten. Ein klares Verbot ist hier kein Misstrauen, sondern eine notwendige Schutzmaßnahme.",
        paths: {
          nein: {
            title: "Prävention: Ein klares 'Nein' etablieren",
            diagram: [
              { text: "1. Klare Regel aufstellen", subtext: "Erklären Sie ruhig, dass es Bücher gibt, die wie Filme eine Altersfreigabe haben. 'Diese Bücher sind für Erwachsene, weil die Themen darin für junge Jugendliche schädlich sein können. Deshalb gilt die Regel, dass du sie nicht liest.'" },
              { text: "2. Neugier verstehen, aber umlenken", subtext: "Fragen Sie: 'Was reizt dich an solchen Geschichten?' Bieten Sie aktiv spannende Alternativen aus dem 'Young Adult'-Bereich an, die ohne die problematischen Inhalte auskommen." },
              { text: "3. Konsequent bleiben", subtext: "Bleiben Sie bei Ihrer Haltung. Es geht um den Schutz vor der Normalisierung von Gewalt in Beziehungen. Hier gibt es keine Kompromisse." }
            ]
          },
          ja: {
            title: "Intervention: Konsequent handeln",
            diagram: [
              { text: "1. Ruhig bleiben & Buch einziehen", subtext: "Reagieren Sie ohne Panik, aber bestimmt: 'Ich sehe, was du liest. Dieses Buch ist, wie besprochen, nichts für dein Alter. Ich nehme es erstmal an mich.'" },
              { text: "2. Kontext erfragen", subtext: "Fragen Sie nach dem 'Warum': 'Wie bist du an das Buch gekommen? Reden deine Freunde darüber?' Das hilft, den Einfluss von außen zu verstehen." },
              { text: "3. Verbot bekräftigen & aufarbeiten", subtext: "Erklären Sie erneut, warum das Buch schädlich ist. Besprechen Sie kurz, was darin passiert und warum dieses Verhalten in der Realität absolut inakzeptabel und gefährlich ist." }
            ]
          }
        }
      },
      '14-16': {
        title: "14-16 Jahre: Begleiten, aufklären & Alternativen fördern",
        content: "In dieser Phase wächst die Neugier. Ein reines Verbot wirkt oft nicht mehr. Das Ziel ist, Ihr Kind zu begleiten, für die problematischen Aspekte zu sensibilisieren und den Konsum in Richtung unbedenklicherer 'New Adult'-Literatur zu lenken.",
        paths: {
          nein: {
            title: "Aufklärung: Den Boden für kluge Entscheidungen bereiten",
            diagram: [
              { text: "1. Über Genres sprechen", subtext: "Thematisieren Sie den Unterschied: 'Es gibt 'New Adult', das sich mit dem Erwachsenwerden befasst, und 'Dark Romance', wo es oft um Gewalt und ungesunde Beziehungen geht. Das ist ein riesiger Unterschied.'" },
              { text: "2. 'Leichtere' Literatur empfehlen", subtext: "Schlagen Sie aktiv Bücher aus dem New Adult-Genre vor. 'Wenn du Geschichten für Ältere lesen willst, lass uns doch mal gemeinsam nach einem spannenden New Adult-Roman schauen.'" },
              { text: "3. Warnsignale für Toxizität besprechen", subtext: "Erklären Sie, was eine ungesunde Beziehung ausmacht: extreme Eifersucht, Kontrolle, Abwertung. 'Das ist in Büchern vielleicht 'spannend', aber im echten Leben eine absolute rote Flagge.'" }
            ]
          },
          ja: {
            title: "Dialog: Gelesenes einordnen und korrigieren",
            diagram: [
              { text: "1. Ins Gespräch kommen", subtext: "Starten Sie ohne Vorwurf: 'Ich sehe, du liest ein Dark Romance-Buch. Das sind ja oft ziemlich heftige Geschichten. Was denkst du darüber?'" },
              { text: "2. Gelesenes kritisch hinterfragen", subtext: "Fordern Sie eine Einordnung: 'Der Protagonist kontrolliert sie total. Findest du das romantisch oder eher beängstigend? Warum wird das in dem Buch als Liebe dargestellt?'" },
              { text: "3. Alternative anbieten & Wunsch äußern", subtext: "Zeigen Sie Ihre Haltung: 'Ich finde die Darstellung von Gewalt hier sehr schwierig. Ich würde mir wünschen, dass du eher zu New Adult-Büchern greifst. Wollen wir mal schauen, was es da gibt?'" }
            ]
          }
        }
      },
      '16-18': {
        title: "16-18 Jahre: Aufklärung statt Verbot – Realitätscheck fördern",
        content: "In diesem Alter werden Jugendliche die Bücher oft trotz Verbot lesen. Ihre wichtigste Aufgabe ist es nun, durch gezielte Aufklärung sicherzustellen, dass Ihr Kind Fiktion von der Realität trennen kann und toxische Verhaltensweisen nicht als erstrebenswert ansieht.",
        paths: {
          nein: {
            title: "Vorbereitung: Immunsystem gegen toxische Mythen stärken",
            diagram: [
              { text: "1. Gefährliche Mythen ansprechen", subtext: "Reden Sie offen über die Faszination des 'Bad Boy'. 'Die Idee, jemanden durch Liebe zu 'heilen', ist ein gefährlicher Mythos. In der Realität ist man nicht Therapeut für seinen Partner.'" },
              { text: "2. Was 'Liebe' NICHT ist", subtext: "Definieren Sie rote Linien klar: 'Ich möchte, dass du weißt: Extreme Eifersucht ist keine Leidenschaft, sondern Kontrollwahn. Stalking ist keine romantische Geste, sondern eine Straftat.'" },
              { text: "3. Vertrauen in Urteilskraft signalisieren", subtext: "Bestärken Sie Ihr Kind: 'Ich vertraue darauf, dass du weißt, dass das, was in diesen Büchern steht, Fantasie ist und nichts mit einer echten, gesunden Beziehung zu tun hat.'" }
            ]
          },
          ja: {
            title: "Diskurs: Toxische Muster als das benennen, was sie sind",
            diagram: [
              { text: "1. Toxizität beim Namen nennen", subtext: "Diskutieren Sie konkret: 'Dieses ständige Kontrollieren, wem sie schreibt – das ist kein Zeichen von Liebe, das ist ungesund und übergriffig. In der Realität wäre das ein Grund zu gehen.'" },
              { text: "2. Gewalt als No-Go definieren", subtext: "Machen Sie unmissverständlich klar: 'Gewalt, egal ob psychisch oder physisch, ist niemals ein Zeichen von Liebe oder Leidenschaft. Straftaten wie Stalking oder Nötigung sind keine romantischen Akte.'" },
              { text: "3. Falsche Romantik entlarven", subtext: "Fordern Sie eine kritische Haltung: 'Warum glaubst du, werden ungesunde Verhaltensweisen wie extreme Eifersucht in diesen Geschichten oft als 'begehrenswert' dargestellt? Welche gefährliche Botschaft sendet das?'" }
            ]
          }
        }
      }
    }
  },
  risiken: {
    title: "Psychologische Risiken",
    description: "Die Romantisierung toxischer Verhaltensweisen in Büchern kann das reale Beziehungsverständnis von Jugendlichen beeinflussen. Hier erfahren Sie mehr über die potenziellen Gefahren.",
    normalisierung: {
      title: "Die Normalisierung toxischer Verhaltensmuster",
      content: "Eine der größten Gefahren ist die Banalisierung von Gewalt. Wenn Stalking, Kontrolle und psychischer Druck wiederholt als Teil einer 'leidenschaftlichen' Romanze dargestellt werden, kann dies die Wahrnehmung von realen Beziehungen verzerren. Jugendliche, die noch keine eigenen Erfahrungen haben, könnten diese fiktiven 'Drehbücher' für bare Münze nehmen und Warnsignale im echten Leben übersehen."
    },
    fantasie: {
      title: "Fantasie vs. Realität: Die Trennung fördern",
      content: "Intensive Geschichten können die Grenze zwischen Fiktion und Realität verschwimmen lassen. Es ist entscheidend, die kritische Distanz zu fördern. Ermutigen Sie Ihr Kind, das Gelesene aktiv zu hinterfragen: 'Wie würde diese Szene in der realen Welt ausgehen?' oder 'Welche Konsequenzen hätte dieses Verhalten im echten Leben?'. Dies stärkt die Medienkompetenz und hilft, Fiktion als das zu sehen, was sie ist."
    }
  },
  hilfe: {
    title: "Hilfe & Ressourcen",
    description: "Wenn Sie unsicher sind oder professionelle Unterstützung benötigen, finden Sie hier eine Liste von vertrauenswürdigen Anlaufstellen.",
    items: [
      { name: "Kinderschutz-Zentrum Berlin", desc: "Unterstützung und Beratung bei Fragen zum Kindeswohl.", contact: "" },
      { name: "Weißer Ring", desc: "Hilfe für Kriminalitätsopfer, Beratung zu Gewalt.", contact: "Notruf: 116 006" },
      { name: "Hilfetelefon Gewalt gegen Frauen", desc: "Bundesweites Beratungsangebot.", contact: "Notruf: 08000 116 016" },
      { name: "Hilfetelefon Gewalt an Männern", desc: "Beratung für von Gewalt betroffene Männer.", contact: "Notruf: 0800 123 99 00" },
      { name: "Nummer gegen Kummer", desc: "Anonyme und vertrauliche Beratung für Kinder und Jugendliche.", contact: "Tel: 116 111" }
    ]
  },
  selects : {
    child: "Unter 14",
    leserfrage: "Hat Ihr Kind solche Bücher bereits gelesen?",
    leser: "Ja, hat es",
    nicht_leser: "Nein, noch nicht"
  }
};