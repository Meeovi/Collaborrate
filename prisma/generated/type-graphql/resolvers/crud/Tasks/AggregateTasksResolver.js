"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTasksResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateTasksArgs_1 = require("./args/AggregateTasksArgs");
const Tasks_1 = require("../../../models/Tasks");
const AggregateTasks_1 = require("../../outputs/AggregateTasks");
const helpers_1 = require("../../../helpers");
let AggregateTasksResolver = class AggregateTasksResolver {
    async aggregateTasks(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).tasks.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateTasks_1.AggregateTasks, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateTasksArgs_1.AggregateTasksArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateTasksResolver.prototype, "aggregateTasks", null);
AggregateTasksResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Tasks_1.Tasks)
], AggregateTasksResolver);
exports.AggregateTasksResolver = AggregateTasksResolver;
