import { CouponsCreateManyProducts_couponsToproductsInputEnvelope } from "../inputs/CouponsCreateManyProducts_couponsToproductsInputEnvelope";
import { CouponsCreateOrConnectWithoutProducts_couponsToproductsInput } from "../inputs/CouponsCreateOrConnectWithoutProducts_couponsToproductsInput";
import { CouponsCreateWithoutProducts_couponsToproductsInput } from "../inputs/CouponsCreateWithoutProducts_couponsToproductsInput";
import { CouponsWhereUniqueInput } from "../inputs/CouponsWhereUniqueInput";
export declare class CouponsCreateNestedManyWithoutProducts_couponsToproductsInput {
    create?: CouponsCreateWithoutProducts_couponsToproductsInput[] | undefined;
    connectOrCreate?: CouponsCreateOrConnectWithoutProducts_couponsToproductsInput[] | undefined;
    createMany?: CouponsCreateManyProducts_couponsToproductsInputEnvelope | undefined;
    connect?: CouponsWhereUniqueInput[] | undefined;
}
