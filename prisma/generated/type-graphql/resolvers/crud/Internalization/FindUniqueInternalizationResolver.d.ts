import { GraphQLResolveInfo } from "graphql";
import { FindUniqueInternalizationArgs } from "./args/FindUniqueInternalizationArgs";
import { Internalization } from "../../../models/Internalization";
export declare class FindUniqueInternalizationResolver {
    internalization(ctx: any, info: GraphQLResolveInfo, args: FindUniqueInternalizationArgs): Promise<Internalization | null>;
}
