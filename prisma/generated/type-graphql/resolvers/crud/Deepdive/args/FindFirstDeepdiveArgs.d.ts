import { DeepdiveOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/DeepdiveOrderByWithRelationAndSearchRelevanceInput";
import { DeepdiveWhereInput } from "../../../inputs/DeepdiveWhereInput";
import { DeepdiveWhereUniqueInput } from "../../../inputs/DeepdiveWhereUniqueInput";
export declare class FindFirstDeepdiveArgs {
    where?: DeepdiveWhereInput | undefined;
    orderBy?: DeepdiveOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: DeepdiveWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "created_at" | "end_date" | "content" | "attendees" | "login" | "start_date" | "whid"> | undefined;
}
