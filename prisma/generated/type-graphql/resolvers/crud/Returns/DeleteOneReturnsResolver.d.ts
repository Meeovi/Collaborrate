import { GraphQLResolveInfo } from "graphql";
import { DeleteOneReturnsArgs } from "./args/DeleteOneReturnsArgs";
import { Returns } from "../../../models/Returns";
export declare class DeleteOneReturnsResolver {
    deleteOneReturns(ctx: any, info: GraphQLResolveInfo, args: DeleteOneReturnsArgs): Promise<Returns | null>;
}
