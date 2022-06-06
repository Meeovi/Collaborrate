"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteSales_settingsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteSales_settingsArgs_1 = require("./args/DeleteSales_settingsArgs");
const Sales_settings_1 = require("../../../models/Sales_settings");
const helpers_1 = require("../../../helpers");
let DeleteSales_settingsResolver = class DeleteSales_settingsResolver {
    async deleteSales_settings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).sales_settings.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Sales_settings_1.Sales_settings, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteSales_settingsArgs_1.DeleteSales_settingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteSales_settingsResolver.prototype, "deleteSales_settings", null);
DeleteSales_settingsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Sales_settings_1.Sales_settings)
], DeleteSales_settingsResolver);
exports.DeleteSales_settingsResolver = DeleteSales_settingsResolver;
