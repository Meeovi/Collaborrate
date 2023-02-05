"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByStatesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByStatesArgs_1 = require("./args/GroupByStatesArgs");
const States_1 = require("../../../models/States");
const StatesGroupBy_1 = require("../../outputs/StatesGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByStatesResolver = class GroupByStatesResolver {
    async groupByStates(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).states.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [StatesGroupBy_1.StatesGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByStatesArgs_1.GroupByStatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByStatesResolver.prototype, "groupByStates", null);
GroupByStatesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => States_1.States)
], GroupByStatesResolver);
exports.GroupByStatesResolver = GroupByStatesResolver;
