import { GraphQLResolveInfo } from "graphql";
import { UpdateOneVendorsArgs } from "./args/UpdateOneVendorsArgs";
import { Vendors } from "../../../models/Vendors";
export declare class UpdateOneVendorsResolver {
    updateOneVendors(ctx: any, info: GraphQLResolveInfo, args: UpdateOneVendorsArgs): Promise<Vendors | null>;
}
