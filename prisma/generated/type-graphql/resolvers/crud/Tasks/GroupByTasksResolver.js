"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByTasksResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByTasksArgs_1 = require("./args/GroupByTasksArgs");
const Tasks_1 = require("../../../models/Tasks");
const TasksGroupBy_1 = require("../../outputs/TasksGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByTasksResolver = class GroupByTasksResolver {
    async groupByTasks(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tasks.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [TasksGroupBy_1.TasksGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByTasksArgs_1.GroupByTasksArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByTasksResolver.prototype, "groupByTasks", null);
GroupByTasksResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Tasks_1.Tasks)
], GroupByTasksResolver);
exports.GroupByTasksResolver = GroupByTasksResolver;
