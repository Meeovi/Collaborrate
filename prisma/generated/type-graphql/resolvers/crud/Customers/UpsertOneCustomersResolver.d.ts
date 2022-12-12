import { GraphQLResolveInfo } from "graphql";
import { UpsertOneCustomersArgs } from "./args/UpsertOneCustomersArgs";
import { Customers } from "../../../models/Customers";
export declare class UpsertOneCustomersResolver {
    upsertOneCustomers(ctx: any, info: GraphQLResolveInfo, args: UpsertOneCustomersArgs): Promise<Customers>;
}
