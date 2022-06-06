import { CustomersCreateNestedOneWithoutCommentsInput } from "../inputs/CustomersCreateNestedOneWithoutCommentsInput";
export declare class CommentsCreateInput {
    customer_name: string;
    description?: string | undefined;
    image?: string | undefined;
    response?: string | undefined;
    published?: Date | undefined;
    customers?: CustomersCreateNestedOneWithoutCommentsInput | undefined;
}
