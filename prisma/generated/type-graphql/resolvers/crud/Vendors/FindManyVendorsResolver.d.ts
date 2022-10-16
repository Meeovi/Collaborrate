import { GraphQLResolveInfo } from "graphql";
import { FindManyVendorsArgs } from "./args/FindManyVendorsArgs";
import { Vendors } from "../../../models/Vendors";
export declare class FindManyVendorsResolver {
    findManyVendors(ctx: any, info: GraphQLResolveInfo, args: FindManyVendorsArgs): Promise<Vendors[]>;
}
