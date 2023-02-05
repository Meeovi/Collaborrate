import { GraphQLResolveInfo } from "graphql";
import { FindFirstVendorsOrThrowArgs } from "./args/FindFirstVendorsOrThrowArgs";
import { Vendors } from "../../../models/Vendors";
export declare class FindFirstVendorsOrThrowResolver {
    findFirstVendorsOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstVendorsOrThrowArgs): Promise<Vendors | null>;
}
