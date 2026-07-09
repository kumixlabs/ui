import { Button, Card, CardContent, CardFooter, CardHeader, CardTitle } from "@kumix/ui";
import { Page, Sample } from "../showcase";

export function CardPage() {
  return (
    <Page title="Card" description="Container for grouping related content.">
      <Sample title="Basic">
        <Card className="w-72">
          <CardHeader>
            <CardTitle>Project stats</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground text-sm">
            Composed from CardHeader, CardTitle, and CardContent.
          </CardContent>
        </Card>
      </Sample>

      <Sample title="With footer actions">
        <Card className="w-72">
          <CardHeader>
            <CardTitle>Delete workspace</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground text-sm">
            This action is permanent and cannot be undone.
          </CardContent>
          <CardFooter className="justify-end gap-2">
            <Button variant="ghost" size="sm">
              Cancel
            </Button>
            <Button variant="destructive" size="sm">
              Delete
            </Button>
          </CardFooter>
        </Card>
      </Sample>
    </Page>
  );
}
