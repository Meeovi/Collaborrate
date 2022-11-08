import { GraphQLResolveInfo } from "graphql";
import { DeleteOneAgreementsArgs } from "./args/DeleteOneAgreementsArgs";
import { Agreements } from "../../../models/Agreements";
export declare class DeleteOneAgreementsResolver {
    deleteOneAgreements(ctx: any, info: GraphQLResolveInfo, args: DeleteOneAgreementsArgs): Promise<Agreements | null>;
}
