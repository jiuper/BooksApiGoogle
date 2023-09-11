export interface IDropDownValues {
    title: string;
    value: string;
    icon?: string;
}

export interface IDropDownStyleType {
    iconSize?: "sm" | "md" | "lg";
    bodyPadding?: string;
    bodyRadius?: string;
    label?: string;
    optionRadius?: string;
    optionTitle?: string;
}

export interface IDropDownType {
    options: IDropDownValues[];
    isToggle: string;
}
