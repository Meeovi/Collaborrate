import { GraphQLResolveInfo } from "graphql";
import { UpdateManyCurrency_ratesArgs } from "./args/UpdateManyCurrency_ratesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyCurrency_ratesResolver {
    updateManyCurrency_rates(ctx: any, info: GraphQLResolveInfo, args: UpdateManyCurrency_ratesArgs): Promise<AffectedRowsOutput>;
}
