import { GraphQLResolveInfo } from "graphql";
import { FindManyCustomer_groupArgs } from "./args/FindManyCustomer_groupArgs";
import { Customer_group } from "../../../models/Customer_group";
export declare class FindManyCustomer_groupResolver {
    customer_groups(ctx: any, info: GraphQLResolveInfo, args: FindManyCustomer_groupArgs): Promise<Customer_group[]>;
}
