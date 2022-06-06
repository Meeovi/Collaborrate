import { GraphQLResolveInfo } from "graphql";
import { UpsertQuotesArgs } from "./args/UpsertQuotesArgs";
import { Quotes } from "../../../models/Quotes";
export declare class UpsertQuotesResolver {
    upsertQuotes(ctx: any, info: GraphQLResolveInfo, args: UpsertQuotesArgs): Promise<Quotes>;
}
