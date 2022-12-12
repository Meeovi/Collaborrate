import { GraphQLResolveInfo } from "graphql";
import { FindFirstInternalizationArgs } from "./args/FindFirstInternalizationArgs";
import { Internalization } from "../../../models/Internalization";
export declare class FindFirstInternalizationResolver {
    findFirstInternalization(ctx: any, info: GraphQLResolveInfo, args: FindFirstInternalizationArgs): Promise<Internalization | null>;
}
