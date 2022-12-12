"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateSchedulerResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateSchedulerArgs_1 = require("./args/AggregateSchedulerArgs");
const Scheduler_1 = require("../../../models/Scheduler");
const AggregateScheduler_1 = require("../../outputs/AggregateScheduler");
const helpers_1 = require("../../../helpers");
let AggregateSchedulerResolver = class AggregateSchedulerResolver {
    async aggregateScheduler(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).scheduler.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateScheduler_1.AggregateScheduler, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateSchedulerArgs_1.AggregateSchedulerArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateSchedulerResolver.prototype, "aggregateScheduler", null);
AggregateSchedulerResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Scheduler_1.Scheduler)
], AggregateSchedulerResolver);
exports.AggregateSchedulerResolver = AggregateSchedulerResolver;
