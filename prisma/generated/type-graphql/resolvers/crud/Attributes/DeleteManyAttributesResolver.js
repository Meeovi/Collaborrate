"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyAttributesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyAttributesArgs_1 = require("./args/DeleteManyAttributesArgs");
const Attributes_1 = require("../../../models/Attributes");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyAttributesResolver = class DeleteManyAttributesResolver {
    async deleteManyAttributes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).attributes.deleteMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyAttributesArgs_1.DeleteManyAttributesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyAttributesResolver.prototype, "deleteManyAttributes", null);
DeleteManyAttributesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Attributes_1.Attributes)
], DeleteManyAttributesResolver);
exports.DeleteManyAttributesResolver = DeleteManyAttributesResolver;
