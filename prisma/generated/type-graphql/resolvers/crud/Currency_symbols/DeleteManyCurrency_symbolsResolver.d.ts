import { GraphQLResolveInfo } from "graphql";
import { DeleteManyCurrency_symbolsArgs } from "./args/DeleteManyCurrency_symbolsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyCurrency_symbolsResolver {
    deleteManyCurrency_symbols(ctx: any, info: GraphQLResolveInfo, args: DeleteManyCurrency_symbolsArgs): Promise<AffectedRowsOutput>;
}
