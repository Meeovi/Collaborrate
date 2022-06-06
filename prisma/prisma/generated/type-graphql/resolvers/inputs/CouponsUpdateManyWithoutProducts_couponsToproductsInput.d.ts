import { CouponsCreateManyProducts_couponsToproductsInputEnvelope } from "../inputs/CouponsCreateManyProducts_couponsToproductsInputEnvelope";
import { CouponsCreateOrConnectWithoutProducts_couponsToproductsInput } from "../inputs/CouponsCreateOrConnectWithoutProducts_couponsToproductsInput";
import { CouponsCreateWithoutProducts_couponsToproductsInput } from "../inputs/CouponsCreateWithoutProducts_couponsToproductsInput";
import { CouponsScalarWhereInput } from "../inputs/CouponsScalarWhereInput";
import { CouponsUpdateManyWithWhereWithoutProducts_couponsToproductsInput } from "../inputs/CouponsUpdateManyWithWhereWithoutProducts_couponsToproductsInput";
import { CouponsUpdateWithWhereUniqueWithoutProducts_couponsToproductsInput } from "../inputs/CouponsUpdateWithWhereUniqueWithoutProducts_couponsToproductsInput";
import { CouponsUpsertWithWhereUniqueWithoutProducts_couponsToproductsInput } from "../inputs/CouponsUpsertWithWhereUniqueWithoutProducts_couponsToproductsInput";
import { CouponsWhereUniqueInput } from "../inputs/CouponsWhereUniqueInput";
export declare class CouponsUpdateManyWithoutProducts_couponsToproductsInput {
    create?: CouponsCreateWithoutProducts_couponsToproductsInput[] | undefined;
    connectOrCreate?: CouponsCreateOrConnectWithoutProducts_couponsToproductsInput[] | undefined;
    upsert?: CouponsUpsertWithWhereUniqueWithoutProducts_couponsToproductsInput[] | undefined;
    createMany?: CouponsCreateManyProducts_couponsToproductsInputEnvelope | undefined;
    set?: CouponsWhereUniqueInput[] | undefined;
    disconnect?: CouponsWhereUniqueInput[] | undefined;
    delete?: CouponsWhereUniqueInput[] | undefined;
    connect?: CouponsWhereUniqueInput[] | undefined;
    update?: CouponsUpdateWithWhereUniqueWithoutProducts_couponsToproductsInput[] | undefined;
    updateMany?: CouponsUpdateManyWithWhereWithoutProducts_couponsToproductsInput[] | undefined;
    deleteMany?: CouponsScalarWhereInput[] | undefined;
}
