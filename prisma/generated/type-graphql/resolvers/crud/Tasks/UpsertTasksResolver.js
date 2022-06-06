"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertTasksResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertTasksArgs_1 = require("./args/UpsertTasksArgs");
const Tasks_1 = require("../../../models/Tasks");
const helpers_1 = require("../../../helpers");
let UpsertTasksResolver = class UpsertTasksResolver {
    async upsertTasks(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tasks.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Tasks_1.Tasks, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertTasksArgs_1.UpsertTasksArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertTasksResolver.prototype, "upsertTasks", null);
UpsertTasksResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Tasks_1.Tasks)
], UpsertTasksResolver);
exports.UpsertTasksResolver = UpsertTasksResolver;
