import { GraphQLResolveInfo } from "graphql";
import { FindFirstAnalyticsArgs } from "./args/FindFirstAnalyticsArgs";
import { Analytics } from "../../../models/Analytics";
export declare class FindFirstAnalyticsResolver {
    findFirstAnalytics(ctx: any, info: GraphQLResolveInfo, args: FindFirstAnalyticsArgs): Promise<Analytics | null>;
}
