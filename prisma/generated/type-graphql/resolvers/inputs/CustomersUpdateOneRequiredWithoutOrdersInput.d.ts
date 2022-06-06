import { CustomersCreateOrConnectWithoutOrdersInput } from "../inputs/CustomersCreateOrConnectWithoutOrdersInput";
import { CustomersCreateWithoutOrdersInput } from "../inputs/CustomersCreateWithoutOrdersInput";
import { CustomersUpdateWithoutOrdersInput } from "../inputs/CustomersUpdateWithoutOrdersInput";
import { CustomersUpsertWithoutOrdersInput } from "../inputs/CustomersUpsertWithoutOrdersInput";
import { CustomersWhereUniqueInput } from "../inputs/CustomersWhereUniqueInput";
export declare class CustomersUpdateOneRequiredWithoutOrdersInput {
    create?: CustomersCreateWithoutOrdersInput | undefined;
    connectOrCreate?: CustomersCreateOrConnectWithoutOrdersInput | undefined;
    upsert?: CustomersUpsertWithoutOrdersInput | undefined;
    connect?: CustomersWhereUniqueInput | undefined;
    update?: CustomersUpdateWithoutOrdersInput | undefined;
}
