import { GraphQLResolveInfo } from "graphql";
import { UpdateThemesArgs } from "./args/UpdateThemesArgs";
import { Themes } from "../../../models/Themes";
export declare class UpdateThemesResolver {
    updateThemes(ctx: any, info: GraphQLResolveInfo, args: UpdateThemesArgs): Promise<Themes | null>;
}
