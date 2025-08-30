"use client";

import React, { useState } from "react";
import {
    Box,
    Container,
    Typography,
    Button,
    Modal,
    IconButton,
    Paper,
    styled,
} from "@mui/material";
import { Close } from "@mui/icons-material";

const StyledModal = styled(Modal)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backdropFilter: theme.palette.mode === 'dark' ? "blur(8px)" : "blur(12px)",
}));

const ModalPaper = styled(Paper)(({ theme }) => ({
    position: "absolute",
    width: "90%",
    maxWidth: 600,
    maxHeight: "80vh",
    overflowY: "auto",
    boxShadow: theme.shadows[24],
    p: 4,
    borderRadius: theme.palette.mode === 'dark' ? "12px" : "24px",
    backgroundColor: theme.palette.mode === 'dark' ? "rgba(30, 30, 30, 0.95)" : "rgba(255, 255, 255, 0.95)",
    border: theme.palette.mode === 'dark' ? "1px solid #333" : "none",
    color: theme.palette.text.primary,
    '&:focus': {
        outline: 'none',
    },
    [`@media (min-width: ${theme.breakpoints.values.sm}px)`]: {
        width: "75%",
    },
    [`@media (min-width: ${theme.breakpoints.values.md}px)`]: {
        width: "50%",
    },
}));

const footerContent = {
  de: {
    copyright: `© ${new Date().getFullYear()} Maximilian Huber. Alle Rechte vorbehalten.`,
    imprintBtn: 'Impressum',
    privacyBtn: 'Datenschutzerklärung',
    imprintTitle: 'Impressum',
    imprintText: `Maximilian Huber
Rümpflestr. 14/1
71665 Horrheim
E-Mail: Maxiboy44YT@gmail.com

Haftungsausschluss:
Die Inhalte dieser Website geben meine persönliche Meinung wieder und sollen keine wissenschaftliche Analyse oder einen Angriff auf Personen darstellen. Mein Fokus liegt auf Kritik an Dark Romance und New Adult.

Haftung für Inhalte:
Die Inhalte wurden sorgfältig erstellt. Für die Vollständigkeit, Richtigkeit und Aktualität kann jedoch keine Gewähr übernommen werden. Als Diensteanbieter bin ich gemäß §7 Abs.1 TMG für eigene Inhalte verantwortlich. Eine Verpflichtung zur Überwachung übertragener oder gespeicherter fremder Informationen besteht nicht. Bei Bekanntwerden von Rechtsverletzungen werde ich Inhalte umgehend entfernen.

Haftung für Links:
Externe Links wurden geprüft, auf die Inhalte habe ich jedoch keinen Einfluss. Für verlinkte Seiten sind stets die jeweiligen Betreiber verantwortlich. Bei Rechtsverstößen werden Links sofort entfernt.

Datenschutz:
Die Nutzung dieser Website ist ohne Angabe personenbezogener Daten möglich. Gesammelte Daten erfolgen freiwillig und werden nicht ohne ausdrückliche Zustimmung weitergegeben. Datenübertragungen im Internet können Sicherheitslücken aufweisen.

Analytics via Umami:
Zur Verbesserung der Website nutze ich das datenschutzfreundliche Tool Umami. Alle erfassten Daten sind anonymisiert. Weitere Details siehe Datenschutzerklärung.`,
    privacyTitle: 'Datenschutzerklärung',
    privacyText: `Der Schutz Ihrer persönlichen Daten ist mir wichtig. Ich sammle oder speichere keine personenbezogenen Daten. Automatisch erfasste Daten stammen von Next.js oder Umami für Analyse- und Funktionszwecke.

Automatisch verarbeitete Informationen können beinhalten: IP-Adresse, User-Agent und Interaktion mit der Website. Alle Daten sind anonymisiert.

Umami Analytics:
Ich nutze das datenschutzfreundliche Tool Umami, um grundlegende Nutzungsstatistiken zu erfassen. Es werden keine personenbezogenen Daten gesammelt. Alle Daten sind anonymisiert und werden nicht an Dritte weitergegeben.

Sie können Analytics durch Deaktivierung von JavaScript oder Browser-Extensions blockieren.

Es erfolgt keine Weitergabe oder Verkauf von Daten an Dritte. Bei Fragen können Sie mich jederzeit per E-Mail kontaktieren.`
  },
  en: {
    copyright: `© ${new Date().getFullYear()} Maximilian Huber. All rights reserved.`,
    imprintBtn: 'Imprint',
    privacyBtn: 'Privacy Policy',
    imprintTitle: 'Imprint',
    imprintText: `Maximilian Huber
Rümpflestr. 14/1
71665 Horrheim
E-mail: Maxiboy44YT@gmail.com

Disclaimer:
The content of this website represents my personal opinion and is not intended as a scientific analysis or an attack on individuals. My focus is on critiquing Dark Romance and New Adult literature.

Liability for Content:
The content has been carefully created. However, no guarantee can be given for its completeness, accuracy, and timeliness. As a service provider, I am responsible for my own content according to §7 Abs.1 TMG. There is no obligation to monitor transmitted or stored third-party information. Upon becoming aware of any legal violations, I will remove content immediately.

Liability for Links:
External links have been checked, but I have no influence over their content. The operators of the linked pages are solely responsible for their content. In case of legal violations, links will be removed immediately.

Data Protection:
The use of this website is possible without providing personal data. Collected data is provided voluntarily and will not be shared without explicit consent. Data transmissions on the internet can have security vulnerabilities.

Analytics via Umami:
To improve the website, I use the privacy-friendly tool Umami. All collected data is anonymized. For more details, see the Privacy Policy.`,
    privacyTitle: 'Privacy Policy',
    privacyText: `The protection of your personal data is important to me. I do not collect or store any personal data. Automatically collected data comes from Next.js or Umami for analysis and functional purposes.

Automatically processed information may include: IP address, user agent, and interaction with the website. All data is anonymized.

Umami Analytics:
I use the privacy-friendly tool Umami to collect basic usage statistics. No personal data is collected. All data is anonymized and is not passed on to third parties.

You can block analytics by disabling JavaScript or using browser extensions.

No data is shared with or sold to third parties. For questions, you can contact me at any time via email.`
  }
};

const Footer: React.FC<{ language: string }> = ({ language }) => {
    const [isImpressumOpen, setIsImpressumOpen] = useState(false);
    const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

    const textContent = footerContent[language as keyof typeof footerContent];

    return (
        <Box
            component="footer"
            sx={{
                py: { xs: 8, md: 12 },
                width: "100%",
                textAlign: "center",
                bgcolor: "background.paper",
                color: "text.secondary",
            }}
        >
            <Container maxWidth="lg">
                <Typography variant="body2" sx={{ mb: 4, color: 'text.secondary', fontSize: '1rem', lineHeight: 1.6 }}>
                    {textContent.copyright}
                </Typography>

                <Box sx={{ display: 'flex', justifyContent: 'center', gap: { xs: 2, md: 4 }, flexWrap: 'wrap' }}>
                    <Button
                        variant="outlined"
                        size="large"
                        sx={{
                            textTransform: 'none',
                            borderRadius: '20px',
                            fontWeight: 600,
                            letterSpacing: '1px',
                            fontFamily: 'inherit',
                            padding: '12px 28px',
                            borderColor: 'primary.main',
                            color: 'primary.main',
                            '&:hover': {
                                bgcolor: 'primary.main',
                                color: 'white',
                            },
                        }}
                        onClick={() => setIsImpressumOpen(true)}
                    >
                        {textContent.imprintBtn}
                    </Button>

                    <Button
                        variant="outlined"
                        size="large"
                        sx={{
                            textTransform: 'none',
                            borderRadius: '20px',
                            fontWeight: 600,
                            letterSpacing: '1px',
                            fontFamily: 'inherit',
                            padding: '12px 28px',
                            borderColor: 'secondary.main',
                            color: 'secondary.main',
                            '&:hover': {
                                bgcolor: 'secondary.main',
                                color: 'white',
                            },
                        }}
                        onClick={() => setIsPrivacyOpen(true)}
                    >
                        {textContent.privacyBtn}
                    </Button>
                </Box>
            </Container>

            {/* Impressum Modal */}
            <StyledModal
                open={isImpressumOpen}
                onClose={() => setIsImpressumOpen(false)}
                aria-labelledby="impressum-modal-title"
                aria-describedby="impressum-modal-description"
            >
                <ModalPaper>
                    <Box sx={{ position: 'relative', p: { xs: 2, md: 4 } }}>
                        <IconButton
                            aria-label="close"
                            onClick={() => setIsImpressumOpen(false)}
                            sx={{
                                position: "absolute",
                                right: { xs: 8, md: 16 },
                                top: { xs: 8, md: 16 },
                                color: (theme) => theme.palette.grey[500],
                            }}
                        >
                            <Close />
                        </IconButton>
                        <Typography id="impressum-modal-title" variant="h5" component="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
                            {textContent.imprintTitle}
                        </Typography>
                        <Typography id="impressum-modal-description" variant="body2" component="div" sx={{ mt: 2, lineHeight: 1.8, whiteSpace: 'pre-line' }}>
                            {textContent.imprintText}
                        </Typography>
                    </Box>
                </ModalPaper>
            </StyledModal>

            {/* Privacy Modal */}
            <StyledModal
                open={isPrivacyOpen}
                onClose={() => setIsPrivacyOpen(false)}
                aria-labelledby="privacy-modal-title"
                aria-describedby="privacy-modal-description"
            >
                <ModalPaper>
                    <Box sx={{ position: 'relative', p: { xs: 2, md: 4 } }}>
                        <IconButton
                            aria-label="close"
                            onClick={() => setIsPrivacyOpen(false)}
                            sx={{
                                position: "absolute",
                                right: { xs: 8, md: 16 },
                                top: { xs: 8, md: 16 },
                                color: (theme) => theme.palette.grey[500],
                            }}
                        >
                            <Close />
                        </IconButton>
                        <Typography id="privacy-modal-title" variant="h5" component="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
                            {textContent.privacyTitle}
                        </Typography>
                        <Typography id="privacy-modal-description" variant="body2" component="div" sx={{ mt: 2, lineHeight: 1.8, whiteSpace: 'pre-line' }}>
                            {textContent.privacyText}
                        </Typography>
                    </Box>
                </ModalPaper>
            </StyledModal>
        </Box>
    );
};

export default Footer;
