import React from 'react';
import {
  Typography,
  Container,
  Box,
  Grid,
  Card,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  Divider,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import GppGoodIcon from '@mui/icons-material/GppGood';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';


export default function About() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', color: 'text.primary' }}>
     

      <Container maxWidth="lg" sx={{ py: 2 }}>
        <Grid container spacing={4} alignItems="flex-start">
          <Grid >
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h4" component="h1" gutterBottom id="que-es">
                  ¿Qué es la blockchain?
                </Typography>
                <Typography >
                  La <strong>blockchain</strong> (cadena de bloques) es una estructura de datos distribuida y
                  descentralizada que permite registrar transacciones de forma segura e inmutable. Cada bloque
                  contiene un conjunto de transacciones, un sello temporal y un enlace al bloque anterior.
                </Typography>

                <Typography variant="h6" component="h2" sx={{ mt: 2 }} id="como-funciona">
                  ¿Cómo funciona (a grandes rasgos)?
                </Typography>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Transacción: un usuario solicita una operación (p. ej. enviar valor)." />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Validación: nodos de la red verifican la transacción mediante reglas (consenso)." />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Agrupación: las transacciones válidas se agrupan en un bloque." />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Encadenamiento: el nuevo bloque apunta al anterior, creando una cadena resistente a modificaciones." />
                  </ListItem>
                </List>

                <Divider sx={{ my: 2 }} />

                <Typography variant="h6" component="h3">
                  Propiedades clave
                </Typography>
                <Grid container spacing={1} sx={{ mt: 1 }}>
                  <Grid >
                    <Chip icon={<GppGoodIcon />} label="Inmutabilidad" />
                  </Grid>
                  <Grid >
                    <Chip icon={<LightbulbIcon />} label="Transparencia" />
                  </Grid>
                  <Grid >
                    <Chip icon={<GppGoodIcon />} label="Descentralización" />
                  </Grid>
                  <Grid >
                    <Chip icon={<WarningAmberIcon />} label="Resistencia a la censura" />
                  </Grid>
                </Grid>

                <Box sx={{ mt: 3 }}>
                  <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>¿Qué es un consenso?</AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Un mecanismo de consenso es el protocolo que usan los nodos para ponerse de acuerdo sobre
                        el estado de la cadena. Ejemplos: Prueba de Trabajo (PoW), Prueba de Participación (PoS).
                      </Typography>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion sx={{ mt: 1 }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>Smart Contracts</AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Los contratos inteligentes son programas que se ejecutan en la blockchain y automatizan
                        reglas y pagos sin intermediarios. Están limitados por la lógica que escriba el desarrollador.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </Box>
              </CardContent>
            </Card>

            <Box sx={{ mt: 3 }}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h5" component="h2" gutterBottom id="casos">
                    Casos de uso y ejemplos reales
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid >
                      <Typography variant="subtitle1">Finanzas</Typography>
                      <Typography variant="body2">Pagos descentralizados, remesas, y tokens.</Typography>
                    </Grid>
                    <Grid  >
                      <Typography variant="subtitle1">Cadenas de suministro</Typography>
                      <Typography variant="body2">Trazabilidad de productos y certificación de origen.</Typography>
                    </Grid>
                    <Grid  >
                      <Typography variant="subtitle1">Identidad digital</Typography>
                      <Typography variant="body2">Gestión de credenciales y acceso controlado por el usuario.</Typography>
                    </Grid>
                    <Grid  >
                      <Typography variant="subtitle1">Gobernanza y DAOs</Typography>
                      <Typography variant="body2">Organizaciones autónomas descentralizadas para toma de decisiones colectivas.</Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Box>

            <Box sx={{ mt: 3 }}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h5" component="h2">Beneficios y riesgos</Typography>

                  <Grid container spacing={2} sx={{ mt: 1 }}>
                    <Grid >
                      <Typography variant="subtitle1">Beneficios</Typography>
                      <List>
                        <ListItem>
                          <ListItemIcon>
                            <CheckCircleIcon />
                          </ListItemIcon>
                          <ListItemText primary="Mayor transparencia y trazabilidad" />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <CheckCircleIcon />
                          </ListItemIcon>
                          <ListItemText primary="Reducción de intermediarios" />
                        </ListItem>
                      </List>
                    </Grid>

                    <Grid >
                      <Typography variant="subtitle1">Riesgos</Typography>
                      <List>
                        <ListItem>
                          <ListItemIcon>
                            <WarningAmberIcon />
                          </ListItemIcon>
                          <ListItemText primary="Escalabilidad y coste energético (según diseño)" />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <WarningAmberIcon />
                          </ListItemIcon>
                          <ListItemText primary="Errores en smart contracts (pérdida irreversible)" />
                        </ListItem>
                      </List>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Box>
          </Grid>

          
        </Grid>
      </Container>

      <Box component="footer" sx={{ py: 3, textAlign: 'center', borderTop: 1, borderColor: 'divider' }}>
        <Typography variant="body2">© {new Date().getFullYear()} — Página de ejemplo sobre blockchain</Typography>
      </Box>
    </Box>
  );
}
