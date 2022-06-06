import { Credit_memosCreateManyCustomersInputEnvelope } from "../inputs/Credit_memosCreateManyCustomersInputEnvelope";
import { Credit_memosCreateOrConnectWithoutCustomersInput } from "../inputs/Credit_memosCreateOrConnectWithoutCustomersInput";
import { Credit_memosCreateWithoutCustomersInput } from "../inputs/Credit_memosCreateWithoutCustomersInput";
import { Credit_memosWhereUniqueInput } from "../inputs/Credit_memosWhereUniqueInput";
export declare class Credit_memosCreateNestedManyWithoutCustomersInput {
    create?: Credit_memosCreateWithoutCustomersInput[] | undefined;
    connectOrCreate?: Credit_memosCreateOrConnectWithoutCustomersInput[] | undefined;
    createMany?: Credit_memosCreateManyCustomersInputEnvelope | undefined;
    connect?: Credit_memosWhereUniqueInput[] | undefined;
}
