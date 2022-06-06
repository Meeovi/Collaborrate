import { GraphQLResolveInfo } from "graphql";
import { DeleteCustomer_paymentArgs } from "./args/DeleteCustomer_paymentArgs";
import { Customer_payment } from "../../../models/Customer_payment";
export declare class DeleteCustomer_paymentResolver {
    deleteCustomer_payment(ctx: any, info: GraphQLResolveInfo, args: DeleteCustomer_paymentArgs): Promise<Customer_payment | null>;
}
