import { ManufacturerOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/ManufacturerOrderByWithRelationAndSearchRelevanceInput";
import { ManufacturerWhereInput } from "../../../inputs/ManufacturerWhereInput";
import { ManufacturerWhereUniqueInput } from "../../../inputs/ManufacturerWhereUniqueInput";
export declare class FindFirstManufacturerArgs {
    where?: ManufacturerWhereInput | undefined;
    orderBy?: ManufacturerOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: ManufacturerWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "created_at" | "code" | "name" | "country" | "state" | "isPublic" | "city" | "product" | "description" | "media" | "products"> | undefined;
}
