import { GraphQLResolveInfo } from "graphql";
import { UpdateOneQuotesArgs } from "./args/UpdateOneQuotesArgs";
import { Quotes } from "../../../models/Quotes";
export declare class UpdateOneQuotesResolver {
    updateOneQuotes(ctx: any, info: GraphQLResolveInfo, args: UpdateOneQuotesArgs): Promise<Quotes | null>;
}
