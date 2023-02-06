"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupBySettingsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupBySettingsArgs_1 = require("./args/GroupBySettingsArgs");
const Settings_1 = require("../../../models/Settings");
const SettingsGroupBy_1 = require("../../outputs/SettingsGroupBy");
const helpers_1 = require("../../../helpers");
let GroupBySettingsResolver = class GroupBySettingsResolver {
    async groupBySettings(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).settings.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [SettingsGroupBy_1.SettingsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupBySettingsArgs_1.GroupBySettingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupBySettingsResolver.prototype, "groupBySettings", null);
GroupBySettingsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Settings_1.Settings)
], GroupBySettingsResolver);
exports.GroupBySettingsResolver = GroupBySettingsResolver;
