import { useState } from "react";

import {
  Kanban,
  KanbanBoard,
  KanbanColumn,
  KanbanColumnContent,
  KanbanItem,
  KanbanItemHandle,
  KanbanOverlay,
} from "@kumix/ui";
import { Page, Sample } from "../showcase";

interface Task {
  id: string;
  title: string;
}

const initial: Record<string, Task[]> = {
  todo: [
    { id: "1", title: "Design review" },
    { id: "2", title: "Write specs" },
  ],
  progress: [{ id: "3", title: "Build feature" }],
  done: [{ id: "4", title: "Ship release" }],
};

const columnLabels: Record<string, string> = {
  todo: "To Do",
  progress: "In Progress",
  done: "Done",
};

export function KanbanPage() {
  const [columns, setColumns] = useState(initial);

  return (
    <Page title="Kanban" description="Drag-and-drop board with columns and cards.">
      <Sample title="Board">
        <Kanban
          value={columns}
          onValueChange={setColumns}
          getItemValue={(item) => item.id}
          className="w-full"
        >
          <KanbanBoard className="grid grid-cols-3 gap-4">
            {Object.entries(columns).map(([columnId, tasks]) => (
              <KanbanColumn key={columnId} value={columnId} className="rounded-md bg-muted/50 p-2">
                <div className="px-2 py-1 font-medium text-sm">{columnLabels[columnId]}</div>
                <KanbanColumnContent value={columnId} className="flex flex-col gap-2">
                  {tasks.map((task) => (
                    <KanbanItem key={task.id} value={task.id}>
                      <KanbanItemHandle className="rounded-md border border-border bg-card px-3 py-2 text-sm">
                        {task.title}
                      </KanbanItemHandle>
                    </KanbanItem>
                  ))}
                </KanbanColumnContent>
              </KanbanColumn>
            ))}
          </KanbanBoard>
          <KanbanOverlay>
            {({ value }) => {
              const task = Object.values(columns)
                .flat()
                .find((t) => t.id === value);
              return (
                <div className="rounded-md border border-border bg-card px-3 py-2 text-sm shadow-lg">
                  {task?.title}
                </div>
              );
            }}
          </KanbanOverlay>
        </Kanban>
      </Sample>
    </Page>
  );
}
