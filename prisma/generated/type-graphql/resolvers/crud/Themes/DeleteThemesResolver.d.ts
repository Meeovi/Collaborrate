import { GraphQLResolveInfo } from "graphql";
import { DeleteThemesArgs } from "./args/DeleteThemesArgs";
import { Themes } from "../../../models/Themes";
export declare class DeleteThemesResolver {
    deleteThemes(ctx: any, info: GraphQLResolveInfo, args: DeleteThemesArgs): Promise<Themes | null>;
}
