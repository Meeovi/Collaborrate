import { GraphQLResolveInfo } from "graphql";
import { UpsertOneVendorsArgs } from "./args/UpsertOneVendorsArgs";
import { Vendors } from "../../../models/Vendors";
export declare class UpsertOneVendorsResolver {
    upsertOneVendors(ctx: any, info: GraphQLResolveInfo, args: UpsertOneVendorsArgs): Promise<Vendors>;
}
