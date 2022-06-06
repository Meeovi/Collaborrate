import { GraphQLResolveInfo } from "graphql";
import { FindManyCustomer_paymentArgs } from "./args/FindManyCustomer_paymentArgs";
import { Customer_payment } from "../../../models/Customer_payment";
export declare class FindManyCustomer_paymentResolver {
    customer_payments(ctx: any, info: GraphQLResolveInfo, args: FindManyCustomer_paymentArgs): Promise<Customer_payment[]>;
}
