import { IconButton, InputAdornment, OutlinedInput } from "@mui/material";
import { MdClose, MdSearch } from "react-icons/md";

const DummySearchBar = ({
  sx = {},
  iconSize = "1em",
  handleClearSearchBar = () => {},
  queryInput = "",
  ...props
}) => {
  return (
    <OutlinedInput
      sx={{
        "& .MuiOutlinedInput-notchedOutline": {
          display: "none",
        },
        backgroundColor: "rgb(215, 236, 236)",
        borderRadius: "50px",
        ...sx,
      }}
      startAdornment={
        <InputAdornment position="start">
          <IconButton aria-label="Search for ads">
            <MdSearch size={iconSize} />
          </IconButton>
        </InputAdornment>
      }
      endAdornment={
        <>
          {queryInput.length > 0 && (
            <InputAdornment position="end">
              <IconButton onClick={handleClearSearchBar}>
                <MdClose size={iconSize} />
              </IconButton>
            </InputAdornment>
          )}
        </>
      }
      {...props}
    />
  );
};

export default DummySearchBar;
