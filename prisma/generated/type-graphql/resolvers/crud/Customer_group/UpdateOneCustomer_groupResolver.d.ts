import { GraphQLResolveInfo } from "graphql";
import { UpdateOneCustomer_groupArgs } from "./args/UpdateOneCustomer_groupArgs";
import { Customer_group } from "../../../models/Customer_group";
export declare class UpdateOneCustomer_groupResolver {
    updateOneCustomer_group(ctx: any, info: GraphQLResolveInfo, args: UpdateOneCustomer_groupArgs): Promise<Customer_group | null>;
}
