import { GraphQLResolveInfo } from "graphql";
import { FindManyCustomersArgs } from "./args/FindManyCustomersArgs";
import { Customers } from "../../../models/Customers";
export declare class FindManyCustomersResolver {
    findManyCustomers(ctx: any, info: GraphQLResolveInfo, args: FindManyCustomersArgs): Promise<Customers[]>;
}
