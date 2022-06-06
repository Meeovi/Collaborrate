import { GraphQLResolveInfo } from "graphql";
import { CreateCustomer_paymentArgs } from "./args/CreateCustomer_paymentArgs";
import { Customer_payment } from "../../../models/Customer_payment";
export declare class CreateCustomer_paymentResolver {
    createCustomer_payment(ctx: any, info: GraphQLResolveInfo, args: CreateCustomer_paymentArgs): Promise<Customer_payment>;
}
