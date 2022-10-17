import { GraphQLResolveInfo } from "graphql";
import { GroupByCatalog_price_ruleArgs } from "./args/GroupByCatalog_price_ruleArgs";
import { Catalog_price_ruleGroupBy } from "../../outputs/Catalog_price_ruleGroupBy";
export declare class GroupByCatalog_price_ruleResolver {
    groupByCatalog_price_rule(ctx: any, info: GraphQLResolveInfo, args: GroupByCatalog_price_ruleArgs): Promise<Catalog_price_ruleGroupBy[]>;
}
