"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByTargetsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByTargetsArgs_1 = require("./args/GroupByTargetsArgs");
const Targets_1 = require("../../../models/Targets");
const TargetsGroupBy_1 = require("../../outputs/TargetsGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByTargetsResolver = class GroupByTargetsResolver {
    async groupByTargets(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).targets.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [TargetsGroupBy_1.TargetsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByTargetsArgs_1.GroupByTargetsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByTargetsResolver.prototype, "groupByTargets", null);
GroupByTargetsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Targets_1.Targets)
], GroupByTargetsResolver);
exports.GroupByTargetsResolver = GroupByTargetsResolver;
