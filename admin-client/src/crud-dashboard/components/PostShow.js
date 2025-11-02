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
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { deleteComment, updateComment } from "../../utils/Api";
import CustomDialogWithPayloadAdvanced from "./EditCommentForm";

export default function PostShow() {
  const { postId } = useParams();
  const { user } = useUser();
  const navigate = useNavigate();

  const dialogs = useDialogs();
  const notifications = useNotifications();

  const [post, setPost] = React.useState(null);
  const [comments, setComments] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  const loadData = React.useCallback(async () => {
    setError(null);
    setIsLoading(true);

    try {
      const showData = await getPost(postId, user);

      setPost(showData);
      setComments(showData.comments);
    } catch (showDataError) {
      setError(showDataError);
    }
    setIsLoading(false);
  }, [postId, setComments]);

  React.useEffect(() => {
    loadData();
  }, [loadData]);

  const handleDeleteComment = async (comment) => {
    const confirmed = await dialogs.confirm(
      `Do you wish to delete "${comment.name}: ${comment.content}"?`,
      {
        title: `Delete comment?`,
        severity: "error",
        okText: "Delete",
        cancelText: "Cancel",
      }
    );

    if (confirmed) {
      setIsLoading(true);
      try {
        await deleteComment(comment.id);
        loadData();
        notifications.show("comment deleted successfully.", {
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
  };

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

    const RenderReply = ({ reply }) => {
      return (
        <ListItem key={reply.id} alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt={reply.name} src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <div>
            <ListItemText
              primary={reply.name}
              secondary={
                <>
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ color: "text.primary", display: "inline" }}
                  >
                    {reply.content}
                  </Typography>
                </>
              }
            />
            <Stack direction="row" spacing={2}>
              <CustomDialogWithPayloadAdvanced
                comment={reply}
                loadData={() => loadData()}
              />
              <Button
                variant="contained"
                color="error"
                startIcon={<DeleteIcon />}
                onClick={() => handleDeleteComment(reply)}
              >
                Delete
              </Button>
            </Stack>
          </div>
        </ListItem>
      );
    };

    const RenderComments = ({ comment }) => {
      return (
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt={comment.name} src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <div>
            <ListItemText
              primary={comment.name}
              secondary={
                <>
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ color: "text.primary", display: "inline" }}
                  >
                    {comment.content}
                  </Typography>
                </>
              }
            />
            <Stack direction="row" spacing={2}>
              <CustomDialogWithPayloadAdvanced
                comment={comment}
                loadData={() => loadData()}
              />
              <Button
                variant="contained"
                color="error"
                startIcon={<DeleteIcon />}
                onClick={() => handleDeleteComment(comment)}
              >
                Delete
              </Button>
            </Stack>
            <List key="replies">
              {comment.replies.map((reply) => (
                <RenderReply key={reply.id} reply={reply} />
              ))}
            </List>
          </div>
        </ListItem>
      );
    };

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
          <Grid size={{ xs: 12, sm: 6 }}>
            <Paper sx={{ px: 2, py: 1 }}>
              <Typography variant="overline">Post:</Typography>
              <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
            </Paper>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Paper sx={{ px: 2, py: 1 }}>
              <Typography variant="overline">Comments:</Typography>
              {comments.map((comment) => (
                <RenderComments key={comment.id} comment={comment} />
              ))}
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
