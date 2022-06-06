import { CustomersCreateOrConnectWithoutQuotesInput } from "../inputs/CustomersCreateOrConnectWithoutQuotesInput";
import { CustomersCreateWithoutQuotesInput } from "../inputs/CustomersCreateWithoutQuotesInput";
import { CustomersUpdateWithoutQuotesInput } from "../inputs/CustomersUpdateWithoutQuotesInput";
import { CustomersUpsertWithoutQuotesInput } from "../inputs/CustomersUpsertWithoutQuotesInput";
import { CustomersWhereUniqueInput } from "../inputs/CustomersWhereUniqueInput";
export declare class CustomersUpdateOneRequiredWithoutQuotesInput {
    create?: CustomersCreateWithoutQuotesInput | undefined;
    connectOrCreate?: CustomersCreateOrConnectWithoutQuotesInput | undefined;
    upsert?: CustomersUpsertWithoutQuotesInput | undefined;
    connect?: CustomersWhereUniqueInput | undefined;
    update?: CustomersUpdateWithoutQuotesInput | undefined;
}
