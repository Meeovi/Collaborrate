import { CustomersCreateOrConnectWithoutReturnsInput } from "../inputs/CustomersCreateOrConnectWithoutReturnsInput";
import { CustomersCreateWithoutReturnsInput } from "../inputs/CustomersCreateWithoutReturnsInput";
import { CustomersUpdateWithoutReturnsInput } from "../inputs/CustomersUpdateWithoutReturnsInput";
import { CustomersUpsertWithoutReturnsInput } from "../inputs/CustomersUpsertWithoutReturnsInput";
import { CustomersWhereUniqueInput } from "../inputs/CustomersWhereUniqueInput";
export declare class CustomersUpdateOneRequiredWithoutReturnsInput {
    create?: CustomersCreateWithoutReturnsInput | undefined;
    connectOrCreate?: CustomersCreateOrConnectWithoutReturnsInput | undefined;
    upsert?: CustomersUpsertWithoutReturnsInput | undefined;
    connect?: CustomersWhereUniqueInput | undefined;
    update?: CustomersUpdateWithoutReturnsInput | undefined;
}
