import { GraphQLResolveInfo } from "graphql";
import { FindManyDeepdiveArgs } from "./args/FindManyDeepdiveArgs";
import { Deepdive } from "../../../models/Deepdive";
export declare class FindManyDeepdiveResolver {
    deepdives(ctx: any, info: GraphQLResolveInfo, args: FindManyDeepdiveArgs): Promise<Deepdive[]>;
}
