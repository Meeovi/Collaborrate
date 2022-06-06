"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByGeneral_settingsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByGeneral_settingsArgs_1 = require("./args/GroupByGeneral_settingsArgs");
const General_settings_1 = require("../../../models/General_settings");
const General_settingsGroupBy_1 = require("../../outputs/General_settingsGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByGeneral_settingsResolver = class GroupByGeneral_settingsResolver {
    async groupByGeneral_settings(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).general_settings.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [General_settingsGroupBy_1.General_settingsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByGeneral_settingsArgs_1.GroupByGeneral_settingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByGeneral_settingsResolver.prototype, "groupByGeneral_settings", null);
GroupByGeneral_settingsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => General_settings_1.General_settings)
], GroupByGeneral_settingsResolver);
exports.GroupByGeneral_settingsResolver = GroupByGeneral_settingsResolver;
