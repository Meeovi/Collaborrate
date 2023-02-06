import { GraphQLResolveInfo } from "graphql";
import { FindFirstPagesArgs } from "./args/FindFirstPagesArgs";
import { Pages } from "../../../models/Pages";
export declare class FindFirstPagesResolver {
    findFirstPages(ctx: any, info: GraphQLResolveInfo, args: FindFirstPagesArgs): Promise<Pages | null>;
}
