import { GraphQLResolveInfo } from "graphql";
import { FindUniqueCustomersOrThrowArgs } from "./args/FindUniqueCustomersOrThrowArgs";
import { Customers } from "../../../models/Customers";
export declare class FindUniqueCustomersOrThrowResolver {
    findUniqueCustomersOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindUniqueCustomersOrThrowArgs): Promise<Customers | null>;
}
