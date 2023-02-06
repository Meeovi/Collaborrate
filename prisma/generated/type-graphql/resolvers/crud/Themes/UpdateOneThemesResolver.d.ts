import { GraphQLResolveInfo } from "graphql";
import { UpdateOneThemesArgs } from "./args/UpdateOneThemesArgs";
import { Themes } from "../../../models/Themes";
export declare class UpdateOneThemesResolver {
    updateOneThemes(ctx: any, info: GraphQLResolveInfo, args: UpdateOneThemesArgs): Promise<Themes | null>;
}
