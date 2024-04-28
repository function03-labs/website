import { SVGProps } from "react"
import {
  AlertTriangle,
  ArrowRight,
  BookOpenText,
  Check,
  ChevronLeft,
  ChevronRight,
  ChevronsUpDown,
  Command,
  CreditCard,
  File,
  FileText,
  Github,
  HelpCircle,
  Image,
  Laptop,
  Loader2,
  LucideIcon,
  MailIcon,
  Menu,
  Monitor,
  Moon,
  MoreVertical,
  PencilIcon,
  PhoneIcon,
  Pizza,
  Plus,
  Search,
  Settings,
  SunMedium,
  Trash,
  UserCircleIcon,
  UserCogIcon,
  X,
} from "lucide-react"

export type Icon = LucideIcon

function LogoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
      <path d="M 16 3 C 8.832 3 3 8.832 3 16 C 3 23.168 8.832 29 16 29 C 23.168 29 29 23.168 29 16 C 29 8.832 23.168 3 16 3 z M 16 5 C 16.338 5 16.67 5.0207813 17 5.0507812 L 17 7 L 15 7 L 14 10 L 13 10 L 13 11 L 18 11 L 19 12 L 20 12 L 20 13 L 19 14 L 15 13 L 11 16 L 11 19 L 13 21 L 16 21 L 16 23.5 L 17 26 L 18 26 L 21 22 L 21 21 L 22 19 L 22 18 L 21 18 L 20 16 L 21 15 L 22.5 16 L 25 15 L 25 14 L 26.808594 14 C 26.928594 14.65 27 15.316 27 16 C 27 22.065 22.065 27 16 27 C 9.935 27 5 22.065 5 16 C 5 9.935 9.935 5 16 5 z" />
    </svg>
  )
}

export const Icons = {
  logo: LogoIcon,
  close: X,
  spinner: Loader2,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  trash: Trash,
  post: FileText,
  page: File,
  media: Image,
  settings: Settings,
  billing: CreditCard,
  ellipsis: MoreVertical,
  add: Plus,
  warning: AlertTriangle,
  user: UserCircleIcon,
  arrowRight: ArrowRight,
  help: HelpCircle,
  pizza: Pizza,
  sun: SunMedium,
  moon: Moon,
  laptop: Laptop,
  search: Search,
  gitHub: Github,
  twitter: X,
  check: Check,
  orderbook: BookOpenText,
  chevronsUpDown: ChevronsUpDown,
  phone: PhoneIcon,
  mail: MailIcon,
  pencil: PencilIcon,
  student: PencilIcon,
  teacher: UserCogIcon,
  monitor: Monitor,
  menu: Menu,
}
