import { GraphQLResolveInfo } from "graphql";
import { UpdateManyCurrency_symbolsArgs } from "./args/UpdateManyCurrency_symbolsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyCurrency_symbolsResolver {
    updateManyCurrency_symbols(ctx: any, info: GraphQLResolveInfo, args: UpdateManyCurrency_symbolsArgs): Promise<AffectedRowsOutput>;
}
