import { GraphQLResolveInfo } from "graphql";
import { FindUniqueDeepdiveArgs } from "./args/FindUniqueDeepdiveArgs";
import { Deepdive } from "../../../models/Deepdive";
export declare class FindUniqueDeepdiveResolver {
    deepdive(ctx: any, info: GraphQLResolveInfo, args: FindUniqueDeepdiveArgs): Promise<Deepdive | null>;
}
