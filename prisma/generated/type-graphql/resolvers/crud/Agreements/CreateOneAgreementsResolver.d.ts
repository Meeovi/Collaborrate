import { GraphQLResolveInfo } from "graphql";
import { CreateOneAgreementsArgs } from "./args/CreateOneAgreementsArgs";
import { Agreements } from "../../../models/Agreements";
export declare class CreateOneAgreementsResolver {
    createOneAgreements(ctx: any, info: GraphQLResolveInfo, args: CreateOneAgreementsArgs): Promise<Agreements>;
}
