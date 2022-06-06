import { GraphQLResolveInfo } from "graphql";
import { DeleteApitokenArgs } from "./args/DeleteApitokenArgs";
import { Apitoken } from "../../../models/Apitoken";
export declare class DeleteApitokenResolver {
    deleteApitoken(ctx: any, info: GraphQLResolveInfo, args: DeleteApitokenArgs): Promise<Apitoken | null>;
}
