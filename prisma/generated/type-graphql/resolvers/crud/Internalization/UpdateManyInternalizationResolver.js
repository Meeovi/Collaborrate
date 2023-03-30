"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyInternalizationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyInternalizationArgs_1 = require("./args/UpdateManyInternalizationArgs");
const Internalization_1 = require("../../../models/Internalization");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyInternalizationResolver = class UpdateManyInternalizationResolver {
    async updateManyInternalization(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).internalization.updateMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyInternalizationArgs_1.UpdateManyInternalizationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyInternalizationResolver.prototype, "updateManyInternalization", null);
UpdateManyInternalizationResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Internalization_1.Internalization)
], UpdateManyInternalizationResolver);
exports.UpdateManyInternalizationResolver = UpdateManyInternalizationResolver;
