import { GraphQLResolveInfo } from "graphql";
import { FindFirstCatalog_price_ruleArgs } from "./args/FindFirstCatalog_price_ruleArgs";
import { Catalog_price_rule } from "../../../models/Catalog_price_rule";
export declare class FindFirstCatalog_price_ruleResolver {
    findFirstCatalog_price_rule(ctx: any, info: GraphQLResolveInfo, args: FindFirstCatalog_price_ruleArgs): Promise<Catalog_price_rule | null>;
}
