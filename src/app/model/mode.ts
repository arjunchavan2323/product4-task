export interface iproduct{
    pName: string;
    pDetail: string;
    psatus: ipro;
    id: string;
}

export enum ipro{
    Inprogress="Inprogress",
    Dicepatch="Dicepatch",
    Diliver="Diliver"
    
}