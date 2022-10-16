import { GraphQLResolveInfo } from "graphql";
import { CreateOneAnalyticsArgs } from "./args/CreateOneAnalyticsArgs";
import { Analytics } from "../../../models/Analytics";
export declare class CreateOneAnalyticsResolver {
    createOneAnalytics(ctx: any, info: GraphQLResolveInfo, args: CreateOneAnalyticsArgs): Promise<Analytics>;
}
