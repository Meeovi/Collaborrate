import { OotoOrderByWithRelationInput } from "../../../inputs/OotoOrderByWithRelationInput";
import { OotoWhereInput } from "../../../inputs/OotoWhereInput";
import { OotoWhereUniqueInput } from "../../../inputs/OotoWhereUniqueInput";
export declare class FindFirstOotoArgs {
    where?: OotoWhereInput | undefined;
    orderBy?: OotoOrderByWithRelationInput[] | undefined;
    cursor?: OotoWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "created_at" | "login" | "start_date" | "end_date" | "note" | "using_time" | "location"> | undefined;
}
