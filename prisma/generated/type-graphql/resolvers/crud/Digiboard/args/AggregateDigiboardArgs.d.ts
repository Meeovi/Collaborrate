import { DigiboardOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/DigiboardOrderByWithRelationAndSearchRelevanceInput";
import { DigiboardWhereInput } from "../../../inputs/DigiboardWhereInput";
import { DigiboardWhereUniqueInput } from "../../../inputs/DigiboardWhereUniqueInput";
export declare class AggregateDigiboardArgs {
    where?: DigiboardWhereInput | undefined;
    orderBy?: DigiboardOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: DigiboardWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
