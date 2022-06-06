import { Customer_groupCreateManyCustomersInputEnvelope } from "../inputs/Customer_groupCreateManyCustomersInputEnvelope";
import { Customer_groupCreateOrConnectWithoutCustomersInput } from "../inputs/Customer_groupCreateOrConnectWithoutCustomersInput";
import { Customer_groupCreateWithoutCustomersInput } from "../inputs/Customer_groupCreateWithoutCustomersInput";
import { Customer_groupWhereUniqueInput } from "../inputs/Customer_groupWhereUniqueInput";
export declare class Customer_groupCreateNestedManyWithoutCustomersInput {
    create?: Customer_groupCreateWithoutCustomersInput[] | undefined;
    connectOrCreate?: Customer_groupCreateOrConnectWithoutCustomersInput[] | undefined;
    createMany?: Customer_groupCreateManyCustomersInputEnvelope | undefined;
    connect?: Customer_groupWhereUniqueInput[] | undefined;
}
