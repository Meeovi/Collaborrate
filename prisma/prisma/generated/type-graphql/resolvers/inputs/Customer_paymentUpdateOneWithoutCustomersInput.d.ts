import { Customer_paymentCreateOrConnectWithoutCustomersInput } from "../inputs/Customer_paymentCreateOrConnectWithoutCustomersInput";
import { Customer_paymentCreateWithoutCustomersInput } from "../inputs/Customer_paymentCreateWithoutCustomersInput";
import { Customer_paymentUpdateWithoutCustomersInput } from "../inputs/Customer_paymentUpdateWithoutCustomersInput";
import { Customer_paymentUpsertWithoutCustomersInput } from "../inputs/Customer_paymentUpsertWithoutCustomersInput";
import { Customer_paymentWhereUniqueInput } from "../inputs/Customer_paymentWhereUniqueInput";
export declare class Customer_paymentUpdateOneWithoutCustomersInput {
    create?: Customer_paymentCreateWithoutCustomersInput | undefined;
    connectOrCreate?: Customer_paymentCreateOrConnectWithoutCustomersInput | undefined;
    upsert?: Customer_paymentUpsertWithoutCustomersInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: Customer_paymentWhereUniqueInput | undefined;
    update?: Customer_paymentUpdateWithoutCustomersInput | undefined;
}
