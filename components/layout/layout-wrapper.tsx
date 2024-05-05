import { Analytics } from "@/components/layout/analytics"
import { TailwindIndicator } from "@/components/layout/tailwind-indicator"
import { ThemeProvider } from "@/components/layout/theme-provider"
import { Toaster } from "@/components/ui/toaster"

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
      <Analytics />
      <Toaster />
      <TailwindIndicator />
    </ThemeProvider>
  )
}
