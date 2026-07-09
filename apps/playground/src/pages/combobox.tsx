import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@kumix/ui";
import { Page, Sample } from "../showcase";

const fruits = ["Apple", "Banana", "Cherry", "Grape", "Orange", "Pear"];

export function ComboboxPage() {
  return (
    <Page title="Combobox" description="Autocomplete input with a filterable list.">
      <Sample title="Basic">
        <Combobox items={fruits}>
          <ComboboxInput placeholder="Search fruit..." className="w-64" />
          <ComboboxContent>
            <ComboboxEmpty>No fruit found.</ComboboxEmpty>
            <ComboboxList>
              {(item: string) => (
                <ComboboxItem key={item} value={item}>
                  {item}
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </Sample>
    </Page>
  );
}
