import { GraphQLResolveInfo } from "graphql";
import { FindUniqueDeepdiveOrThrowArgs } from "./args/FindUniqueDeepdiveOrThrowArgs";
import { Deepdive } from "../../../models/Deepdive";
export declare class FindUniqueDeepdiveOrThrowResolver {
    getDeepdive(ctx: any, info: GraphQLResolveInfo, args: FindUniqueDeepdiveOrThrowArgs): Promise<Deepdive | null>;
}
