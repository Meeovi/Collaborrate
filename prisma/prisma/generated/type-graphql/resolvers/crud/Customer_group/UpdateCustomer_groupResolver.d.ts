import { GraphQLResolveInfo } from "graphql";
import { UpdateCustomer_groupArgs } from "./args/UpdateCustomer_groupArgs";
import { Customer_group } from "../../../models/Customer_group";
export declare class UpdateCustomer_groupResolver {
    updateCustomer_group(ctx: any, info: GraphQLResolveInfo, args: UpdateCustomer_groupArgs): Promise<Customer_group | null>;
}
