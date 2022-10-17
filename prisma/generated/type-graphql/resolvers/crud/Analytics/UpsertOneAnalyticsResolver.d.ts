import { GraphQLResolveInfo } from "graphql";
import { UpsertOneAnalyticsArgs } from "./args/UpsertOneAnalyticsArgs";
import { Analytics } from "../../../models/Analytics";
export declare class UpsertOneAnalyticsResolver {
    upsertOneAnalytics(ctx: any, info: GraphQLResolveInfo, args: UpsertOneAnalyticsArgs): Promise<Analytics>;
}
