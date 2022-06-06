import { CustomersCreateOrConnectWithoutOrdersInput } from "../inputs/CustomersCreateOrConnectWithoutOrdersInput";
import { CustomersCreateWithoutOrdersInput } from "../inputs/CustomersCreateWithoutOrdersInput";
import { CustomersWhereUniqueInput } from "../inputs/CustomersWhereUniqueInput";
export declare class CustomersCreateNestedOneWithoutOrdersInput {
    create?: CustomersCreateWithoutOrdersInput | undefined;
    connectOrCreate?: CustomersCreateOrConnectWithoutOrdersInput | undefined;
    connect?: CustomersWhereUniqueInput | undefined;
}
