import { GraphQLResolveInfo } from "graphql";
import { FindUniqueVendorsArgs } from "./args/FindUniqueVendorsArgs";
import { Vendors } from "../../../models/Vendors";
export declare class FindUniqueVendorsResolver {
    findUniqueVendors(ctx: any, info: GraphQLResolveInfo, args: FindUniqueVendorsArgs): Promise<Vendors | null>;
}
