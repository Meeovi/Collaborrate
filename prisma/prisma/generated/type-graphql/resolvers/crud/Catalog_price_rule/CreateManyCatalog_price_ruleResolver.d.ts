import { GraphQLResolveInfo } from "graphql";
import { CreateManyCatalog_price_ruleArgs } from "./args/CreateManyCatalog_price_ruleArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyCatalog_price_ruleResolver {
    createManyCatalog_price_rule(ctx: any, info: GraphQLResolveInfo, args: CreateManyCatalog_price_ruleArgs): Promise<AffectedRowsOutput>;
}
