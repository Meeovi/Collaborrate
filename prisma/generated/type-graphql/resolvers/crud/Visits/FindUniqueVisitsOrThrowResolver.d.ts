import { GraphQLResolveInfo } from "graphql";
import { FindUniqueVisitsOrThrowArgs } from "./args/FindUniqueVisitsOrThrowArgs";
import { Visits } from "../../../models/Visits";
export declare class FindUniqueVisitsOrThrowResolver {
    findUniqueVisitsOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindUniqueVisitsOrThrowArgs): Promise<Visits | null>;
}
