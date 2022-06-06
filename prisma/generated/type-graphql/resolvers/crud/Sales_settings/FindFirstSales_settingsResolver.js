"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstSales_settingsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindFirstSales_settingsArgs_1 = require("./args/FindFirstSales_settingsArgs");
const Sales_settings_1 = require("../../../models/Sales_settings");
const helpers_1 = require("../../../helpers");
let FindFirstSales_settingsResolver = class FindFirstSales_settingsResolver {
    async findFirstSales_settings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).sales_settings.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Sales_settings_1.Sales_settings, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstSales_settingsArgs_1.FindFirstSales_settingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstSales_settingsResolver.prototype, "findFirstSales_settings", null);
FindFirstSales_settingsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Sales_settings_1.Sales_settings)
], FindFirstSales_settingsResolver);
exports.FindFirstSales_settingsResolver = FindFirstSales_settingsResolver;
