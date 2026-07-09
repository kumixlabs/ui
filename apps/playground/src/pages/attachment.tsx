import { FileTextIcon, ImageIcon } from "lucide-react";

import {
  Attachment,
  AttachmentContent,
  AttachmentDescription,
  AttachmentGroup,
  AttachmentMedia,
  AttachmentTitle,
} from "@kumix/ui";
import { Page, Sample } from "../showcase";

export function AttachmentPage() {
  return (
    <Page title="Attachment" description="File attachment previews with states.">
      <Sample title="Horizontal">
        <Attachment className="w-72">
          <AttachmentMedia>
            <FileTextIcon />
          </AttachmentMedia>
          <AttachmentContent>
            <AttachmentTitle>proposal.pdf</AttachmentTitle>
            <AttachmentDescription>1.2 MB</AttachmentDescription>
          </AttachmentContent>
        </Attachment>
      </Sample>

      <Sample title="States">
        <Attachment state="uploading" className="w-72">
          <AttachmentMedia>
            <ImageIcon />
          </AttachmentMedia>
          <AttachmentContent>
            <AttachmentTitle>photo.png</AttachmentTitle>
            <AttachmentDescription>Uploading...</AttachmentDescription>
          </AttachmentContent>
        </Attachment>
        <Attachment state="error" className="w-72">
          <AttachmentMedia>
            <ImageIcon />
          </AttachmentMedia>
          <AttachmentContent>
            <AttachmentTitle>broken.png</AttachmentTitle>
            <AttachmentDescription>Upload failed</AttachmentDescription>
          </AttachmentContent>
        </Attachment>
      </Sample>

      <Sample title="Group">
        <AttachmentGroup>
          <Attachment size="sm" orientation="vertical" className="w-24">
            <AttachmentMedia>
              <FileTextIcon />
            </AttachmentMedia>
            <AttachmentContent>
              <AttachmentTitle>a.pdf</AttachmentTitle>
            </AttachmentContent>
          </Attachment>
          <Attachment size="sm" orientation="vertical" className="w-24">
            <AttachmentMedia>
              <ImageIcon />
            </AttachmentMedia>
            <AttachmentContent>
              <AttachmentTitle>b.png</AttachmentTitle>
            </AttachmentContent>
          </Attachment>
        </AttachmentGroup>
      </Sample>
    </Page>
  );
}
