import { AvatarFunctionality, AvatarCustomization, BadgeFunctionality, BadgeCustomization, ChipFunctionality, ChipCustomization, DividerFunctionality, DividerCustomization, ListFunctionality, ListCustomization, MuiIconsFunctionality, MuiIconsCustomization, SvgIconFunctionality, SvgIconCustomization, TableFunctionality, TableCustomization, TooltipFunctionality, TooltipCustomization, TypographyFunctionality, TypographyCustomization } from "./components/data_display"
import { AlertFunctionality, AlertCustomization, BackdropFunctionality, BackdropCustomization, DialogFunctionality, DialogCustomization, ProgressFunctionality, ProgressCustomization, SkeletonFunctionality, SkeletonCustomization, SnackbarFunctionality, SnackbarCustomization } from "./components/feedback"
import { AutocompleteFunctionality, AutocompleteCustomization, ButtonFunctionality, ButtonCustomization, ButtonGroupFunctionality, ButtonGroupCustomization, CheckboxFunctionality, CheckboxCustomization, FabFunctionality, FabCustomization, FormComponentsFunctionality, FormComponentsCustomization, RadioFunctionality, RadioCustomization, RatingFunctionality, RatingCustomization, SelectFunctionality, SelectCustomization, SliderFunctionality, SliderCustomization, SwitchFunctionality, SwitchCustomization, TextfieldFunctionality, TextfieldCustomization, ToggleButtonFunctionality, ToggleButtonCustomization } from "./components/inputs"
import { BoxFunctionality, BoxCustomization, ContainerFunctionality, ContainerCustomization, GridFunctionality, GridDemo, GridCustomization, ImageListFunctionality, ImageListCustomization, StackFunctionality, StackCustomization } from "./components/layout"
import { BottomNavigationFunctionality, BottomNavigationCustomization, BreadcrumbsFunctionality, BreadcrumbsCustomization, DrawerFunctionality, DrawerCustomization, LinkFunctionality, LinkCustomization, MenuFunctionality, MenuCustomization, PaginationFunctionality, PaginationCustomization, SpeedDialFunctionality, SpeedDialCustomization, StepperFunctionality, StepperCustomization, TabsFunctionality, TabsCustomization } from "./components/navigation"
import { AccordionFunctionality, AccordionCustomization, AppBarFunctionality, AppBarCustomization, CardFunctionality, CardCustomization, PaperFunctionality, PaperCustomization } from "./components/surfaces"
import { ClickAwayListenerFunctionality, CssBaselineFunctionality, CssBaselineCustomization, ModalFunctionality, ModalCustomization, NoSsrFunctionality, PopperFunctionality, PortalFunctionality, TextareaAutosizeFunctionality, TransitionsFunctionality, useMediaQueryFunctionality, useScrollTriggerFunctionality } from "./components/utils"

export default function App() {
  return (
    <>
      <h1>Welcome to Mastering MUI: Component Customization</h1>
      <SelectCustomization />
    </>
  )
}