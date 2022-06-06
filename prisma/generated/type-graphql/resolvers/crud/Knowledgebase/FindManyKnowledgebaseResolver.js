"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyKnowledgebaseResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindManyKnowledgebaseArgs_1 = require("./args/FindManyKnowledgebaseArgs");
const Knowledgebase_1 = require("../../../models/Knowledgebase");
const helpers_1 = require("../../../helpers");
let FindManyKnowledgebaseResolver = class FindManyKnowledgebaseResolver {
    async knowledgebases(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).knowledgebase.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Knowledgebase_1.Knowledgebase], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyKnowledgebaseArgs_1.FindManyKnowledgebaseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyKnowledgebaseResolver.prototype, "knowledgebases", null);
FindManyKnowledgebaseResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Knowledgebase_1.Knowledgebase)
], FindManyKnowledgebaseResolver);
exports.FindManyKnowledgebaseResolver = FindManyKnowledgebaseResolver;
