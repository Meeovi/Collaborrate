import { GraphQLResolveInfo } from "graphql";
import { DeleteOneThemesArgs } from "./args/DeleteOneThemesArgs";
import { Themes } from "../../../models/Themes";
export declare class DeleteOneThemesResolver {
    deleteOneThemes(ctx: any, info: GraphQLResolveInfo, args: DeleteOneThemesArgs): Promise<Themes | null>;
}
