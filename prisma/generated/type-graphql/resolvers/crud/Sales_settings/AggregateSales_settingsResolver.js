"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateSales_settingsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateSales_settingsArgs_1 = require("./args/AggregateSales_settingsArgs");
const Sales_settings_1 = require("../../../models/Sales_settings");
const AggregateSales_settings_1 = require("../../outputs/AggregateSales_settings");
const helpers_1 = require("../../../helpers");
let AggregateSales_settingsResolver = class AggregateSales_settingsResolver {
    async aggregateSales_settings(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).sales_settings.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateSales_settings_1.AggregateSales_settings, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateSales_settingsArgs_1.AggregateSales_settingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateSales_settingsResolver.prototype, "aggregateSales_settings", null);
AggregateSales_settingsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Sales_settings_1.Sales_settings)
], AggregateSales_settingsResolver);
exports.AggregateSales_settingsResolver = AggregateSales_settingsResolver;
