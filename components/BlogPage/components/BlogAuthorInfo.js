import { Stack, Typography, Avatar } from "@mui/material";
import SocialButtons from "../../UI/SocialButtons";

export default function BlogAuthorInfo({ author }) {
  //   const { name, role, about, quotes, picture, socialLinks } = author;

  return (
    <Stack direction="row" spacing={{ xs: 3, md: 4 }} sx={{ py: 8 }}>
      <Avatar src="https://zone-assets-api.vercel.app/assets/images/avatars/avatar_8.jpg" sx={{ width: 96, height: 96 }} />

      <Stack spacing={2}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems={{ md: "center" }}
          justifyContent={{ md: "space-between" }}
          spacing={2}
        >
          <Stack spacing={0.5}>
            <Typography variant="h4">Hudson Alvarez</Typography>
            <Typography variant="body3" sx={{ color: "text.secondary" }}>
              Full Stack Designer
            </Typography>
          </Stack>
          <SocialButtons />
        </Stack>

        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Integer tincidunt. Nullam dictum felis eu pede mollis pretium.
          Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi,
          condimentum viverra felis nunc et lorem.
        </Typography>
        <Typography variant="caption" sx={{ color: "text.disabled" }}>
          Member since Mar 15, 2021
        </Typography>
      </Stack>
    </Stack>
  );
}
