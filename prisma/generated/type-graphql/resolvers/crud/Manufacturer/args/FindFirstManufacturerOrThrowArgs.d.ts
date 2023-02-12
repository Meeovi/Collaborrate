import { ManufacturerOrderByWithRelationInput } from "../../../inputs/ManufacturerOrderByWithRelationInput";
import { ManufacturerWhereInput } from "../../../inputs/ManufacturerWhereInput";
import { ManufacturerWhereUniqueInput } from "../../../inputs/ManufacturerWhereUniqueInput";
export declare class FindFirstManufacturerOrThrowArgs {
    where?: ManufacturerWhereInput | undefined;
    orderBy?: ManufacturerOrderByWithRelationInput[] | undefined;
    cursor?: ManufacturerWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "created_at" | "code" | "name" | "country" | "state" | "isPublic" | "city" | "product" | "description" | "media" | "products"> | undefined;
}
