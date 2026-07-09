import { Avatar, AvatarFallback, AvatarGroup, AvatarGroupItem } from "@kumix/ui";
import { Page, Sample } from "../showcase";

export function AvatarGroupPage() {
  return (
    <Page title="Avatar Group" description="Stacked, overlapping avatars.">
      <Sample title="Group">
        <AvatarGroup>
          <AvatarGroupItem>
            <Avatar>
              <AvatarFallback>AB</AvatarFallback>
            </Avatar>
          </AvatarGroupItem>
          <AvatarGroupItem>
            <Avatar>
              <AvatarFallback>CD</AvatarFallback>
            </Avatar>
          </AvatarGroupItem>
          <AvatarGroupItem>
            <Avatar>
              <AvatarFallback>EF</AvatarFallback>
            </Avatar>
          </AvatarGroupItem>
        </AvatarGroup>
      </Sample>
    </Page>
  );
}
