"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyInternalizationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyInternalizationArgs_1 = require("./args/DeleteManyInternalizationArgs");
const Internalization_1 = require("../../../models/Internalization");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyInternalizationResolver = class DeleteManyInternalizationResolver {
    async deleteManyInternalization(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).internalization.deleteMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyInternalizationArgs_1.DeleteManyInternalizationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyInternalizationResolver.prototype, "deleteManyInternalization", null);
DeleteManyInternalizationResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Internalization_1.Internalization)
], DeleteManyInternalizationResolver);
exports.DeleteManyInternalizationResolver = DeleteManyInternalizationResolver;
