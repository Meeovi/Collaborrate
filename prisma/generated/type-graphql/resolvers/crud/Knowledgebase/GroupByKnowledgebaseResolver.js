"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByKnowledgebaseResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByKnowledgebaseArgs_1 = require("./args/GroupByKnowledgebaseArgs");
const Knowledgebase_1 = require("../../../models/Knowledgebase");
const KnowledgebaseGroupBy_1 = require("../../outputs/KnowledgebaseGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByKnowledgebaseResolver = class GroupByKnowledgebaseResolver {
    async groupByKnowledgebase(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).knowledgebase.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [KnowledgebaseGroupBy_1.KnowledgebaseGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByKnowledgebaseArgs_1.GroupByKnowledgebaseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByKnowledgebaseResolver.prototype, "groupByKnowledgebase", null);
GroupByKnowledgebaseResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Knowledgebase_1.Knowledgebase)
], GroupByKnowledgebaseResolver);
exports.GroupByKnowledgebaseResolver = GroupByKnowledgebaseResolver;
