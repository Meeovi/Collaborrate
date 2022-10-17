import { GraphQLResolveInfo } from "graphql";
import { DeleteOneAnalyticsArgs } from "./args/DeleteOneAnalyticsArgs";
import { Analytics } from "../../../models/Analytics";
export declare class DeleteOneAnalyticsResolver {
    deleteOneAnalytics(ctx: any, info: GraphQLResolveInfo, args: DeleteOneAnalyticsArgs): Promise<Analytics | null>;
}
