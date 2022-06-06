import { GraphQLResolveInfo } from "graphql";
import { DeleteGlossaryArgs } from "./args/DeleteGlossaryArgs";
import { Glossary } from "../../../models/Glossary";
export declare class DeleteGlossaryResolver {
    deleteGlossary(ctx: any, info: GraphQLResolveInfo, args: DeleteGlossaryArgs): Promise<Glossary | null>;
}
