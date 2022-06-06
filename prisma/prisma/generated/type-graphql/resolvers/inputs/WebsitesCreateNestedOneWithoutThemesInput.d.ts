import { WebsitesCreateOrConnectWithoutThemesInput } from "../inputs/WebsitesCreateOrConnectWithoutThemesInput";
import { WebsitesCreateWithoutThemesInput } from "../inputs/WebsitesCreateWithoutThemesInput";
import { WebsitesWhereUniqueInput } from "../inputs/WebsitesWhereUniqueInput";
export declare class WebsitesCreateNestedOneWithoutThemesInput {
    create?: WebsitesCreateWithoutThemesInput | undefined;
    connectOrCreate?: WebsitesCreateOrConnectWithoutThemesInput | undefined;
    connect?: WebsitesWhereUniqueInput | undefined;
}
