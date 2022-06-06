import { Upload_file_morphAvgOrderByAggregateInput } from "../inputs/Upload_file_morphAvgOrderByAggregateInput";
import { Upload_file_morphCountOrderByAggregateInput } from "../inputs/Upload_file_morphCountOrderByAggregateInput";
import { Upload_file_morphMaxOrderByAggregateInput } from "../inputs/Upload_file_morphMaxOrderByAggregateInput";
import { Upload_file_morphMinOrderByAggregateInput } from "../inputs/Upload_file_morphMinOrderByAggregateInput";
import { Upload_file_morphSumOrderByAggregateInput } from "../inputs/Upload_file_morphSumOrderByAggregateInput";
export declare class Upload_file_morphOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    upload_file_id?: "asc" | "desc" | undefined;
    related_id?: "asc" | "desc" | undefined;
    related_type?: "asc" | "desc" | undefined;
    field?: "asc" | "desc" | undefined;
    order?: "asc" | "desc" | undefined;
    _count?: Upload_file_morphCountOrderByAggregateInput | undefined;
    _avg?: Upload_file_morphAvgOrderByAggregateInput | undefined;
    _max?: Upload_file_morphMaxOrderByAggregateInput | undefined;
    _min?: Upload_file_morphMinOrderByAggregateInput | undefined;
    _sum?: Upload_file_morphSumOrderByAggregateInput | undefined;
}
