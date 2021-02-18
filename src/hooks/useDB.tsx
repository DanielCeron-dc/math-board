import  {useState, useEffect, useCallback} from "react";
import { firestore } from "../firebase";
import { Compare, Convert } from "../tools/Convert";

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

                let shouldUpdate = false;
                snapshot.docs.forEach((user,index) => {
                    const data  = user.data();
                    if  (data){
                        const newDrawInfo: IDrawInfo = data as IDrawInfo;
                        const userLastData = everyUserCanvas.get(user.id);
                        if (userLastData != undefined){
                            if (Compare.compareDrawInfo(newDrawInfo, userLastData)){
                                console.log("es la misma info >:u");
                                return;
                            }
                        }
                        if (updateCanvasFromOthersUsers(user.id, newDrawInfo)){
                            shouldUpdate = true; 
                        }
                    }
                });
                if (shouldUpdate){
                    updateCanvas();
                }
                console.log("ENTRO A subcribe");
                initializing = false;
            });
            },
        [],
    );

    const updateCanvasFromOthersUsers = useCallback(
        (userId:string, newDrawInfo: IDrawInfo ):boolean => {
            console.log(userId != prmUserId || initializing );
            if (userId != prmUserId  || initializing){
                console.log("doc.id  == " + userId  +  " prmUserId ==" + prmUserId);
                console.log("ENTRO A updateCanvasFromOthersUsers");
                everyUserCanvas.set(userId, newDrawInfo);
                return true; 
            }else{
                console.log("DIBUJASTE TUUU");
                return false; 
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
            const userLastData = everyUserCanvas.get(userId); 
            if (userLastData != undefined){
                if (Compare.compareDrawInfo(newDrawInfo, userLastData)){
                    console.log("es la misma info >:u");
                    return;
                }
            }
            everyUserCanvas.set(userId, newDrawInfo);
            //firestore.collection("board1").doc("m1shng0yBOUsvTea1Cm6iqmJAb32").set({});
            //firestore.collection("board1").doc("Xzs4Xu7GynecX9nSBsAyQSMZhV72").set({});
            firestore.collection("board1").doc(userId).set({...newDrawInfo});
            console.log("ENTRO A updateCanvasFromActualUser");
        },
        [],
    )

    return [GlobalCanvas, updateCanvasFromActualUser] as const; 
}

export default useDB;