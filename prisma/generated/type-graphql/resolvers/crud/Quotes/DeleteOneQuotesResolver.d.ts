import { GraphQLResolveInfo } from "graphql";
import { DeleteOneQuotesArgs } from "./args/DeleteOneQuotesArgs";
import { Quotes } from "../../../models/Quotes";
export declare class DeleteOneQuotesResolver {
    deleteOneQuotes(ctx: any, info: GraphQLResolveInfo, args: DeleteOneQuotesArgs): Promise<Quotes | null>;
}
