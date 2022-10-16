import { GraphQLResolveInfo } from "graphql";
import { CreateManyCurrency_ratesArgs } from "./args/CreateManyCurrency_ratesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyCurrency_ratesResolver {
    createManyCurrency_rates(ctx: any, info: GraphQLResolveInfo, args: CreateManyCurrency_ratesArgs): Promise<AffectedRowsOutput>;
}
