import { GraphQLResolveInfo } from "graphql";
import { FindUniqueAgreementsArgs } from "./args/FindUniqueAgreementsArgs";
import { Agreements } from "../../../models/Agreements";
export declare class FindUniqueAgreementsResolver {
    findUniqueAgreements(ctx: any, info: GraphQLResolveInfo, args: FindUniqueAgreementsArgs): Promise<Agreements | null>;
}
