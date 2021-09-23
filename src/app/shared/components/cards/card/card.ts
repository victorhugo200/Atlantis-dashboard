export interface Card {
    title: string;
    icon: string;
    type: 'currency' | 'percent';
    typeImg: TypeImg;
    fee: number;
    number: number;

}


export enum TypeImg {
    RED = 'RED',
    GREEN = 'GREEN',
    BLUE = 'BLUE'
} 