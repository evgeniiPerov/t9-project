import ThemeButton from '@/components/ui/app-bar/theme-button/theme-button'
import LocaleSwitch from '@/components/ui/app-bar/locale-switch/locale-switch'

const AppBar = () => {
    return (
        <div className="flex items-center justify-between p-4 border-b">
            <div className="text-xl font-bold">Next.js 13 Starter</div>
            <div className="flex space-x-4">
                <ThemeButton />
                <LocaleSwitch />
            </div>
        </div>
    )
}

export default AppBar
