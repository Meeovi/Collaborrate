"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneSchedulerResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateOneSchedulerArgs_1 = require("./args/CreateOneSchedulerArgs");
const Scheduler_1 = require("../../../models/Scheduler");
const helpers_1 = require("../../../helpers");
let CreateOneSchedulerResolver = class CreateOneSchedulerResolver {
    async createOneScheduler(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).scheduler.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Scheduler_1.Scheduler, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneSchedulerArgs_1.CreateOneSchedulerArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneSchedulerResolver.prototype, "createOneScheduler", null);
CreateOneSchedulerResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Scheduler_1.Scheduler)
], CreateOneSchedulerResolver);
exports.CreateOneSchedulerResolver = CreateOneSchedulerResolver;
