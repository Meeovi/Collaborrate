import { CustomersCreateOrConnectWithoutEmailsInput } from "../inputs/CustomersCreateOrConnectWithoutEmailsInput";
import { CustomersCreateWithoutEmailsInput } from "../inputs/CustomersCreateWithoutEmailsInput";
import { CustomersUpdateWithoutEmailsInput } from "../inputs/CustomersUpdateWithoutEmailsInput";
import { CustomersUpsertWithoutEmailsInput } from "../inputs/CustomersUpsertWithoutEmailsInput";
import { CustomersWhereUniqueInput } from "../inputs/CustomersWhereUniqueInput";
export declare class CustomersUpdateOneRequiredWithoutEmailsInput {
    create?: CustomersCreateWithoutEmailsInput | undefined;
    connectOrCreate?: CustomersCreateOrConnectWithoutEmailsInput | undefined;
    upsert?: CustomersUpsertWithoutEmailsInput | undefined;
    connect?: CustomersWhereUniqueInput | undefined;
    update?: CustomersUpdateWithoutEmailsInput | undefined;
}
