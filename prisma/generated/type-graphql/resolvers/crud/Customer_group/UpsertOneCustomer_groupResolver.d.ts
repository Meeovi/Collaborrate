import { GraphQLResolveInfo } from "graphql";
import { UpsertOneCustomer_groupArgs } from "./args/UpsertOneCustomer_groupArgs";
import { Customer_group } from "../../../models/Customer_group";
export declare class UpsertOneCustomer_groupResolver {
    upsertOneCustomer_group(ctx: any, info: GraphQLResolveInfo, args: UpsertOneCustomer_groupArgs): Promise<Customer_group>;
}
