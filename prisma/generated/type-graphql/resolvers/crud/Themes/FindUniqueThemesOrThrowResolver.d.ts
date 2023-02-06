import { GraphQLResolveInfo } from "graphql";
import { FindUniqueThemesOrThrowArgs } from "./args/FindUniqueThemesOrThrowArgs";
import { Themes } from "../../../models/Themes";
export declare class FindUniqueThemesOrThrowResolver {
    findUniqueThemesOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindUniqueThemesOrThrowArgs): Promise<Themes | null>;
}
