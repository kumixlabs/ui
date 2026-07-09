import { Avatar, AvatarFallback, AvatarStatus } from "@kumix/ui";
import { Page, Sample } from "../showcase";

export function AvatarPage() {
  return (
    <Page title="Avatar" description="User image with fallback and status indicator.">
      <Sample title="Fallback">
        <Avatar>
          <AvatarFallback>AB</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>CD</AvatarFallback>
        </Avatar>
      </Sample>

      <Sample title="With status">
        <div className="relative">
          <Avatar>
            <AvatarFallback>ON</AvatarFallback>
          </Avatar>
          <AvatarStatus variant="online" className="absolute right-0 bottom-0" />
        </div>
        <div className="relative">
          <Avatar>
            <AvatarFallback>AW</AvatarFallback>
          </Avatar>
          <AvatarStatus variant="away" className="absolute right-0 bottom-0" />
        </div>
        <div className="relative">
          <Avatar>
            <AvatarFallback>OF</AvatarFallback>
          </Avatar>
          <AvatarStatus variant="offline" className="absolute right-0 bottom-0" />
        </div>
      </Sample>

      <Sample title="Sizes">
        <Avatar className="size-6">
          <AvatarFallback className="text-xs">S</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>M</AvatarFallback>
        </Avatar>
        <Avatar className="size-14">
          <AvatarFallback className="text-lg">L</AvatarFallback>
        </Avatar>
      </Sample>
    </Page>
  );
}
