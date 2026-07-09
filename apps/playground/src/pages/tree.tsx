import { useMemo, useState } from "react";
import {
  createTree,
  hotkeysCoreFeature,
  selectionFeature,
  syncDataLoaderFeature,
} from "@headless-tree/core";

import { Tree, TreeItem, TreeItemLabel } from "@kumix/ui";
import { Page, Sample } from "../showcase";

interface Node {
  name: string;
  children?: string[];
}

const data: Record<string, Node> = {
  root: { name: "Root", children: ["src", "docs"] },
  src: { name: "src", children: ["index", "utils"] },
  index: { name: "index.ts" },
  utils: { name: "utils.ts" },
  docs: { name: "docs", children: ["readme"] },
  readme: { name: "README.md" },
};

export function TreePage() {
  const [state, setState] = useState({});

  const tree = useMemo(
    () =>
      createTree<Node>({
        state,
        setState,
        rootItemId: "root",
        getItemName: (item) => item.getItemData().name,
        isItemFolder: (item) => (item.getItemData().children?.length ?? 0) > 0,
        dataLoader: {
          getItem: (id) => data[id],
          getChildren: (id) => data[id]?.children ?? [],
        },
        indent: 20,
        features: [syncDataLoaderFeature, selectionFeature, hotkeysCoreFeature],
      }),
    [state],
  );

  return (
    <Page title="Tree" description="Hierarchical, expandable tree view.">
      <Sample title="File tree">
        {/* biome-ignore lint/suspicious/noExplicitAny: headless-tree instance generics differ from the component's narrowed interface */}
        <Tree tree={tree as any} indent={20} className="w-full max-w-sm">
          {tree.getItems().map((item) => (
            <TreeItem key={item.getId()} item={item}>
              <TreeItemLabel />
            </TreeItem>
          ))}
        </Tree>
      </Sample>
    </Page>
  );
}
