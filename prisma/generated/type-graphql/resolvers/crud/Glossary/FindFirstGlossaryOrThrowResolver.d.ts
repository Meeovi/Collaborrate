import { GraphQLResolveInfo } from "graphql";
import { FindFirstGlossaryOrThrowArgs } from "./args/FindFirstGlossaryOrThrowArgs";
import { Glossary } from "../../../models/Glossary";
export declare class FindFirstGlossaryOrThrowResolver {
    findFirstGlossaryOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstGlossaryOrThrowArgs): Promise<Glossary | null>;
}
