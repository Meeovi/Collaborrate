import { GraphQLResolveInfo } from "graphql";
import { CreateApitokenArgs } from "./args/CreateApitokenArgs";
import { Apitoken } from "../../../models/Apitoken";
export declare class CreateApitokenResolver {
    createApitoken(ctx: any, info: GraphQLResolveInfo, args: CreateApitokenArgs): Promise<Apitoken>;
}
