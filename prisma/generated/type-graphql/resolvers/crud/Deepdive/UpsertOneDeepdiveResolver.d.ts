import { GraphQLResolveInfo } from "graphql";
import { UpsertOneDeepdiveArgs } from "./args/UpsertOneDeepdiveArgs";
import { Deepdive } from "../../../models/Deepdive";
export declare class UpsertOneDeepdiveResolver {
    upsertOneDeepdive(ctx: any, info: GraphQLResolveInfo, args: UpsertOneDeepdiveArgs): Promise<Deepdive>;
}
