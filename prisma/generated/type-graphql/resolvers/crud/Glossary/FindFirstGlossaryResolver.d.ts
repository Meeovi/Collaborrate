import { GraphQLResolveInfo } from "graphql";
import { FindFirstGlossaryArgs } from "./args/FindFirstGlossaryArgs";
import { Glossary } from "../../../models/Glossary";
export declare class FindFirstGlossaryResolver {
    findFirstGlossary(ctx: any, info: GraphQLResolveInfo, args: FindFirstGlossaryArgs): Promise<Glossary | null>;
}
