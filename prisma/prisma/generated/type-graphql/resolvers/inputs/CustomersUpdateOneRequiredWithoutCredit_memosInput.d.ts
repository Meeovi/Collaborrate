import { CustomersCreateOrConnectWithoutCredit_memosInput } from "../inputs/CustomersCreateOrConnectWithoutCredit_memosInput";
import { CustomersCreateWithoutCredit_memosInput } from "../inputs/CustomersCreateWithoutCredit_memosInput";
import { CustomersUpdateWithoutCredit_memosInput } from "../inputs/CustomersUpdateWithoutCredit_memosInput";
import { CustomersUpsertWithoutCredit_memosInput } from "../inputs/CustomersUpsertWithoutCredit_memosInput";
import { CustomersWhereUniqueInput } from "../inputs/CustomersWhereUniqueInput";
export declare class CustomersUpdateOneRequiredWithoutCredit_memosInput {
    create?: CustomersCreateWithoutCredit_memosInput | undefined;
    connectOrCreate?: CustomersCreateOrConnectWithoutCredit_memosInput | undefined;
    upsert?: CustomersUpsertWithoutCredit_memosInput | undefined;
    connect?: CustomersWhereUniqueInput | undefined;
    update?: CustomersUpdateWithoutCredit_memosInput | undefined;
}
