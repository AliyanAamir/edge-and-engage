import { webDevelopment } from "./web-development"
import { mobileDevelopment } from "./mobile-development"
import { customDevelopment } from "./custom-development"
import { uiUxDesign } from "./ui-ux-design"
import type { ServicePageData } from "./types"

export type { ServicePageData }

export const allServicePages: Record<string, ServicePageData> = {
  [webDevelopment.slug]: webDevelopment,
  [mobileDevelopment.slug]: mobileDevelopment,
  [customDevelopment.slug]: customDevelopment,
  [uiUxDesign.slug]: uiUxDesign,
}
