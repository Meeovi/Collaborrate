import { GraphQLResolveInfo } from "graphql";
import { UpdateOotoArgs } from "./args/UpdateOotoArgs";
import { Ooto } from "../../../models/Ooto";
export declare class UpdateOotoResolver {
    updateOoto(ctx: any, info: GraphQLResolveInfo, args: UpdateOotoArgs): Promise<Ooto | null>;
}
