import { GraphQLResolveInfo } from "graphql";
import { CreateOneVendorsArgs } from "./args/CreateOneVendorsArgs";
import { Vendors } from "../../../models/Vendors";
export declare class CreateOneVendorsResolver {
    createOneVendors(ctx: any, info: GraphQLResolveInfo, args: CreateOneVendorsArgs): Promise<Vendors>;
}
