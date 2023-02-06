import { InternalizationOrderByWithAggregationInput } from "../../../inputs/InternalizationOrderByWithAggregationInput";
import { InternalizationScalarWhereWithAggregatesInput } from "../../../inputs/InternalizationScalarWhereWithAggregatesInput";
import { InternalizationWhereInput } from "../../../inputs/InternalizationWhereInput";
export declare class GroupByInternalizationArgs {
    where?: InternalizationWhereInput | undefined;
    orderBy?: InternalizationOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "created_at" | "name" | "region" | "description" | "default" | "website">;
    having?: InternalizationScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
