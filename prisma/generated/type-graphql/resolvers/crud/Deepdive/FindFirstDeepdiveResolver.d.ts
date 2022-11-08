import { GraphQLResolveInfo } from "graphql";
import { FindFirstDeepdiveArgs } from "./args/FindFirstDeepdiveArgs";
import { Deepdive } from "../../../models/Deepdive";
export declare class FindFirstDeepdiveResolver {
    findFirstDeepdive(ctx: any, info: GraphQLResolveInfo, args: FindFirstDeepdiveArgs): Promise<Deepdive | null>;
}
