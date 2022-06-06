import { GraphQLResolveInfo } from "graphql";
import { CreateOotoArgs } from "./args/CreateOotoArgs";
import { Ooto } from "../../../models/Ooto";
export declare class CreateOotoResolver {
    createOoto(ctx: any, info: GraphQLResolveInfo, args: CreateOotoArgs): Promise<Ooto>;
}
