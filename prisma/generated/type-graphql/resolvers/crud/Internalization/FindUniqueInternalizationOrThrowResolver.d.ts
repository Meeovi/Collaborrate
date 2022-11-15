import { GraphQLResolveInfo } from "graphql";
import { FindUniqueInternalizationOrThrowArgs } from "./args/FindUniqueInternalizationOrThrowArgs";
import { Internalization } from "../../../models/Internalization";
export declare class FindUniqueInternalizationOrThrowResolver {
    getInternalization(ctx: any, info: GraphQLResolveInfo, args: FindUniqueInternalizationOrThrowArgs): Promise<Internalization | null>;
}
