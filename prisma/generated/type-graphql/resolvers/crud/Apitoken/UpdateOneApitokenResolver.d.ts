import { GraphQLResolveInfo } from "graphql";
import { UpdateOneApitokenArgs } from "./args/UpdateOneApitokenArgs";
import { Apitoken } from "../../../models/Apitoken";
export declare class UpdateOneApitokenResolver {
    updateOneApitoken(ctx: any, info: GraphQLResolveInfo, args: UpdateOneApitokenArgs): Promise<Apitoken | null>;
}
