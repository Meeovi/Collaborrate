import { GraphQLResolveInfo } from "graphql";
import { FindManyQuotesArgs } from "./args/FindManyQuotesArgs";
import { Quotes } from "../../../models/Quotes";
export declare class FindManyQuotesResolver {
    findManyQuotes(ctx: any, info: GraphQLResolveInfo, args: FindManyQuotesArgs): Promise<Quotes[]>;
}
