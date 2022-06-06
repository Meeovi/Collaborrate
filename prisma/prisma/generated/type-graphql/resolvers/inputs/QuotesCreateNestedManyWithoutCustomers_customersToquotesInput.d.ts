import { QuotesCreateManyCustomers_customersToquotesInputEnvelope } from "../inputs/QuotesCreateManyCustomers_customersToquotesInputEnvelope";
import { QuotesCreateOrConnectWithoutCustomers_customersToquotesInput } from "../inputs/QuotesCreateOrConnectWithoutCustomers_customersToquotesInput";
import { QuotesCreateWithoutCustomers_customersToquotesInput } from "../inputs/QuotesCreateWithoutCustomers_customersToquotesInput";
import { QuotesWhereUniqueInput } from "../inputs/QuotesWhereUniqueInput";
export declare class QuotesCreateNestedManyWithoutCustomers_customersToquotesInput {
    create?: QuotesCreateWithoutCustomers_customersToquotesInput[] | undefined;
    connectOrCreate?: QuotesCreateOrConnectWithoutCustomers_customersToquotesInput[] | undefined;
    createMany?: QuotesCreateManyCustomers_customersToquotesInputEnvelope | undefined;
    connect?: QuotesWhereUniqueInput[] | undefined;
}
