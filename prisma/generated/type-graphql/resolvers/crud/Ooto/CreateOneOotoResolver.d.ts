import { GraphQLResolveInfo } from "graphql";
import { CreateOneOotoArgs } from "./args/CreateOneOotoArgs";
import { Ooto } from "../../../models/Ooto";
export declare class CreateOneOotoResolver {
    createOneOoto(ctx: any, info: GraphQLResolveInfo, args: CreateOneOotoArgs): Promise<Ooto>;
}
