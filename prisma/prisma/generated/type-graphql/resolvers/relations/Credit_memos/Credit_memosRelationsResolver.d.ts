import { Credit_memos } from "../../../models/Credit_memos";
import { Customers } from "../../../models/Customers";
import { Products } from "../../../models/Products";
export declare class Credit_memosRelationsResolver {
    customers(credit_memos: Credit_memos, ctx: any): Promise<Customers>;
    products(credit_memos: Credit_memos, ctx: any): Promise<Products>;
}
