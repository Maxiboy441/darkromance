/* eslint-disable */

'use client';

import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Chip,
  ThemeProvider,
  CssBaseline,
  useMediaQuery,
  IconButton,
  Paper,
  MenuItem,
  Select,
  FormControl,
  SelectChangeEvent,
} from '@mui/material';
import {
  Brightness4,
  Brightness7,
  BookOutlined,
  FamilyRestroomOutlined,
  CreateOutlined
} from '@mui/icons-material';
import { useRouter } from 'next/navigation';

import { darkRomanceTheme, cuteTheme } from '@/styles/styles';
import Footer from '@/compoments/Footer';
import { heroSectionText as heroTextDE, themesSectionText as themesTextDE, ctaFooterText as ctaTextDE, themeCardsData as cardsDataDE } from '@/content/content_de';
import { heroSectionText as heroTextEN, themesSectionText as themesTextEN, ctaFooterText as ctaTextEN, themeCardsData as cardsDataEN } from '@/content/content_en';


interface ThemeCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
  severity: 'critical' | 'high' | 'medium' | 'low';
  isDarkTheme: boolean;
  examples?: string[];
  language: string;
}

const ThemeCard: React.FC<ThemeCardProps> = ({ icon, title, description, details, severity, isDarkTheme, examples = [], language }) => {
  const severityConfig = {
    critical: {
      color: isDarkTheme ? '#8b0000' : '#ef4444',
      label: 'Critical',
      bgGradient: isDarkTheme ? 'linear-gradient(135deg, #8b0000, #4a0000)' : 'linear-gradient(135deg, #fee2e2, #fecaca)',
    },
    high: {
      color: isDarkTheme ? '#dc143c' : '#f97316',
      label: 'High',
      bgGradient: isDarkTheme ? 'linear-gradient(135deg, #dc143c, #8b0000)' : 'linear-gradient(135deg, #fed7aa, #fdba74)',
    },
    medium: {
      color: isDarkTheme ? '#800080' : '#8b5cf6',
      label: 'Medium',
      bgGradient: isDarkTheme ? 'linear-gradient(135deg, #800080, #4b0082)' : 'linear-gradient(135deg, #ede9fe, #ddd6fe)',
    },
    low: {
      color: isDarkTheme ? '#ff6b35' : '#06b6d4',
      label: 'Low',
      bgGradient: isDarkTheme ? 'linear-gradient(135deg, #ff6b35, #bf4f00)' : 'linear-gradient(135deg, #cffafe, #a5f3fc)',
    },
  } as const;

  const deLabels = {
    critical: 'Kritisch',
    high: 'Hoch',
    medium: 'Mittel',
    low: 'Niedrig'
  };

  const config = severityConfig[severity];

  return (
    <Card
      role="article"
      aria-label={title}
      sx={{
        height: '100%',
        background: isDarkTheme
          ? `linear-gradient(135deg, rgba(30,30,30,0.95) 0%, rgba(40,40,40,0.9) 100%)`
          : `linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.9) 100%)`,
        border: `2px solid ${config.color}`,
        borderRadius: isDarkTheme ? '12px' : '24px',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.45s cubic-bezier(0.2,0.8,0.2,1)',
        display: 'flex',
        flexDirection: 'column',
        '&:hover': {
          transform: isDarkTheme ? 'translateY(-8px) rotateX(1deg)' : 'translateY(-12px) scale(1.02)',
          boxShadow: isDarkTheme
            ? `0 25px 50px rgba(139,0,0,0.18), 0 0 0 1px ${config.color}`
            : `0 25px 50px rgba(99,102,241,0.08), 0 0 0 1px ${config.color}`,
        },
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '6px',
          background: config.bgGradient,
        },
      }}
    >
      <CardContent sx={{ p: { xs: 2.5, md: 4 }, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
          <Box sx={{
            color: config.color,
            opacity: 0.95,
            p: 1,
            borderRadius: isDarkTheme ? '6px' : '12px',
            background: isDarkTheme ? 'rgba(139,0,0,0.06)' : 'rgba(99,102,241,0.06)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minWidth: 48,
            minHeight: 48,
          }}>{icon}</Box>

          <Chip
            label={language === 'de' ? deLabels[severity] : config.label}
            size="small"
            sx={{
              bgcolor: config.color,
              color: 'white',
              fontWeight: 'bold',
              letterSpacing: '0.6px',
              fontFamily: isDarkTheme ? '"Crimson Text", serif' : '"Inter", sans-serif',
              borderRadius: isDarkTheme ? '6px' : '14px',
              fontSize: '0.75rem',
              height: 30,
            }}
          />
        </Box>

        <Typography
          variant="h5"
          component="h3"
          sx={{
            color: isDarkTheme ? '#f5f5f5' : '#0f172a',
            mb: 2,
            fontWeight: 700,
            letterSpacing: '0.6px',
            fontSize: { xs: '1.05rem', md: '1.2rem' },
            lineHeight: 1.25,
          }}
        >
          {title}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: isDarkTheme ? '#d4d4d4' : '#475569',
            mb: 3,
            fontSize: { xs: '0.95rem', md: '1rem' },
            lineHeight: 1.6,
            flexGrow: 1,
          }}
        >
          {description}
        </Typography>

        <Box sx={{ mt: 2 }}>
          <Typography
            variant="subtitle2"
            sx={{
              color: config.color,
              mb: 1,
              fontWeight: 'bold',
              letterSpacing: '0.6px',
              fontSize: '0.8rem',
              textTransform: 'uppercase',
            }}
          >
            {language === 'de' ? 'Problematische Inhalte:' : 'Problematic Content:'}
          </Typography>

          {details.map((detail, index) => (
            <Typography
              key={index}
              variant="body2"
              sx={{
                color: isDarkTheme ? '#cfcfcf' : '#6b7280',
                mb: 1,
                pl: 2,
                borderLeft: `3px solid ${config.color}`,
                fontSize: '0.9rem',
              }}
            >
              {detail}
            </Typography>
          ))}

          {examples.length > 0 && (
            <Box sx={{ mt: 2 }}>
              <Typography variant="subtitle2" sx={{ color: config.color, mb: 1, fontWeight: 700, fontSize: '0.8rem' }}>{language === 'de' ? 'Beispiele:' : 'Examples:'}</Typography>
              {examples.map((ex, i) => (
                <Typography key={i} variant="body2" sx={{ fontStyle: 'italic', color: isDarkTheme ? '#bdbdbd' : '#9ca3af', mb: 0.5 }}>- {ex}</Typography>
              ))}
            </Box>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

const HeroSection: React.FC<{ isDarkTheme: boolean; toggleTheme: () => void; language: string; setLanguage: (lang: string) => void; }> = ({ isDarkTheme, toggleTheme, language, setLanguage }) => {
  const isMobile = useMediaQuery((isDarkTheme ? darkRomanceTheme : cuteTheme).breakpoints.down('md'));
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const heroBackground = isDarkTheme
    ? `linear-gradient(135deg, rgba(10,10,10,0.95) 0%, rgba(30,0,0,0.9) 50%, rgba(10,10,10,0.95) 100%), radial-gradient(circle at 30% 20%, rgba(139,0,0,0.3) 0%, transparent 60%), radial-gradient(circle at 70% 80%, rgba(128,0,128,0.2) 0%, transparent 60%)`
    : `linear-gradient(135deg, rgba(254,243,199,0.95) 0%, rgba(252,231,243,0.9) 50%, rgba(224,242,254,0.95) 100%), radial-gradient(circle at 30% 20%, rgba(99,102,241,0.1) 0%, transparent 60%), radial-gradient(circle at 70% 80%, rgba(245,158,11,0.1) 0%, transparent 60%)`;

  const textContent = language === 'de' ? heroTextDE[isDarkTheme ? 'dark' : 'light'] : heroTextEN[isDarkTheme ? 'dark' : 'light'];

  const handleLanguageChange = (event: SelectChangeEvent<string>) => {
    setLanguage(event.target.value);
  };

  return (
    <Box
      sx={{
        minHeight: '75vh',
        background: heroBackground,
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: isDarkTheme
            ? `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23590000' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            : `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%236366f1' fill-opacity='0.03'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
          transform: `translateY(${scrollY * 0.2}px)`,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Box sx={{ textAlign: 'center', py: { xs: 6, md: 10 } }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4, gap: 2 }}>
            {/* Theme Toggle Button */}
            <IconButton
              onClick={toggleTheme}
              color="inherit"
              sx={{
                color: isDarkTheme ? '#dc143c' : '#6366f1',
                backgroundColor: isDarkTheme ? 'rgba(220,20,60,0.1)' : 'rgba(99,102,241,0.1)',
                border: `2px solid ${isDarkTheme ? '#dc143c' : '#6366f1'}`,
                borderRadius: isDarkTheme ? '6px' : '50%',
                width: 56,
                height: 56,
                '&:hover': {
                  backgroundColor: isDarkTheme ? 'rgba(220,20,60,0.2)' : 'rgba(99,102,241,0.2)',
                  transform: 'rotate(180deg)',
                },
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              {isDarkTheme ? <Brightness7 fontSize="large" /> : <Brightness4 fontSize="large" />}
            </IconButton>

            {/* Language Toggle */}
            <FormControl variant="outlined" sx={{ minWidth: 120 }}>
              <Select
                value={language}
                onChange={handleLanguageChange}
                label=""
                sx={{
                  color: isDarkTheme ? '#fff' : '#000',
                  '.MuiOutlinedInput-notchedOutline': {
                    borderColor: isDarkTheme ? '#dc143c' : '#6366f1',
                    borderWidth: '2px',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: isDarkTheme ? '#dc143c' : '#6366f1',
                  },
                  '.MuiSvgIcon-root': {
                    color: isDarkTheme ? '#fff' : '#000',
                  },
                  height: 56,
                }}
              >
                <MenuItem value="de">Deutsch</MenuItem>
                <MenuItem value="en">English</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Typography
            variant={isMobile ? 'h3' : 'h1'}
            component="h1"
            sx={{
              mb: 2,
              textShadow: isDarkTheme
                ? '4px 4px 8px rgba(0,0,0,0.8)'
                : '2px 2px 4px rgba(0,0,0,0.1)',
              fontSize: { xs: '2.2rem', md: '4.2rem' },
              fontWeight: 800,
              fontStyle: isDarkTheme ? 'italic' : 'normal',
              letterSpacing: isDarkTheme ? '4px' : '2px',
              position: 'relative',
              textTransform: isDarkTheme ? 'uppercase' : 'none',
              '&::after': isDarkTheme ? {
                content: '""',
                position: 'absolute',
                bottom: '-15px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '120px',
                height: '3px',
                background: 'linear-gradient(90deg, transparent, #dc143c, transparent)'
              } : {},
            }}
          >
            {textContent.title}
          </Typography>

          <Typography
            variant={isMobile ? 'h4' : 'h2'}
            component="h2"
            sx={{
              mb: 2,
              textShadow: isDarkTheme
                ? '3px 3px 6px rgba(0,0,0,0.8)'
                : '1px 1px 2px rgba(0,0,0,0.1)',
              fontSize: { xs: '1.6rem', md: '2.8rem' },
              fontStyle: isDarkTheme ? 'italic' : 'normal',
              letterSpacing: isDarkTheme ? '3px' : '1px',
              color: isDarkTheme ? '#d4d4d4' : undefined,
            }}
          >
            {textContent.subtitle}
          </Typography>

          <Typography
            variant="h5"
            sx={{
              mb: 4,
              fontStyle: isDarkTheme ? 'italic' : 'normal',
              fontSize: { xs: '1rem', md: '1.25rem' },
              letterSpacing: '1px',
              color: isDarkTheme ? '#b4b4b4' : '#6b7280',
              maxWidth: 680,
              mx: 'auto',
            }}
          >
            {textContent.description}
          </Typography>

          <Button variant="contained" size="large" sx={{ bgcolor: isDarkTheme ? '#8b0000' : '#6366f1', color: 'white', border: isDarkTheme ? '3px solid #dc143c' : '3px solid #4f46e5', '&:hover': { bgcolor: isDarkTheme ? '#dc143c' : '#4f46e5', transform: 'translateY(-4px) scale(1.04)', boxShadow: isDarkTheme ? '0 12px 30px rgba(139,0,0,0.35)' : '0 12px 30px rgba(99,102,241,0.25)', }, transition: 'all 0.3s ease', fontSize: { xs: '0.98rem', md: '1.1rem' }, px: 5, py: 1.8, borderRadius: isDarkTheme ? '6px' : '20px', fontWeight: 700, }} onClick={() => { document.getElementById('themen')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }} > {textContent.button} </Button>
        </Box>
      </Container>
    </Box>
  );
};

const ThemesSection: React.FC<{ isDarkTheme: boolean; cardsData: any; language: string }> = ({ isDarkTheme, cardsData, language }) => {
  const textContent = language === 'de' ? themesTextDE[isDarkTheme ? 'dark' : 'light'] : themesTextEN[isDarkTheme ? 'dark' : 'light'];

  return (
    <Box id="themen" sx={{ py: 8, background: isDarkTheme ? '#121212' : '#f8fafc' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              color: isDarkTheme ? '#f5f5f5' : '#1f2937',
              fontWeight: 800,
              fontSize: { xs: '2rem', md: '3rem' },
              mb: 1,
            }}
          >
            {textContent.title}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: isDarkTheme ? '#a1a1aa' : '#6b7280',
              maxWidth: 700,
              mx: 'auto',
              fontStyle: isDarkTheme ? 'italic' : 'normal',
            }}
          >
            {textContent.description}
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(3, 1fr)' },
            gap: 4,
            my: 6,
          }}
        >
          {cardsData.map((card: ThemeCardProps, index: number) => (
            <ThemeCard
              key={index}
              {...card}
              isDarkTheme={isDarkTheme}
              language={language}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

const CtaFooter: React.FC<{ isDarkTheme: boolean; language: string }> = ({ isDarkTheme, language }) => {
  const router = useRouter();

  const textContent = language === 'de' ? ctaTextDE[isDarkTheme ? 'dark' : 'light'] : ctaTextEN[isDarkTheme ? 'dark' : 'light'];

  const handleCtaClick = () => {
    // Construct the path with the language query parameter
    const path = `/guide?lang=${language}`;
    router.push(path);
  };

  return (
    <Box sx={{ background: isDarkTheme ? '#1f2937' : '#e2e8f0', py: 8 }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h3" component="h2" sx={{ mb: 2, color: isDarkTheme ? '#f5f5f5' : '#1f2937', fontWeight: 700 }}>
            {textContent.title}
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, color: isDarkTheme ? '#d4d4d4' : '#6b7280', maxWidth: 700, mx: 'auto' }}>
            {textContent.description}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3, mb: 6 }}>
          <Paper elevation={3} sx={{ flex: 1, p: 4, borderRadius: isDarkTheme ? 2 : 3, background: isDarkTheme ? '#2d3748' : '#cbd5e1' }}>
            <Box sx={{ color: isDarkTheme ? '#f5f5f5' : '#1f2937', mb: 2 }}>
              <BookOutlined fontSize="large" />
            </Box>
            <Typography variant="h6" sx={{ mb: 1, color: isDarkTheme ? '#f5f5f5' : '#1f2937', fontWeight: 700 }}>{textContent.reader.title}</Typography>
            <Typography variant="body1" sx={{ color: isDarkTheme ? '#d4d4d4' : '#6b7280' }}>{textContent.reader.text}</Typography>
          </Paper>
          <Paper elevation={3} sx={{ flex: 1, p: 4, borderRadius: isDarkTheme ? 2 : 3, background: isDarkTheme ? '#2d3748' : '#cbd5e1' }}>
            <Box sx={{ color: isDarkTheme ? '#f5f5f5' : '#1f2937', mb: 2 }}>
              <FamilyRestroomOutlined fontSize="large" />
            </Box>
            <Typography variant="h6" sx={{ mb: 1, color: isDarkTheme ? '#f5f5f5' : '#1f2937', fontWeight: 700 }}>{textContent.parents.title}</Typography>
            <Typography variant="body1" sx={{ color: isDarkTheme ? '#d4d4d4' : '#6b7280' }}>{textContent.parents.text}</Typography>
          </Paper>
          <Paper elevation={3} sx={{ flex: 1, p: 4, borderRadius: isDarkTheme ? 2 : 3, background: isDarkTheme ? '#2d3748' : '#cbd5e1' }}>
            <Box sx={{ color: isDarkTheme ? '#f5f5f5' : '#1f2937', mb: 2 }}>
              <CreateOutlined fontSize="large" />
            </Box>
            <Typography variant="h6" sx={{ mb: 1, color: isDarkTheme ? '#f5f5f5' : '#1f2937', fontWeight: 700 }}>{textContent.authors.title}</Typography>
            <Typography variant="body1" sx={{ color: isDarkTheme ? '#d4d4d4' : '#6b7280' }}>{textContent.authors.text}</Typography>
          </Paper>
        </Box>
        <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button
            variant="contained"
            size="large"
            sx={{
              bgcolor: isDarkTheme ? '#8b0000' : '#6366f1',
              border: isDarkTheme ? '3px solid #dc143c' : '3px solid #4f46e5',
              color: 'white',
              px: 5,
              py: 1.8,
              borderRadius: isDarkTheme ? 2 : 3,
              fontWeight: 700
            }}
            onClick={handleCtaClick}
          >
            {textContent.button}
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

const HomePage: React.FC = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [language, setLanguage] = useState('de');
  const toggleTheme = () => setIsDarkTheme(!isDarkTheme);

  const currentTheme = isDarkTheme ? darkRomanceTheme : cuteTheme;
  const cardData = language === 'de' ? cardsDataDE : cardsDataEN;

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', background: isDarkTheme ? '#000' : '#fff' }}>
        <HeroSection isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} language={language} setLanguage={setLanguage} />
        <ThemesSection isDarkTheme={isDarkTheme} cardsData={cardData} language={language} />
        <CtaFooter isDarkTheme={isDarkTheme} language={language} />
        <Footer language={language} />
      </Box>
    </ThemeProvider>
  );
};

export default HomePage;