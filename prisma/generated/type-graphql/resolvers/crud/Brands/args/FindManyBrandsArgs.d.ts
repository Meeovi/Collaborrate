import { BrandsOrderByWithRelationInput } from "../../../inputs/BrandsOrderByWithRelationInput";
import { BrandsWhereInput } from "../../../inputs/BrandsWhereInput";
import { BrandsWhereUniqueInput } from "../../../inputs/BrandsWhereUniqueInput";
export declare class FindManyBrandsArgs {
    where?: BrandsWhereInput | undefined;
    orderBy?: BrandsOrderByWithRelationInput[] | undefined;
    cursor?: BrandsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "created_at" | "code" | "name" | "country" | "state" | "isPublic" | "city" | "product" | "description" | "media" | "mediamanager" | "products" | "workspaces"> | undefined;
}
