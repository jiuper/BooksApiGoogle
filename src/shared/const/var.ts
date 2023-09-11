import type {IDropDownValues} from "../ui/DropDown/DropDown.type";

export const apiKey = "AIzaSyD6K_Vl207acz9oeBuFe8Q0_0ASY0zaZbQ"

export const optionsFilter : IDropDownValues[] = [
    {value: "", title: "all"},
    {value: "Art", title: "art"},
    {value: "Biography", title: "biography"},
    {value: "Computers", title: "computers"},
    {value: "History", title: "history"},
    {value: "Medical", title: "medical"},
    {value: "Poetry", title: "poetry"},
]

export const optionsSorting : IDropDownValues[] = [
    {value: "relevance", title: "relevance"},
    {value: "newest", title: "newest"},
]