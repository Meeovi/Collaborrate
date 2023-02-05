import { GraphQLResolveInfo } from "graphql";
import { FindFirstInternalizationOrThrowArgs } from "./args/FindFirstInternalizationOrThrowArgs";
import { Internalization } from "../../../models/Internalization";
export declare class FindFirstInternalizationOrThrowResolver {
    findFirstInternalizationOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstInternalizationOrThrowArgs): Promise<Internalization | null>;
}
