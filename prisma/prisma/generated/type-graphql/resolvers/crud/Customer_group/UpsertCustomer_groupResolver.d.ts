import { GraphQLResolveInfo } from "graphql";
import { UpsertCustomer_groupArgs } from "./args/UpsertCustomer_groupArgs";
import { Customer_group } from "../../../models/Customer_group";
export declare class UpsertCustomer_groupResolver {
    upsertCustomer_group(ctx: any, info: GraphQLResolveInfo, args: UpsertCustomer_groupArgs): Promise<Customer_group>;
}
