import { CustomersCreateOrConnectWithoutCommentsInput } from "../inputs/CustomersCreateOrConnectWithoutCommentsInput";
import { CustomersCreateWithoutCommentsInput } from "../inputs/CustomersCreateWithoutCommentsInput";
import { CustomersWhereUniqueInput } from "../inputs/CustomersWhereUniqueInput";
export declare class CustomersCreateNestedOneWithoutCommentsInput {
    create?: CustomersCreateWithoutCommentsInput | undefined;
    connectOrCreate?: CustomersCreateOrConnectWithoutCommentsInput | undefined;
    connect?: CustomersWhereUniqueInput | undefined;
}
