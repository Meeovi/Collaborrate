import { GraphQLResolveInfo } from "graphql";
import { UpdateQuotesArgs } from "./args/UpdateQuotesArgs";
import { Quotes } from "../../../models/Quotes";
export declare class UpdateQuotesResolver {
    updateQuotes(ctx: any, info: GraphQLResolveInfo, args: UpdateQuotesArgs): Promise<Quotes | null>;
}
