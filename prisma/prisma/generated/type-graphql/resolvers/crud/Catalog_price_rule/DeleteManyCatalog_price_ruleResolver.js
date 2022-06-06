"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyCatalog_price_ruleResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteManyCatalog_price_ruleArgs_1 = require("./args/DeleteManyCatalog_price_ruleArgs");
const Catalog_price_rule_1 = require("../../../models/Catalog_price_rule");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyCatalog_price_ruleResolver = class DeleteManyCatalog_price_ruleResolver {
    async deleteManyCatalog_price_rule(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).catalog_price_rule.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyCatalog_price_ruleArgs_1.DeleteManyCatalog_price_ruleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyCatalog_price_ruleResolver.prototype, "deleteManyCatalog_price_rule", null);
DeleteManyCatalog_price_ruleResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Catalog_price_rule_1.Catalog_price_rule)
], DeleteManyCatalog_price_ruleResolver);
exports.DeleteManyCatalog_price_ruleResolver = DeleteManyCatalog_price_ruleResolver;
