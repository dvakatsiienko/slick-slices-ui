export type AddToOrder = (pizzaOrderItem: OrderedPizza) => void;
export type RemoveFromOrder = (index: number) => void;
export type SubmitOrder = (values: any) => Promise<void>;

export interface OrderedPizza {
    id: string;
    size: PizzaSize;
}
export type PizzaSize = 'S' | 'M' | 'L';
