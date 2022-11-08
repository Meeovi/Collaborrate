"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManySchedulerResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindManySchedulerArgs_1 = require("./args/FindManySchedulerArgs");
const Scheduler_1 = require("../../../models/Scheduler");
const helpers_1 = require("../../../helpers");
let FindManySchedulerResolver = class FindManySchedulerResolver {
    async schedulers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).scheduler.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Scheduler_1.Scheduler], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManySchedulerArgs_1.FindManySchedulerArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManySchedulerResolver.prototype, "schedulers", null);
FindManySchedulerResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Scheduler_1.Scheduler)
], FindManySchedulerResolver);
exports.FindManySchedulerResolver = FindManySchedulerResolver;
