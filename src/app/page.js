import BeefChart from "./BeefChart";
import {
  Container,
  Typography,
  Box,
  Chip,
} from "@mui/material";


export default function Home() {
  return (
    <Box
      sx={{ minHeight: "100vh", backgroundColor: "background.default", py: 4 }}
    >
      <Container maxWidth="lg">
        <div>
          <Box textAlign="center" display={"flex"} flexDirection={"column"} alignItems={"center"} mb={6}>
            <img
              src="/Coherence-logo.svg"
              alt="Coherence Agence Digitale"
              style={{ height: 60, marginBottom: 24 }}
            />
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              fontWeight="bold"
              color="primary"
            >
              Démonstration Beef Cuts Chart Plugin
            </Typography>
            <Typography variant="h5" color="text.secondary" mb={2}>
              Une solution innovante développée en interne par Coherence Agence
              Digitale
            </Typography>
            <Chip label="WordPress Plugin" color="secondary" size="medium" />
          </Box>
        </div>

        <div>
          <BeefChart />
        </div>
      </Container>
    </Box>
  );
}
