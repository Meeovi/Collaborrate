import { GraphQLResolveInfo } from "graphql";
import { UpsertOnePagesArgs } from "./args/UpsertOnePagesArgs";
import { Pages } from "../../../models/Pages";
export declare class UpsertOnePagesResolver {
    upsertOnePages(ctx: any, info: GraphQLResolveInfo, args: UpsertOnePagesArgs): Promise<Pages>;
}
