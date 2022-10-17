import { DigiboardOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/DigiboardOrderByWithRelationAndSearchRelevanceInput";
import { DigiboardWhereInput } from "../../../inputs/DigiboardWhereInput";
import { DigiboardWhereUniqueInput } from "../../../inputs/DigiboardWhereUniqueInput";
export declare class FindManyDigiboardArgs {
    where?: DigiboardWhereInput | undefined;
    orderBy?: DigiboardOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: DigiboardWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "name" | "board" | "created_at" | "student" | "course"> | undefined;
}
