import { GraphQLResolveInfo } from "graphql";
import { FindFirstVisitsOrThrowArgs } from "./args/FindFirstVisitsOrThrowArgs";
import { Visits } from "../../../models/Visits";
export declare class FindFirstVisitsOrThrowResolver {
    findFirstVisitsOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstVisitsOrThrowArgs): Promise<Visits | null>;
}
