"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCatalog_price_ruleResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteCatalog_price_ruleArgs_1 = require("./args/DeleteCatalog_price_ruleArgs");
const Catalog_price_rule_1 = require("../../../models/Catalog_price_rule");
const helpers_1 = require("../../../helpers");
let DeleteCatalog_price_ruleResolver = class DeleteCatalog_price_ruleResolver {
    async deleteCatalog_price_rule(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).catalog_price_rule.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Catalog_price_rule_1.Catalog_price_rule, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteCatalog_price_ruleArgs_1.DeleteCatalog_price_ruleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteCatalog_price_ruleResolver.prototype, "deleteCatalog_price_rule", null);
DeleteCatalog_price_ruleResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Catalog_price_rule_1.Catalog_price_rule)
], DeleteCatalog_price_ruleResolver);
exports.DeleteCatalog_price_ruleResolver = DeleteCatalog_price_ruleResolver;
