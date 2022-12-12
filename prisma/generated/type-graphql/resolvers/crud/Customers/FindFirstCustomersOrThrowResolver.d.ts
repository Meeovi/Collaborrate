import { GraphQLResolveInfo } from "graphql";
import { FindFirstCustomersOrThrowArgs } from "./args/FindFirstCustomersOrThrowArgs";
import { Customers } from "../../../models/Customers";
export declare class FindFirstCustomersOrThrowResolver {
    findFirstCustomersOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstCustomersOrThrowArgs): Promise<Customers | null>;
}
