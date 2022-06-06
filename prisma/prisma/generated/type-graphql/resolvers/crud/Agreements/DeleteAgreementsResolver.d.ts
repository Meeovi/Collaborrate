import { GraphQLResolveInfo } from "graphql";
import { DeleteAgreementsArgs } from "./args/DeleteAgreementsArgs";
import { Agreements } from "../../../models/Agreements";
export declare class DeleteAgreementsResolver {
    deleteAgreements(ctx: any, info: GraphQLResolveInfo, args: DeleteAgreementsArgs): Promise<Agreements | null>;
}
