import { GraphQLResolveInfo } from "graphql";
import { UpdateCustomer_paymentArgs } from "./args/UpdateCustomer_paymentArgs";
import { Customer_payment } from "../../../models/Customer_payment";
export declare class UpdateCustomer_paymentResolver {
    updateCustomer_payment(ctx: any, info: GraphQLResolveInfo, args: UpdateCustomer_paymentArgs): Promise<Customer_payment | null>;
}
