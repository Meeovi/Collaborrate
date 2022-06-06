import { GraphQLResolveInfo } from "graphql";
import { CreateGlossaryArgs } from "./args/CreateGlossaryArgs";
import { Glossary } from "../../../models/Glossary";
export declare class CreateGlossaryResolver {
    createGlossary(ctx: any, info: GraphQLResolveInfo, args: CreateGlossaryArgs): Promise<Glossary>;
}
