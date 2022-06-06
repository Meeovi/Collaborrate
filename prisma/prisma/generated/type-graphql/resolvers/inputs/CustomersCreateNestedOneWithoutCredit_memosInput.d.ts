import { CustomersCreateOrConnectWithoutCredit_memosInput } from "../inputs/CustomersCreateOrConnectWithoutCredit_memosInput";
import { CustomersCreateWithoutCredit_memosInput } from "../inputs/CustomersCreateWithoutCredit_memosInput";
import { CustomersWhereUniqueInput } from "../inputs/CustomersWhereUniqueInput";
export declare class CustomersCreateNestedOneWithoutCredit_memosInput {
    create?: CustomersCreateWithoutCredit_memosInput | undefined;
    connectOrCreate?: CustomersCreateOrConnectWithoutCredit_memosInput | undefined;
    connect?: CustomersWhereUniqueInput | undefined;
}
