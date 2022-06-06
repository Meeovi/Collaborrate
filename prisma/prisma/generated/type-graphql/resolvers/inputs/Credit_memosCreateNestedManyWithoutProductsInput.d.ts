import { Credit_memosCreateManyProductsInputEnvelope } from "../inputs/Credit_memosCreateManyProductsInputEnvelope";
import { Credit_memosCreateOrConnectWithoutProductsInput } from "../inputs/Credit_memosCreateOrConnectWithoutProductsInput";
import { Credit_memosCreateWithoutProductsInput } from "../inputs/Credit_memosCreateWithoutProductsInput";
import { Credit_memosWhereUniqueInput } from "../inputs/Credit_memosWhereUniqueInput";
export declare class Credit_memosCreateNestedManyWithoutProductsInput {
    create?: Credit_memosCreateWithoutProductsInput[] | undefined;
    connectOrCreate?: Credit_memosCreateOrConnectWithoutProductsInput[] | undefined;
    createMany?: Credit_memosCreateManyProductsInputEnvelope | undefined;
    connect?: Credit_memosWhereUniqueInput[] | undefined;
}
