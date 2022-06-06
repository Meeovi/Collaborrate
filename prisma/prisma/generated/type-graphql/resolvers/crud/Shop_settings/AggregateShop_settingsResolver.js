"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateShop_settingsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateShop_settingsArgs_1 = require("./args/AggregateShop_settingsArgs");
const Shop_settings_1 = require("../../../models/Shop_settings");
const AggregateShop_settings_1 = require("../../outputs/AggregateShop_settings");
const helpers_1 = require("../../../helpers");
let AggregateShop_settingsResolver = class AggregateShop_settingsResolver {
    async aggregateShop_settings(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).shop_settings.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateShop_settings_1.AggregateShop_settings, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateShop_settingsArgs_1.AggregateShop_settingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateShop_settingsResolver.prototype, "aggregateShop_settings", null);
AggregateShop_settingsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Shop_settings_1.Shop_settings)
], AggregateShop_settingsResolver);
exports.AggregateShop_settingsResolver = AggregateShop_settingsResolver;
