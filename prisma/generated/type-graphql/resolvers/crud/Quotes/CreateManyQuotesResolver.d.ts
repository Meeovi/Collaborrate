import { GraphQLResolveInfo } from "graphql";
import { CreateManyQuotesArgs } from "./args/CreateManyQuotesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyQuotesResolver {
    createManyQuotes(ctx: any, info: GraphQLResolveInfo, args: CreateManyQuotesArgs): Promise<AffectedRowsOutput>;
}
