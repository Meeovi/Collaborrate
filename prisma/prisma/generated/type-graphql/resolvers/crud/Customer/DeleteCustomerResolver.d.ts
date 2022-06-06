import { GraphQLResolveInfo } from "graphql";
import { DeleteCustomerArgs } from "./args/DeleteCustomerArgs";
import { Customer } from "../../../models/Customer";
export declare class DeleteCustomerResolver {
    deleteCustomer(ctx: any, info: GraphQLResolveInfo, args: DeleteCustomerArgs): Promise<Customer | null>;
}
