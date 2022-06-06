"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupBySales_settingsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupBySales_settingsArgs_1 = require("./args/GroupBySales_settingsArgs");
const Sales_settings_1 = require("../../../models/Sales_settings");
const Sales_settingsGroupBy_1 = require("../../outputs/Sales_settingsGroupBy");
const helpers_1 = require("../../../helpers");
let GroupBySales_settingsResolver = class GroupBySales_settingsResolver {
    async groupBySales_settings(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).sales_settings.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Sales_settingsGroupBy_1.Sales_settingsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupBySales_settingsArgs_1.GroupBySales_settingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupBySales_settingsResolver.prototype, "groupBySales_settings", null);
GroupBySales_settingsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Sales_settings_1.Sales_settings)
], GroupBySales_settingsResolver);
exports.GroupBySales_settingsResolver = GroupBySales_settingsResolver;
