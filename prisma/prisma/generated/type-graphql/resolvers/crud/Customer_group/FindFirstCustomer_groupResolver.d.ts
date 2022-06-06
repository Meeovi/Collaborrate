import { GraphQLResolveInfo } from "graphql";
import { FindFirstCustomer_groupArgs } from "./args/FindFirstCustomer_groupArgs";
import { Customer_group } from "../../../models/Customer_group";
export declare class FindFirstCustomer_groupResolver {
    findFirstCustomer_group(ctx: any, info: GraphQLResolveInfo, args: FindFirstCustomer_groupArgs): Promise<Customer_group | null>;
}
