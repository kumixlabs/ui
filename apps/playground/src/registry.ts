import type * as React from "react";

import { AccordionPage } from "./pages/accordion";
import { AccordionMenuPage } from "./pages/accordion-menu";
import { AlertPage } from "./pages/alert";
import { AlertDialogPage } from "./pages/alert-dialog";
import { AspectRatioPage } from "./pages/aspect-ratio";
import { AttachmentPage } from "./pages/attachment";
import { AvatarPage } from "./pages/avatar";
import { AvatarGroupPage } from "./pages/avatar-group";
import { BadgePage } from "./pages/badge";
import { BreadcrumbPage_ } from "./pages/breadcrumb";
import { BubblePage } from "./pages/bubble";
import { ButtonPage } from "./pages/button";
import { ButtonGroupPage } from "./pages/button-group";
import { CalendarPage } from "./pages/calendar";
import { CardPage } from "./pages/card";
import { CarouselPage } from "./pages/carousel";
import { ChartPage } from "./pages/chart";
import { CheckboxPage } from "./pages/checkbox";
import { CodePage } from "./pages/code";
import { CollapsiblePage } from "./pages/collapsible";
import { ComboboxPage } from "./pages/combobox";
import { CommandPage } from "./pages/command";
import { ContextMenuPage } from "./pages/context-menu";
import { CountingNumberPage } from "./pages/counting-number";
import { DataGridPage } from "./pages/data-grid";
import { DateFieldPage } from "./pages/datefield";
import { DescriptionListPage } from "./pages/description-list";
import { DialogPage } from "./pages/dialog";
import { DrawerPage } from "./pages/drawer";
import { DropdownMenuPage } from "./pages/dropdown-menu";
import { EmptyPage } from "./pages/empty";
import { ErrorBoundaryPage } from "./pages/error-boundary";
import { FieldPage } from "./pages/field";
import { FiltersPage } from "./pages/filters";
import { FormPage } from "./pages/form";
import { GithubButtonPage } from "./pages/github-button";
import { GradientBackgroundPage } from "./pages/gradient-background";
import { GridBackgroundPage } from "./pages/grid-background";
import { HeadingPage } from "./pages/heading";
import { HoverBackgroundPage } from "./pages/hover-background";
import { HoverCardPage } from "./pages/hover-card";
import { InputPage } from "./pages/input";
import { InputGroupPage } from "./pages/input-group";
import { InputOtpPage } from "./pages/input-otp";
import { ItemPage } from "./pages/item";
import { KanbanPage } from "./pages/kanban";
import { KbdPage } from "./pages/kbd";
import { LabelPage } from "./pages/label";
import { MarkerPage } from "./pages/marker";
import { MarqueePage } from "./pages/marquee";
import { MenubarPage } from "./pages/menubar";
import { MessagePage } from "./pages/message";
import { MessageScrollerPage } from "./pages/message-scroller";
import { NativeSelectPage } from "./pages/native-select";
import { NavigationMenuPage } from "./pages/navigation-menu";
import { PaginationPage } from "./pages/pagination";
import { PopoverPage } from "./pages/popover";
import { ProgressPage } from "./pages/progress";
import { RadioGroupPage } from "./pages/radio-group";
import { RatingPage } from "./pages/rating";
import { ResizablePage } from "./pages/resizable";
import { ScrollAreaPage } from "./pages/scroll-area";
import { ScrollspyPage } from "./pages/scrollspy";
import { SelectPage } from "./pages/select";
import { SeparatorPage } from "./pages/separator";
import { SheetPage } from "./pages/sheet";
import { ShimmeringTextPage } from "./pages/shimmering-text";
import { ShowMorePage } from "./pages/show-more";
import { SidebarPage } from "./pages/sidebar";
import { SkeletonPage } from "./pages/skeleton";
import { SliderPage } from "./pages/slider";
import { SlidingNumberPage } from "./pages/sliding-number";
import { SortablePage } from "./pages/sortable";
import { SpinnerPage } from "./pages/spinner";
import { StepperPage } from "./pages/stepper";
import { SvgTextPage } from "./pages/svg-text";
import { SwitchPage } from "./pages/switch";
import { TablePage } from "./pages/table";
import { TabsPage } from "./pages/tabs";
import { TextRevealPage } from "./pages/text-reveal";
import { TextareaPage } from "./pages/textarea";
import { ToastPage } from "./pages/toast";
import { TogglePage } from "./pages/toggle";
import { ToggleGroupPage } from "./pages/toggle-group";
import { TooltipPage } from "./pages/tooltip";
import { TreePage } from "./pages/tree";
import { TypingTextPage } from "./pages/typing-text";
import { VideoTextPage } from "./pages/video-text";
import { WordRotatePage } from "./pages/word-rotate";

export interface PageEntry {
  slug: string;
  label: string;
  component: React.ComponentType;
}

export const pages: PageEntry[] = [
  { slug: "accordion", label: "Accordion", component: AccordionPage },
  { slug: "accordion-menu", label: "Accordion Menu", component: AccordionMenuPage },
  { slug: "alert", label: "Alert", component: AlertPage },
  { slug: "alert-dialog", label: "Alert Dialog", component: AlertDialogPage },
  { slug: "aspect-ratio", label: "Aspect Ratio", component: AspectRatioPage },
  { slug: "attachment", label: "Attachment", component: AttachmentPage },
  { slug: "avatar", label: "Avatar", component: AvatarPage },
  { slug: "avatar-group", label: "Avatar Group", component: AvatarGroupPage },
  { slug: "badge", label: "Badge", component: BadgePage },
  { slug: "breadcrumb", label: "Breadcrumb", component: BreadcrumbPage_ },
  { slug: "bubble", label: "Bubble", component: BubblePage },
  { slug: "button", label: "Button", component: ButtonPage },
  { slug: "button-group", label: "Button Group", component: ButtonGroupPage },
  { slug: "calendar", label: "Calendar", component: CalendarPage },
  { slug: "card", label: "Card", component: CardPage },
  { slug: "carousel", label: "Carousel", component: CarouselPage },
  { slug: "chart", label: "Chart", component: ChartPage },
  { slug: "checkbox", label: "Checkbox", component: CheckboxPage },
  { slug: "code", label: "Code & Kbd", component: CodePage },
  { slug: "collapsible", label: "Collapsible", component: CollapsiblePage },
  { slug: "combobox", label: "Combobox", component: ComboboxPage },
  { slug: "command", label: "Command", component: CommandPage },
  { slug: "context-menu", label: "Context Menu", component: ContextMenuPage },
  { slug: "counting-number", label: "Counting Number", component: CountingNumberPage },
  { slug: "data-grid", label: "DataGrid", component: DataGridPage },
  { slug: "datefield", label: "Date & Time Field", component: DateFieldPage },
  { slug: "description-list", label: "Description List", component: DescriptionListPage },
  { slug: "dialog", label: "Dialog", component: DialogPage },
  { slug: "drawer", label: "Drawer", component: DrawerPage },
  { slug: "dropdown-menu", label: "Dropdown Menu", component: DropdownMenuPage },
  { slug: "empty", label: "Empty", component: EmptyPage },
  { slug: "error-boundary", label: "Error Boundary", component: ErrorBoundaryPage },
  { slug: "field", label: "Field", component: FieldPage },
  { slug: "filters", label: "Filters", component: FiltersPage },
  { slug: "form", label: "Form", component: FormPage },
  { slug: "github-button", label: "GitHub Button", component: GithubButtonPage },
  { slug: "gradient-background", label: "Gradient Background", component: GradientBackgroundPage },
  { slug: "grid-background", label: "Grid Background", component: GridBackgroundPage },
  { slug: "heading", label: "Heading", component: HeadingPage },
  { slug: "hover-background", label: "Hover Background", component: HoverBackgroundPage },
  { slug: "hover-card", label: "Hover Card", component: HoverCardPage },
  { slug: "input", label: "Input", component: InputPage },
  { slug: "input-group", label: "Input Group", component: InputGroupPage },
  { slug: "input-otp", label: "Input OTP", component: InputOtpPage },
  { slug: "item", label: "Item", component: ItemPage },
  { slug: "kanban", label: "Kanban", component: KanbanPage },
  { slug: "kbd", label: "Kbd", component: KbdPage },
  { slug: "label", label: "Label", component: LabelPage },
  { slug: "marker", label: "Marker", component: MarkerPage },
  { slug: "marquee", label: "Marquee", component: MarqueePage },
  { slug: "menubar", label: "Menubar", component: MenubarPage },
  { slug: "message", label: "Message", component: MessagePage },
  { slug: "message-scroller", label: "Message Scroller", component: MessageScrollerPage },
  { slug: "native-select", label: "Native Select", component: NativeSelectPage },
  { slug: "navigation-menu", label: "Navigation Menu", component: NavigationMenuPage },
  { slug: "pagination", label: "Pagination", component: PaginationPage },
  { slug: "popover", label: "Popover", component: PopoverPage },
  { slug: "progress", label: "Progress", component: ProgressPage },
  { slug: "radio-group", label: "Radio Group", component: RadioGroupPage },
  { slug: "rating", label: "Rating", component: RatingPage },
  { slug: "resizable", label: "Resizable", component: ResizablePage },
  { slug: "scroll-area", label: "Scroll Area", component: ScrollAreaPage },
  { slug: "scrollspy", label: "Scrollspy", component: ScrollspyPage },
  { slug: "select", label: "Select", component: SelectPage },
  { slug: "separator", label: "Separator", component: SeparatorPage },
  { slug: "sheet", label: "Sheet", component: SheetPage },
  { slug: "shimmering-text", label: "Shimmering Text", component: ShimmeringTextPage },
  { slug: "show-more", label: "Show More", component: ShowMorePage },
  { slug: "sidebar", label: "Sidebar", component: SidebarPage },
  { slug: "skeleton", label: "Skeleton", component: SkeletonPage },
  { slug: "slider", label: "Slider", component: SliderPage },
  { slug: "sliding-number", label: "Sliding Number", component: SlidingNumberPage },
  { slug: "sortable", label: "Sortable", component: SortablePage },
  { slug: "spinner", label: "Spinner", component: SpinnerPage },
  { slug: "stepper", label: "Stepper", component: StepperPage },
  { slug: "svg-text", label: "SVG Text", component: SvgTextPage },
  { slug: "switch", label: "Switch", component: SwitchPage },
  { slug: "table", label: "Table", component: TablePage },
  { slug: "tabs", label: "Tabs", component: TabsPage },
  { slug: "text-reveal", label: "Text Reveal", component: TextRevealPage },
  { slug: "textarea", label: "Textarea", component: TextareaPage },
  { slug: "toast", label: "Toast", component: ToastPage },
  { slug: "toggle", label: "Toggle", component: TogglePage },
  { slug: "toggle-group", label: "Toggle Group", component: ToggleGroupPage },
  { slug: "tooltip", label: "Tooltip", component: TooltipPage },
  { slug: "tree", label: "Tree", component: TreePage },
  { slug: "typing-text", label: "Typing Text", component: TypingTextPage },
  { slug: "video-text", label: "Video Text", component: VideoTextPage },
  { slug: "word-rotate", label: "Word Rotate", component: WordRotatePage },
];
