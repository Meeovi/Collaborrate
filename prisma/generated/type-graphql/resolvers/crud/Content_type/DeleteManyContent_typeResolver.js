"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyContent_typeResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyContent_typeArgs_1 = require("./args/DeleteManyContent_typeArgs");
const Content_type_1 = require("../../../models/Content_type");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyContent_typeResolver = class DeleteManyContent_typeResolver {
    async deleteManyContent_type(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).content_type.deleteMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyContent_typeArgs_1.DeleteManyContent_typeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyContent_typeResolver.prototype, "deleteManyContent_type", null);
DeleteManyContent_typeResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Content_type_1.Content_type)
], DeleteManyContent_typeResolver);
exports.DeleteManyContent_typeResolver = DeleteManyContent_typeResolver;
