import { GraphQLResolveInfo } from "graphql";
import { FindUniqueAgreementsOrThrowArgs } from "./args/FindUniqueAgreementsOrThrowArgs";
import { Agreements } from "../../../models/Agreements";
export declare class FindUniqueAgreementsOrThrowResolver {
    findUniqueAgreementsOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindUniqueAgreementsOrThrowArgs): Promise<Agreements | null>;
}
