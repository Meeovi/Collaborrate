import { GraphQLResolveInfo } from "graphql";
import { UpsertOneCatalog_price_ruleArgs } from "./args/UpsertOneCatalog_price_ruleArgs";
import { Catalog_price_rule } from "../../../models/Catalog_price_rule";
export declare class UpsertOneCatalog_price_ruleResolver {
    upsertOneCatalog_price_rule(ctx: any, info: GraphQLResolveInfo, args: UpsertOneCatalog_price_ruleArgs): Promise<Catalog_price_rule>;
}
