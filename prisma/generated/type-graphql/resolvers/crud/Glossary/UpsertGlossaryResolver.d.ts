import { GraphQLResolveInfo } from "graphql";
import { UpsertGlossaryArgs } from "./args/UpsertGlossaryArgs";
import { Glossary } from "../../../models/Glossary";
export declare class UpsertGlossaryResolver {
    upsertGlossary(ctx: any, info: GraphQLResolveInfo, args: UpsertGlossaryArgs): Promise<Glossary>;
}
