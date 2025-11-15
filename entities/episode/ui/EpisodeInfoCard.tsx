import { Box } from "@mui/material";
import { EpisodeInfrormation } from "../model/type";
import { getRandomImages } from "@/shared/lib/getRandomImage";

type episodeInfoCardProps = {
  episode: EpisodeInfrormation;
};

export const EpisodeInfoCard = ({ episode }: episodeInfoCardProps) => {
  const image = getRandomImages();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: { xs: "100%", sm: "auto" },
        maxWidth: { xs: "100%", sm: "345px" },
      }}
    >
      <Box>
        <img
          src={image}
          alt={episode.name}
          style={{
            width: "100%",
            height: "auto",
            maxHeight: "340px",
            objectFit: "cover",
          }}
        />
      </Box>

      <Box
        sx={{
          fontSize: { xs: 16, sm: 20 },
          mt: { xs: 2, sm: 0 },
          px: { xs: 1, sm: 0 },
        }}
      >
        <ol style={{ margin: 0, paddingLeft: "20px" }}>
          <li style={{ wordBreak: "break-word" }}>{episode.name}</li>
        </ol>
      </Box>
    </Box>
  );
};
