export interface Category {
    name: string;
    amounts: number[];
    isParentCategory: boolean;
    isNewCategory?: boolean;
}