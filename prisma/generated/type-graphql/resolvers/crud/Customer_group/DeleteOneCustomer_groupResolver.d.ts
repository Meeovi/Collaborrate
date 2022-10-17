import { GraphQLResolveInfo } from "graphql";
import { DeleteOneCustomer_groupArgs } from "./args/DeleteOneCustomer_groupArgs";
import { Customer_group } from "../../../models/Customer_group";
export declare class DeleteOneCustomer_groupResolver {
    deleteOneCustomer_group(ctx: any, info: GraphQLResolveInfo, args: DeleteOneCustomer_groupArgs): Promise<Customer_group | null>;
}
