import { GraphQLResolveInfo } from "graphql";
import { UpsertOneCitiesArgs } from "./args/UpsertOneCitiesArgs";
import { Cities } from "../../../models/Cities";
export declare class UpsertOneCitiesResolver {
    upsertOneCities(ctx: any, info: GraphQLResolveInfo, args: UpsertOneCitiesArgs): Promise<Cities>;
}
