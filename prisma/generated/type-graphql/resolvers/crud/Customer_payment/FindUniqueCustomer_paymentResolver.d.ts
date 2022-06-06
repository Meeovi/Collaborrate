import { GraphQLResolveInfo } from "graphql";
import { FindUniqueCustomer_paymentArgs } from "./args/FindUniqueCustomer_paymentArgs";
import { Customer_payment } from "../../../models/Customer_payment";
export declare class FindUniqueCustomer_paymentResolver {
    customer_payment(ctx: any, info: GraphQLResolveInfo, args: FindUniqueCustomer_paymentArgs): Promise<Customer_payment | null>;
}
