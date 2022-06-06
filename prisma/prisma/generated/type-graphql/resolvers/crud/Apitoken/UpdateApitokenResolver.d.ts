import { GraphQLResolveInfo } from "graphql";
import { UpdateApitokenArgs } from "./args/UpdateApitokenArgs";
import { Apitoken } from "../../../models/Apitoken";
export declare class UpdateApitokenResolver {
    updateApitoken(ctx: any, info: GraphQLResolveInfo, args: UpdateApitokenArgs): Promise<Apitoken | null>;
}
