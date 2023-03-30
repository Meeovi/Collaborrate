import { MediamanagerOrderByWithRelationInput } from "../../../inputs/MediamanagerOrderByWithRelationInput";
import { MediamanagerWhereInput } from "../../../inputs/MediamanagerWhereInput";
import { MediamanagerWhereUniqueInput } from "../../../inputs/MediamanagerWhereUniqueInput";
export declare class FindFirstMediamanagerOrThrowArgs {
    where?: MediamanagerWhereInput | undefined;
    orderBy?: MediamanagerOrderByWithRelationInput[] | undefined;
    cursor?: MediamanagerWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "created_at" | "name" | "description" | "media" | "keywords" | "tags" | "brands" | "status" | "expiration_date" | "copyright" | "dimensions" | "author" | "content_type" | "versions" | "watermark_name" | "watermark_description" | "watermark_media" | "agreements" | "albums" | "comment" | "workspace" | "task_name" | "task_description" | "task_type" | "members" | "products" | "agreements_agreementsTomediamanager" | "brands_brandsTomediamanager" | "comments" | "customers" | "products_mediamanagerToproducts" | "tasks" | "users"> | undefined;
}
