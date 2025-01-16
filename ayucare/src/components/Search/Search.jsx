import useStyles from "./styles";
import styles from "../../style";
import { Button, AppBar } from "@mui/material";
import ChipInput from "material-ui-chip-input";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const Search = ({ tags, setTags,fetchMedicines }) => {
  const handleAdd = (tag) => setTags([...tags, tag]); // adding tag to the tags array
  const handleDelete = (tagToDelete) => setTags(tags.filter((tag) => tag !== tagToDelete)); // deleting tag from the tags array

  const classes = useStyles();

  const CssTextField = withStyles({
    root: {
      "& label.Mui-focused": {
        color: "white",
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: "white",
        color: "white",
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "white",
          color: "white",
        },
        "&:hover fieldset": {
          borderColor: "white",
          color: "white",
        },
        "&.Mui-focused fieldset": {
          borderColor: "white",
          color: "white",
        },
      },
    },
    input: {
      color: "white",
    },
  })(ChipInput);

  return (
    <div id="main"  className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6 ${classes.appBarSearch} bg-black-gradient-2`}>
      <h1 className="font-poppins font-semibold text-white ss:text-[40px] text-[17px] my-10">Provide us with your Symptoms!</h1>
      <CssTextField
        style={{ margin: "10px 0", input: { color: "red" } }}
        value={tags}
        onAdd={handleAdd}
        onDelete={handleDelete}
        label="Enter Symptoms"
        variant="outlined"
        fullWidth
        InputLabelProps={{
          style: { color: "#fff" },
        }}
      />
      <Link to="/medicine" style={{ textDecoration: 'none' }}>
      <Button onClick={fetchMedicines} className={`${classes.searchButton}`} variant="contained" color="primary" fullWidth style={{ marginTop: "20px" }}>
        Cure Me!
      </Button>
      </Link>
    </div>
  );
};

export default Search;
