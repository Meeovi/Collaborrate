import { GraphQLResolveInfo } from "graphql";
import { UpdateOneReturnsArgs } from "./args/UpdateOneReturnsArgs";
import { Returns } from "../../../models/Returns";
export declare class UpdateOneReturnsResolver {
    updateOneReturns(ctx: any, info: GraphQLResolveInfo, args: UpdateOneReturnsArgs): Promise<Returns | null>;
}
