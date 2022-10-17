import { GraphQLResolveInfo } from "graphql";
import { UpdateOneNewslettersArgs } from "./args/UpdateOneNewslettersArgs";
import { Newsletters } from "../../../models/Newsletters";
export declare class UpdateOneNewslettersResolver {
    updateOneNewsletters(ctx: any, info: GraphQLResolveInfo, args: UpdateOneNewslettersArgs): Promise<Newsletters | null>;
}
