import { PortalCard } from "@/widgets/home/ui/portal-card";
import { Box, Grid } from "@mui/material";

export default function HomePage() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: { xs: 2, sm: 3, md: 4 },
        mb: { xs: 4, md: 0 },
      }}
    >
      <Grid
        sx={{
          display: { sm: "flex", md: "grid" },
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 10,
          maxWidth: "1200px",
          width: "100%",
          px: { xs: 10, sm: 3, md: 0 },
        }}
      >
        <PortalCard
          title="Персонажи вселенной"
          href="/characters"
          icon="https://media.pitchfork.com/photos/59bc3bb96034002ed2372f83/2:1/w_2560%2Cc_limit/rick-and-morty.jpg"
          text="Персонажи Rick and Morty"
        />

        <PortalCard
          title="Локации вселенной"
          href="/locations"
          icon="https://avatars.mds.yandex.net/i?id=1eec3559309c70d770ac01f93f086f23_l-5338760-images-thumbs&n=13"
          text="Локации Rick and Morty"
        />

        <PortalCard
          title="Эпизоды сериала"
          href="/episodes"
          icon="https://avatars.mds.yandex.net/i?id=c19a19f97555fb082e51034003a657d9dab244f8-12485500-images-thumbs&n=13"
          text="Эпизоды сериала Rick and Morty"
        />
      </Grid>
    </Box>
  );
}