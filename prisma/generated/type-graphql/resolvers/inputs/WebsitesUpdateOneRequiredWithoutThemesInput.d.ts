import { WebsitesCreateOrConnectWithoutThemesInput } from "../inputs/WebsitesCreateOrConnectWithoutThemesInput";
import { WebsitesCreateWithoutThemesInput } from "../inputs/WebsitesCreateWithoutThemesInput";
import { WebsitesUpdateWithoutThemesInput } from "../inputs/WebsitesUpdateWithoutThemesInput";
import { WebsitesUpsertWithoutThemesInput } from "../inputs/WebsitesUpsertWithoutThemesInput";
import { WebsitesWhereUniqueInput } from "../inputs/WebsitesWhereUniqueInput";
export declare class WebsitesUpdateOneRequiredWithoutThemesInput {
    create?: WebsitesCreateWithoutThemesInput | undefined;
    connectOrCreate?: WebsitesCreateOrConnectWithoutThemesInput | undefined;
    upsert?: WebsitesUpsertWithoutThemesInput | undefined;
    connect?: WebsitesWhereUniqueInput | undefined;
    update?: WebsitesUpdateWithoutThemesInput | undefined;
}
