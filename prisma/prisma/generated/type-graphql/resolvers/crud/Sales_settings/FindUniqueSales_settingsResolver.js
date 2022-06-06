"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueSales_settingsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniqueSales_settingsArgs_1 = require("./args/FindUniqueSales_settingsArgs");
const Sales_settings_1 = require("../../../models/Sales_settings");
const helpers_1 = require("../../../helpers");
let FindUniqueSales_settingsResolver = class FindUniqueSales_settingsResolver {
    async findUniqueSales_settings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).sales_settings.findUnique({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueSales_settingsArgs_1.FindUniqueSales_settingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueSales_settingsResolver.prototype, "findUniqueSales_settings", null);
FindUniqueSales_settingsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Sales_settings_1.Sales_settings)
], FindUniqueSales_settingsResolver);
exports.FindUniqueSales_settingsResolver = FindUniqueSales_settingsResolver;
