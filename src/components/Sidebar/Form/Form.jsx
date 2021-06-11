import React from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";

import useStyles from "./styles";

const Form = ({ currentId, setCurrentId }) => {
  //   const [postData, setPostData] = useState({
  //     creator: "",
  //     title: "",
  //     message: "",
  //     tags: "",
  //     selectedFile: "",
  //   });
  //   const post = useSelector((state) =>
  //     currentId ? state.posts.find((message) => message._id === currentId) : null
  //   );
  //   const dispatch = useDispatch();
  const classes = useStyles();

  //   useEffect(() => {
  //     if (post) setPostData(post);
  //   }, [post]);

  const clear = () => {};

  const handleSubmit = () => {};

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          Thank You So Much For Taking Time !
        </Typography>
        <TextField
          name="First Name"
          variant="outlined"
          label="First Name"
          fullWidth
        />
        <TextField
          name="Last Name"
          variant="outlined"
          label="Last Name"
          fullWidth
          rows={4}
        />
        <TextField
          name="Address"
          variant="outlined"
          label="Address"
          fullWidth
          multiline
        />
        <TextField
          type="email"
          name="Email"
          variant="outlined"
          label="Email"
          fullWidth
        />
        <TextField
          type="number"
          name="Contact Number"
          variant="outlined"
          label="Contact Number"
          fullWidth
        />
        <div className={classes.fileInput}></div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
