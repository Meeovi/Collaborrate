"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneCart_price_rulesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteOneCart_price_rulesArgs_1 = require("./args/DeleteOneCart_price_rulesArgs");
const Cart_price_rules_1 = require("../../../models/Cart_price_rules");
const helpers_1 = require("../../../helpers");
let DeleteOneCart_price_rulesResolver = class DeleteOneCart_price_rulesResolver {
    async deleteOneCart_price_rules(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).cart_price_rules.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Cart_price_rules_1.Cart_price_rules, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneCart_price_rulesArgs_1.DeleteOneCart_price_rulesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneCart_price_rulesResolver.prototype, "deleteOneCart_price_rules", null);
DeleteOneCart_price_rulesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Cart_price_rules_1.Cart_price_rules)
], DeleteOneCart_price_rulesResolver);
exports.DeleteOneCart_price_rulesResolver = DeleteOneCart_price_rulesResolver;
