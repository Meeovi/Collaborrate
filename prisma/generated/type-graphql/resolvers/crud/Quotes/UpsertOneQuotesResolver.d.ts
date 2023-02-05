import { GraphQLResolveInfo } from "graphql";
import { UpsertOneQuotesArgs } from "./args/UpsertOneQuotesArgs";
import { Quotes } from "../../../models/Quotes";
export declare class UpsertOneQuotesResolver {
    upsertOneQuotes(ctx: any, info: GraphQLResolveInfo, args: UpsertOneQuotesArgs): Promise<Quotes>;
}
