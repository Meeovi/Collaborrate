import { CustomersCreateOrConnectWithoutNewsletter_subscribersInput } from "../inputs/CustomersCreateOrConnectWithoutNewsletter_subscribersInput";
import { CustomersCreateWithoutNewsletter_subscribersInput } from "../inputs/CustomersCreateWithoutNewsletter_subscribersInput";
import { CustomersUpdateWithoutNewsletter_subscribersInput } from "../inputs/CustomersUpdateWithoutNewsletter_subscribersInput";
import { CustomersUpsertWithoutNewsletter_subscribersInput } from "../inputs/CustomersUpsertWithoutNewsletter_subscribersInput";
import { CustomersWhereUniqueInput } from "../inputs/CustomersWhereUniqueInput";
export declare class CustomersUpdateOneRequiredWithoutNewsletter_subscribersInput {
    create?: CustomersCreateWithoutNewsletter_subscribersInput | undefined;
    connectOrCreate?: CustomersCreateOrConnectWithoutNewsletter_subscribersInput | undefined;
    upsert?: CustomersUpsertWithoutNewsletter_subscribersInput | undefined;
    connect?: CustomersWhereUniqueInput | undefined;
    update?: CustomersUpdateWithoutNewsletter_subscribersInput | undefined;
}
