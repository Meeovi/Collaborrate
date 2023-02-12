import { ApitokenOrderByWithRelationInput } from "../../../inputs/ApitokenOrderByWithRelationInput";
import { ApitokenWhereInput } from "../../../inputs/ApitokenWhereInput";
import { ApitokenWhereUniqueInput } from "../../../inputs/ApitokenWhereUniqueInput";
export declare class FindFirstApitokenArgs {
    where?: ApitokenWhereInput | undefined;
    orderBy?: ApitokenOrderByWithRelationInput[] | undefined;
    cursor?: ApitokenWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "created_at" | "name" | "token_type" | "description" | "token"> | undefined;
}
