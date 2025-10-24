import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";

function CommentForm({ SubmitComment, parent = null, isActive, setIsActive }) {
  const [formData, setFormData] = useState({
    name: "",
    content: "",
    parent: parent,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic
    SubmitComment(formData);
    event.target.reset();
  };

  return (
    <form
      onSubmit={handleSubmit}
      method="POST"
      style={isActive ? { display: "" } : { display: "none" }}
    >
      <Box
        onSubmit={handleSubmit}
        sx={{
          "& .MuiTextField-root": {
            width: 475,
            maxWidth: "75%",
            display: "flex",
            margin: "5px 0px 10px 15px",
          },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            required={true}
            id="name"
            name="name"
            label="Name"
            onChange={handleChange}
            multiline
            maxRows={1}
          />
        </div>
        <div>
          <TextField
            fullWidth
            required={true}
            id="content"
            name="content"
            label="Comment"
            onChange={handleChange}
            multiline
            rows={3}
            placeholder="Great Post!"
            variant="filled"
          />
        </div>
        <Stack padding={"12px"} direction="row" spacing={2}>
          <Button variant="contained" onClick={() => setIsActive(false)}>
            Cancel
          </Button>
          <Button type="submit" variant="contained" endIcon={<SendIcon />}>
            Send
          </Button>
        </Stack>
      </Box>
    </form>
  );
}

export default CommentForm;
