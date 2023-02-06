"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyContent_typeResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyContent_typeArgs_1 = require("./args/UpdateManyContent_typeArgs");
const Content_type_1 = require("../../../models/Content_type");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyContent_typeResolver = class UpdateManyContent_typeResolver {
    async updateManyContent_type(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).content_type.updateMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyContent_typeArgs_1.UpdateManyContent_typeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyContent_typeResolver.prototype, "updateManyContent_type", null);
UpdateManyContent_typeResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Content_type_1.Content_type)
], UpdateManyContent_typeResolver);
exports.UpdateManyContent_typeResolver = UpdateManyContent_typeResolver;
