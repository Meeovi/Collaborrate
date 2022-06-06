"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteKnowledgebaseResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteKnowledgebaseArgs_1 = require("./args/DeleteKnowledgebaseArgs");
const Knowledgebase_1 = require("../../../models/Knowledgebase");
const helpers_1 = require("../../../helpers");
let DeleteKnowledgebaseResolver = class DeleteKnowledgebaseResolver {
    async deleteKnowledgebase(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).knowledgebase.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Knowledgebase_1.Knowledgebase, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteKnowledgebaseArgs_1.DeleteKnowledgebaseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteKnowledgebaseResolver.prototype, "deleteKnowledgebase", null);
DeleteKnowledgebaseResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Knowledgebase_1.Knowledgebase)
], DeleteKnowledgebaseResolver);
exports.DeleteKnowledgebaseResolver = DeleteKnowledgebaseResolver;
