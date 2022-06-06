import { QuotesCreateManyCustomers_customersToquotesInputEnvelope } from "../inputs/QuotesCreateManyCustomers_customersToquotesInputEnvelope";
import { QuotesCreateOrConnectWithoutCustomers_customersToquotesInput } from "../inputs/QuotesCreateOrConnectWithoutCustomers_customersToquotesInput";
import { QuotesCreateWithoutCustomers_customersToquotesInput } from "../inputs/QuotesCreateWithoutCustomers_customersToquotesInput";
import { QuotesScalarWhereInput } from "../inputs/QuotesScalarWhereInput";
import { QuotesUpdateManyWithWhereWithoutCustomers_customersToquotesInput } from "../inputs/QuotesUpdateManyWithWhereWithoutCustomers_customersToquotesInput";
import { QuotesUpdateWithWhereUniqueWithoutCustomers_customersToquotesInput } from "../inputs/QuotesUpdateWithWhereUniqueWithoutCustomers_customersToquotesInput";
import { QuotesUpsertWithWhereUniqueWithoutCustomers_customersToquotesInput } from "../inputs/QuotesUpsertWithWhereUniqueWithoutCustomers_customersToquotesInput";
import { QuotesWhereUniqueInput } from "../inputs/QuotesWhereUniqueInput";
export declare class QuotesUpdateManyWithoutCustomers_customersToquotesInput {
    create?: QuotesCreateWithoutCustomers_customersToquotesInput[] | undefined;
    connectOrCreate?: QuotesCreateOrConnectWithoutCustomers_customersToquotesInput[] | undefined;
    upsert?: QuotesUpsertWithWhereUniqueWithoutCustomers_customersToquotesInput[] | undefined;
    createMany?: QuotesCreateManyCustomers_customersToquotesInputEnvelope | undefined;
    set?: QuotesWhereUniqueInput[] | undefined;
    disconnect?: QuotesWhereUniqueInput[] | undefined;
    delete?: QuotesWhereUniqueInput[] | undefined;
    connect?: QuotesWhereUniqueInput[] | undefined;
    update?: QuotesUpdateWithWhereUniqueWithoutCustomers_customersToquotesInput[] | undefined;
    updateMany?: QuotesUpdateManyWithWhereWithoutCustomers_customersToquotesInput[] | undefined;
    deleteMany?: QuotesScalarWhereInput[] | undefined;
}
