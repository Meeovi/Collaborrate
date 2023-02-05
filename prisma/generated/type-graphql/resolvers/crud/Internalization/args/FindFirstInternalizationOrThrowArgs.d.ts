import { InternalizationOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/InternalizationOrderByWithRelationAndSearchRelevanceInput";
import { InternalizationWhereInput } from "../../../inputs/InternalizationWhereInput";
import { InternalizationWhereUniqueInput } from "../../../inputs/InternalizationWhereUniqueInput";
export declare class FindFirstInternalizationOrThrowArgs {
    where?: InternalizationWhereInput | undefined;
    orderBy?: InternalizationOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: InternalizationWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "created_at" | "name" | "region" | "description" | "default" | "website"> | undefined;
}
