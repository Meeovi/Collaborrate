import { Newsletter_subscribersCreateManyCustomersInputEnvelope } from "../inputs/Newsletter_subscribersCreateManyCustomersInputEnvelope";
import { Newsletter_subscribersCreateOrConnectWithoutCustomersInput } from "../inputs/Newsletter_subscribersCreateOrConnectWithoutCustomersInput";
import { Newsletter_subscribersCreateWithoutCustomersInput } from "../inputs/Newsletter_subscribersCreateWithoutCustomersInput";
import { Newsletter_subscribersWhereUniqueInput } from "../inputs/Newsletter_subscribersWhereUniqueInput";
export declare class Newsletter_subscribersCreateNestedManyWithoutCustomersInput {
    create?: Newsletter_subscribersCreateWithoutCustomersInput[] | undefined;
    connectOrCreate?: Newsletter_subscribersCreateOrConnectWithoutCustomersInput[] | undefined;
    createMany?: Newsletter_subscribersCreateManyCustomersInputEnvelope | undefined;
    connect?: Newsletter_subscribersWhereUniqueInput[] | undefined;
}
