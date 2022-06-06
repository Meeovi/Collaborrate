import { CustomersCreateOrConnectWithoutQuotesInput } from "../inputs/CustomersCreateOrConnectWithoutQuotesInput";
import { CustomersCreateWithoutQuotesInput } from "../inputs/CustomersCreateWithoutQuotesInput";
import { CustomersWhereUniqueInput } from "../inputs/CustomersWhereUniqueInput";
export declare class CustomersCreateNestedOneWithoutQuotesInput {
    create?: CustomersCreateWithoutQuotesInput | undefined;
    connectOrCreate?: CustomersCreateOrConnectWithoutQuotesInput | undefined;
    connect?: CustomersWhereUniqueInput | undefined;
}
