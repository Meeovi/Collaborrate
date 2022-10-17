import { GraphQLResolveInfo } from "graphql";
import { UpdateOneCatalog_price_ruleArgs } from "./args/UpdateOneCatalog_price_ruleArgs";
import { Catalog_price_rule } from "../../../models/Catalog_price_rule";
export declare class UpdateOneCatalog_price_ruleResolver {
    updateOneCatalog_price_rule(ctx: any, info: GraphQLResolveInfo, args: UpdateOneCatalog_price_ruleArgs): Promise<Catalog_price_rule | null>;
}
