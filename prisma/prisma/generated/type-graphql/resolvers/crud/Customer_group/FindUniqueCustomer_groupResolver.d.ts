import { GraphQLResolveInfo } from "graphql";
import { FindUniqueCustomer_groupArgs } from "./args/FindUniqueCustomer_groupArgs";
import { Customer_group } from "../../../models/Customer_group";
export declare class FindUniqueCustomer_groupResolver {
    customer_group(ctx: any, info: GraphQLResolveInfo, args: FindUniqueCustomer_groupArgs): Promise<Customer_group | null>;
}
