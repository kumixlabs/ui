import {
  Avatar,
  AvatarFallback,
  Bubble,
  BubbleContent,
  Message,
  MessageAvatar,
  MessageContent,
  MessageGroup,
} from "@kumix/ui";
import { Page, Sample } from "../showcase";

export function MessagePage() {
  return (
    <Page title="Message" description="Chat-style message rows with avatar and content.">
      <Sample title="Conversation">
        <MessageGroup className="w-full max-w-md">
          <Message>
            <MessageAvatar>
              <Avatar>
                <AvatarFallback>AI</AvatarFallback>
              </Avatar>
            </MessageAvatar>
            <MessageContent>
              <Bubble variant="muted">
                <BubbleContent>Hey! How can I help you today?</BubbleContent>
              </Bubble>
            </MessageContent>
          </Message>
          <Message align="end">
            <MessageContent>
              <Bubble variant="default" align="end">
                <BubbleContent>Show me the button variants.</BubbleContent>
              </Bubble>
            </MessageContent>
          </Message>
        </MessageGroup>
      </Sample>
    </Page>
  );
}
