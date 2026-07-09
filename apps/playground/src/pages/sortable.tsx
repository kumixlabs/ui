import { useState } from "react";
import { GripVerticalIcon } from "lucide-react";

import { Sortable, SortableItem, SortableItemHandle } from "@kumix/ui";
import { Page, Sample } from "../showcase";

interface Task {
  id: string;
  label: string;
}

const initial: Task[] = [
  { id: "1", label: "Design review" },
  { id: "2", label: "Write tests" },
  { id: "3", label: "Ship release" },
];

export function SortablePage() {
  const [items, setItems] = useState<Task[]>(initial);

  return (
    <Page title="Sortable" description="Drag-and-drop reorderable list.">
      <Sample title="Reorderable list">
        <Sortable
          value={items}
          onValueChange={setItems}
          getItemValue={(item) => item.id}
          className="flex w-full max-w-md flex-col gap-2"
        >
          {items.map((item) => (
            <SortableItem key={item.id} value={item.id}>
              <div className="flex items-center gap-2 rounded-md border border-border bg-card px-3 py-2 text-sm">
                <SortableItemHandle>
                  <GripVerticalIcon className="size-4 cursor-grab text-muted-foreground" />
                </SortableItemHandle>
                {item.label}
              </div>
            </SortableItem>
          ))}
        </Sortable>
      </Sample>
    </Page>
  );
}
