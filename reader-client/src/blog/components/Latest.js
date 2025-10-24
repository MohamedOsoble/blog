import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
import { Link } from "react-router-dom";
import axios from "axios";

const API = "http://localhost:3000";

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
        <Typography variant="caption">
          <strong>Author:</strong> {author.username}
        </Typography>
      </Box>
      <Typography variant="caption">July 14, 2021</Typography>
    </Box>
  );
}

export default function Latest() {
  const [focusedCardIndex, setFocusedCardIndex] = useState(null);

  const [posts, setPosts] = useState({});

  const loadPosts = () => {
    return axios.get(API + "/posts").then((response) => {
      console.log(response.data);
      setPosts(response.data);
    });
  };

  const handleFocus = (index) => {
    setFocusedCardIndex(index);
  };

  const handleBlur = () => {
    setFocusedCardIndex(null);
  };

  useEffect(() => {
    loadPosts();
  }, []);

  const postsArray = Array.from(posts);

  const getArticleLink = (id) => {
    const articleLink = "/" + id;
    return articleLink;
  };

  return (
    <div>
      <div>
        <Typography variant="h1" gutterBottom>
          Blog
        </Typography>
        <Typography>Stay in the loop with the our latest blog posts</Typography>
      </div>
      <Grid container spacing={8} columns={12} sx={{ my: 4 }}>
        {postsArray.map((article, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: 1,
                height: "100%",
              }}
            >
              <Typography gutterBottom variant="caption" component="div">
                {article.tag}
              </Typography>
              <Link to={getArticleLink(article.id)}>
                <TitleTypography
                  gutterBottom
                  variant="h6"
                  onFocus={() => handleFocus(index)}
                  onBlur={handleBlur}
                  tabIndex={0}
                  className={focusedCardIndex === index ? "Mui-focused" : ""}
                >
                  {article.title}
                  <NavigateNextRoundedIcon
                    className="arrow"
                    sx={{ fontSize: "1rem" }}
                  />
                </TitleTypography>
              </Link>
              <StyledTypography
                variant="body2"
                color="text.secondary"
                gutterBottom
              >
                {article.description}
              </StyledTypography>

              <Author data={article.author} />
            </Box>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: "flex", flexDirection: "row", pt: 4 }}>
        <Pagination
          hidePrevButton
          hideNextButton
          count={10}
          boundaryCount={10}
        />
      </Box>
    </div>
  );
}
