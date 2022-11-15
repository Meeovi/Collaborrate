import { GraphQLResolveInfo } from "graphql";
import { FindFirstDeepdiveOrThrowArgs } from "./args/FindFirstDeepdiveOrThrowArgs";
import { Deepdive } from "../../../models/Deepdive";
export declare class FindFirstDeepdiveOrThrowResolver {
    findFirstDeepdiveOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstDeepdiveOrThrowArgs): Promise<Deepdive | null>;
}
