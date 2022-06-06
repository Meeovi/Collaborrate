import { GraphQLResolveInfo } from "graphql";
import { CreateQuotesArgs } from "./args/CreateQuotesArgs";
import { Quotes } from "../../../models/Quotes";
export declare class CreateQuotesResolver {
    createQuotes(ctx: any, info: GraphQLResolveInfo, args: CreateQuotesArgs): Promise<Quotes>;
}
