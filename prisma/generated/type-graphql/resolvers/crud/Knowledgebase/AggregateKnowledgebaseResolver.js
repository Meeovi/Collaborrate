"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateKnowledgebaseResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateKnowledgebaseArgs_1 = require("./args/AggregateKnowledgebaseArgs");
const Knowledgebase_1 = require("../../../models/Knowledgebase");
const AggregateKnowledgebase_1 = require("../../outputs/AggregateKnowledgebase");
const helpers_1 = require("../../../helpers");
let AggregateKnowledgebaseResolver = class AggregateKnowledgebaseResolver {
    async aggregateKnowledgebase(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).knowledgebase.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateKnowledgebase_1.AggregateKnowledgebase, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateKnowledgebaseArgs_1.AggregateKnowledgebaseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateKnowledgebaseResolver.prototype, "aggregateKnowledgebase", null);
AggregateKnowledgebaseResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Knowledgebase_1.Knowledgebase)
], AggregateKnowledgebaseResolver);
exports.AggregateKnowledgebaseResolver = AggregateKnowledgebaseResolver;
