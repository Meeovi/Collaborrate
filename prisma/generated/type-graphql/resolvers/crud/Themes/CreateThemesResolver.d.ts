import { GraphQLResolveInfo } from "graphql";
import { CreateThemesArgs } from "./args/CreateThemesArgs";
import { Themes } from "../../../models/Themes";
export declare class CreateThemesResolver {
    createThemes(ctx: any, info: GraphQLResolveInfo, args: CreateThemesArgs): Promise<Themes>;
}
