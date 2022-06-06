"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertSales_settingsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertSales_settingsArgs_1 = require("./args/UpsertSales_settingsArgs");
const Sales_settings_1 = require("../../../models/Sales_settings");
const helpers_1 = require("../../../helpers");
let UpsertSales_settingsResolver = class UpsertSales_settingsResolver {
    async upsertSales_settings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).sales_settings.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Sales_settings_1.Sales_settings, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertSales_settingsArgs_1.UpsertSales_settingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertSales_settingsResolver.prototype, "upsertSales_settings", null);
UpsertSales_settingsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Sales_settings_1.Sales_settings)
], UpsertSales_settingsResolver);
exports.UpsertSales_settingsResolver = UpsertSales_settingsResolver;
