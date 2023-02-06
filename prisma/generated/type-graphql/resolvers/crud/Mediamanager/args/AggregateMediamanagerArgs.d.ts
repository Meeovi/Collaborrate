import { MediamanagerOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/MediamanagerOrderByWithRelationAndSearchRelevanceInput";
import { MediamanagerWhereInput } from "../../../inputs/MediamanagerWhereInput";
import { MediamanagerWhereUniqueInput } from "../../../inputs/MediamanagerWhereUniqueInput";
export declare class AggregateMediamanagerArgs {
    where?: MediamanagerWhereInput | undefined;
    orderBy?: MediamanagerOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: MediamanagerWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
