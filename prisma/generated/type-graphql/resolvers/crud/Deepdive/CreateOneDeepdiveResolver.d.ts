import { GraphQLResolveInfo } from "graphql";
import { CreateOneDeepdiveArgs } from "./args/CreateOneDeepdiveArgs";
import { Deepdive } from "../../../models/Deepdive";
export declare class CreateOneDeepdiveResolver {
    createOneDeepdive(ctx: any, info: GraphQLResolveInfo, args: CreateOneDeepdiveArgs): Promise<Deepdive>;
}
