import { GraphQLResolveInfo } from "graphql";
import { FindManyCatalog_price_ruleArgs } from "./args/FindManyCatalog_price_ruleArgs";
import { Catalog_price_rule } from "../../../models/Catalog_price_rule";
export declare class FindManyCatalog_price_ruleResolver {
    catalog_price_rules(ctx: any, info: GraphQLResolveInfo, args: FindManyCatalog_price_ruleArgs): Promise<Catalog_price_rule[]>;
}
