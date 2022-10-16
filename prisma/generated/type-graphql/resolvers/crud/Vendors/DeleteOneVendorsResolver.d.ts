import { GraphQLResolveInfo } from "graphql";
import { DeleteOneVendorsArgs } from "./args/DeleteOneVendorsArgs";
import { Vendors } from "../../../models/Vendors";
export declare class DeleteOneVendorsResolver {
    deleteOneVendors(ctx: any, info: GraphQLResolveInfo, args: DeleteOneVendorsArgs): Promise<Vendors | null>;
}
