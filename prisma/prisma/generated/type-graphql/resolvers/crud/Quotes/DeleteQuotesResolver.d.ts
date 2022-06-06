import { GraphQLResolveInfo } from "graphql";
import { DeleteQuotesArgs } from "./args/DeleteQuotesArgs";
import { Quotes } from "../../../models/Quotes";
export declare class DeleteQuotesResolver {
    deleteQuotes(ctx: any, info: GraphQLResolveInfo, args: DeleteQuotesArgs): Promise<Quotes | null>;
}
