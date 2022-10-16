"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneTargetsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateOneTargetsArgs_1 = require("./args/UpdateOneTargetsArgs");
const Targets_1 = require("../../../models/Targets");
const helpers_1 = require("../../../helpers");
let UpdateOneTargetsResolver = class UpdateOneTargetsResolver {
    async updateOneTargets(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).targets.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Targets_1.Targets, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneTargetsArgs_1.UpdateOneTargetsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneTargetsResolver.prototype, "updateOneTargets", null);
UpdateOneTargetsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Targets_1.Targets)
], UpdateOneTargetsResolver);
exports.UpdateOneTargetsResolver = UpdateOneTargetsResolver;
