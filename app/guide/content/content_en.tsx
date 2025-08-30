export const guideContent = {
  hero: {
    title: "Parent Guide",
    subtitle: "Understand Dark Romance & New Adult",
    description: "An interactive guide to help you understand your children's book trends, recognize critical content, and have an open, trusting conversation."
  },
  genres: {
    title: "What is it? The Genre Map",
    description: "New Adult and Dark Romance are two popular genres that are often confused. This section explains the core characteristics and helps you understand the crucial differences.",
    naCard: {
      title: "📘 New Adult (NA)",
      description: "Primarily for young adults. The protagonists navigate the transition to adulthood: university, first job, self-discovery. It deals with real problems like mental health, often with more explicit descriptions of sexuality and sex. Here, it's usually with more socially acceptable fetishes, but kinks are also a common topic, and consent is often questionable.",
      list: [
        "<strong>Suitable for:</strong> Young Adults (18-25 years)",
        "<strong>Core Themes:</strong> Self-discovery, first love, career",
        "<strong>Emotional Tone:</strong> Intense, emotional, drama-based",
        "<strong>Typical Ending:</strong> Happy ending through personal growth",
        "<strong>Cover:</strong> Often bright, pastel-colored, illustrated"
      ]
    },
    drCard: {
      title: "🖤 Dark Romance (DR)",
      description: "A subgenre for mature readers. Characterized by morally questionable and taboo subjects. Relationships are often marked by power imbalances, toxicity, and criminal acts (stalking, abduction). The ending may reward toxic behavior. Sex is also frequently depicted with social transgressions such as violence, rape, etc.",
      list: [
        "<strong>Suitable for:</strong> Mature readers (18+)",
        "<strong>Core Themes:</strong> Toxic relationships, violence, taboos",
        "<strong>Emotional Tone:</strong> Dark, intense, eerie",
        "<strong>Typical Ending:</strong> 'Dark' happy ending that romanticizes misconduct",
        "<strong>Cover:</strong> Dark colors, symbolic, provocative"
      ]
    }
  },
  erkennung: {
    title: "Recognizing Books",
    description: "How to identify potentially problematic books? Pay attention to visual cues, digital keywords, and the importance of trigger warnings.",
    visuell: {
      title: "👁️ Visual Language (Cover & Title)",
      content: "<strong>New Adult:</strong> Often bright, pastel-colored, and illustrated covers ('cartoon style'). <br><strong>Dark Romance:</strong> Dark colors (black, red), symbolic images (rose, hidden faces) and provocative titles ('Twisted Game').<br><br><strong class='text-red-600'>Warning:</strong> Publishers often deliberately use harmless covers for problematic content to appeal to a younger target audience. Never rely on the cover alone!"
    },
    digital: {
      title: "💻 Digital Sleuthing (Tags & Keywords)",
      content: "Search online for these terms to understand the true content of a book:<br><strong>General:</strong> <code>dark romance</code>, <code>spicy booktok</code>, <code>smutty romance</code><br><strong>Characters:</strong> <code>morally grey</code>, <code>villain romance</code>, <code>stalker romance</code><br><strong>Content:</strong> <code>trigger warnings</code>, <code>dub-con</code>/<code>non-con</code>, <code>mafia</code>, <code>bully romance</code>"
    }
  },
  tropes: {
    title: "🔄 Understanding Tropes: Recurring Patterns and Their Risks",
    description: "A 'trope' is a recurring narrative pattern. While some can be romantic in New Adult literature, others in Dark Romance normalize dangerous behavior. Here are the most important ones:",
    risk: "Potential Risk:",
    items: [
      { name: "Enemies to Lovers", desc: "Two rival characters fall in love. The initial tension is presented as a prelude to love.", risk: "In Dark Romance, the line between hate and violence is often blurred, misinterpreting cruelty as 'passion'." },
      { name: "Forced Proximity", desc: "Characters are forced to spend time together and grow closer due to external circumstances (e.g., a snowstorm).", risk: "Can romanticize power imbalances and loss of control in Dark Romance contexts by presenting a lack of choice as destiny." },
      { name: "Bully Romance", desc: "Bullying and humiliation are presented as signs of affection and a prelude to a relationship.", risk: "Romanticizes psychological and physical violence. Conveys the dangerous message that cruelty is a sign of love." },
      { name: "Stalker / Captive", desc: "Stalking or abduction leads to a 'romantic' relationship.", risk: "Trivializes serious crimes and obsessive control. Can massively damage the understanding of personal boundaries and self-worth." },
      { name: "Age Gap", desc: "A relationship between two people with a large age difference.", risk: "Can be dangerous in Dark Romance contexts as it trivializes power imbalances, manipulation, and the exploitation of inexperience." },
      { name: "Possessive / Obsessive Hero", desc: "The male protagonist is extremely jealous, controlling, and often violent to 'protect' his partner.", risk: "Normalizes obsessive control and possessiveness, which are often the first steps in an abusive relationship. Also romanticizes the so-called 'Touch Her and Die' trope." },
      { name: "Amnesia", desc: "A character loses their memory, enabling a new, unequal relationship dynamic.", risk: "Romanticizes the exploitation of a vulnerable, disoriented person." },
      { name: "Only One Bed", desc: "Two characters who don't like or know each other have to share a bed.", risk: "Often harmless in NA, but in DR, this can lead to forced situations and the trivialization of boundary violations." },
      { name: "Mafia Romance / Organised Crime", desc: "The protagonist falls in love with a member of organized crime.", risk: "Romanticizes violence, crime, and often brutal power dynamics. Ignores the reality of criminality, trauma, and the abuse of power." },
      { name: "Reverse Harem", desc: "A protagonist has a relationship with multiple men.", risk: "In Dark Romance, this can be associated with power imbalances, manipulation, and unhealthy relationship dynamics." },
      { name: "Grumpy/Sunshine", desc: "A grumpy character is 'softened' by an optimistic one.", risk: "A popular NA trope that can become unhealthy in DR when the 'sunshine' character is tasked with 'healing' toxic behavior." }
    ]
  },
  kinks: {
    title: "🌶️ What are Kinks in Literature?",
    description: "A 'kink' is a sexual preference or fetish. In literature, they are often used to increase sexual tension. It is crucial to understand the difference between consensual sexual practices and the romanticization of violence. The topic of 'consent' is key here.",
    items: [
      { name: "BDSM (Bondage, Discipline, Sadism, Masochism)", desc: "Includes elements of bondage, dominance, and submission.", risk: "Romanticized when no value is placed on communication and consent ('Safe, Sane, and Consensual' - SSC). The lack of clear boundaries can convey a dangerous dynamic." },
      { name: "Consensual Non-Consent (CNC)", desc: "A sexual practice where one partner pretends not to agree, even though they actually do.", risk: "Can be easily misinterpreted and convey the dangerous message to young readers that a 'no' doesn't have to be taken seriously." },
      { name: "Dom/Sub (Dominance/Submission)", desc: "A relationship dynamic where one partner takes the dominant and the other the submissive role.", risk: "Normalizes a power imbalance. Without the clear emphasis on communication and consent, it can be misinterpreted as a romantic depiction of control and obedience." },
      { name: "Age Play", desc: "A sexual fantasy where partners act as if they are in a different age group.", risk: "Extremely problematic as it can trivialize or normalize the sexual exploitation of minors." },
      { name: "Sexual Violence (Trigger Warning)", desc: "Depiction of sexual assault or rape.", risk: "Explicit labeling is of crucial importance. In Dark Romance, this is often romanticized, which can influence the perception of violence as 'normal' or even 'desirable'." }
    ]
  },
  gespraech: {
    title: "Seeking an Open Conversation",
    description: "A ban is rarely the solution. An open dialogue is the best way to guide your child. Choose the age group and situation to get appropriate strategies.",
    ageGroups: {
      u14: {
        title: "Under 14: Absolute Protection & Clear Boundaries",
        content: "At this age, psychological development is not yet far enough to process the complex and often violent content of Dark Romance. A clear ban here is not a sign of distrust, but a necessary protective measure.",
        paths: {
          nein: {
            title: "Prevention: Establishing a Clear 'No'",
            diagram: [
              { text: "1. Establish a clear rule", subtext: "Calmly explain that there are books that, like movies, have an age rating. 'These books are for adults because the topics in them can be harmful to young teenagers. That's why the rule is that you don't read them.'" },
              { text: "2. Understand curiosity, but redirect", subtext: "Ask: 'What appeals to you about such stories?' Actively offer exciting alternatives from the 'Young Adult' genre that do without the problematic content." },
              { text: "3. Stay consistent", subtext: "Stick to your position. It's about protecting against the normalization of violence in relationships. There is no compromise here." }
            ]
          },
          ja: {
            title: "Intervention: Acting Consistently",
            diagram: [
              { text: "1. Stay calm & take the book", subtext: "React without panic, but firmly: 'I see what you're reading. As we discussed, this book is not for your age. I'm going to take it for now.'" },
              { text: "2. Ask for context", subtext: "Ask about the 'why': 'How did you get the book? Are your friends talking about it?' This helps to understand external influences." },
              { text: "3. Reaffirm the ban & process what happened", subtext: "Explain again why the book is harmful. Briefly discuss what happens in it and why this behavior is absolutely unacceptable and dangerous in reality." }
            ]
          }
        }
      },
      '14-16': {
        title: "14-16 Years: Guide, Educate & Promote Alternatives",
        content: "Curiosity grows in this phase. A simple ban is often no longer effective. The goal is to guide your child, raise awareness of the problematic aspects, and steer consumption towards more harmless 'New Adult' literature.",
        paths: {
          nein: {
            title: "Education: Preparing the Ground for Smart Decisions",
            diagram: [
              { text: "1. Talk about genres", subtext: "Discuss the difference: 'There's 'New Adult,' which deals with growing up, and 'Dark Romance,' which is often about violence and unhealthy relationships. That's a huge difference.'" },
              { text: "2. Recommend 'lighter' literature", subtext: "Actively suggest books from the New Adult genre. 'If you want to read stories for older people, let's look for an exciting New Adult novel together.'" },
              { text: "3. Discuss warning signs of toxicity", subtext: "Explain what makes a relationship unhealthy: extreme jealousy, control, devaluation. 'That may be 'exciting' in books, but in real life, it's an absolute red flag.'" }
            ]
          },
          ja: {
            title: "Dialogue: Classify and Correct What Has Been Read",
            diagram: [
              { text: "1. Start a conversation", subtext: "Start without accusation: 'I see you're reading a Dark Romance book. These are often pretty intense stories. What do you think about it?'" },
              { text: "2. Critically question what has been read", subtext: "Ask for classification: 'The protagonist is totally controlling her. Do you find that romantic or rather frightening? Why is that portrayed as love in the book?'" },
              { text: "3. Offer alternatives & express wishes", subtext: "Show your position: 'I find the portrayal of violence here very difficult. I would wish that you would rather turn to New Adult books. Shall we see what's out there?'" }
            ]
          }
        }
      },
      '16-18': {
        title: "16-18 Years: Education Instead of Ban – Promote Reality Check",
        content: "At this age, teenagers will often read the books despite a ban. Your most important task now is to use targeted education to ensure that your child can separate fiction from reality and does not see toxic behaviors as desirable.",
        paths: {
          nein: {
            title: "Preparation: Strengthening the Immune System Against Toxic Myths",
            diagram: [
              { text: "1. Address dangerous myths", subtext: "Talk openly about the fascination of the 'Bad Boy.' 'The idea of 'healing' someone through love is a dangerous myth. In reality, you are not a therapist for your partner.'" },
              { text: "2. What 'love' is NOT", subtext: "Define red lines clearly: 'I want you to know: Extreme jealousy is not passion, but an obsession with control. Stalking is not a romantic gesture, but a criminal offense.'" },
              { text: "3. Signal trust in judgment", subtext: "Encourage your child: 'I trust that you know that what's in these books is fantasy and has nothing to do with a real, healthy relationship.'" }
            ]
          },
          ja: {
            title: "Discourse: Naming Toxic Patterns for What They Are",
            diagram: [
              { text: "1. Name toxicity for what it is", subtext: "Discuss specifically: 'This constant controlling of who she texts—that's not a sign of love, that's unhealthy and intrusive. In reality, that would be a reason to leave.'" },
              { text: "2. Define violence as a no-go", subtext: "Make it unmistakably clear: 'Violence, whether psychological or physical, is never a sign of love or passion. Criminal acts like stalking or coercion are not romantic acts.'" },
              { text: "3. Unmask false romance", subtext: "Encourage a critical attitude: 'Why do you think unhealthy behaviors like extreme jealousy are often portrayed as 'desirable' in these stories? What dangerous message does that send?'" }
            ]
          }
        }
      }
    }
  },
  risiken: {
    title: "Psychological Risks",
    description: "The romanticization of toxic behaviors in books can influence the real-life relationship understanding of young people. Here you can learn more about the potential dangers.",
    normalisierung: {
      title: "The Normalization of Toxic Behavior Patterns",
      content: "One of the greatest dangers is the trivialization of violence. When stalking, control, and psychological pressure are repeatedly portrayed as part of a 'passionate' romance, this can distort the perception of real relationships. Young people who do not yet have their own experiences could take these fictional 'scripts' for gospel and overlook warning signs in real life."
    },
    fantasie: {
      title: "Fantasy vs. Reality: Promoting Separation",
      content: "Intense stories can blur the line between fiction and reality. It is crucial to foster critical distance. Encourage your child to actively question what they have read: 'How would this scene play out in the real world?' or 'What consequences would this behavior have in real life?'. This strengthens media literacy and helps them see fiction for what it is."
    }
  },
  hilfe: {
    title: "Help & Resources",
    description: "If you are unsure or need professional support, here is a list of trusted resources.",
    items: [
      { name: "Kinderschutz-Zentrum Berlin", desc: "Support and advice on child welfare issues.", contact: "" },
      { name: "Weißer Ring", desc: "Help for victims of crime, advice on violence.", contact: "Emergency: 116 006" },
      { name: "Helpline 'Violence Against Women'", desc: "Nationwide counseling service.", contact: "Emergency: 08000 116 016" },
      { name: "Helpline 'Violence Against Men'", desc: "Counseling for men affected by violence.", contact: "Emergency: 0800 123 99 00" },
      { name: "Nummer gegen Kummer", desc: "Anonymous and confidential counseling for children and adolescents.", contact: "Tel: 116 111" }
    ]
  },
  selects: {
    child: "Under 14",
    leserfrage: "Has your child already read such books?",
    leser: "Yes, they have",
    nicht_leser: "No, not yet"
  }
};