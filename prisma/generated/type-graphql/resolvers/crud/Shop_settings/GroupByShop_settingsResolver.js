"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByShop_settingsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByShop_settingsArgs_1 = require("./args/GroupByShop_settingsArgs");
const Shop_settings_1 = require("../../../models/Shop_settings");
const Shop_settingsGroupBy_1 = require("../../outputs/Shop_settingsGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByShop_settingsResolver = class GroupByShop_settingsResolver {
    async groupByShop_settings(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).shop_settings.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Shop_settingsGroupBy_1.Shop_settingsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByShop_settingsArgs_1.GroupByShop_settingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByShop_settingsResolver.prototype, "groupByShop_settings", null);
GroupByShop_settingsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Shop_settings_1.Shop_settings)
], GroupByShop_settingsResolver);
exports.GroupByShop_settingsResolver = GroupByShop_settingsResolver;
