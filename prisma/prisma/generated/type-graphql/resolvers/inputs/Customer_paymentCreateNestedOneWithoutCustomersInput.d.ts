import { Customer_paymentCreateOrConnectWithoutCustomersInput } from "../inputs/Customer_paymentCreateOrConnectWithoutCustomersInput";
import { Customer_paymentCreateWithoutCustomersInput } from "../inputs/Customer_paymentCreateWithoutCustomersInput";
import { Customer_paymentWhereUniqueInput } from "../inputs/Customer_paymentWhereUniqueInput";
export declare class Customer_paymentCreateNestedOneWithoutCustomersInput {
    create?: Customer_paymentCreateWithoutCustomersInput | undefined;
    connectOrCreate?: Customer_paymentCreateOrConnectWithoutCustomersInput | undefined;
    connect?: Customer_paymentWhereUniqueInput | undefined;
}
