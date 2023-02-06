import { GraphQLResolveInfo } from "graphql";
import { FindFirstThemesOrThrowArgs } from "./args/FindFirstThemesOrThrowArgs";
import { Themes } from "../../../models/Themes";
export declare class FindFirstThemesOrThrowResolver {
    findFirstThemesOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstThemesOrThrowArgs): Promise<Themes | null>;
}
