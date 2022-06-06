import { GraphQLResolveInfo } from "graphql";
import { DeleteReturnsArgs } from "./args/DeleteReturnsArgs";
import { Returns } from "../../../models/Returns";
export declare class DeleteReturnsResolver {
    deleteReturns(ctx: any, info: GraphQLResolveInfo, args: DeleteReturnsArgs): Promise<Returns | null>;
}
