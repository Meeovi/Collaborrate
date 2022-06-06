import { GraphQLResolveInfo } from "graphql";
import { UpdateReturnsArgs } from "./args/UpdateReturnsArgs";
import { Returns } from "../../../models/Returns";
export declare class UpdateReturnsResolver {
    updateReturns(ctx: any, info: GraphQLResolveInfo, args: UpdateReturnsArgs): Promise<Returns | null>;
}
