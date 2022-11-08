import { GraphQLResolveInfo } from "graphql";
import { DeleteOneApitokenArgs } from "./args/DeleteOneApitokenArgs";
import { Apitoken } from "../../../models/Apitoken";
export declare class DeleteOneApitokenResolver {
    deleteOneApitoken(ctx: any, info: GraphQLResolveInfo, args: DeleteOneApitokenArgs): Promise<Apitoken | null>;
}
