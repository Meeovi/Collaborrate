"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManySchedulerResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteManySchedulerArgs_1 = require("./args/DeleteManySchedulerArgs");
const Scheduler_1 = require("../../../models/Scheduler");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManySchedulerResolver = class DeleteManySchedulerResolver {
    async deleteManyScheduler(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).scheduler.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManySchedulerArgs_1.DeleteManySchedulerArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManySchedulerResolver.prototype, "deleteManyScheduler", null);
DeleteManySchedulerResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Scheduler_1.Scheduler)
], DeleteManySchedulerResolver);
exports.DeleteManySchedulerResolver = DeleteManySchedulerResolver;
