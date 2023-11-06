export interface NavigationBarItem {
    key: React.Key;
    icon?: React.ReactNode;
    label: React.ReactNode;
    children?: NavigationBarItem[];
    type?: "group";
}
