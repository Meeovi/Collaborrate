import { ThemesCreateManyWebsitesInputEnvelope } from "../inputs/ThemesCreateManyWebsitesInputEnvelope";
import { ThemesCreateOrConnectWithoutWebsitesInput } from "../inputs/ThemesCreateOrConnectWithoutWebsitesInput";
import { ThemesCreateWithoutWebsitesInput } from "../inputs/ThemesCreateWithoutWebsitesInput";
import { ThemesScalarWhereInput } from "../inputs/ThemesScalarWhereInput";
import { ThemesUpdateManyWithWhereWithoutWebsitesInput } from "../inputs/ThemesUpdateManyWithWhereWithoutWebsitesInput";
import { ThemesUpdateWithWhereUniqueWithoutWebsitesInput } from "../inputs/ThemesUpdateWithWhereUniqueWithoutWebsitesInput";
import { ThemesUpsertWithWhereUniqueWithoutWebsitesInput } from "../inputs/ThemesUpsertWithWhereUniqueWithoutWebsitesInput";
import { ThemesWhereUniqueInput } from "../inputs/ThemesWhereUniqueInput";
export declare class ThemesUpdateManyWithoutWebsitesInput {
    create?: ThemesCreateWithoutWebsitesInput[] | undefined;
    connectOrCreate?: ThemesCreateOrConnectWithoutWebsitesInput[] | undefined;
    upsert?: ThemesUpsertWithWhereUniqueWithoutWebsitesInput[] | undefined;
    createMany?: ThemesCreateManyWebsitesInputEnvelope | undefined;
    set?: ThemesWhereUniqueInput[] | undefined;
    disconnect?: ThemesWhereUniqueInput[] | undefined;
    delete?: ThemesWhereUniqueInput[] | undefined;
    connect?: ThemesWhereUniqueInput[] | undefined;
    update?: ThemesUpdateWithWhereUniqueWithoutWebsitesInput[] | undefined;
    updateMany?: ThemesUpdateManyWithWhereWithoutWebsitesInput[] | undefined;
    deleteMany?: ThemesScalarWhereInput[] | undefined;
}
