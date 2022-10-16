import { GraphQLResolveInfo } from "graphql";
import { UpdateManyCatalog_price_ruleArgs } from "./args/UpdateManyCatalog_price_ruleArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyCatalog_price_ruleResolver {
    updateManyCatalog_price_rule(ctx: any, info: GraphQLResolveInfo, args: UpdateManyCatalog_price_ruleArgs): Promise<AffectedRowsOutput>;
}
