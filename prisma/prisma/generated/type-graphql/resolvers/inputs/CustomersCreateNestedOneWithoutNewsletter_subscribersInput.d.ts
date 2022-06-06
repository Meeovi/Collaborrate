import { CustomersCreateOrConnectWithoutNewsletter_subscribersInput } from "../inputs/CustomersCreateOrConnectWithoutNewsletter_subscribersInput";
import { CustomersCreateWithoutNewsletter_subscribersInput } from "../inputs/CustomersCreateWithoutNewsletter_subscribersInput";
import { CustomersWhereUniqueInput } from "../inputs/CustomersWhereUniqueInput";
export declare class CustomersCreateNestedOneWithoutNewsletter_subscribersInput {
    create?: CustomersCreateWithoutNewsletter_subscribersInput | undefined;
    connectOrCreate?: CustomersCreateOrConnectWithoutNewsletter_subscribersInput | undefined;
    connect?: CustomersWhereUniqueInput | undefined;
}
