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
      subtitle: '& New Adult Literature',
      description: 'The Dark Seduction of Our Youth',
      button: 'Uncover the Truth',
    },
    light: {
      title: 'Dark Romance',
      subtitle: '& New Adult Literature',
      description: 'A Critical Look at Problematic Romanticization',
      button: 'Protect Yourself',
    },
};

export const themesSectionText = {
    dark: {
      title: 'The Dark Secrets',
      description: 'Behind the facade of romantic fantasies hide dangerous messages that can permanently shape the lives and relationship ideals of young people',
      statsTitle: 'The Alarming Numbers',
    },
    light: {
      title: 'Problematic Patterns',
      description: 'A detailed analysis of the problematic elements found in many popular Dark Romance and New Adult books',
      statsTitle: 'Key Statistics',
    },
};

export const ctaFooterText = {
    dark: {
      title: 'Protect Your Children',
      description: 'The seduction is real. The danger is present. Only through education and open conversations can we protect our youth from the harmful influences of this literature.',
      reader: {
        title: 'For Readers',
        text: 'Strengthen your media literacy to distinguish fiction from reality. Use trigger warnings and stop reading books that cross personal boundaries.',
      },
      parents: {
        title: 'For Parents & Educators',
        text: 'Maintain open communication about media content. Comprehensive education on healthy relationships and consent is the best protection. Feel free to use our guide.',
      },
      authors: {
        title: 'For Authors & Publishers',
        text: 'Take responsibility through sensitive portrayals and honest content labeling to protect young readers in particular.',
      },
      button: 'Receive Guide',
    },
    light: {
      title: 'Act Together',
      description: 'Only by consciously engaging with these topics can we create a healthier literary landscape for young people. Let\'s act together.',
      reader: {
        title: 'For Readers',
        text: 'Strengthen your media literacy to distinguish fiction from reality. Use trigger warnings and stop reading books that cross personal boundaries.',
      },
      parents: {
        title: 'For Parents & Educators',
        text: 'Maintain open communication about media content. Comprehensive education on healthy relationships and consent is the best protection. Feel free to use our guide.',
      },
      authors: {
        title: 'For Authors & Publishers',
        text: 'Take responsibility through sensitive portrayals and honest content labeling to protect young readers in particular.',
      },
      button: 'Get the Guide',
    },
};

export const themeCardsData = [
    { 
      icon: <Warning fontSize="large" />, 
      title: 'Romanticization of Abuse', 
      description: 'Emotional, physical, and sexual violence is portrayed as passionate love and normalized.', 
      details: [
        'Control over partners is misrepresented as "protection"',
        'Ignoring "no" is romanticized', 
        'Isolation from social circles is glorified',
        'Jealousy is presented as a sign of love'
      ],
      examples: [
        'Domestic violence is romanticized in the storyline of "Very Bad Kings" and depicted as "passionate" or "intense" love.',
        'The plot is based on an unhealthy emotional bond, trauma-bonding, which is sold as a deep connection. - The Reading Room, A Critical Analysis of the Dark Romance Genre', 
        'The male protagonist\'s jealousy is portrayed as proof of his deep affection, rather than a sign of possessiveness and control.'
      ],
      severity: 'critical' as const 
    },
    { 
      icon: <Security fontSize="large" />, 
      title: 'Criminals as Dream Partners', 
      description: 'Dangerous criminals are stylized as romantic heroes, trivializing violence.', 
      details: [
        'Mafia bosses are portrayed as caring partners',
        'Stalking is sold as romantic attention',
        'Abduction is romanticized as a protective measure',
        'Violence against others is explained as "protective instinct"'
      ],
      examples: [
        'A mafia boss in "Very Bad Kings" is portrayed as a caring and protective partner, despite being violent. "He was a killer, a predator, and all mine."',
        'The protagonists\' crimes are justified by their "confusing love".',
        'Male protagonists are violent and misogynistic, but their dark past makes them attractive.'
      ],
      severity: 'critical' as const 
    },
    { 
      icon: <Psychology fontSize="large" />, 
      title: 'Unrealistic Sexuality', 
      description: 'Extreme and often painful sexual practices are normalized and presented as desirable.', 
      details: [
        'Pain and humiliation are normalized as pleasure',
        'Consent concepts are ignored or twisted',
        'Unrealistic physical expectations are created',
        'Dangerous practices are depicted without education'
      ],
      examples: [
        'In "Milked by the Mountain Daddy," the sexual act happens through ambush. "She was in his bed, under his thumb, and it was exactly where she wanted to be."',
        'The male protagonist in "Icebreaker" pressures the female protagonist, which is depicted as part of a romantic game instead of addressing the lack of consent.',
        'The publisher markets the relationship as consensual, even though consent is absent.'
      ],
      severity: 'critical' as const 
    },
    { 
      icon: <Person fontSize="large" />, 
      title: 'Toxic Gender Roles', 
      description: 'Outdated and harmful gender roles are propagated as romantic and desirable.', 
      details: [
        'Women are portrayed as helpless objects to be saved',
        'Male aggression is glorified as a sign of strength',
        'Emotional immaturity is misrepresented as "mysterious"',
        'Female subjugation is seen as a sign of empowerment'
      ],
      examples: [
        'The female protagonist\'s dependence is interpreted as a conscious, empowering choice, even though she is in a toxic relationship.',
        'Subjugation is portrayed as a conscious, empowering decision by the female protagonist, even though she is trapped in a toxic relationship. - The Reading Room, A Critical Analysis of the Dark Romance Genre',
        'Books are marketed as "empowerment," even though they reproduce misogynistic tropes.'
      ],
      severity: 'high' as const 
    },
    { 
      icon: <AutoStories fontSize="large" />, 
      title: 'Literary Manipulation', 
      description: 'Through clever narrative structures, problematic content is conveyed as romantic and normal.', 
      details: [
        'Perpetrator perspectives humanize abusive behavior',
        'Trauma-bonding is presented as a "deep connection"',
        'Problematic behavior is justified by backstories',
        'Stockholm Syndrome is sold as true love'
      ],
      examples: [
        'Abuse in "Very Bad Kings" is trivialized by being portrayed as trauma-bonding, romanticizing the unhealthy attachment.',
        'The male protagonist\'s problematic behavior is excused by a tragic backstory, creating empathy for the abuser. - The Reading Room, A Critical Analysis of the Dark Romance Genre',
        'Readers are manipulated into sympathizing with the abuser.'
      ],
      severity: 'medium' as const 
    },
];