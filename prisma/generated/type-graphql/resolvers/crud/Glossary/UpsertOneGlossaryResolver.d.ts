import { GraphQLResolveInfo } from "graphql";
import { UpsertOneGlossaryArgs } from "./args/UpsertOneGlossaryArgs";
import { Glossary } from "../../../models/Glossary";
export declare class UpsertOneGlossaryResolver {
    upsertOneGlossary(ctx: any, info: GraphQLResolveInfo, args: UpsertOneGlossaryArgs): Promise<Glossary>;
}
