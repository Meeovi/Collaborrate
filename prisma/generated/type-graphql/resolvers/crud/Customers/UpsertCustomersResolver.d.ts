import { GraphQLResolveInfo } from "graphql";
import { UpsertCustomersArgs } from "./args/UpsertCustomersArgs";
import { Customers } from "../../../models/Customers";
export declare class UpsertCustomersResolver {
    upsertCustomers(ctx: any, info: GraphQLResolveInfo, args: UpsertCustomersArgs): Promise<Customers>;
}
