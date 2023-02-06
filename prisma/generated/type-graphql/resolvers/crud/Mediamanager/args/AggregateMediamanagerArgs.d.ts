import { MediamanagerOrderByWithRelationInput } from "../../../inputs/MediamanagerOrderByWithRelationInput";
import { MediamanagerWhereInput } from "../../../inputs/MediamanagerWhereInput";
import { MediamanagerWhereUniqueInput } from "../../../inputs/MediamanagerWhereUniqueInput";
export declare class AggregateMediamanagerArgs {
    where?: MediamanagerWhereInput | undefined;
    orderBy?: MediamanagerOrderByWithRelationInput[] | undefined;
    cursor?: MediamanagerWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
