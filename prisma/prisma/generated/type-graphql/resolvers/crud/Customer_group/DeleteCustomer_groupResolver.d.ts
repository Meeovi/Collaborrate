import { GraphQLResolveInfo } from "graphql";
import { DeleteCustomer_groupArgs } from "./args/DeleteCustomer_groupArgs";
import { Customer_group } from "../../../models/Customer_group";
export declare class DeleteCustomer_groupResolver {
    deleteCustomer_group(ctx: any, info: GraphQLResolveInfo, args: DeleteCustomer_groupArgs): Promise<Customer_group | null>;
}
