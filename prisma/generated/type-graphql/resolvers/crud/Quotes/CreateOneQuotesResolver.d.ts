import { GraphQLResolveInfo } from "graphql";
import { CreateOneQuotesArgs } from "./args/CreateOneQuotesArgs";
import { Quotes } from "../../../models/Quotes";
export declare class CreateOneQuotesResolver {
    createOneQuotes(ctx: any, info: GraphQLResolveInfo, args: CreateOneQuotesArgs): Promise<Quotes>;
}
