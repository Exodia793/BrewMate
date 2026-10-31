import { Box, Container, Typography, Button, Stack, Chip } from "@mui/material";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Hero() {
  return (
    <Box sx={{ py: { xs: 6, md: 12 } }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: { xs: 6, md: 8 },
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Chip
              label="☕ Kopi langganan #1 untuk anak muda"
              color="secondary"
              sx={{ mb: 3 }}
            />
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.25rem", md: "3.25rem" },
                lineHeight: 1.15,
                mb: 2,
              }}
            >
              Kopi segar,{" "}
              <Box component="span" sx={{ color: "secondary.main" }}>
                diantar
              </Box>{" "}
              tiap pagi
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ fontSize: "1.1rem", mb: 4, maxWidth: 480 }}
            >
              BrewMate mengantar biji kopi pilihan sesuai seleramu. Atur
              jadwalnya sekali, nikmati setiap hari tanpa repot.
            </Typography>

            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                endIcon={<ArrowForwardIcon />}
                href="#"
              >
                Mulai Sekarang
              </Button>
              <Button variant="outlined" color="primary" size="large" href="#">
                Pelajari Lebih Lanjut
              </Button>
            </Stack>
          </Box>

          <Box
            sx={{
              flex: 1,
              width: "100%",
              maxWidth: 480,
              aspectRatio: "1 / 1",
              borderRadius: 6,
              background: (t) =>
                `linear-gradient(135deg, ${t.palette.primary.light}, ${t.palette.primary.dark})`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 20px 40px rgba(74,50,34,0.25)",
            }}
          >
            <LocalCafeIcon
              sx={{
                fontSize: { xs: 120, md: 180 },
                color: "background.default",
                opacity: 0.9,
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
