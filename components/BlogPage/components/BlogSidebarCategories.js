// next
import NextLink from "next/link";
// @mui
import { Stack, Link, Typography, Box } from "@mui/material";

const CATEGORIES = [
  { name: "Marketing", path: "#" },
  { name: "Community", path: "#" },
  { name: "Tutorials", path: "#" },
  { name: "Business", path: "#" },
  { name: "Management", path: "#" },
];

export default function BlogSidebarCategories() {
  return (
    <Stack spacing={1}>
      <Typography variant="h4" gutterBottom>
        Categories
      </Typography>
      {CATEGORIES.map((category) => (
        <CategoryItem key={category.name} category={category} />
      ))}
    </Stack>
  );
}

function CategoryItem({ category }) {
  const { name, path } = category;

  return (
    <Stack key={name} direction="row" alignItems="center">
      <Box
        sx={{
          width: 6,
          height: 6,
          mr: 2,
          bgcolor: "#00adb5",
          borderRadius: "50%",
        }}
      />
      <NextLink href={path} passHref>
        <Link variant="body2" color="inherit" sx={{textDecoration: "none"}}>
          {name}
        </Link>
      </NextLink>
    </Stack>
  );
}
