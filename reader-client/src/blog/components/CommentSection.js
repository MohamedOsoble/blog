import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import List from "@mui/material/List";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import Comment from "./Comment";
import CommentBox from "./CommentBox";
import axios from "axios";

const API = "http://localhost:3000/";

const TitleTypography = styled(Typography)(({ theme }) => ({
  position: "relative",
  textDecoration: "none",
  "&:hover": { cursor: "pointer" },
  "& .arrow": {
    visibility: "hidden",
    position: "absolute",
    right: 0,
    top: "50%",
    transform: "translateY(-50%)",
  },
  "&:hover .arrow": {
    visibility: "visible",
    opacity: 0.7,
  },
  "&:focus-visible": {
    outline: "3px solid",
    outlineColor: "hsla(210, 98%, 48%, 0.5)",
    outlineOffset: "3px",
    borderRadius: "8px",
  },
  "&::before": {
    content: '""',
    position: "absolute",
    width: 0,
    height: "1px",
    bottom: 0,
    left: 0,
    backgroundColor: (theme.vars || theme).palette.text.primary,
    opacity: 0.3,
    transition: "width 0.3s ease, opacity 0.3s ease",
  },
  "&:hover::before": {
    width: "100%",
  },
}));

function Loading() {
  return (
    <Backdrop
      sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}

const CommentSection = ({ postId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await axios.get(API + "posts/" + postId).then((response) => {
        setComments(response.data.comments);
      });
    }
    fetchData();
  }, [setComments, postId]);

  const handleNewComment = (comment) => {
    setComments([...comments, comment]);
    axios
      .post(API + "comments/" + postId, {
        name: comment.name,
        content: comment.content,
        postId: postId,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleReply = (comment) => {
    const parentComment = comments.find(({ id }) => id === comment.parent);
    parentComment.replies = [...parentComment.replies, comment];
    setComments([...comments]);
    axios
      .post(API + "comments/" + postId + "/" + comment.parent, {
        name: comment.name,
        content: comment.content,
        postId: postId,
        parentId: comment.parent,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  if (!comments) {
    return <Loading />;
  }
  return (
    <Grid
      container
      spacing={12}
      columns={1}
      sx={{ my: 4 }}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <TitleTypography variant="h2" gutterBottom>
        Comment Section
      </TitleTypography>
      <List
        sx={{ width: "750px", maxWidth: 2000, bgcolor: "background.paper" }}
      >
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            comment={comment}
            handleReply={handleReply}
          />
        ))}

        <CommentBox
          SubmitComment={(comment) => handleNewComment(comment)}
          isActive={true}
        />
      </List>
    </Grid>
  );
};

export default CommentSection;
