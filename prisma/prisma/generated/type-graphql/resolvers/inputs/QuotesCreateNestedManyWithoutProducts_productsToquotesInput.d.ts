import { QuotesCreateManyProducts_productsToquotesInputEnvelope } from "../inputs/QuotesCreateManyProducts_productsToquotesInputEnvelope";
import { QuotesCreateOrConnectWithoutProducts_productsToquotesInput } from "../inputs/QuotesCreateOrConnectWithoutProducts_productsToquotesInput";
import { QuotesCreateWithoutProducts_productsToquotesInput } from "../inputs/QuotesCreateWithoutProducts_productsToquotesInput";
import { QuotesWhereUniqueInput } from "../inputs/QuotesWhereUniqueInput";
export declare class QuotesCreateNestedManyWithoutProducts_productsToquotesInput {
    create?: QuotesCreateWithoutProducts_productsToquotesInput[] | undefined;
    connectOrCreate?: QuotesCreateOrConnectWithoutProducts_productsToquotesInput[] | undefined;
    createMany?: QuotesCreateManyProducts_productsToquotesInputEnvelope | undefined;
    connect?: QuotesWhereUniqueInput[] | undefined;
}
