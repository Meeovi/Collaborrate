import { GraphQLResolveInfo } from "graphql";
import { DeleteOneInternalizationArgs } from "./args/DeleteOneInternalizationArgs";
import { Internalization } from "../../../models/Internalization";
export declare class DeleteOneInternalizationResolver {
    deleteOneInternalization(ctx: any, info: GraphQLResolveInfo, args: DeleteOneInternalizationArgs): Promise<Internalization | null>;
}
