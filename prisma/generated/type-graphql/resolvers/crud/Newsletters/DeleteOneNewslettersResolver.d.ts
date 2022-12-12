import { GraphQLResolveInfo } from "graphql";
import { DeleteOneNewslettersArgs } from "./args/DeleteOneNewslettersArgs";
import { Newsletters } from "../../../models/Newsletters";
export declare class DeleteOneNewslettersResolver {
    deleteOneNewsletters(ctx: any, info: GraphQLResolveInfo, args: DeleteOneNewslettersArgs): Promise<Newsletters | null>;
}
