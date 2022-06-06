"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByPollsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByPollsArgs_1 = require("./args/GroupByPollsArgs");
const Polls_1 = require("../../../models/Polls");
const PollsGroupBy_1 = require("../../outputs/PollsGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByPollsResolver = class GroupByPollsResolver {
    async groupByPolls(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).polls.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [PollsGroupBy_1.PollsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByPollsArgs_1.GroupByPollsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByPollsResolver.prototype, "groupByPolls", null);
GroupByPollsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Polls_1.Polls)
], GroupByPollsResolver);
exports.GroupByPollsResolver = GroupByPollsResolver;
