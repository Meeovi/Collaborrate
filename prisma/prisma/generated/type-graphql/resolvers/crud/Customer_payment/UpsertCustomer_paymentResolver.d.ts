import { GraphQLResolveInfo } from "graphql";
import { UpsertCustomer_paymentArgs } from "./args/UpsertCustomer_paymentArgs";
import { Customer_payment } from "../../../models/Customer_payment";
export declare class UpsertCustomer_paymentResolver {
    upsertCustomer_payment(ctx: any, info: GraphQLResolveInfo, args: UpsertCustomer_paymentArgs): Promise<Customer_payment>;
}
