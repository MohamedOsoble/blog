import * as React from "react";
import { useUser } from "../../utils/Auth";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate, useParams } from "react-router";
import dayjs from "dayjs";
import { useDialogs } from "../hooks/useDialogs/useDialogs";
import useNotifications from "../hooks/useNotifications/useNotifications";
import { deleteOne as deletePost, getOne as getPost } from "../data/posts";
import PageContainer from "./PageContainer";

export default function PostShow() {
  const { postId } = useParams();
  const { user } = useUser();
  const navigate = useNavigate();

  const dialogs = useDialogs();
  const notifications = useNotifications();

  const [post, setPost] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  const loadData = React.useCallback(async () => {
    setError(null);
    setIsLoading(true);

    try {
      const showData = await getPost(postId, user);

      setPost(showData);
    } catch (showDataError) {
      setError(showDataError);
    }
    setIsLoading(false);
  }, [postId]);

  React.useEffect(() => {
    loadData();
  }, [loadData]);

  const handlePostEdit = React.useCallback(() => {
    navigate(`/posts/${postId}/edit`);
  }, [navigate, postId]);

  const handlePostDelete = React.useCallback(async () => {
    if (!post) {
      return;
    }

    const confirmed = await dialogs.confirm(
      `Do you wish to delete ${post.title}?`,
      {
        title: `Delete post?`,
        severity: "error",
        okText: "Delete",
        cancelText: "Cancel",
      }
    );

    if (confirmed) {
      setIsLoading(true);
      try {
        await deletePost(Number(postId));

        navigate("/posts");

        notifications.show("Post deleted successfully.", {
          severity: "success",
          autoHideDuration: 3000,
        });
      } catch (deleteError) {
        notifications.show(
          `Failed to delete post. Reason:' ${deleteError.message}`,
          {
            severity: "error",
            autoHideDuration: 3000,
          }
        );
      }
      setIsLoading(false);
    }
  }, [post, dialogs, postId, navigate, notifications]);

  const handleBack = React.useCallback(() => {
    navigate("/posts");
  }, [navigate]);

  const renderShow = React.useMemo(() => {
    if (isLoading) {
      return (
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            m: 1,
          }}
        >
          <CircularProgress />
        </Box>
      );
    }
    if (error) {
      return (
        <Box sx={{ flexGrow: 1 }}>
          <Alert severity="error">{error.message}</Alert>
        </Box>
      );
    }

    return post ? (
      <Box sx={{ flexGrow: 1, width: "100%" }}>
        <Grid container spacing={2} sx={{ width: "100%" }}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Paper sx={{ px: 2, py: 1 }}>
              <Typography variant="overline">Title</Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                {post.title}
              </Typography>
            </Paper>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Paper sx={{ px: 2, py: 1 }}>
              <Typography variant="overline">Description</Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                {post.description}
              </Typography>
            </Paper>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Paper sx={{ px: 2, py: 1 }}>
              <Typography variant="overline">Create Date</Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                {dayjs(post.createDate).format("d MMMMM, YYYY")}
              </Typography>
            </Paper>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Paper sx={{ px: 2, py: 1 }}>
              <Typography variant="overline">Tag</Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                {post.tag}
              </Typography>
            </Paper>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Paper sx={{ px: 2, py: 1 }}>
              <Typography variant="overline">Published</Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                {post.isPublished ? "Yes" : "No"}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <Divider sx={{ my: 3 }} />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Button
            variant="contained"
            startIcon={<ArrowBackIcon />}
            onClick={handleBack}
          >
            Back
          </Button>
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              startIcon={<EditIcon />}
              onClick={handlePostEdit}
            >
              Edit
            </Button>
            <Button
              variant="contained"
              color="error"
              startIcon={<DeleteIcon />}
              onClick={handlePostDelete}
            >
              Delete
            </Button>
          </Stack>
        </Stack>
      </Box>
    ) : null;
  }, [isLoading, error, post, handleBack, handlePostEdit, handlePostDelete]);

  const pageTitle = `Post ${postId}`;

  return (
    <PageContainer
      title={pageTitle}
      breadcrumbs={[{ title: "Posts", path: "/posts" }, { title: pageTitle }]}
    >
      <Box sx={{ display: "flex", flex: 1, width: "100%" }}>{renderShow}</Box>
    </PageContainer>
  );
}
