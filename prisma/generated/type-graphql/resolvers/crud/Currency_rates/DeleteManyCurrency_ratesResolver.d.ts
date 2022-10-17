import { GraphQLResolveInfo } from "graphql";
import { DeleteManyCurrency_ratesArgs } from "./args/DeleteManyCurrency_ratesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyCurrency_ratesResolver {
    deleteManyCurrency_rates(ctx: any, info: GraphQLResolveInfo, args: DeleteManyCurrency_ratesArgs): Promise<AffectedRowsOutput>;
}
