import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  Stack,
} from "@mui/material";

export default function Contact() {
  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 65px)",
        display: "flex",
        alignItems: "center",
        py: { xs: 6, md: 8 },
      }}
    >
      <Container maxWidth="sm">
        <Typography
          variant="h2"
          sx={{ fontSize: { xs: "2rem", md: "2.5rem" }, mb: 1 }}
        >
          Hubungi Kami
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 4 }}>
          Ada pertanyaan soal langganan BrewMate? Tinggalkan pesan, kami balas
          secepatnya.
        </Typography>

        <Card sx={{ boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}>
          <CardContent sx={{ p: { xs: 3, md: 4 } }}>
            <Stack spacing={3} component="form" noValidate autoComplete="off">
              <TextField label="Nama" fullWidth />
              <TextField label="Email" type="email" fullWidth />
              <TextField label="Pesan" multiline rows={4} fullWidth />
              <Button variant="contained" color="secondary" size="large">
                Kirim Pesan
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
