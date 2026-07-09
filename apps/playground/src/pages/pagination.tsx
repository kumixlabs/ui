import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem } from "@kumix/ui";
import { Page, Sample } from "../showcase";

export function PaginationPage() {
  return (
    <Page title="Pagination" description="Page navigation controls.">
      <Sample title="Basic">
        <Pagination>
          <PaginationContent>
            <PaginationItem>1</PaginationItem>
            <PaginationItem>2</PaginationItem>
            <PaginationEllipsis />
            <PaginationItem>9</PaginationItem>
          </PaginationContent>
        </Pagination>
      </Sample>

      <Sample title="Sequential">
        <Pagination>
          <PaginationContent>
            <PaginationItem>1</PaginationItem>
            <PaginationItem>2</PaginationItem>
            <PaginationItem>3</PaginationItem>
            <PaginationItem>4</PaginationItem>
            <PaginationItem>5</PaginationItem>
          </PaginationContent>
        </Pagination>
      </Sample>
    </Page>
  );
}
