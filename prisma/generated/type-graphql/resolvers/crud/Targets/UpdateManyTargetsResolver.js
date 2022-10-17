"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyTargetsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateManyTargetsArgs_1 = require("./args/UpdateManyTargetsArgs");
const Targets_1 = require("../../../models/Targets");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyTargetsResolver = class UpdateManyTargetsResolver {
    async updateManyTargets(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).targets.updateMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyTargetsArgs_1.UpdateManyTargetsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyTargetsResolver.prototype, "updateManyTargets", null);
UpdateManyTargetsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Targets_1.Targets)
], UpdateManyTargetsResolver);
exports.UpdateManyTargetsResolver = UpdateManyTargetsResolver;
