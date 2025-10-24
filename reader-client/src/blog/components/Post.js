import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import CommentSection from "./CommentSection";
import { styled } from "@mui/material/styles";
import { useParams } from "react-router";
import axios from "axios";

const API = "http://localhost:3000/posts/";

const StyledTypography = styled(Typography)({
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 2,
  overflow: "hidden",
  textOverflow: "ellipsis",
});

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

function Author(data) {
  const author = data.data;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: 2,
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 1,
          alignItems: "center",
        }}
      >
        <Typography>
          <strong>Author: </strong>
          {author.username}
        </Typography>
      </Box>
    </Box>
  );
}

function Loading() {
  return (
    <Backdrop
      sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}

export default function Post() {
  const { postId } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      await axios.get(API + postId).then((response) => {
        setData({
          post: response.data,
          comments: response.data.comments,
          author: response.data.author,
        });
      });
    }
    fetchData();
  }, [postId]);

  if (data) {
    return (
      <Container
        maxWidth="false"
        component="main"
        sx={{
          display: "flex",
          flexDirection: "column",
          my: 16,
          gap: 4,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {" "}
        <div>
          <TitleTypography variant="h1" gutterBottom>
            {data.post.title}
          </TitleTypography>
          <Author data={data.author} />
          <Typography>
            <strong>Category: </strong>
            {data.post.tag}
          </Typography>
        </div>
        <Grid container spacing={8} columns={12} sx={{ my: 4 }}>
          <StyledTypography>{data.post.content}</StyledTypography>
        </Grid>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            pt: 4,
            minHeight: "250px",
            bgcolor: "background.paper",
          }}
        >
          <CommentSection postId={data.post.id} />
        </Box>
      </Container>
    );
  }
  return <Loading />;
}
