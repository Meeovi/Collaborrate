import { GraphQLResolveInfo } from "graphql";
import { CreateOneGlossaryArgs } from "./args/CreateOneGlossaryArgs";
import { Glossary } from "../../../models/Glossary";
export declare class CreateOneGlossaryResolver {
    createOneGlossary(ctx: any, info: GraphQLResolveInfo, args: CreateOneGlossaryArgs): Promise<Glossary>;
}
