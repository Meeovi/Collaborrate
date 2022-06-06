import { GraphQLResolveInfo } from "graphql";
import { DeletePagesArgs } from "./args/DeletePagesArgs";
import { Pages } from "../../../models/Pages";
export declare class DeletePagesResolver {
    deletePages(ctx: any, info: GraphQLResolveInfo, args: DeletePagesArgs): Promise<Pages | null>;
}
