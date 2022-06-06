import { GraphQLResolveInfo } from "graphql";
import { FindFirstCustomersArgs } from "./args/FindFirstCustomersArgs";
import { Customers } from "../../../models/Customers";
export declare class FindFirstCustomersResolver {
    findFirstCustomers(ctx: any, info: GraphQLResolveInfo, args: FindFirstCustomersArgs): Promise<Customers | null>;
}
