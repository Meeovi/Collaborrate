import { ThemesCreateManyWebsitesInputEnvelope } from "../inputs/ThemesCreateManyWebsitesInputEnvelope";
import { ThemesCreateOrConnectWithoutWebsitesInput } from "../inputs/ThemesCreateOrConnectWithoutWebsitesInput";
import { ThemesCreateWithoutWebsitesInput } from "../inputs/ThemesCreateWithoutWebsitesInput";
import { ThemesWhereUniqueInput } from "../inputs/ThemesWhereUniqueInput";
export declare class ThemesCreateNestedManyWithoutWebsitesInput {
    create?: ThemesCreateWithoutWebsitesInput[] | undefined;
    connectOrCreate?: ThemesCreateOrConnectWithoutWebsitesInput[] | undefined;
    createMany?: ThemesCreateManyWebsitesInputEnvelope | undefined;
    connect?: ThemesWhereUniqueInput[] | undefined;
}
