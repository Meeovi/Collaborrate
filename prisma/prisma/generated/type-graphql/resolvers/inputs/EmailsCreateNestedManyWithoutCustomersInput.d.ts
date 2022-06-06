import { EmailsCreateManyCustomersInputEnvelope } from "../inputs/EmailsCreateManyCustomersInputEnvelope";
import { EmailsCreateOrConnectWithoutCustomersInput } from "../inputs/EmailsCreateOrConnectWithoutCustomersInput";
import { EmailsCreateWithoutCustomersInput } from "../inputs/EmailsCreateWithoutCustomersInput";
import { EmailsWhereUniqueInput } from "../inputs/EmailsWhereUniqueInput";
export declare class EmailsCreateNestedManyWithoutCustomersInput {
    create?: EmailsCreateWithoutCustomersInput[] | undefined;
    connectOrCreate?: EmailsCreateOrConnectWithoutCustomersInput[] | undefined;
    createMany?: EmailsCreateManyCustomersInputEnvelope | undefined;
    connect?: EmailsWhereUniqueInput[] | undefined;
}
