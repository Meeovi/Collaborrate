"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstSchedulerOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindFirstSchedulerOrThrowArgs_1 = require("./args/FindFirstSchedulerOrThrowArgs");
const Scheduler_1 = require("../../../models/Scheduler");
const helpers_1 = require("../../../helpers");
let FindFirstSchedulerOrThrowResolver = class FindFirstSchedulerOrThrowResolver {
    async findFirstSchedulerOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).scheduler.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Scheduler_1.Scheduler, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstSchedulerOrThrowArgs_1.FindFirstSchedulerOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstSchedulerOrThrowResolver.prototype, "findFirstSchedulerOrThrow", null);
FindFirstSchedulerOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Scheduler_1.Scheduler)
], FindFirstSchedulerOrThrowResolver);
exports.FindFirstSchedulerOrThrowResolver = FindFirstSchedulerOrThrowResolver;
