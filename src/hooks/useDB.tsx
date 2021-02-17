import  {useState, useEffect, useCallback} from "react";
import { firestore } from "../firebase";

export interface dataModel {
    drawInfo: IDrawInfo,
    uid: string
}

export interface IDrawInfo {
    lines:  Line[];
    width:  number;
    height: number;
}

export interface Line {
    points:      Point[];
    brushColor:  string;
    brushRadius: number;
}

export interface Point {
    x: number;
    y: number;
}

const initialDrawInfo: IDrawInfo = {
    lines: [],
    width: 0,
    height: 0
}


function useDB(prmUserId:string){


    let initializing: boolean = true; 
    let unsubscribe: () => void; 
    let everyUserCanvas = new Map<string, IDrawInfo>();


    const [GlobalCanvas, setGlobalCanvas] = useState<IDrawInfo>(initialDrawInfo);
    useEffect (() => {
      
        checkUserDocument(prmUserId); 
        subscribe().then((unsubscribeFunction) => {
            unsubscribe = unsubscribeFunction; 
        });
        return () => {
            unsubscribe(); 
        }
    } , []);

    const checkUserDocument = useCallback(
        (userUID:string):void  => {
            const usersRef = firestore.collection('board1').doc(userUID);
            usersRef.get()
            .then((docSnapshot) => {
            if (!docSnapshot.exists)  {
                usersRef.set({
                    ...initialDrawInfo
                }) // create the document
            }
            });
        }
        ,
        [],
    )

    const subscribe = useCallback(
        async(): Promise<(() => void)> => {
            return await firestore.collection("board1").onSnapshot((snapshot) => {
                snapshot.docs.forEach(user => {
                    updateCanvasFromOthersUsers(user);
                });
                console.log("ENTRO A subcribe");
                initializing = false;
            });
            },
        [],
    );

    const updateCanvasFromOthersUsers = useCallback(
        (doc: any) => {
            if (doc.id != prmUserId  || initializing){
                console.log(doc.data());
                console.log("ENTRO A updateCanvasFromOthersUsers");
                
                const newDrawInfo: IDrawInfo = doc.data();
                everyUserCanvas.set(doc.id, newDrawInfo);
                updateCanvas();
            }else{
                console.log("DIBUJASTE TUUU");
                
            }
        },
        [],
    )

    const updateCanvas = useCallback(
        () => {
            let newLines: Line[] = []; 
            everyUserCanvas.forEach(canvas => {
                newLines = [...newLines, ...canvas.lines];
            });
            let newGlobalDrawInfo: IDrawInfo = {
                width: 900,
                height: 700,
                lines: newLines,
            };
            setGlobalCanvas(newGlobalDrawInfo); 
            console.log("ENTRO A updateCanvas");
        },
        [],
    )

    const updateCanvasFromActualUser = useCallback(
        (newDrawInfo: IDrawInfo, userId: string) => {
            
            everyUserCanvas.set(userId, newDrawInfo);
            firestore.collection("board1").doc(userId).set({...newDrawInfo});
            console.log("ENTRO A updateCanvasFromActualUser");
        },
        [],
    )

    return [GlobalCanvas, updateCanvasFromActualUser] as const; 
}

export default useDB;