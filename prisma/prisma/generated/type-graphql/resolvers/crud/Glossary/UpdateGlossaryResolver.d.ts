import { GraphQLResolveInfo } from "graphql";
import { UpdateGlossaryArgs } from "./args/UpdateGlossaryArgs";
import { Glossary } from "../../../models/Glossary";
export declare class UpdateGlossaryResolver {
    updateGlossary(ctx: any, info: GraphQLResolveInfo, args: UpdateGlossaryArgs): Promise<Glossary | null>;
}
