import { GraphQLResolveInfo } from "graphql";
import { DeleteOneOotoArgs } from "./args/DeleteOneOotoArgs";
import { Ooto } from "../../../models/Ooto";
export declare class DeleteOneOotoResolver {
    deleteOneOoto(ctx: any, info: GraphQLResolveInfo, args: DeleteOneOotoArgs): Promise<Ooto | null>;
}
