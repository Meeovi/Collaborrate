import { GraphQLResolveInfo } from "graphql";
import { UpdateOneDeepdiveArgs } from "./args/UpdateOneDeepdiveArgs";
import { Deepdive } from "../../../models/Deepdive";
export declare class UpdateOneDeepdiveResolver {
    updateOneDeepdive(ctx: any, info: GraphQLResolveInfo, args: UpdateOneDeepdiveArgs): Promise<Deepdive | null>;
}
