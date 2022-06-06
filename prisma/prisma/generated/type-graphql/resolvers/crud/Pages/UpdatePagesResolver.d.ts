import { GraphQLResolveInfo } from "graphql";
import { UpdatePagesArgs } from "./args/UpdatePagesArgs";
import { Pages } from "../../../models/Pages";
export declare class UpdatePagesResolver {
    updatePages(ctx: any, info: GraphQLResolveInfo, args: UpdatePagesArgs): Promise<Pages | null>;
}
