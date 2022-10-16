import { GraphQLResolveInfo } from "graphql";
import { CreateManyCurrency_symbolsArgs } from "./args/CreateManyCurrency_symbolsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyCurrency_symbolsResolver {
    createManyCurrency_symbols(ctx: any, info: GraphQLResolveInfo, args: CreateManyCurrency_symbolsArgs): Promise<AffectedRowsOutput>;
}
