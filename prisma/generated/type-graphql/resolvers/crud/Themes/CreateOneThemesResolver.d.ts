import { GraphQLResolveInfo } from "graphql";
import { CreateOneThemesArgs } from "./args/CreateOneThemesArgs";
import { Themes } from "../../../models/Themes";
export declare class CreateOneThemesResolver {
    createOneThemes(ctx: any, info: GraphQLResolveInfo, args: CreateOneThemesArgs): Promise<Themes>;
}
