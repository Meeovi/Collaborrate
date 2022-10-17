"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneSchedulerResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateOneSchedulerArgs_1 = require("./args/UpdateOneSchedulerArgs");
const Scheduler_1 = require("../../../models/Scheduler");
const helpers_1 = require("../../../helpers");
let UpdateOneSchedulerResolver = class UpdateOneSchedulerResolver {
    async updateOneScheduler(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).scheduler.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Scheduler_1.Scheduler, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneSchedulerArgs_1.UpdateOneSchedulerArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneSchedulerResolver.prototype, "updateOneScheduler", null);
UpdateOneSchedulerResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Scheduler_1.Scheduler)
], UpdateOneSchedulerResolver);
exports.UpdateOneSchedulerResolver = UpdateOneSchedulerResolver;
