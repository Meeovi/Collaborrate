import { GraphQLResolveInfo } from "graphql";
import { DeleteOotoArgs } from "./args/DeleteOotoArgs";
import { Ooto } from "../../../models/Ooto";
export declare class DeleteOotoResolver {
    deleteOoto(ctx: any, info: GraphQLResolveInfo, args: DeleteOotoArgs): Promise<Ooto | null>;
}
