"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyAttributesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyAttributesArgs_1 = require("./args/UpdateManyAttributesArgs");
const Attributes_1 = require("../../../models/Attributes");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyAttributesResolver = class UpdateManyAttributesResolver {
    async updateManyAttributes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).attributes.updateMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyAttributesArgs_1.UpdateManyAttributesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyAttributesResolver.prototype, "updateManyAttributes", null);
UpdateManyAttributesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Attributes_1.Attributes)
], UpdateManyAttributesResolver);
exports.UpdateManyAttributesResolver = UpdateManyAttributesResolver;
