import {Month} from "../../../enum/Month";

export function formatDate(date: any) {
    try {
        if (typeof date === "string") {
            let temp = date?.split('-')
            return `${temp[2].split("T")[0]} ${Month[Number(temp[1])]} ${temp[0]}`
        } else {
            return ""
            //test2
        }
    } catch (e) {
        console.log(e)
    }
}