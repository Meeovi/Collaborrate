import { QuotesCreateManyProducts_productsToquotesInputEnvelope } from "../inputs/QuotesCreateManyProducts_productsToquotesInputEnvelope";
import { QuotesCreateOrConnectWithoutProducts_productsToquotesInput } from "../inputs/QuotesCreateOrConnectWithoutProducts_productsToquotesInput";
import { QuotesCreateWithoutProducts_productsToquotesInput } from "../inputs/QuotesCreateWithoutProducts_productsToquotesInput";
import { QuotesScalarWhereInput } from "../inputs/QuotesScalarWhereInput";
import { QuotesUpdateManyWithWhereWithoutProducts_productsToquotesInput } from "../inputs/QuotesUpdateManyWithWhereWithoutProducts_productsToquotesInput";
import { QuotesUpdateWithWhereUniqueWithoutProducts_productsToquotesInput } from "../inputs/QuotesUpdateWithWhereUniqueWithoutProducts_productsToquotesInput";
import { QuotesUpsertWithWhereUniqueWithoutProducts_productsToquotesInput } from "../inputs/QuotesUpsertWithWhereUniqueWithoutProducts_productsToquotesInput";
import { QuotesWhereUniqueInput } from "../inputs/QuotesWhereUniqueInput";
export declare class QuotesUpdateManyWithoutProducts_productsToquotesInput {
    create?: QuotesCreateWithoutProducts_productsToquotesInput[] | undefined;
    connectOrCreate?: QuotesCreateOrConnectWithoutProducts_productsToquotesInput[] | undefined;
    upsert?: QuotesUpsertWithWhereUniqueWithoutProducts_productsToquotesInput[] | undefined;
    createMany?: QuotesCreateManyProducts_productsToquotesInputEnvelope | undefined;
    set?: QuotesWhereUniqueInput[] | undefined;
    disconnect?: QuotesWhereUniqueInput[] | undefined;
    delete?: QuotesWhereUniqueInput[] | undefined;
    connect?: QuotesWhereUniqueInput[] | undefined;
    update?: QuotesUpdateWithWhereUniqueWithoutProducts_productsToquotesInput[] | undefined;
    updateMany?: QuotesUpdateManyWithWhereWithoutProducts_productsToquotesInput[] | undefined;
    deleteMany?: QuotesScalarWhereInput[] | undefined;
}
