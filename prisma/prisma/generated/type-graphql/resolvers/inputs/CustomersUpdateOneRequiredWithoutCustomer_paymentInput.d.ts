import { CustomersCreateOrConnectWithoutCustomer_paymentInput } from "../inputs/CustomersCreateOrConnectWithoutCustomer_paymentInput";
import { CustomersCreateWithoutCustomer_paymentInput } from "../inputs/CustomersCreateWithoutCustomer_paymentInput";
import { CustomersUpdateWithoutCustomer_paymentInput } from "../inputs/CustomersUpdateWithoutCustomer_paymentInput";
import { CustomersUpsertWithoutCustomer_paymentInput } from "../inputs/CustomersUpsertWithoutCustomer_paymentInput";
import { CustomersWhereUniqueInput } from "../inputs/CustomersWhereUniqueInput";
export declare class CustomersUpdateOneRequiredWithoutCustomer_paymentInput {
    create?: CustomersCreateWithoutCustomer_paymentInput | undefined;
    connectOrCreate?: CustomersCreateOrConnectWithoutCustomer_paymentInput | undefined;
    upsert?: CustomersUpsertWithoutCustomer_paymentInput | undefined;
    connect?: CustomersWhereUniqueInput | undefined;
    update?: CustomersUpdateWithoutCustomer_paymentInput | undefined;
}
