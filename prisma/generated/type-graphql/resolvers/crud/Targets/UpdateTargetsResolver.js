"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTargetsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateTargetsArgs_1 = require("./args/UpdateTargetsArgs");
const Targets_1 = require("../../../models/Targets");
const helpers_1 = require("../../../helpers");
let UpdateTargetsResolver = class UpdateTargetsResolver {
    async updateTargets(ctx, info, args) {
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateTargetsArgs_1.UpdateTargetsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateTargetsResolver.prototype, "updateTargets", null);
UpdateTargetsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Targets_1.Targets)
], UpdateTargetsResolver);
exports.UpdateTargetsResolver = UpdateTargetsResolver;
