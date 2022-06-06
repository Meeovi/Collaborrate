import { GraphQLResolveInfo } from "graphql";
import { DeleteManyCatalog_price_ruleArgs } from "./args/DeleteManyCatalog_price_ruleArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyCatalog_price_ruleResolver {
    deleteManyCatalog_price_rule(ctx: any, info: GraphQLResolveInfo, args: DeleteManyCatalog_price_ruleArgs): Promise<AffectedRowsOutput>;
}
