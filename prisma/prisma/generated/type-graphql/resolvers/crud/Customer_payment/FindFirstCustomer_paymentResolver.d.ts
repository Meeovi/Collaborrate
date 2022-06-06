import { GraphQLResolveInfo } from "graphql";
import { FindFirstCustomer_paymentArgs } from "./args/FindFirstCustomer_paymentArgs";
import { Customer_payment } from "../../../models/Customer_payment";
export declare class FindFirstCustomer_paymentResolver {
    findFirstCustomer_payment(ctx: any, info: GraphQLResolveInfo, args: FindFirstCustomer_paymentArgs): Promise<Customer_payment | null>;
}
