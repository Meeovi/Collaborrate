import { GraphQLResolveInfo } from "graphql";
import { DeleteOneDeepdiveArgs } from "./args/DeleteOneDeepdiveArgs";
import { Deepdive } from "../../../models/Deepdive";
export declare class DeleteOneDeepdiveResolver {
    deleteOneDeepdive(ctx: any, info: GraphQLResolveInfo, args: DeleteOneDeepdiveArgs): Promise<Deepdive | null>;
}
