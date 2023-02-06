import { GraphQLResolveInfo } from "graphql";
import { FindUniqueQuotesArgs } from "./args/FindUniqueQuotesArgs";
import { Quotes } from "../../../models/Quotes";
export declare class FindUniqueQuotesResolver {
    findUniqueQuotes(ctx: any, info: GraphQLResolveInfo, args: FindUniqueQuotesArgs): Promise<Quotes | null>;
}
