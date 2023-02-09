import { GraphQLResolveInfo } from "graphql";
import { FindUniqueQuotesOrThrowArgs } from "./args/FindUniqueQuotesOrThrowArgs";
import { Quotes } from "../../../models/Quotes";
export declare class FindUniqueQuotesOrThrowResolver {
    findUniqueQuotesOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindUniqueQuotesOrThrowArgs): Promise<Quotes | null>;
}
