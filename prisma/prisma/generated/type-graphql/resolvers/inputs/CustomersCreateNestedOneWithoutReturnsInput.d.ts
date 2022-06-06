import { CustomersCreateOrConnectWithoutReturnsInput } from "../inputs/CustomersCreateOrConnectWithoutReturnsInput";
import { CustomersCreateWithoutReturnsInput } from "../inputs/CustomersCreateWithoutReturnsInput";
import { CustomersWhereUniqueInput } from "../inputs/CustomersWhereUniqueInput";
export declare class CustomersCreateNestedOneWithoutReturnsInput {
    create?: CustomersCreateWithoutReturnsInput | undefined;
    connectOrCreate?: CustomersCreateOrConnectWithoutReturnsInput | undefined;
    connect?: CustomersWhereUniqueInput | undefined;
}
