import { GraphQLResolveInfo } from "graphql";
import { UpsertPagesArgs } from "./args/UpsertPagesArgs";
import { Pages } from "../../../models/Pages";
export declare class UpsertPagesResolver {
    upsertPages(ctx: any, info: GraphQLResolveInfo, args: UpsertPagesArgs): Promise<Pages>;
}
