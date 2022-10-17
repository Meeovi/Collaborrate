import { GraphQLResolveInfo } from "graphql";
import { FindManyAnalyticsArgs } from "./args/FindManyAnalyticsArgs";
import { Analytics } from "../../../models/Analytics";
export declare class FindManyAnalyticsResolver {
    findManyAnalytics(ctx: any, info: GraphQLResolveInfo, args: FindManyAnalyticsArgs): Promise<Analytics[]>;
}
