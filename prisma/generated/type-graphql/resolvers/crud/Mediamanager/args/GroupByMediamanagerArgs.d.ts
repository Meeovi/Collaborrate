import { MediamanagerOrderByWithAggregationInput } from "../../../inputs/MediamanagerOrderByWithAggregationInput";
import { MediamanagerScalarWhereWithAggregatesInput } from "../../../inputs/MediamanagerScalarWhereWithAggregatesInput";
import { MediamanagerWhereInput } from "../../../inputs/MediamanagerWhereInput";
export declare class GroupByMediamanagerArgs {
    where?: MediamanagerWhereInput | undefined;
    orderBy?: MediamanagerOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "created_at" | "name" | "description" | "media" | "keywords" | "tags" | "brands" | "status" | "expiration_date" | "copyright" | "dimensions" | "author" | "content_type" | "versions" | "watermark_name" | "watermark_description" | "watermark_media" | "agreements" | "albums" | "comment" | "workspace" | "task_name" | "task_description" | "task_type" | "members" | "products" | "agreements_agreementsTomediamanager" | "brands_brandsTomediamanager" | "comments" | "customers" | "products_mediamanagerToproducts" | "tasks" | "users">;
    having?: MediamanagerScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
