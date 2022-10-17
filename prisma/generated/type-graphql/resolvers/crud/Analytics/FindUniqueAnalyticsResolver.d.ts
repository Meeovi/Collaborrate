import { GraphQLResolveInfo } from "graphql";
import { FindUniqueAnalyticsArgs } from "./args/FindUniqueAnalyticsArgs";
import { Analytics } from "../../../models/Analytics";
export declare class FindUniqueAnalyticsResolver {
    findUniqueAnalytics(ctx: any, info: GraphQLResolveInfo, args: FindUniqueAnalyticsArgs): Promise<Analytics | null>;
}
