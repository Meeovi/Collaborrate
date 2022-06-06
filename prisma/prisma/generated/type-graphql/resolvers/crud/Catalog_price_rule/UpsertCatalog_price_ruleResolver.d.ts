import { GraphQLResolveInfo } from "graphql";
import { UpsertCatalog_price_ruleArgs } from "./args/UpsertCatalog_price_ruleArgs";
import { Catalog_price_rule } from "../../../models/Catalog_price_rule";
export declare class UpsertCatalog_price_ruleResolver {
    upsertCatalog_price_rule(ctx: any, info: GraphQLResolveInfo, args: UpsertCatalog_price_ruleArgs): Promise<Catalog_price_rule>;
}
