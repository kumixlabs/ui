import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@kumix/ui";
import { Page, Sample } from "../showcase";

const rows = [
  { id: 1, name: "Ada Lovelace", role: "Engineer" },
  { id: 2, name: "Alan Turing", role: "Researcher" },
  { id: 3, name: "Grace Hopper", role: "Admiral" },
];

export function TablePage() {
  return (
    <Page title="Table" description="Static tabular data.">
      <Sample title="Basic">
        <Table className="w-full max-w-md">
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Role</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.role}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Sample>
    </Page>
  );
}
