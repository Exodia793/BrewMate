import { Link as RouterLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Typography,
  Button,
} from "@mui/material";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";

const menus = [
  { label: "Beranda", to: "/" },
  { label: "Kontak", to: "/kontak" },
];

export default function Navbar() {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: "rgba(250,246,241,0.9)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid",
        borderColor: "divider",
        color: "text.primary",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Box
            component={RouterLink}
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              textDecoration: "none",
              color: "primary.main",
            }}
          >
            <LocalCafeIcon />
            <Typography
              variant="h6"
              sx={{ fontFamily: "Poppins", fontWeight: 700 }}
            >
              BrewMate
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 1 }}>
              {menus.map((m) => (
                <Button
                  key={m.label}
                  component={RouterLink}
                  to={m.to}
                  color="inherit"
                >
                  {m.label}
                </Button>
              ))}
            </Box>
            <Button
              variant="contained"
              color="secondary"
              component={RouterLink}
              to="/kontak"
              sx={{ ml: 1 }}
            >
              Get Started
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
