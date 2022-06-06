import { GraphQLResolveInfo } from "graphql";
import { FindManyGlossaryArgs } from "./args/FindManyGlossaryArgs";
import { Glossary } from "../../../models/Glossary";
export declare class FindManyGlossaryResolver {
    glossaries(ctx: any, info: GraphQLResolveInfo, args: FindManyGlossaryArgs): Promise<Glossary[]>;
}
