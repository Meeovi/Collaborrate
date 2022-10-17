import { GraphQLResolveInfo } from "graphql";
import { UpdateOneAnalyticsArgs } from "./args/UpdateOneAnalyticsArgs";
import { Analytics } from "../../../models/Analytics";
export declare class UpdateOneAnalyticsResolver {
    updateOneAnalytics(ctx: any, info: GraphQLResolveInfo, args: UpdateOneAnalyticsArgs): Promise<Analytics | null>;
}
