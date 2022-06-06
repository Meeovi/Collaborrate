import { CustomersCreateOrConnectWithoutEmailsInput } from "../inputs/CustomersCreateOrConnectWithoutEmailsInput";
import { CustomersCreateWithoutEmailsInput } from "../inputs/CustomersCreateWithoutEmailsInput";
import { CustomersWhereUniqueInput } from "../inputs/CustomersWhereUniqueInput";
export declare class CustomersCreateNestedOneWithoutEmailsInput {
    create?: CustomersCreateWithoutEmailsInput | undefined;
    connectOrCreate?: CustomersCreateOrConnectWithoutEmailsInput | undefined;
    connect?: CustomersWhereUniqueInput | undefined;
}
