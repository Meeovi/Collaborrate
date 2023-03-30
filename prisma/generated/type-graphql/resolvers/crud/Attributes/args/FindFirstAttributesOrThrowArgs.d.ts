import { AttributesOrderByWithRelationInput } from "../../../inputs/AttributesOrderByWithRelationInput";
import { AttributesWhereInput } from "../../../inputs/AttributesWhereInput";
import { AttributesWhereUniqueInput } from "../../../inputs/AttributesWhereUniqueInput";
export declare class FindFirstAttributesOrThrowArgs {
    where?: AttributesWhereInput | undefined;
    orderBy?: AttributesOrderByWithRelationInput[] | undefined;
    cursor?: AttributesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "default_label" | "attribute_code" | "filter_options" | "use_search" | "layered_navigation" | "search_results_layered_navigation" | "position" | "promo_rule_conditions" | "allow_html_tags_storefront" | "visible_catalog_pages_storefront" | "used_product_listing" | "used_sorting_product_listing" | "prod_id" | "attribute_class" | "attribute_value" | "column_options" | "faceted_navigation" | "isPublic" | "meta_description" | "meta_name" | "meta_url" | "product_attribute_set" | "products"> | undefined;
}
