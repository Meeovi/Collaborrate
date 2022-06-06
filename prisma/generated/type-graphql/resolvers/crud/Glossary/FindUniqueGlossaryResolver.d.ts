import { GraphQLResolveInfo } from "graphql";
import { FindUniqueGlossaryArgs } from "./args/FindUniqueGlossaryArgs";
import { Glossary } from "../../../models/Glossary";
export declare class FindUniqueGlossaryResolver {
    glossary(ctx: any, info: GraphQLResolveInfo, args: FindUniqueGlossaryArgs): Promise<Glossary | null>;
}
