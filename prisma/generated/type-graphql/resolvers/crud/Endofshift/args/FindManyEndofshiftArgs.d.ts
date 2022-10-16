import { EndofshiftOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/EndofshiftOrderByWithRelationAndSearchRelevanceInput";
import { EndofshiftWhereInput } from "../../../inputs/EndofshiftWhereInput";
import { EndofshiftWhereUniqueInput } from "../../../inputs/EndofshiftWhereUniqueInput";
export declare class FindManyEndofshiftArgs {
    where?: EndofshiftWhereInput | undefined;
    orderBy?: EndofshiftOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: EndofshiftWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "created_at" | "content" | "login" | "mcms" | "next_shift" | "projects" | "tickets" | "whid"> | undefined;
}
