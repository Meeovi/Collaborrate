import { GraphQLResolveInfo } from "graphql";
import { CreateOneCatalog_price_ruleArgs } from "./args/CreateOneCatalog_price_ruleArgs";
import { Catalog_price_rule } from "../../../models/Catalog_price_rule";
export declare class CreateOneCatalog_price_ruleResolver {
    createOneCatalog_price_rule(ctx: any, info: GraphQLResolveInfo, args: CreateOneCatalog_price_ruleArgs): Promise<Catalog_price_rule>;
}
