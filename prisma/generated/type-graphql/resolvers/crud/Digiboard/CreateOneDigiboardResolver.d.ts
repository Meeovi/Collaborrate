import { GraphQLResolveInfo } from "graphql";
import { CreateOneDigiboardArgs } from "./args/CreateOneDigiboardArgs";
import { Digiboard } from "../../../models/Digiboard";
export declare class CreateOneDigiboardResolver {
    createOneDigiboard(ctx: any, info: GraphQLResolveInfo, args: CreateOneDigiboardArgs): Promise<Digiboard>;
}
