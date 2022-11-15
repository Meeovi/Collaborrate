import { GraphQLResolveInfo } from "graphql";
import { FindUniqueGlossaryOrThrowArgs } from "./args/FindUniqueGlossaryOrThrowArgs";
import { Glossary } from "../../../models/Glossary";
export declare class FindUniqueGlossaryOrThrowResolver {
    getGlossary(ctx: any, info: GraphQLResolveInfo, args: FindUniqueGlossaryOrThrowArgs): Promise<Glossary | null>;
}
