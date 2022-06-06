import { CustomersCreateOrConnectWithoutCustomer_paymentInput } from "../inputs/CustomersCreateOrConnectWithoutCustomer_paymentInput";
import { CustomersCreateWithoutCustomer_paymentInput } from "../inputs/CustomersCreateWithoutCustomer_paymentInput";
import { CustomersWhereUniqueInput } from "../inputs/CustomersWhereUniqueInput";
export declare class CustomersCreateNestedOneWithoutCustomer_paymentInput {
    create?: CustomersCreateWithoutCustomer_paymentInput | undefined;
    connectOrCreate?: CustomersCreateOrConnectWithoutCustomer_paymentInput | undefined;
    connect?: CustomersWhereUniqueInput | undefined;
}
