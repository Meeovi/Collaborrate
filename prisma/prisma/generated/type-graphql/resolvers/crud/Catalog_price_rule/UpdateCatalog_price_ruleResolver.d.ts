import { GraphQLResolveInfo } from "graphql";
import { UpdateCatalog_price_ruleArgs } from "./args/UpdateCatalog_price_ruleArgs";
import { Catalog_price_rule } from "../../../models/Catalog_price_rule";
export declare class UpdateCatalog_price_ruleResolver {
    updateCatalog_price_rule(ctx: any, info: GraphQLResolveInfo, args: UpdateCatalog_price_ruleArgs): Promise<Catalog_price_rule | null>;
}
