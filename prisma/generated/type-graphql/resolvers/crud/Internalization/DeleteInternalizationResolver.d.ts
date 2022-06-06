import { GraphQLResolveInfo } from "graphql";
import { DeleteInternalizationArgs } from "./args/DeleteInternalizationArgs";
import { Internalization } from "../../../models/Internalization";
export declare class DeleteInternalizationResolver {
    deleteInternalization(ctx: any, info: GraphQLResolveInfo, args: DeleteInternalizationArgs): Promise<Internalization | null>;
}
