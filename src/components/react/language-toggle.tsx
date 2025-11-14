import { Languages } from "lucide-react"

export function LanguageToggle() {
  const handleLanguageToggle = () => {
    const currentPath = window.location.pathname

    const newPath = currentPath.includes("/en")
      ? currentPath.replace("/en", "/de")
      : currentPath.replace("/de", "/en")

    window.location.href = newPath
  }

  return <Languages className="cursor-pointer" onClick={handleLanguageToggle} />
}
