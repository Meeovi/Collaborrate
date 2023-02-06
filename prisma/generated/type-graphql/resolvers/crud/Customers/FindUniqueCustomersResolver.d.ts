import { GraphQLResolveInfo } from "graphql";
import { FindUniqueCustomersArgs } from "./args/FindUniqueCustomersArgs";
import { Customers } from "../../../models/Customers";
export declare class FindUniqueCustomersResolver {
    findUniqueCustomers(ctx: any, info: GraphQLResolveInfo, args: FindUniqueCustomersArgs): Promise<Customers | null>;
}
