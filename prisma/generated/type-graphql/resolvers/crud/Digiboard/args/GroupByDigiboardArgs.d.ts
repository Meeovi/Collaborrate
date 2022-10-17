import { DigiboardOrderByWithAggregationInput } from "../../../inputs/DigiboardOrderByWithAggregationInput";
import { DigiboardScalarWhereWithAggregatesInput } from "../../../inputs/DigiboardScalarWhereWithAggregatesInput";
import { DigiboardWhereInput } from "../../../inputs/DigiboardWhereInput";
export declare class GroupByDigiboardArgs {
    where?: DigiboardWhereInput | undefined;
    orderBy?: DigiboardOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "name" | "board" | "created_at" | "student" | "course">;
    having?: DigiboardScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
