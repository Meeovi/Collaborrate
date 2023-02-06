import { InternalizationOrderByWithRelationInput } from "../../../inputs/InternalizationOrderByWithRelationInput";
import { InternalizationWhereInput } from "../../../inputs/InternalizationWhereInput";
import { InternalizationWhereUniqueInput } from "../../../inputs/InternalizationWhereUniqueInput";
export declare class FindFirstInternalizationArgs {
    where?: InternalizationWhereInput | undefined;
    orderBy?: InternalizationOrderByWithRelationInput[] | undefined;
    cursor?: InternalizationWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "created_at" | "name" | "region" | "description" | "default" | "website"> | undefined;
}
