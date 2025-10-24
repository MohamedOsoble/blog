import { Fragment, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import ReplyIcon from "@mui/icons-material/Reply";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import CommentForm from "./CommentBox";

function Reply({ reply }) {
  return (
    <ListItem alignItems="flex-start" key={reply.id}>
      <ListItemAvatar>
        <Avatar alt={reply.name} src="/static/images/avatar/1.jpg" />
      </ListItemAvatar>
      <ListItemText
        primary={reply.name}
        secondary={
          <Fragment>
            <Typography
              component="span"
              variant="body2"
              sx={{ color: "text.primary", display: "inline" }}
            ></Typography>
            {reply.content}
          </Fragment>
        }
      />
    </ListItem>
  );
}

export default function Comments({ comment, index, handleReply }) {
  const [isReplyActive, setReplyActive] = useState(false);
  if (!comment.replies) {
    comment.replies = [];
  }
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
              <Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  sx={{ color: "text.primary", display: "inline" }}
                >
                  {comment.content}
                </Typography>
              </Fragment>
            </>
          }
        />
        <List key="replies">
          {comment.replies.map((reply) => (
            <Reply reply={reply} key={reply.id} />
          ))}
        </List>
        <CommentForm
          SubmitComment={(comment) => handleReply(comment)}
          isActive={isReplyActive}
          setIsActive={setReplyActive}
          parent={comment.id}
        />
      </div>
      <IconButton
        onClick={() => setReplyActive(true)}
        aria-label="reply"
        size="small"
        style={{ margin: "10px", float: "right" }}
      >
        <ReplyIcon fontSize="small" />
      </IconButton>
    </ListItem>
  );
}
