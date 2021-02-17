import { firestore } from "../firebase";
import { IDrawInfo } from "../hooks/useDB";



export class Convert {
    public static toIDrawInfo(json: string): IDrawInfo {
        return JSON.parse(json);
    }

    public static IDrawInfoToJson(value: IDrawInfo): string {
        return JSON.stringify(value);
    }
}

