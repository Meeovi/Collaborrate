import { GraphQLResolveInfo } from "graphql";
import { CreateAgreementsArgs } from "./args/CreateAgreementsArgs";
import { Agreements } from "../../../models/Agreements";
export declare class CreateAgreementsResolver {
    createAgreements(ctx: any, info: GraphQLResolveInfo, args: CreateAgreementsArgs): Promise<Agreements>;
}
