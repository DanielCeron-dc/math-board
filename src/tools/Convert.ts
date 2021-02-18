import Index from "../Context/PageDimensions";
import { firestore } from "../firebase";
import { IDrawInfo , Line, Point} from "../hooks/useDB";



export class Convert {
    public static toIDrawInfo(json: string): IDrawInfo {
        return JSON.parse(json);
    }

    public static IDrawInfoToJson(value: IDrawInfo): string {
        return JSON.stringify(value);
    }
}

export class Compare {

    public static compareDrawInfo(object1: IDrawInfo, object2:IDrawInfo):boolean{
        if(object1.lines.length !== object2.lines.length) return false; 
        object1.lines.forEach((line, index) => {
            if(!this.compareLine(line, object2.lines[index])) return false; 
        });
        return true; 
    }

    private static compareLine(line1:Line, line2:Line):boolean{
        if(line1.brushColor !== line2.brushColor) return false; 
        if(line1.brushRadius !== line2.brushRadius) return false; 
        line1.points.forEach((point, index) => {
            if (!this.comparePoint(point, line2.points[index])) return false; 
        })
        return true; 
    }

    private static comparePoint(point1:Point, point2:Point):boolean {
        if(point1.x !== point2.x) return false; 
        if(point1.y !== point2.y) return false; 
        return true; 
    }

}


