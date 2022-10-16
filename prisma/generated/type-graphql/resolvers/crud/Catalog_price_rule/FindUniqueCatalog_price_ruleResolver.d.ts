import { GraphQLResolveInfo } from "graphql";
import { FindUniqueCatalog_price_ruleArgs } from "./args/FindUniqueCatalog_price_ruleArgs";
import { Catalog_price_rule } from "../../../models/Catalog_price_rule";
export declare class FindUniqueCatalog_price_ruleResolver {
    catalog_price_rule(ctx: any, info: GraphQLResolveInfo, args: FindUniqueCatalog_price_ruleArgs): Promise<Catalog_price_rule | null>;
}
