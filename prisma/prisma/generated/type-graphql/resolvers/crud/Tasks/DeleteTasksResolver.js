"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteTasksResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteTasksArgs_1 = require("./args/DeleteTasksArgs");
const Tasks_1 = require("../../../models/Tasks");
const helpers_1 = require("../../../helpers");
let DeleteTasksResolver = class DeleteTasksResolver {
    async deleteTasks(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tasks.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Tasks_1.Tasks, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteTasksArgs_1.DeleteTasksArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteTasksResolver.prototype, "deleteTasks", null);
DeleteTasksResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Tasks_1.Tasks)
], DeleteTasksResolver);
exports.DeleteTasksResolver = DeleteTasksResolver;
