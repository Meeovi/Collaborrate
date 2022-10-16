import { GraphQLResolveInfo } from "graphql";
import { FindFirstQuotesArgs } from "./args/FindFirstQuotesArgs";
import { Quotes } from "../../../models/Quotes";
export declare class FindFirstQuotesResolver {
    findFirstQuotes(ctx: any, info: GraphQLResolveInfo, args: FindFirstQuotesArgs): Promise<Quotes | null>;
}
