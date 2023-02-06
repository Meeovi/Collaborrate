import { GraphQLResolveInfo } from "graphql";
import { FindUniqueVendorsOrThrowArgs } from "./args/FindUniqueVendorsOrThrowArgs";
import { Vendors } from "../../../models/Vendors";
export declare class FindUniqueVendorsOrThrowResolver {
    findUniqueVendorsOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindUniqueVendorsOrThrowArgs): Promise<Vendors | null>;
}
