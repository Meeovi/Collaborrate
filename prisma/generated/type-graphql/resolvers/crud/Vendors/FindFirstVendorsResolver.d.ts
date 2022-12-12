import { GraphQLResolveInfo } from "graphql";
import { FindFirstVendorsArgs } from "./args/FindFirstVendorsArgs";
import { Vendors } from "../../../models/Vendors";
export declare class FindFirstVendorsResolver {
    findFirstVendors(ctx: any, info: GraphQLResolveInfo, args: FindFirstVendorsArgs): Promise<Vendors | null>;
}
