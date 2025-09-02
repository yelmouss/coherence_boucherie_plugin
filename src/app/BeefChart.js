"use client";

import React, { useState, useEffect } from "react";
import ReactECharts from "echarts-for-react";
import * as echarts from "echarts";
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Switch,
  FormControlLabel,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
const BeefChart = () => {
  const [data, setData] = useState([
    { name: "Queue", price: 15, available: true },
    { name: "Langue", price: 35, available: true },
    { name: "Plat de joue", price: 15, available: true },
    { name: "Gros bout de poitrine", price: 25, available: true },
    { name: "Jumeau à pot-au-feu", price: 45, available: true },
    { name: "Onglet", price: 85, available: true },
    { name: "Plat de tranche", price: 25, available: true },
    { name: "Araignée", price: 15, available: true },
    { name: "Gîte à la noix", price: 55, available: true },
    { name: "Bavette d'aloyau", price: 25, available: true },
    { name: "Tende de tranche", price: 65, available: true },
    { name: "Rond de gîte", price: 45, available: true },
    { name: "Bavette de flanchet", price: 85, available: true },
    { name: "Flanchet", price: 35, available: true },
    { name: "Hampe", price: 75, available: true },
    { name: "Plat de côtes", price: 65, available: true },
    { name: "Tendron Milieu de poitrine", price: 65, available: true },
    { name: "Macreuse à pot-au-feu", price: 85, available: true },
    { name: "Rumsteck", price: 75, available: true },
    { name: "Faux-filet", price: 65, available: true },
    { name: "Côtes Entrecôtes", price: 55, available: true },
    { name: "Basses côtes", price: 45, available: true },
    { name: "Collier", price: 85, available: true },
    { name: "Jumeau à biftek", price: 15, available: true },
    { name: "Paleron", price: 65, available: true },
    { name: "Macreuse à bifteck", price: 45, available: true },
    { name: "Gîte", price: 85, available: true },
    { name: "Aiguillette baronne", price: 65, available: true },
    { name: "Filet", price: 95, available: true },
  ]);

  const [svgLoaded, setSvgLoaded] = useState(false);

  useEffect(() => {
    fetch("/Beef_cuts_France.svg")
      .then((res) => res.text())
      .then((svg) => {
        echarts.registerMap("Beef_cuts_France", { svg });
        setSvgLoaded(true);
      });
  }, []);

  const chartData = data
    .filter((item) => item.available)
    .map((item) => ({ name: item.name, value: item.price }));

  const option = {
    tooltip: {},
    visualMap: {
      left: "center",
      bottom: "10%",
      min: 5,
      max: 100,
      orient: "horizontal",
      text: ["", "Prix (€)"],
      realtime: true,
      calculable: true,
      inRange: {
        color: ["#dbac00", "#db6e00", "#cf0000"],
      },
    },
    series: [
      {
        name: "Coupes de Bœuf Françaises",
        type: "map",
        map: "Beef_cuts_France",
        roam: true,
        emphasis: {
          label: {
            show: false,
          },
        },
        selectedMode: false,
        data: chartData,
      },
    ],
  };

  const handleChange = (index, field, value) => {
    const newData = [...data];
    newData[index][field] = value;
    setData(newData);
  };

  if (!svgLoaded)
    return (
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div>
          <Typography variant="h4">Chargement...</Typography>
        </div>
      </Container>
    );

  return (
    <Container maxWidth="xl">
      <div>
        <Grid container spacing={3} sx={{ height: '100%' }}>
          <Grid size={{ xs: 12, md: 6 }} sx={{ height: '100%' }}>
            <div>
              <Card elevation={4} sx={{ mb: 6 }}>
                <CardContent>
                  <Typography variant="body1" >
                    Ce plugin interactif de visualisation des coupes de bœuf
                    françaises est conçu spécifiquement pour les sites web des
                    bouchers. Il permet aux clients de découvrir les différentes
                    pièces de viande avec leurs prix en temps réel, facilitant
                    ainsi la prise de commande et l&apos;expérience utilisateur.
                  </Typography>
                  <Typography variant="body1" >
                    Développé entièrement en interne par notre équipe de
                    développement, ce plugin représente une opportunité
                    commerciale unique. Nous pouvons le commercialiser sur le
                    marché WordPress, générant des revenus récurrents pour
                    l&apos;agence.
                  </Typography>
                  <Box sx={{ p: 3, borderRadius: 2 }}>
                    <Typography variant="h6" gutterBottom>
                      Avantages :
                    </Typography>
                    <List>
                      {[
                        "Interface interactive et moderne",
                        "Données mises à jour en temps réel",
                        "Facile à intégrer sur tout site WordPress",
                        "Personnalisable selon les besoins du client",
                        "Support technique inclus",
                        "Optimisé pour le référencement",
                        "Compatible mobile et desktop",
                      ].map((advantage, index) => (
                        <div key={index}>
                          <ListItem>
                            <ListItemIcon>
                              <CheckCircleIcon color="success" />
                            </ListItemIcon>
                            <ListItemText primary={advantage} />
                          </ListItem>
                        </div>
                      ))}
                    </List>
                  </Box>
                </CardContent>
              </Card>
            </div>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} sx={{ height: '100%' }}>
            <Card elevation={3}>
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  Carte Interactive des Coupes de Bœuf
                </Typography>
                <Box sx={{ height: 600, width: "100%" }}>
                  <ReactECharts
                    option={option}
                    style={{ height: "100%", width: "100%" }}
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

       
            <div>
              <Card elevation={3}>
                <CardContent>
                  <Typography variant="h5" component="h2" gutterBottom>
                    Modifier les Données
                  </Typography>
                  <TableContainer component={Paper}>
                    <Table size="small">
                      <TableHead>
                        <TableRow>
                          <TableCell>
                            <Typography variant="subtitle1" fontWeight="bold">
                              Nom
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography variant="subtitle1" fontWeight="bold">
                              Prix (€)
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography variant="subtitle1" fontWeight="bold">
                              Disponible
                            </Typography>
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {data.map((item, index) => (
                          <TableRow key={index}>
                            <TableCell>
                              <Typography variant="body1">
                                {item.name}
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <TextField
                                type="number"
                                value={item.price}
                                onChange={(e) =>
                                  handleChange(
                                    index,
                                    "price",
                                    parseFloat(e.target.value) || 0
                                  )
                                }
                                size="small"
                                variant="outlined"
                                fullWidth
                              />
                            </TableCell>
                            <TableCell>
                              <FormControlLabel
                                control={
                                  <Switch
                                    checked={item.available}
                                    onChange={(e) =>
                                      handleChange(
                                        index,
                                        "available",
                                        e.target.checked
                                      )
                                    }
                                    color="primary"
                                  />
                                }
                                label=""
                              />
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </CardContent>
              </Card>
            </div>
        
      </div>
    </Container>
  );
};

export default BeefChart;
